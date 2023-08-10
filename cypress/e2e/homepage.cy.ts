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
});
