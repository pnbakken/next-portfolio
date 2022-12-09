import { useEffect, useState } from "react";

type WindowSize = {
  innerWidth: number | undefined;
  innerHeight: number | undefined;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    if (window) {
      window.addEventListener("resize", handleWindowResize);
      return window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  return windowSize;
};

export default useWindowSize;

const getWindowSize = (): WindowSize => {
  if (globalThis) {
    const { innerWidth, innerHeight } = globalThis;
    return { innerWidth, innerHeight };
  } else {
    return { innerWidth: undefined, innerHeight: undefined };
  }
};
