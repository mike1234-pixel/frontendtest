/** @jsxImportSource @emotion/react */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { css, keyframes } from "@emotion/react";

const Spinner: React.FC = () => {
  const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

  const spinnerStyles = () => css`
    width: 100px;
    height: 100px;
    animation: ${spin} 1s ease-in-out infinite;
  `;

  return (
    <FontAwesomeIcon
      icon={faSpinner}
      css={spinnerStyles}
      data-testid="test-loading-spinner"
    />
  );
};

export default Spinner;
