/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import { useEffect, useState, useRef, RefObject} from 'react'

import { css } from "@emotion/react";

interface ImageProps {
  src: string,
  alt?: string,
}

export default function Image(props: ImageProps): JSX.Element {

  const { src, alt } = props

  const ref = useRef<HTMLImageElement | null>(null)

  const [intersectedElementRef, setIntersectedElementRef] = useState<RefObject<HTMLImageElement> | null>(null)

  useEffect(() => {
    // if no image ref or it does not have a current property
    if (!ref?.current) return

    const observer: IntersectionObserver = new IntersectionObserver(([entry]) => {
      
      if (entry.isIntersecting) {

        setTimeout(() => {
          setIntersectedElementRef(ref)
        }, 300)

        // once the image has entered the viewport, stop observing it
        observer.unobserve(entry.target)

      }
    })

    observer.observe(ref.current)
  }, [ref])

  return (
    <div css={css`
    max-width: 100%;
    width: 700px;
    height: 700px;
    background: grey; 
  `}>
    <img
      alt={alt}
      src={ref.current === intersectedElementRef ? `data:,` : src} // if image has enterered the viewport, this should be src, otherwise a placeholder src
      ref={ref}
      css={ref.current === intersectedElementRef ? css`
        opacity: 0;
      `: css`
        width: 100%;
        height: 100%;
        opacity: 1;
      `}
    />

    </div>
  );
}
