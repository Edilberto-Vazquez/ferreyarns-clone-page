import { createRef, useEffect } from "react";

const useFeatureSectionAnm = (xAxis) => {
  const refImg = createRef();
  const refText = createRef();
  useEffect(() => {
    const imgCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && xAxis === "right") {
        return entry.target.classList.add("imgRight");
      } else if (entry.isIntersecting && xAxis === "left") {
        return entry.target.classList.add("imgLeft");
      }
    };

    const childrenCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          return entry.target.classList.add("opacity-animation");
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const imgObserver = new IntersectionObserver(imgCallback, options);
    const childrenObserver = new IntersectionObserver(
      childrenCallback,
      options
    );

    if (refImg.current && refText.current) {
      imgObserver.observe(refImg.current);
      childrenObserver.observe(refText.current);
    }

    // return () => {
    //   if (refImg && refText) {
    //     imgObserver.unobserve(refImg.current);
    //     childrenObserver.unobserve(refText.current);
    //   }
    // };
  }, [refImg, refText, xAxis]);
  return { refImg, refText };
};

export default useFeatureSectionAnm;
