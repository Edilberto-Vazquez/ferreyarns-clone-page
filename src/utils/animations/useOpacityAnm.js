import { createRef, useEffect } from "react";

const useOpacityAnm = () => {
  const refOpc = createRef();
  useEffect(() => {
    const opacityCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        return entry.target.classList.add("opacity-animation");
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const opacityObserver = new IntersectionObserver(opacityCallback, options);

    if (refOpc.current && refOpc.current !== null) {
      opacityObserver.observe(refOpc.current);
    }
  }, [refOpc]);
  return [refOpc];
};

export default useOpacityAnm;
