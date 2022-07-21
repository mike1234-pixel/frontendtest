/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef, RefObject } from "react";
import { css } from "@emotion/react";
import Spinner from "./Spinner";

interface ImgElementProps {
  src: string;
  alt?: string;
  testId?: string;
}

interface ImageProps extends ImgElementProps {
  threshold?: number;
  loadingIcon?: React.ReactNode;
}

export default function Image(props: ImageProps): JSX.Element {
  const {
    src,
    alt,
    threshold = 0.9,
    loadingIcon = <Spinner />,
    testId,
  } = props;

  const ref = useRef<HTMLImageElement | null>(null);

  const [intersectedElementRef, setIntersectedElementRef] =
    useState<RefObject<HTMLImageElement> | null>(null);

  const [loaded, setLoaded] = useState<boolean>(false);

  const imageContainerStyles = () => css`
    max-width: 100%;
    width: 900px;
    height: 700px;
    background: grey;
    position: relative;
    margin-bottom: 30px;
  `;

  const imageStyles = () => css`
    transition: opacity 0.4s;
    width: 100%;
    height: 100%;
    display: block;
    ${!loaded
      ? `
    opacity: 0;  
    `
      : `
    opacity: 1;
    `}
  `;

  const spinnerContainerStyles = () => css`
    ${!loaded
      ? `
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      `
      : `
     display: none;
      `}
  `;

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

  return (
    <div css={imageContainerStyles()} data-testid="test-image">
      <div css={spinnerContainerStyles()}>{loadingIcon}</div>

      <img
        alt={alt}
        src={ref.current === intersectedElementRef ? `data:,` : src} // if image has enterered the viewport, this should be src, otherwise a placeholder src
        ref={ref}
        css={imageStyles()}
        data-testid={testId}
        onLoad={() => setLoaded(true)} // trigger css changes after src is loaded in, so that fade occurs after image load
      />
    </div>
  );
}
