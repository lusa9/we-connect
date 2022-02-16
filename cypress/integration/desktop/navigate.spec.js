describe("Navigation", () => {
  before(() => {
    cy.visit("/");
    cy.wait(100);
  });

  beforeEach(() => {
    cy.viewport("macbook-13");
  });

  describe("on live event menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Live Event").click();
      cy.location("pathname").should("eq", "/live-events");
    });
  });

  describe("on virtual events menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Virtual Events").click();
      cy.location("pathname").should("eq", "/virtual-events");
    });
  });

  describe("on hybrid events menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Hybrid Events").click();
      cy.location("pathname").should("eq", "/hybrid-events");
    });
  });

  describe("on digital managed events menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Digital Managed Events").click();
      cy.location("pathname").should("eq", "/digital-managed-events");
    });
  });

  describe("on b2b webinars menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("B2B Webinars").click();
      cy.location("pathname").should("eq", "/b2b-webinars");
    });
  });

  describe("on event tech menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Event Tech").click();
      cy.location("pathname").should("eq", "/event-tech");
    });
  });

  describe("on event tech menu item click", () => {
    it("navigates to correct route", () => {
      cy.contains("Event Tech").click();
      cy.location("pathname").should("eq", "/event-tech");
    });
  });
});
