# App

Overview of dependencies and config used in this repo.

## Dependencies

- Run `npm init`

- Run `npm install`

- Run `npm install Cypress`

## For using xpath,

- Run `npm install -D cypress-xpath`

## And Add this command in your command.js to access Web Element path,

- Add `require('cypress-xpath');`


## Cypress Tests

- Run `npx cypress open`

## Cypress Run (cypress.io)
- Run `npx cypress run --record --key "36ca5f3d-8a69-4c5e-af8a-5b9d02dfb159" --spec "cypress/e2e/TestScripts/TestCases.cy.js"` or
- Run `npx cypress run --record --key 36ca5f3d-8a69-4c5e-af8a-5b9d02dfb159`

## Note
- We have some cookies issue in the Webiste, Due to using different sessions values in thw website and The Website is also not to stable --- I already bypass the cookies but it doesn't work effectively

## At one time -- We can run single test to avoid such cookies & session issue
- `it.only`
