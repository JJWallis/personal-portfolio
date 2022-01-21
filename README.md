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

1. `what is a react hook` - let you use state and other React features without writing a class | provide a more direct API to the React concepts - props, state, context, lifecycle (offer a new powerful way to combine them) | re-using stateful logic without changing your component hierarchy - by default React doesn’t offer a way to “attach” reusable behavior to a component, render props + HOCs to solve (but involved re-structuring component tree + harder to follow therefore) | let you split one component into smaller functions based on what pieces are related (fetching data) - previously multiple pieces of logic would live in one component (fetching data alongside setting up/removing event listeners)

2. `What’s the difference between useState, useReducer and useContext, and when would you use each of them?` - `useState` - is a Hook that lets you add React state to function components, no 'this' var in func comps, declares a state variable + way to “preserve” some values between the function calls, arguments - initial state as only one (any type), return - pair of values (current state + func to update it) | `useReducer` - variants of the basic one + alternative to useState, arguments - reducer of type `(state, action) => newState` + initial state + 3rd init func (lazily load initial state - init(initialArg) - lets you extract the logic for calculating the initial state outside the reducer), returns the current state paired with a dispatch method, preferable when complex state involving multiple sub-values or when the next state depends on the previous one or intermingling with eachother, optimize performance for components that trigger deep updates - pass dispatch down instead of callbacks, guarantees dispatch function identity is stable - won’t change on re-renders, if return same value from a Reducer Hook as the current state - React will bail out without rendering the children or firing effects | `useContext` - accepts a context object (returned from React.createContext) + returns current context value for that context, determined by value prop of the nearest Provider (one which we pass in as argument), Provider updates - component using re-rendered with latest Context value passed to Provider (even if React.memo on it), only lets you read the context and subscribe to its changes

`Babel` - free and open-source JavaScript transcompiler | mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines | syntax wise via using plugins (without waiting for browser support) which are just functions converting newer syntax into older, can convert JSX syntax | `Polyfill` - piece of code used to provide modern functionality on older browsers that do not natively support it or address issues where browsers implement the same features in different ways |

`Autoprefixer` - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use (without you having to write them manually) | uses data based on current browser popularity and property support to apply prefixes for you | vendor prefixes - browser specific prefixes (Chrome: -webkit-, Firefox: -moz-), browser vendors sometimes add prefixes to experimental or nonstandard CSS properties and JavaScript APIs (so developers can experiment with new ideas + not being relied upon and then breaking web developers' code)

`Prettier` - opinionated code formatter | Supports many languages (TS, JSX, CSS, HTMl - hints as doesn't format if invalid) | intergrates with modern editors | formatted on save | no need to discuss style in code review - rc config file

`eslint` - static code analysis tool for identifying problematic patterns in JS | rules are configurable + can be customized (project specific) | covers both code quality and coding style issues | built into most text editors | most problems automatically fixed | ex: var is assigned a value but never used

`Webpack` - module bundler for modern JS apps | bundles JS files for usage in a browser - internally builds a dependency graph from one or more entry points + combines every module your project needs into one or more bundles (static assets to serve your content from) | supports many variations of modules - An ES2015 import statement, A CommonJS require() statement, An @import statement inside of a css/sass/less file |

5 key concepts - `Entry` = entry point indicates which module webpack should use to begin building out its internal dependency graph, figures out which other modules and libraries that entry point depends on (default val - index.js) | `output` - property tells webpack where to emit the bundles it creates and how to name these files, default val - ./dist/main.js | `loaders` - default only understands JS + JSON files, allows processing of other types of files + converting them into valid modules that can be consumed by your application and added to the dependency graph | `Plugins` - perform a wider range of tasks like bundle optimization, asset management and injection of environment variables, ex: html-webpack-plugin generates an HTML file for your application and automatically injects all your generated bundles into this file | `Mode` - 3 modes as development, production or none, can enable webpack's built-in optimizations that correspond to each environment |
