import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { context, build } from 'esbuild';
import copy from 'esbuild-copy-static-files';
import aliasPlugin from 'esbuild-plugin-path-alias';
import { dTSPathAliasPlugin } from 'esbuild-plugin-d-ts-path-alias';

import resolveEnvironment from './config/plugins/env.js';
import { onRebuild } from './config/plugins/onRebuild/index.js';
import { getFiles } from './config/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const runBuild = async () => {
  const PORT = +process.env.PORT || 6000;
  const ISPRODMODE = process.env.NODE_ENV === 'production';
  const ISDEVMOD = process.env.NODE_ENV === 'development';
  const ISTESTMODE = process.env.TEST_ENV === true;
  const SOURCES = await getFiles('./src/**/*.ts');

  console.log('Updated Files:\n', SOURCES);

  const config = {
    bundle: true,
    write: true,
    entryPoints: [...SOURCES],
    outdir: './dist/src',
    tsconfig: './tsconfig.json',
    supported: { 'dynamic-import': true },
    platform: 'browser',
    format: 'esm',

    external: ['http', 'canvas', 'global-jsdom', 'global-jsdom/register'],
    treeShaking: ISPRODMODE ? true : false,
    sourcemap: ISPRODMODE ? false : 'both',
    minify: ISPRODMODE ? true : false,
    target: ISPRODMODE ? ['ES2022'] : ['ESNEXT'],

    plugins: [
      resolveEnvironment({
        environment: process.env.NODE_ENV,
      }),
      copy({
        src: resolve(__dirname, './public'),
        dest: resolve(__dirname, './dist'),
        recursive: true,
      }),
      dTSPathAliasPlugin({
        tsconfigPath: './tsconfig.json',
        debug: false,
      }),
      aliasPlugin({
        '@/store': resolve(__dirname, './src/store/index'),
        '@/components': resolve(__dirname, './src/components'),
        '@/services': resolve(__dirname, './src/services'),
        '@/utils': resolve(__dirname, './src/utils'),
        '@/assets': resolve(__dirname, './public/assets'),
        '@/mock': resolve(__dirname, './src/mock/'),
      }),
      onRebuild(),
    ],

    loader: {
      '.js': 'ts',
      '.js': 'jsx',
      '.ts': 'tsx',
      '.png': 'dataurl',
      '.jpg': 'file',
      '.jpeg': 'file',
      '.svg': 'text',
    },
  };

  try {
    const ctx = await context(config);

    if (ISTESTMODE) {
      ctx.rebuild();
      return;
    }

    if (ISDEVMOD) {
      const { port } = await ctx.serve({
        port: PORT,
        servedir: './dist',
      });

      await ctx.watch();
      console.log(`server running in localhost:${port}`);

      return;
    }

    build(config);
  } catch (errors) {
    console.log(errors);
    process.exit(0);
  }
};

runBuild();
