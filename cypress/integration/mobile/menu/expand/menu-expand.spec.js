describe("Menu expansion", () => {
  before(() => {
    cy.visit("/");
    cy.wait(100);
  });

  describe("on hamgurger icon click", () => {
    before(() => {
      cy.get("[data-cy=hamburger-menu-btn]").click();
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

  describe("on hamgurger icon second click", () => {
    before(() => {
      cy.get("[data-cy=hamburger-menu-btn]").click();
    });

    it("doesn't display live event menu item", () => {
      cy.contains("Live Event").should("not.exist");
    });

    it("doesn't display virtual events menu item", () => {
      cy.contains("Virtual Events").should("not.exist");
    });

    it("doesn't display hybrid events menu item", () => {
      cy.contains("Hybrid Events").should("not.exist");
    });

    it("doesn't display digital managed events menu item", () => {
      cy.contains("Digital Managed Events").should("not.exist");
    });

    it("doesn't display b2b webinars menu item", () => {
      cy.contains("B2B Webinars").should("not.exist");
    });

    it("doesn't display event tech menu item", () => {
      cy.contains("Event Tech").should("not.exist");
    });

    it("doesn't display about us menu item", () => {
      cy.contains("About Us").should("not.exist");
    });
  });
});
