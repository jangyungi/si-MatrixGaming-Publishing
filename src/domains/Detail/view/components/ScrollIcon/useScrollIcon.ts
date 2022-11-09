import { useEffect, useState } from "react";

export const useScrollIcon = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollEnded, setIsScrollEnded] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    const endScrollPoint = document.body.scrollHeight;
    const currScrollPoint = window.innerHeight + window.pageYOffset;

    if (currScrollPoint >= endScrollPoint) {
      setIsScrollEnded(true);
    } else {
      setIsScrollEnded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return {
    isScrollEnded: isScrollEnded,
  };
};
