import { useState, useEffect, RefObject } from "react";

const useEnteredViewport = (ref: any, threshold: number) => {
  const [intersectedElementRef, setIntersectedElementRef] =
    useState<RefObject<HTMLImageElement> | null>(null);

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    // if no image ref or it does not have a current property
    if (!ref?.current) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersectedElementRef(ref);
          // once the image has entered the viewport, stop observing it
          observer.unobserve(entry.target);
        }
      },
      { threshold: threshold }
    ); // callback is triggered when threshold is reached https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

    observer.observe(ref.current);
  }, [ref, threshold]);

  return {
    intersectedElementRef,
    loaded,
    setLoaded,
  };
};

export default useEnteredViewport;
