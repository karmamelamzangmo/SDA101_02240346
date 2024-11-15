class CustomCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    static get observedAttributes() {
        return ['card-title', 'card-background', 'card-border-color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const title = this.getAttribute('card-title') || 'Default Title';
        const background = this.getAttribute('card-background') || '#ffffff';
        const borderColor = this.getAttribute('card-border-color') || '#000000';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 16px;
                    border: 1px solid var(--border-color, ${borderColor});
                    border-radius: 8px;
                    background-color: var(--background-color, ${background});
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    transition: transform 0.2s;
                }

                :host(:hover) {
                    transform: scale(1.02);
                }

                .header {
                    padding: 16px;
                    background-color: var(--header-background, #f7f7f7);
                    border-bottom: 1px solid var(--border-color, ${borderColor});
                }

                .content {
                    padding: 16px;
                }

                .footer {
                    padding: 16px;
                    background-color: var(--footer-background, #f7f7f7);
                    border-top: 1px solid var(--border-color, ${borderColor});
                }
            </style>
            <div class="header">
                <slot name="header"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        `;
    }
}

customElements.define('custom-card', CustomCard);