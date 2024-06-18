import "@testing-library/dom"; // Optionally import DOM manipulation utilities

describe("App Component E2E Tests", () => {
  beforeEach(() => {
    cy.visit("/"); // Adjust the URL based on your app's address
  });

  it("should load the component and display the Show more button", () => {
    // Check if the Show more button is present
    cy.contains("Show more").should("be.visible");
  });

  it("should handle clicking the Show more button", () => {
    // Click the Show more button
    cy.contains("Show more").click();

    cy.wait(5000); // Adjust the wait time if necessary

    // Check if the Box containing the events is not empty
    cy.get('div[class*="events"]').within(() => {
      cy.get('div[class*="event"]').should("have.length.greaterThan", 0);
    });
  });
});
