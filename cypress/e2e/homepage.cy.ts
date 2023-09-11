import NavLinksList from '@/config/nav-links';

describe.skip('template spec', () => {
    it('goes to website', () => {
        cy.visit('http://localhost:3000');
    });
});

describe.skip('render navbar', () => {
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

    it('nav links go to pages', () => {
        NavLinksList.map((link) => {
            cy.get(`header a[href='${link.path}']`).click();
            cy.location('pathname').should('equal', link.path);
        });
    });
});

describe('snapshot testing', () => {
    it('homepage matches snapshot', function () {
        cy.viewport(854, 672);
        cy.visit('http://localhost:3000');
        expect(cy.document()).tomatchsnapshot();
    });
});
