describe("Image scrolling", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should load when it comes into view", () => {
    cy.get('[data-testid="secondTestImage"]').scrollIntoView().should(
      "have.attr",
      "src",
      "https://apod.nasa.gov/apod/image/2206/CygWideHa-OIIIBiColorImage2_crop2_1024.jpg"
    );
  });
});