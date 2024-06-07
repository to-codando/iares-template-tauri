export const onRebuild = () => {
  return {
    name: "on-rebuild",
    setup(build) {
      let count = 0;
      build.onEnd((result) => {
        if (count++ < 1) return;
        console.log(`builded: ${Date.now()}`);
      });
    },
  };
};
