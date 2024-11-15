# Reflection

## a) Documentation

### Main Concepts Applied
1. **Client-Side Validation**: I used JavaScript to validate the input fields, ensuring correct data before enabling the form submission button.
2. **Error Messaging**: I displayed custom error messages under each field using JavaScript, helping users understand why their input was invalid.
3. **Disable Submit Button**: To prevent form submission until all fields are valid, I disabled the "Register" button initially and enabled it only after successful validation.

### New Skills and Knowledge Acquired
- **JavaScript Validation Logic**: I learned how to write validation functions for each form field and use conditional logic to display error messages when the input doesn’t meet requirements.
- **Dynamic Button State**: I gained experience in controlling the state of the submit button using JavaScript based on the form’s validation status.

## b) Reflection

### What I Learned
This project reinforced my understanding of client-side form validation. Writing JavaScript validation functions gave me hands-on experience in controlling form behavior, enhancing the user experience by providing real-time feedback and preventing incomplete or incorrect form submissions.

### Challenges Faced
One of the challenges was getting the **password confirmation check** to work properly. At first, the confirm password field allowed the form to submit even when it didn’t match the password. 

After some debugging, I identified the issue with the password match check and added logic to validate that the password and confirm password fields were identical. 

By carefully testing each field, I learned the importance of ensuring that all validation conditions work together to improve data accuracy and user experience. This project helped me refine my JavaScript skills, especially in form validation and UI/UX improvements.
