import { createRef, useEffect } from "react";

const useFeatureSectionAnm = (xAxis) => {
  const refImg = createRef();
  useEffect(() => {
    const imgCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && xAxis === "right") {
        return entry.target.classList.add("imgRight");
      } else if (entry.isIntersecting && xAxis === "left") {
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

    // return () => {
    //   if (refImg && refText) {
    //     imgObserver.unobserve(refImg.current);
    //     childrenObserver.unobserve(refText.current);
    //   }
    // };
  }, [refImg, xAxis]);
  return { refImg };
};

export default useFeatureSectionAnm;
