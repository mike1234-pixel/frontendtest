import { render, screen, within } from "@testing-library/react";
import Image from "./Image";
import "intersection-observer";

test("Image loads grey rectangle + spinner to begin with", () => {
  // test the css bg style is grey - styles are contained in a class
  render(
    <Image
      src="https://apod.nasa.gov/apod/image/2206/CygWideHa-OIIIBiColorImage2_crop2_1024.jpg"
      alt="Image 2"
    />
  );
  const image = screen.getByTestId("test-image");
  const styles = getComputedStyle(image);

  expect(styles.backgroundColor).toBe("grey");

  // test the spinner is contained within it
  const loadingSpinnerInRectangle = within(image).getByTestId(
    "test-loading-spinner"
  );

  expect(loadingSpinnerInRectangle).toBeTruthy();
});

// THE SECOND TEST USES CYPRESS, PLEASE FIND THIS IN cypess/e2e/spec.cy.ts
