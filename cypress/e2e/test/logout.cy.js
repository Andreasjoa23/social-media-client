describe("Logout Test", () => {
  it("should allow user to logout with the logout button", () => {
    cy.visit("/");

    cy.get('button[data-auth="login"]').eq(1).click();

    cy.get("#loginEmail").type("example@stud.noroff.no", { force: true });
    cy.get("#loginPassword").type("exampleexample", { force: true });

    cy.get("#loginForm").submit();
    cy.wait(2000);

    cy.get('button[data-auth="logout"]').click();

    cy.url().then((url) => {
      console.log("Current URL:", url);
    });

    cy.url().should("include", "/");

    cy.get("body").should("not.have.class", "logged-in");
  });
});
