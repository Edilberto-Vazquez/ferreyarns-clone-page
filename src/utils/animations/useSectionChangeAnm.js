import { createRef, useEffect } from "react";

const useSectionChangeAnm = () => {
  const refOpc = createRef();
  useEffect(() => {
    if (refOpc.current) {
      refOpc.current.ariaExpanded = true;
    }
  }, [refOpc]);
  return [refOpc];
};

export default useSectionChangeAnm;
