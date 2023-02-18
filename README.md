# Sign-up-form
 Creating a Sign Up Form 
# Elizabeth Imolorhe - Assignment on Sign-up form

This is a solution to the Sign-Up Form project.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Access, complete and submit the form easily.
- See all the interactive state of the form.
- Validattion should ensure all fields are filled.
- Validation should ensure email format is correct.

### Screenshot

![image](https://user-images.githubusercontent.com/100562475/218037732-53dae886-0aa1-41f3-9764-831dd911fb51.png)
![image](https://user-images.githubusercontent.com/100562475/219845366-361881f3-afc5-4b81-935d-5535040a621d.png)


### Links

- Solution URL: [Github](https://github.com/ElizabethImolorhe/Sign-up-form)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- JavaScript

### What I learned

-Using nested divs in HTML
-Incorporating popping font from font.google.com
- Validating form entries using javascript
- using trim() to remove extra spaces that might affect validations

```html
<h1>HTML code I'm proud of</h1>
<small class="last"
  >By clicking the button, you are agreeing to our
  <strong><a href="#">Terms and Services</a></strong></small
>
```

```css
.proud-of-this-css {
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
}
```Javascript  codes I am proud of
if (firstnameValue === '') {
    setErrorFor(firstname, 'First Name cannot be empty');
  } else {
    setSuccessFor(firstname);
    
function isValidEmail(email) {
  // A simple regular expression to validate email format
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

### Continued development

-How to add a background image and make it transparent in CSS.
- How to add image icon for errors
-Perfect myuse of flex and flex wrap in CSS.

### Useful resources

- [W3schools](https://www.w3schools.com/html/default.asp) - This site helped me at the start of working on the layout of the form.
- [Frontend mentor](https://www.frontendmentor.io/home) - This site gave me great insight into creating this particular form. I watched a video that showed me step-by-step way walk-through in creating the form. I also got a README template (the one I used to create this README) from them. I will recommend them to any newbies out there.
- ChatGPT - Used for generating some codes and explanation of some codes.

## Author

- Website - [Elizabeth Imolorhe](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/ElizabethImolorhe)


## Acknowledgments

Many thanks to Simon Joseph for been a very patient mentor.
