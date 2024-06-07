import { glob } from "glob";

export const timer = () => {
  let time = 0;
  let counter = null;

  const start = () => {
    counter = setTimeout(() => {
      time += 1;
    }, 1000);
  };

  const log = () => console.log("execution fished after", `${counter} miliseconds`);

  const stop = () => clearTimeout(counter);

  return { start, stop, log };
};




export const getFiles = async (directory, ignore = null) => {
  const files = await glob(directory, { ignore: ignore });
  return files;
};
