import { createRef, useEffect } from "react";

const useOpacityAnmOnScroll = () => {
  const refOpc = createRef();
  useEffect(() => {
    const opacityCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        return (entry.target.ariaExpanded = true);
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const opacityObserver = new IntersectionObserver(opacityCallback, options);
    if (refOpc.current && refOpc !== null) {
      opacityObserver.observe(refOpc.current);
    }
  }, [refOpc]);
  return [refOpc];
};

export default useOpacityAnmOnScroll;
