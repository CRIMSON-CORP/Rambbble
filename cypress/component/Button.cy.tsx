import '@/app/globals.css';
import { Button } from '@/components/ui';

describe('Button.cy.tsx', () => {
    it('playground', () => {
        cy.mount(<Button>Button</Button>);
    });

    it('renders a contained button', () => {
        cy.mount(<Button>Click me</Button>);
        cy.get('button')
            .should('contain', 'Click me')
            .and('have.class', 'bg-primary');
    });

    it('renders an outlined button', () => {
        cy.mount(<Button variant="outlined">Outline me</Button>);
        cy.get('button')
            .should('contain', 'Outline me')
            .and('have.class', 'border-primary-orange');
    });

    it('renders a link button', () => {
        cy.mount(<Button href="/somelink">Link me</Button>);
        cy.get('a')
            .should('contain', 'Link me')
            .and('have.attr', 'href', '/somelink');
        cy.get('button').should('not.exist');
    });

    it('throws an error if both href and onClick are provided', () => {
        cy.on('uncaught:exception', (err) => {
            // Check if the error message matches what you expect
            if (
                err.message.includes(
                    'Please do not pass in an href and onClick prop',
                )
            ) {
                // The error was thrown as expected, mark the test as passed
                return false;
            }

            // Let other uncaught exceptions propagate
            return true;
        });

        cy.mount(
            <Button href="/link" onClick={() => {}}>
                Error me
            </Button>,
        );
        cy.get('button').should('not.exist');
    });

    it('calls onClick function when clicked', () => {
        const onClick = cy.stub().as('onClickStub');
        cy.mount(<Button onClick={onClick}>Click me</Button>);
        cy.get('button').click();
        cy.get('@onClickStub').should('have.been.calledOnce');
    });

    it('applies different font size based on size prop', () => {
        cy.mount(<Button size="large">Large Button</Button>);
        cy.get('button')
            .should('contain', 'Large Button')
            .and('have.class', 'text-lg');

        cy.mount(<Button size="normal">Normal Button</Button>);
        cy.get('button')
            .should('contain', 'Normal Button')
            .and('have.class', 'text-xs');
    });
});
