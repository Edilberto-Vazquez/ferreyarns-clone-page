import { createRef, useEffect } from "react";

const useSectionDropDownAnm = (hTextPosition) => {
  const refImg = createRef();
  useEffect(() => {
    const imgCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && hTextPosition === "right") {
        return entry.target.classList.add("imgRight");
      } else if (entry.isIntersecting && hTextPosition === "left") {
        return entry.target.classList.add("imgLeft");
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const imgObserver = new IntersectionObserver(imgCallback, options);

    if (refImg.current) {
      imgObserver.observe(refImg.current);
    }
  }, [refImg, hTextPosition]);
  return [refImg];
};

export default useSectionDropDownAnm;
