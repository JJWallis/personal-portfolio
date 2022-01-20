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

3. JSX - short for `Javascript XML` | allows you to write Javascript with an HTML like template syntax inside JS | not writing HTML | produces els that represent objs | `What is the difference between an element and a component` - an element is something which is created by JSX as a JS object (div) | a component - func which returns an element | `can you write React without JSX?` - you can, can use React.createElement() everywhere,
   `const Component = () => React.createElement('div', null, 'Hellllooooo!')` vs `const Component = () => <div>Hellloooo!</div>`

4. Props - `How do you pass a value from parent to child?` - via props, component takes a value + pass down via props | `What about child to parent?` - pass a func prop (callback) from parent to child via props, child calls with local value passed up to parent as an argument to that func | `What is prop drilling?` - drilling props down a bunch of diff components, grandparent through multiple nested children, passing props via multiple levels | `Can you modify props` - readonly, can't change, could if its a state var (but still ties in to concept of...), all React components must act like pure components with respect to their props (always return same result for same inputs)

5. State & Lifecycle - `what is the difference between props and state?` = both props + state are plain JS objects, both hold data which influences what will be rendered | props get passed to component + state is managed within a component (like vars scoped to that func) | state is not something able to access outside component unless passed with props | `difference between state in a func + class component` - this.getState, state is attatched to a class obj, component in a React class is an obj + state persists accross that component (like an obj), in a func component - recalled multiple times, func component isn't an object that persists over time or manipulat but recalled every single time state changes | `What is the component lifecycle` - and diff parts of it, state controls this, 3 main parts with specific funcs to be aware of - `mounting` (render(), componentDidMount() - called when component mounted + printed to page), `updating` (render() + componentDidUpdate() - funcs run whenever component updated due to state change) + `unmounting` (componentWillUnMount() - when about to go away - event listener removed when done this) | `how do you update the lifecycle in functional components?` - useEffect() hook (flexible - covers all lifeCycle methods in concise manner)

6. Effects - `what parameters does useEffect take in` = 2 main ones, 1st - effect func (to be executed), 2nd - dependency arr (determines when that will be run) | `when does the useEffect() func run` - empty arr (onMount), 1 var arr (onMount + when var changes), no arr (onMount + every state change) | `What is useEffect() func param return value` - cleanup func cleans up everything that had to exist when component first put on page + something updated, event listeners, fetch cancellations, component is about to unmount + func called ()

7. Refs - `What is the difference between refs + state vars?` = both objs that can contain values, state can cause re-render but refs dont, persists accross renders, hold on to data you can use | `When is the best time to use refs?` - when setting outside of React, advise to not over-use, managing focus (most of time) or media, triggering animations (instead of state driven), integrating with DOM libraries - need to be able to attatch themselves to some kind of DOM el (nothing to grab onto with React's virtual DOM by default) | `What is the proper way to update a ref in a func component?` - useEffect()

8. Context - `What is the difference between the Context API and prop drilling?` = prop drilling for explicitly stating props + values that a given child component can get, explicitly passing from component to component, know exactly where certain values are being passed | context implicitly states what values a given child component can have, define + top-level + put values in there, any component in tree within given context at top has access to those values, can cause unecessary rerenders | `When shouldn't you use the Context API?` - shouldn't overuse it, only put what's absolutely necessary at top of app with context, props perfectly viable method to sharing state values + refs + data components need, usecases - theme, user session,

9. Other = `What is a fragment` - container to hold onto different elements, within React can only return one element at a time (multiple - wrapped inside div before but that's why fragment created since doesn't produce anything in the DOM + guarentees only returning one single thing) | `When should you use a Class based component vs a func component` -
