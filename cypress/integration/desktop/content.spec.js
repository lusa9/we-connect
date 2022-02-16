describe("Navigation", () => {
  before(() => {
    cy.visit("/");
    cy.wait(100);
  });

  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  it("displays live event menu item", () => {
    cy.contains("Live Event");
  });

  it("displays virtual events menu item", () => {
    cy.contains("Virtual Events");
  });

  it("displays hybrid events menu item", () => {
    cy.contains("Hybrid Events");
  });

  it("displays digital managed events menu item", () => {
    cy.contains("Digital Managed Events");
  });

  it("displays b2b webinars menu item", () => {
    cy.contains("B2B Webinars");
  });

  it("displays event tech menu item", () => {
    cy.contains("Event Tech");
  });

  it("displays about us menu item", () => {
    cy.contains("About Us");
  });
});
