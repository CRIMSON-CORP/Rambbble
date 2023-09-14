import NavLinksList from '@/config/nav-links';

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

    it('nav links go to pages', () => {
        NavLinksList.map((link) => {
            cy.get(`header a[href='${link.path}']`).click();
            cy.location('pathname').should('equal', link.path);
        });
    });

    it('nav indicator works properly', () => {
        // wait for loader to go away
        cy.wait(3000);
        let pageIndex = 0;
        // Indidcator on only the first link asper on home page
        NavLinksList.map((link, index) => {
            cy.get(`header a[href='${link.path}'] + span`).should(
                `${index === pageIndex ? 'exist' : 'not.exist'}`,
            );
        });

        // Go to second page and indicator should exist only on the second page
        pageIndex = 1;
        cy.get(`header a[href='${NavLinksList[pageIndex].path}']`).click();
        NavLinksList.map((link, index) => {
            cy.get(`header a[href='${link.path}'] + span`).should(
                `${index === pageIndex ? 'exist' : 'not.exist'}`,
            );
        });
        // Go to third page and indicator should exist only on the second page
        pageIndex = 2;
        cy.get(`header a[href='${NavLinksList[pageIndex].path}']`).click();
        NavLinksList.map((link, index) => {
            cy.get(`header a[href='${link.path}'] + span`).should(
                `${index === pageIndex ? 'exist' : 'not.exist'}`,
            );
        });
        // Go to forth page and indicator should exist only on the second page
        pageIndex = 3;
        cy.get(`header a[href='${NavLinksList[pageIndex].path}']`).click();
        NavLinksList.map((link, index) => {
            cy.get(`header a[href='${link.path}'] + span`).should(
                `${index === pageIndex ? 'exist' : 'not.exist'}`,
            );
        });
        // Go to fifth page and indicator should exist only on the second page
        pageIndex = 4;
        cy.get(`header a[href='${NavLinksList[pageIndex].path}']`).click();
        NavLinksList.map((link, index) => {
            cy.get(`header a[href='${link.path}'] + span`).should(
                `${index === pageIndex ? 'exist' : 'not.exist'}`,
            );
        });
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

describe('modal opens', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    it('opens modal', () => {
        // test for open modal
        cy.get('#hero button').first().click();
        //wait for modal animation
        cy.wait(1000);
        cy.get('#modal').should('exist').should('be.visible');

        // test for close modal
        cy.getByTestId('close-modal-button').click();
        cy.wait(1000);
        cy.get('#modal').should('not.exist');
    });
});

describe.only('test mobile nav', () => {
    beforeEach(() => {
        cy.viewport(360, 720);
        cy.visit('http://localhost:3000');
    });

    it('opens mobile nav', () => {
        // wait for page to load
        cy.wait(5000);
        cy.getByTestId('open-side-nav').should('exist').click();

        cy.get('header #mobile_menu').should('exist').should('be.visible');

        // test close mobile nav
        cy.getByTestId('close-mobile-nav')
            .should('exist')
            .should('be.visible')
            .click();

        cy.get('header #mobile_menu').should('not.exist');
    });
});
