class UserProfile extends HTMLElement {
    constructor() {
        super();

        // Attach shadow DOM
        this.attachShadow({ mode: 'open' });

        // Create a template for the component
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                /* Basic styling for the card */
                .profile-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 16px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    max-width: 200px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    font-family: Arial, sans-serif;
                    color: #333;
                    background-color: #fff;
                }
                .profile-name {
                    font-size: 1.2em;
                    font-weight: bold;
                    margin: 8px 0 4px;
                }
                .profile-role {
                    font-size: 1em;
                    color: #555;
                }
            </style>
            <div class="profile-card">
                <div class="profile-name"></div>
                <div class="profile-role"></div>
            </div>
        `;

        // Clone the template content and append it to the shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // Called when the element is added to the DOM
    connectedCallback() {
        this.updateProfile();
    }

    // Observed attributes to listen for changes
    static get observedAttributes() {
        return ['name', 'role'];
    }

    // Update profile when attributes change
    attributeChangedCallback(name, oldValue, newValue) {
        this.updateProfile();
    }

    // Update profile card content based on attributes
    updateProfile() {
        const name = this.getAttribute('name') || 'Unknown';
        const role = this.getAttribute('role') || 'No role specified';

        this.shadowRoot.querySelector('.profile-name').textContent = name;
        this.shadowRoot.querySelector('.profile-role').textContent = role;
    }
}

// Define the custom element
customElements.define('user-profile', UserProfile);
