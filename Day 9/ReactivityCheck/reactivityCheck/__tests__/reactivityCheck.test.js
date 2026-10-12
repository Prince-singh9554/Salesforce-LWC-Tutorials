import { createElement } from '@lwc/engine-dom';
import ReactivityCheck from 'c/reactivityCheck';

describe('c-reactivity-check', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('changes the first email in the child and the second email in the parent', async () => {
        const element = createElement('c-reactivity-check', {
            is: ReactivityCheck
        });

        document.body.appendChild(element);
        await Promise.resolve();

        const child = element.shadowRoot.querySelector(
            'c-reactivity-within-child'
        );
        expect(child.shadowRoot.textContent).toContain(
            'sandra.taylor@gmail.com'
        );
        expect(child.shadowRoot.textContent).toContain(
            'susan.wilson@company.org'
        );

        element.shadowRoot.querySelector('lightning-button').click();
        await Promise.resolve();

        expect(child.shadowRoot.textContent).toContain(
            'change.taylor@gmail.com'
        );
        expect(child.shadowRoot.textContent).toContain(
            'change1.wilson@company.org'
        );
    });
});