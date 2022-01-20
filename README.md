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

-  Live Site URL: http://www.joshuajamesonwallis.com/

## My process

### Built with

-  Semantic HTML5 markup
-  Mobile-first workflow
-  Flexbox
-  CSS Grid
-  Sass
-  TypeScript

### What I learned

```html
<div class="cta__body__line"></div>
```

The fluid line between both the 'contact me' button and call to action title provided a nice challenge, since I had to keep the line within the DOM via an empty `div`. This is something that we usually want to avoid doing, however not in this case since applying a pseudo element to a grid container forces it to become either the first or last grid item and never in-between.

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

Since I used this project as a template for my own portfolio, I had to create the project images myself and use my own profile images too. I learnt the importance of matching their dimensions with the original assets provided to avoid mis-alignment with other content, as well as creating similar effects within CSS such as rotating my profile image so I was facing the same direction.

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

I look forward to integrating more 3rd party services that make our lives easier when dealing with forms, such as JS validation libraries. Based on the research I've already conducted, I can see how they simplify the process since they automatically create error messages for you, allow us to set custom styling options and remove the need to copy powerful regular expressions around from project to the next.

### Useful resources

-  [Formspree](https://formspree.io/) - A service for dealing with form submissions and sending you data, whilst also performing their own validation to protect you against spam (for example).

## Author

-  Website - [Joshua Jameson-Wallis](https://www.joshuajamesonwallis.com/)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)

#TODO:

1. Virtual DOM - what's the difference between virtual + real DOM? = variety of reasons, can't directly update HTML - real DOM directly updates/manipulate (obj based representation of the HTML document), if something updated - does a full repaint/refresh to showcase but the virtual DOM acts as a copy of real so can be updated/manipulated without refreshing at all, more of a pattern (built into + used in multiple frameworks), synced with real with react-dom | `diffing` - key difference, virtual DOM looks at difference between one vs the next state in the DOM + just updates that individual part (rather than entire page) | `is the virtual DOM different to the Shadow DOM?` - no, Shadow ... - not a pattern but a browser specific technology that is for specific type of els you don't need to code but can use for styling (ex: input slider won't need to write HTML for knob of slider moving - Shadow DOM used to update its css)

diff between React + React DOM - React creates + defines user-interfaces, ...DOM - dictates how these ui you design get added to DOM

2. React Limitations - a library not a framework, libraries enhance existing code + therefore lets you roam free - some people prefer stricter rules to how can write JS code, `Gatsby or Next.js` - if framework desired for React (need to write certain components in specific folders but still uses React) | React is fairly large - not bad if those stricter rules in place (but they're not), other options like `preact` - framework + uses same modern API but a bit smaller (same features) | owned by Facebook - maintained by larger company to make sure doesn't die, developers have salaries, open-source - but FB team being paid to produce free product for tech community, BAD - privacy issues, not trusting FB, transparency - big discisions being made internally (even though open source) | `Documentation` - mostly up to date, not touching on functional components as much as class based, re-writing on beta, non-linear structure + harder to navigate (steeper learning curve if no course to follow)
