function createTimeoutSignal(milliseconds) {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, milliseconds);

  return {
    signal: controller.signal,
    cancel: () => clearTimeout(timeoutId)
  };
}

const timeout = createTimeoutSignal(3000);

console.log(timeout.signal.aborted);