import { createRef, useEffect } from "react";

const useCertificationItem = () => {
  const refCertItem = createRef();
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

    const certItemObserver = new IntersectionObserver(formCallback, options);

    if (refCertItem.current) {
      certItemObserver.observe(refCertItem.current);
    }

    // return () => {
    //   if (refImg && refText) {
    //     imgObserver.unobserve(refImg.current);
    //     childrenObserver.unobserve(refText.current);
    //   }
    // };
  }, [refForm]);
  return { refForm };
};

export default useFormSectionAnm;
