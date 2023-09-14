/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
        getByTestId(
            dataTestIdAttribute: string,
            args?: any,
        ): Chainable<JQuery<HTMLElement>>;
    }
}
