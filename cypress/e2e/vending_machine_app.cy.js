describe("E2E Tests", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3000")
  })
  it("Visits the Vending Machine", () => {})

  it("Renders home page correctly", () => {
    cy.contains("Vending Machine")
    cy.contains("Balance")
    cy.contains("Water")
    cy.contains("Soda")
    cy.contains("Coke")
  })

  it("Clicks all button", () => {
    cy.contains("Buy").click()
    cy.contains("Cancel").click()
    cy.contains("Insert 1$").click()
    cy.contains("Insert 5$").click()
    cy.contains("Insert 10$").click()
    cy.contains("Insert 20$").click()
    cy.contains("Change:").click()
  })

  it("Regular user can not access admin panel", function () {
    cy.contains("Supplier Panel").click()
    cy.get("input:first").type("hacker")
    cy.get("input:last").type("bruteforcereally")
    cy.contains("Log in").click()
    cy.contains("Invalid credentials")
  })
  it("Supplier can access admin panel", function () {
    cy.contains("Supplier Panel").click()
    cy.get("#username").type("admin")
    cy.get("#password").type("admin")
    cy.contains("Log in").click()
    cy.url().should("include", "/admin/operations")
  })

  it(`Clicking "Supplier Panel" navigates to /admin route`, function () {
    cy.contains("Supplier Panel").click()
    cy.url().should("include", "/admin")
  })

  it(`Clicking "Insert 1$ adds 1 to customer state"`, function () {
    cy.contains("Insert 1$").click()
    cy.window()
      .its("store")
      .invoke("getState")
      .its("customerBalance")
      .its("balance")
      .should("equal", 1)
  })
  it(`Clicking "Insert 5$ adds 5 to customer state"`, function () {
    cy.contains("Insert 5$").click()
    cy.window()
      .its("store")
      .invoke("getState")
      .its("customerBalance")
      .its("balance")
      .should("equal", 5)
  })
  it(`Clicking "Insert 10$ adds 10 to customer state"`, function () {
    cy.contains("Insert 10$").click()
    cy.window()
      .its("store")
      .invoke("getState")
      .its("customerBalance")
      .its("balance")
      .should("equal", 10)
  })
  it(`Clicking "Insert 20$ adds 20 to customer state"`, function () {
    cy.contains("Insert 20$").click()
    cy.window()
      .its("store")
      .invoke("getState")
      .its("customerBalance")
      .its("balance")
      .should("equal", 20)
  })
})
