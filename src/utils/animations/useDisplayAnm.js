import { createRef, useEffect, useState } from "react";

const useDisplayAnm = (color) => {
  const refDisplay = createRef();
  const refButton = createRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (refDisplay.current) {
      refDisplay.current.classList.add("display-animation");
      refDisplay.current.ariaExpanded = !show;
      if (color === "black") {
        refButton.current.classList.add(
          "display-animation-button",
          "display-animation-button-black"
        );
      } else if (color === "white") {
        refButton.current.classList.add(
          "display-animation-button",
          "display-animation-button-white"
        );
      }
      refButton.current.ariaexpanded = !show;
    }
  }, [refDisplay, refButton, show, color]);
  return [refDisplay, refButton, show, setShow];
};

export default useDisplayAnm;
