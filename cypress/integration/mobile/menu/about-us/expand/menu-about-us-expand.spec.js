describe("Menu About Us expansion", () => {
  before(() => {
    cy.visit("/");
    cy.wait(100);
    cy.get("[data-cy=hamburger-menu-btn]").click();
    cy.contains("About Us").click();
  });

  it("renders company menu item", () => {
    cy.contains("Company");
  });

  it("renders people menu item", () => {
    cy.contains("People");
  });

  it("renders career menu item", () => {
    cy.contains("Career");
  });

  it("renders social responsibility menu item", () => {
    cy.contains("Social Responsibility");
  });

  it("renders our awards menu item", () => {
    cy.contains("Our Awards");
  });

  it("renders contact us menu item", () => {
    cy.contains("Contact Us");
  });

  it("renders Update Corona / Safe Business Event Standards menu item", () => {
    cy.contains("Update Corona / Safe Business Event Standards");
  });

  after(() => {
    cy.get("[data-cy=hamburger-menu-btn]").click();
  });
});
