
---

### `reflection.md`

```markdown
# Reflection

## a) Documentation

### Main Concepts Applied
1. **Web Components**: I created a reusable custom web component (`custom-card`) using the native Web Component API. This component can be customized with attributes and used across any webpage.
2. **Shadow DOM**: I utilized Shadow DOM to encapsulate the styles and structure of the card component, ensuring that the component's styles do not affect the global styles of the webpage.
3. **Slots**: I used the `<slot>` element to allow the insertion of custom content in predefined areas (header, content, footer) of the card. This gives flexibility in how content is added to the component.

### New Skills and Knowledge Acquired
- **Custom Elements**: I gained hands-on experience in defining custom elements using JavaScript's `class` syntax and the `customElements.define` method.
- **Shadow DOM**: I learned how to create and manage a shadow root to encapsulate the component's internal structure and styling, preventing external styles from leaking in.
- **Slots**: I understood how to use slots to insert dynamic content into a component, giving the card flexibility for various use cases.

## b) Reflection

### What I Learned
This project introduced me to the power of Web Components. By using native browser technologies, I was able to create reusable and customizable components without relying on frameworks like React or Vue. This approach not only promotes reusability but also encapsulates styles and structure, leading to more maintainable code.

### Challenges Faced
One of the challenges I faced was understanding how to correctly implement **slots** and pass content into the component. Initially, I had difficulty figuring out how to structure the component and bind content to the appropriate slots. 

After some trial and error, I was able to correctly assign the slots in the HTML and adjust the structure of the `custom-card` component, which resolved the issue. 

This experience taught me the importance of understanding how the Shadow DOM and slots work together to allow a component to be both flexible and encapsulated.
