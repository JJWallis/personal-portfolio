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

-  [Formspree](https://formspree.io/) - An incredibly useful service for dealing with form submissions and sending you the data, whilst performing their own validation to protect you against spam.

## Author

-  Website - [Joshua Jameson-Wallis](https://www.joshuajamesonwallis.com/)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)

######TODO

OOP - programming paradigm (style + how we organise code) based on the concept of objects (to describe aspects of the real world) | can contain data (props) + code (methods) - pack all data + behaviour into 1 big block (easier to maintain vs spaghetti code) | objects - self-contained blocks of code + used as building blocks of app + interact with one another (through public interface/API - methods outside obj can access to communicate with obj itself)

OOP 2 - Classes are a blueprint/plan to create objs off of (not an obj itself) | instance - real obj created from the class (instantiation) | 4 fundamental principles for designing classes - `abstraction` = hide details that don't matter, better overview of logic implementing (DOM API design - don't need to know how event listener works behind scenes can just use it) | `encapsulation` = keep some props + methods private inside Class (not accessible from outside - password but still available internally for logic method),prevents external code manipulating internal data, some can be exposed through Public API | `inheritance` - 2 classes closely related - one can inherit from the other (child class extending parent - inherits props + methods), avoiding duplicate code (re-using logic common in both classes - both admin + user needs to login) | `Polymorphism` - a child class can overwrite a method it inherited from a parent class, write new method which matches inherited name - overwritten (more secure login method for admin)

OOP in JS - works slightly differently | prototypes - each obj linked to a prototype obj (each has its own) | prototype obj - contains props + methods that all other objs linked to it can use (`prototypal inheritance`) - inherited from them (diff to Classes inheriting from other Classes - instance inheriting from a Class here) | objs delegate behaviour (methods) to the linked prototype obj (`delegation`) - with Classes copied to instances (opposite - 1st img below) | ex: Array.prototype.map = prototype obj of all arrays we create, access to same methods + props (inherits from these - defined not on array itself but its prototype) | how do we create prototypes + link objs to them + create new objs without having classes? | 3 methods:

`constructor functions + new operator` - creating objects using function + sets new obj prototype | how OOP is implemented in JS since beginning | constructor - normal function (diff - called with new operator) | capital 1st letter naming convetion | arrow func can't be used - no 'this' keyword (which we need) | new operator - 4 steps when used = 1st - empty obj created (still an instance of original constructor - instanceof operator to verify - 2nd img below), 2 - func called + this keyword set/bound to newly created obj from constructor, 3. - newly created obj linked to a prototype (`__proto__` prop created + linked - next paragraph), 4. - newly created obj returned from constructor function (with values pass into func call - base props defined with 'this') - 1st img below | never create a method inside a constructor function - each obj user would carry it around + would need to generate it every time (terrible performance) = solution is prototypes + prototypal inheritance (only need to generate once)...

Prototypes - prop on every func (including constructors), every obj from constructor auto access to defined props/methods on constructor | `Person.prototype` - prototype for all obj users + not Person constructor itself (can confirm - `objUser.__proto__` prop on each user - shows all props + methods available + is === Person.prototype) | `Person.prototype.calcAge = function(){this.blahBlah...}` vs not writing method directly in constructor (not present in any obj user of constructor but can still access via prototypal inheritance - copy of method doesn't need to be generated for each user but only once - 'this' keyword within points to obj calling method aka each user can use it on itself) | new operator links this obj user prototype to constructors (creating `__proto__` prop + sets value to prototype prop of constructor func being called) - step 3 | can set properties on prototype too = `Person.prototype.propName = '...'` (but like methods doing so means they're not visible on obj users - only `own` props originally declared on constructor are visible/attatched)

`Prototypal inheritance` = when prop/method can't be found on obj user - looks to prototype for it | `Person.prototype.constructor` - live connection back to constructor via this prop | `Prototype chain` - the fact that obj user connected to a prototype (through this chain) + its ability to look up props/methods there | chain doesn't stop here - `Person.prototype` is itself an obj + therefore has its own prototype (`Object.prototype` - because built from Object() constructor function - used whenever we create an object literal - represents top of chain + there Object.prototype prop = `null`) | similar to scope chain - looks `up` to see if can find var there if can't find in current block | `Array.prototype`

`ES6 Classes` = modern way of doing OOP, syntatic sugar over constructor functions - work exactly same way (using prototypal inheritance) | methods within Class - on prototypes of obj (not directly visible - same as b4) | not hoisted | first-class citizens - pass them into funcs + return them from funcs | Classes always executed in strict mode

`Object.create()` - easiest way of linking obj to prototype obj | not as common | different to constructors + classes | we manually set the prototype of 1 obj to any other desired | create obj to be prototype 1st - simple obj literal, include re-usable props + methods to inherit, `const steven = Object.create(prototypeObjName)` - brand new obj linked to prototype passed in (through `__proto__` prop) | `steven.__proto__` = new blank obj created from prototype (manually create your own constructor to fill in props - even though nothing to do with constructors in general - 2nd img below)

Allowing inheritance between two diff constructor funcs = Object.create() to manually do this (what it does) | `Student.prototype = Object.create(Person.prototype)` | `Student.prototype = Person.prototype` = wrong as points to same obj (not inheriting from it)
