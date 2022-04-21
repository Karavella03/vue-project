export const throttle = (
  fn: () => void,
  timeout: number,
  throttleFirst?: boolean
) => {
  let waiting = false;
  return () => {
    if (!waiting) {
      !throttleFirst && fn();
      setTimeout(() => {
        throttleFirst && fn();
        waiting = false;
      }, timeout);
    }
  };
};
