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

```scss
$color-shades: (
   pure-black: (
      100: 0 0% 100%,
      200: 0 0% 90%,
      300: 0 0% 70%,
      400: 0 0% 60%,
      500: 0 0% 50%,
      600: 0 0% 40%,
      700: 0 0% 30%,
      800: 0 0% 10%,
      900: 0 0% 0%,
   ),
);
```

Diff colour shades Sass map

### Continued development

Design fundamentals - experiment more freely with designs provided

### Useful resources

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

###### TODO

HTML:

CSS:

Offset design - simple max-width + grid to change side aligned to (key within utility container class - that was biggest problem)

Keeping SVG's in DOM + styling directly (descendant classes vs static img changes) | descendant class used for touch targets + fixing hover issue over SVG directly (gaps in shape)

CTA line - keeping in DOM flow (instead of pseudo element - with Grid becomes either 1st or last grid item - not with flex)

Project details pages - more grid rows + columns to have more flexibility with where content starts + stops (with overlapping)

Design - Creating our own images (Pixelmator + collage style taken from FEM themselves) | useful for img dimensions - keeping the same type of images exact same dimensions to avoid mis-alignment (+ max-width hitting before major breakpoint)

JS:

Formspree - form submisison + simple action replacement (connecting to their API + doing all the 'backend' validation for me) | no validate on form itself to maintain my own custom CSS styles/JS messages
