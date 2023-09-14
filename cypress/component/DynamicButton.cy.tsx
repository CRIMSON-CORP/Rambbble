import '@/app/globals.css';
import { DynamicButton } from '@/components/ui';

describe('Button.cy.tsx', () => {
    it('playground', () => {
        cy.mount(<DynamicButton>Button</DynamicButton>);
    });

    it('renders a contained button', () => {
        cy.mount(<DynamicButton>Click me</DynamicButton>);
        cy.get('button')
            .should('contain', 'Click me')
            .and('have.class', 'bg-primary');
    });

    it('calls onClick function when clicked', () => {
        const onClick = cy.stub().as('onClickStub');
        cy.mount(<DynamicButton onClick={onClick}>Click me</DynamicButton>);
        cy.get('button').click();
        cy.get('@onClickStub').should('have.been.calledOnce');
    });

    it('applies different font size based on size prop', () => {
        cy.mount(<DynamicButton size="large">Large Button</DynamicButton>);
        cy.get('button')
            .should('contain', 'Large Button')
            .and('have.class', 'text-lg');

        cy.mount(<DynamicButton size="normal">Normal Button</DynamicButton>);
        cy.get('button')
            .should('contain', 'Normal Button')
            .and('have.class', 'text-xs');
    });
});

describe.only('renders dynamics in the button', () => {
    it('renders idle', () => {
        cy.mount(<DynamicButton>Large Button</DynamicButton>);

        cy.getByTestId('idle').should('exist').should('be.visible');

        cy.getByTestId('spinner').should('not.exist');
        cy.getByTestId('error').should('not.exist');
        cy.getByTestId('success').should('not.exist');
    });

    it('renders loader', () => {
        cy.mount(<DynamicButton status="loading">Large Button</DynamicButton>);

        cy.getByTestId('spinner').should('exist').should('be.visible');

        cy.getByTestId('idle').should('not.be.visible');
        cy.getByTestId('error').should('not.exist');
        cy.getByTestId('success').should('not.exist');
    });

    it('renders error', () => {
        cy.mount(<DynamicButton status="error">Large Button</DynamicButton>);

        cy.getByTestId('error').should('exist').should('be.visible');

        cy.getByTestId('idle').should('not.be.visible');
        cy.getByTestId('spinner').should('not.exist');
        cy.getByTestId('success').should('not.exist');
    });

    it('renders success', () => {
        cy.mount(<DynamicButton status="success">Large Button</DynamicButton>);

        cy.getByTestId('success').should('exist').should('be.visible');

        cy.getByTestId('idle').should('not.be.visible');
        cy.getByTestId('spinner').should('not.exist');
        cy.getByTestId('error').should('not.exist');
    });
});
