describe("Menu About Us navigation", () => {
  before(() => {
    cy.visit("/");
    cy.wait(100);
  });

  beforeEach(() => {
    cy.get("[data-cy=hamburger-menu-btn]").click();
    cy.contains("About Us").click();
  });

  describe("company event menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Company").click();
      cy.location("pathname").should("eq", "/we-company");
    });
  });

  describe("people event menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("People").click();
      cy.location("pathname").should("eq", "/we-people");
    });
  });

  describe("social responsibility event menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Social Responsibility").click();
      cy.location("pathname").should("eq", "/social-responsibility");
    });
  });

  describe("our awards event menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Our Awards").click();
      cy.location("pathname").should("eq", "/our-awards");
    });
  });

  describe("contact us event menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Contact Us").click();
      cy.location("pathname").should("eq", "/contact-us");
    });
  });

  describe("Update Corona / Safe Business Event Standards event menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Update Corona / Safe Business Event Standards").click();
      cy.location("pathname").should(
        "eq",
        "/update-corona-safe-business-event-standards"
      );
    });
  });

  after(() => {
    cy.visit("/");
  });
});
