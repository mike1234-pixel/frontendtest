/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type ImgElementProps = {
  src: string,
  alt?: string,
};

interface ImageProps extends ImgElementProps { }

export default function Image(props: ImageProps): JSX.Element {
  return (
    <img
      {...props}
      css={css`
        max-width: 100%;
      `}
    />
  );
}
