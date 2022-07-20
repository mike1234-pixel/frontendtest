/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useRef, RefObject} from 'react'
import { css } from "@emotion/react";
import Spinner from "./Spinner"

interface ImgElementProps {
  src: string,
  alt?: string,
}

interface ImageProps extends ImgElementProps { 
  threshold?: number;
  loadingIcon?: React.ReactNode;
}

export default function Image(props: ImageProps): JSX.Element {

  const { src, alt, threshold = .6, loadingIcon = <Spinner/> } = props

  const ref = useRef<HTMLImageElement | null>(null)

  const [intersectedElementRef, setIntersectedElementRef] = useState<RefObject<HTMLImageElement> | null>(null)

  useEffect(() => {
    // if no image ref or it does not have a current property
    if (!ref?.current) return

    const observer: IntersectionObserver = new IntersectionObserver(([entry]) => {
      
      if (entry.isIntersecting) {

        console.log(entry)

        setTimeout(() => {
          setIntersectedElementRef(ref)
        }, 1000)

        // once the image has entered the viewport, stop observing it
        observer.unobserve(entry.target)

      }
    }, { threshold: threshold }) // callback is triggered when threshold is reached https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

    observer.observe(ref.current)
  }, [ref])

  return (
    <div css={css`
    max-width: 100%;
    width: 700px;
    height: 700px;
    background: grey; 
    position: relative;
  `}>
    <div css={ref.current === intersectedElementRef ? css`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      ` : css`
        display: none;
      `}>
        {loadingIcon}
      </div>
    
    <img
      alt={alt}
      src={ref.current === intersectedElementRef ? `data:,` : src} // if image has enterered the viewport, this should be src, otherwise a placeholder src
      ref={ref}
      css={ref.current === intersectedElementRef ? css`
        opacity: 0;
        width: 100%;
        height: 100%;
        display: block;
      `: css`
        width: 100%;
        height: 100%;
        opacity: 1;
      `}
    />

    </div>
  );
}
