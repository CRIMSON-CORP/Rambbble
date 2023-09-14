import NavLinksList from '@/config/nav-links';
import { skip } from 'node:test';

describe('template spec', () => {
    it('goes to website', () => {
        cy.visit('http://localhost:3000');
    });
});

describe('render navbar', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    it('renderes logo', () => {
        cy.get('#logo')
            .should('exist')
            .should('be.visible')
            .should('have.length', 1);
    });

    it('renders nav items', () => {
        cy.get('#nav-link-list')
            .children()
            .should('have.length', NavLinksList.length);
    });

    it.only('nav links go to pages', () => {
        NavLinksList.map((link) => {
            cy.get(`a[href='${link.path}']`).click();
            cy.location('pathname').should('equal', link.path);
        });
    });
describe('homepage ui is proper', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        // Open Eyes to start visual testing.
        // Each test should open its own Eyes for its own snapshots.
        cy.eyesOpen({
            // The name of the application under test.
            // All tests for the same app should share the same app name.
            // Set this name wisely: Applitools features rely on a shared app name across tests.
            appName: 'Rambbble',
            // The name of the test case for the given application.
            // Additional unique characteristics of the test may also be specified as part of the test name,
            // such as localization information ("Home Page - EN") or different user permissions ("Login by admin").
            testName: Cypress.currentTest.title,
        });
    });

    it('renders homepage correctly', () => {
        cy.wait(5000);
        cy.get('footer').scrollIntoView({
            duration: 3800,
        });

        cy.wait(10000);
        cy.eyesCheckWindow({
            tag: 'Homepage',
            target: 'window',
            fully: true,
        });
    });

    afterEach(() => {
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose();
    });
});

});
