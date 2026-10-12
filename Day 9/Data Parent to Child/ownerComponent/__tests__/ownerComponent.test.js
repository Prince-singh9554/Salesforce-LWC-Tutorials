import { createElement } from '@lwc/engine-dom';
import OwnerComponent from 'c/ownerComponent';

describe('c-owner-component', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders the products passed through the container to each child', async () => {
        const element = createElement('c-owner-component', {
            is: OwnerComponent
        });

        document.body.appendChild(element);
        await Promise.resolve();

        const container = element.shadowRoot.querySelector('c-container-component');
        const productChildren = container.shadowRoot.querySelectorAll('c-child-component');

        expect(productChildren).toHaveLength(3);
        expect(productChildren[0].shadowRoot.textContent).toContain('Laptop');
        expect(productChildren[0].shadowRoot.textContent).toContain('3/5');
        expect(productChildren[1].shadowRoot.textContent).toContain('Mackbook');
        expect(productChildren[1].shadowRoot.textContent).toContain('4/5');
        expect(productChildren[2].shadowRoot.textContent).toContain('Mobile');
        expect(productChildren[2].shadowRoot.textContent).toContain('3/5');
    });

    it('shows the parent-called message when Continue is clicked', async () => {
        const element = createElement('c-owner-component', {
            is: OwnerComponent
        });

        document.body.appendChild(element);
        element.shadowRoot.querySelector('lightning-button').click();
        await Promise.resolve();

        const container = element.shadowRoot.querySelector('c-container-component');

        expect(container.shadowRoot.textContent).toContain(
            'that the parent called this message to show this!'
        );
    });
});