# Joshua Jameson-Wallis - Personal Portfolio

This is a solution to the [Minimalist portfolio website coding challenge](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE) on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for each page depending on their device's screen size
-  See hover states for all interactive elements throughout the site
-  Click the "About Me" call-to-action on the homepage and have the screen scroll down to the next section
-  Receive an error message when the contact form is submitted if:
-  The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
-  The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![](./screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Mobile-first workflow
-  Flexbox
-  CSS Grid
-  Sass
-  Typescript

### What I learned

```html
<div class="cta__body__line"></div>
```

The fluid line between both the 'contact me' button and call to action title provided a nice challenge, since I had to keep the line within the DOM via an empty `div`. This is something that we usually want to avoid doing, however not in this case since applying a pseudo element to a grid container forces it to become either the first or last grid item, never in-between.

```scss
.details {
   grid-template-columns: repeat(5, 1fr);
   grid-template-rows: repeat(4, auto);
}
```

I was able to further develop my CSS Grid skills by creating a larger number of rows and columns on the individual project pages, in order to have more control over the alignment and widths of content in accordance with the original design.

```scss
@include mqs(min-width, tablet-home, max-width, desktop) {
   grid-template-columns: 320px auto;
   grid-template-rows: minmax(630px, auto);
   @include e(img) {
      background-position: 71% 100%;
   }
}
```

Since I used this project as a template for my own portfolio, I had to create the project images myself and use my own profile images too. I learnt the importance of matching their dimensions with the original assets provided to avoid mis-alignment with other content, as well as creating similar effects purely within CSS (rotating my profile image so I was facing the same direction).

```html
<form
   action="https://formspree.io/f/mayvnvee"
   method="post"
   id="submit-form"
   class="form"
   novalidate
>
   ...
</form>
```

Finally, this was my first time connecting a form with a 3rd party service that would handle its submission and email me any data provided. I chose Formspree because of its simplicity to integrate into existing projects, where you only need to provide a specifc endpoint within the form's action for their API to then handle all the rest.

### Continued development

JS based validation libraries - can see how they simplify workload (create err msgs for you, custom styling, passing obj of options to arr which represents the 'settings' for each input field, no need for copying massive email regex)

### Useful resources

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
