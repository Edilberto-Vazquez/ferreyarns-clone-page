import { createRef, useEffect } from "react";

const useOpacityAnm = () => {
  const refOpc = createRef();
  useEffect(() => {
    const formCallback = (entries) => {
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

    const formObserver = new IntersectionObserver(formCallback, options);

    if (refOpc.current) {
      formObserver.observe(refOpc.current);
    }
  }, [refOpc]);
  return [refOpc];
};

export default useOpacityAnm;
