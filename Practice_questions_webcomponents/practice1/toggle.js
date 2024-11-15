class ToggleButton extends HTMLElement {
    constructor() {
        super();

        // Initial state (retrieve from localStorage if available)
        this.state = localStorage.getItem('toggleState') === 'ON';

        // Create a button element
        this.button = document.createElement('button');
        this.updateButton();

        // Append the button to the custom element
        this.appendChild(this.button);

        // Bind the click event
        this.button.addEventListener('click', () => this.toggleState());
    }

    // Method to toggle the state
    toggleState() {
        this.state = !this.state;
        this.updateButton();

        // Save the state in localStorage
        localStorage.setItem('toggleState', this.state ? 'ON' : 'OFF');

        // Dispatch custom event "toggle-changed"
        this.dispatchEvent(new CustomEvent('toggle-changed', {
            detail: { state: this.state ? 'ON' : 'OFF' }
        }));
    }

    // Update button text and style based on state
    updateButton() {
        this.button.textContent = this.state ? 'ON' : 'OFF';
        this.button.style.backgroundColor = this.state ? 'green' : 'red';
        this.button.style.color = 'white';
        this.button.style.border = 'none';
        this.button.style.padding = '10px 20px';
        this.button.style.cursor = 'pointer';
        this.button.style.fontSize = '16px';
    }
}

// Define the custom element
customElements.define('toggle-button', ToggleButton);
