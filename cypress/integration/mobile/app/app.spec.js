describe("Routing", () => {
  describe("if route doesn't exist", () => {
    before(() => {
      cy.visit("/adsf");
    });

    it("renders home route", () => {
      cy.location("pathname").should("eq", "/");
    });

    it("home label displayed", () => {
      cy.contains("Home");
    });

    it("company logo displayed", () => {
      cy.get("[data-cy=company-logo]");
    });
  });

  describe("on index", () => {
    before(() => {
      cy.visit("/");
    });

    it("renders home route", () => {
      cy.location("pathname").should("eq", "/");
    });

    it("home label displayed", () => {
      cy.contains("Home");
    });

    it("company logo displayed", () => {
      cy.get("[data-cy=company-logo]");
    });

    it("hamgurger icon displayed", () => {
      cy.get("[data-cy=hamburger-menu-btn]");
    });
  });
});
