describe("Login Test", () => {
  it("should allow user to log in with the login form with valid credentials", () => {
    cy.visit("/");
    cy.wait(1000);

    cy.get('button[data-auth="login"]').eq(1).click();

    cy.get("#loginEmail").should("be.visible");
    cy.get("#loginEmail").type("Tester123321@noroff.no", { force: true });

    cy.get("#loginPassword").should("be.visible");
    cy.get("#loginPassword").type("Tester123321", { force: true });

    cy.get("#loginForm").submit();

    cy.get("body").should("have.class", "logged-in");
  });

  it("should not allow user to submit the login form with invalid credentials and shows a message", () => {
    cy.visit("/");
    cy.wait(1000);

    cy.get('button[data-auth="login"]').eq(1).click();

    cy.get("#loginEmail").type("TesterBester123321@noroff.no", { force: true });
    cy.get("#loginPassword").type("Tester123321", { force: true });

    cy.get("#loginForm").submit();
    cy.wait(2000);

    cy.get(".error-message").should("contain", "is incorrect");
  });
});
