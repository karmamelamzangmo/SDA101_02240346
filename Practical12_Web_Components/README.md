# Web Component Card Example

## Project Overview
This project demonstrates the use of Web Components to create a reusable "Card" component. The `custom-card` component can be used across any webpage, with customizable attributes like card title, background color, and border color. The component also uses slots to insert content into predefined areas like the header, body, and footer.

## Key Features
- **Custom Web Component**: The `custom-card` element is a reusable, encapsulated card UI component.
- **Attributes**:
  - `card-title`: Title of the card.
  - `card-background`: Background color of the card.
  - `card-border-color`: Border color of the card.
- **Slots**:
  - `header`: For inserting the card header content.
  - `content`: For inserting the main content of the card.
  - `footer`: For inserting the footer content.
  
## Technologies Used
- **HTML5**: Structuring the `custom-card` component.
- **CSS**: Styling the card component, including custom shadow DOM styles.
- **JavaScript**: Defining the custom element `custom-card` and handling attributes and slots.

## Usage
1. Create a `custom-card` element in your HTML.
2. Set the `card-title`, `card-background`, and `card-border-color` attributes to customize the card.
3. Insert content in the `<slot>` tags for header, body, and footer.

Example usage:
```html
<custom-card 
    card-title="Card Title 1" 
    card-background="#f0f0f0" 
    card-border-color="#007BFF">
    <span slot="header">Header Content</span>
    <p slot="content">This is the main content of the card. You can put any HTML here.</p>
    <button slot="footer">Click Me</button>
</custom-card>
