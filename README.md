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

DOM (how structured) - interface between JS code + documents rendered by browser | very complex API containing lots of methods + props we use to interact with DOM tree | diff types of nodes - HTML els, text, white-space (important - how API organised behind scenes) | every single node in tree is of type `Node` represented by object - access to props (textContent), child types of node - `element` (classList, child HTMLELement type - including types for all kind of els like buttons), `text`, `comment`, `document` (all represented as objects) | `inheritance` - makes all this work as all child types have access to all props/methods of parent node types (Button element access to element) - object orientated concept | `document` - another type of node, querySelector() - method available on both this + element | EventTarget - special node type parent of `Node` + `Window` node types (add listeners on any type of node thanks to inheritance) | we never manually create an EventTarget object - happens behind scenes for our functionality

Event Propogation (propogating from one place to another) - capturing phase first (event goes down from document to target) + target phase happens when event handler fires + then bubbling phase happens (all way back up) | target + bubble phase - usual places to handle events (sometimes only target), can setup sometimes to only listen for capture phase

Value vs ref - how data types work with regards to functions (passing as args) | primitives - copy of its value (not original) | passing a non-primitive - reference to original data structure in memory HEAP (object wise - same when assigned new var to old one storing an obj - point to same obj!)

First-class functions (feature/concept programming language has or doesn't = all funcs are values) - first-class citizens | simply values (storing in vars, obj props as methods, args to other funcs as event handlers) | another 'type' of object - value itself, methods can call on it - bind() + call() | higher-order - these are present in practice + possible because funcs are first-class citizens (language supports it) | callback func – passed to higher-order as arg (called by it)

Closures - DEF - makes a func remember all vars that existed at time of original func birthplace | any func always has access to var environment of execution context where it was created (even when its gone - attatched to func forever) | bring major concepts together (scope chain + callstack + execution contexts) | don't create these manually - auto happens in certain situations | example - global execution context 1st runs + registers secureBooking func statement (bottom of callstack) | func executed - new execution context placed at top of callstack which includes var environment containing all local vars (also known as the scope chain of the function - access to all parent scopes including global scope) | executed func stored on booker var (global) when return statement fires - added to global execution context (bottom of callstack) | secureBooking execution context disappears from callstack (completed execution) - 1st img below | returned func from secureBooking func - still has access to this context (+ vars therefore) even when its gone | booker func (able to execute because func returned from secureBooking) | new execution context - empty variable environment (none declared) + located in global scope (closure is how it has access to passengerCount)

forEach() = method that executes a provided callback func once for each array element in ascending index order | params - element being processed, index, iterable itself called upon, undefined return value (not chainable) | doesn't mutate but callback func can | use when don't want returned arr

map() = method that creates a new array populated with the results of calling a provided callback function once in ascending index order on every element in the calling array (returned value added to returned arr each execution) | same params | does not mutate array - callback func can

reduce() = method that executes a user-supplied “reducer” callback func on each element of the array, in order, passing in the return value from the calculation on the preceding element | final returned result is a single value | The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise array element 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0) | callback func params (4) - last 3 same, 1st - previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0]. | 2nd parent param - optional initialValue | doesn't mutate - but callback func can

filter() = method that creates a new array with all elements that pass the test implemented by the provided function (keep/add or discard) in ascending index order | params - same | returned new array with the elements that pass the test (If none - empty array) | doesn't mutate arr

find() = method returns the value of the first element in the provided array that satisfies the provided testing function (undefined if none) in ascending index order + func executed once of each el | indexOf - to find index of that value (diff with findIndex() - checks each element for equality with the value instead of using a testing function (same func provided to fitler())) | params - same | doesn't mutate - callback func can

includes() = method that determines whether an array includes a certain value among its entries, returning true or false as appropriate | params - value to search for + optional starting index

join() = method that creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string (empty str if 0 length) | If array has only one item, then that item will be returned without using the separator | param - separator (optional) - string to separate each pair of adjacent elements of the array (comma if omitted)

pop() = removes the last element from an array and returns that element

push() = adds one or more elements to the end of an array and returns the new length of the array

slice() = returns a shallow copy of a portion of an array (new arr containing extracted els) into a new array object selected from start to end (end not included) where start and end represent the index of items in that array | doesn't mutate original | params - optional start + end indexes

splice() = method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place | if last param not provided - just removes els from arr | returns arr containing deleted els

sort () = method sorts the elements of an array in place and returns the sorted array (not a copy) | ascending order + built upon converting the elements into strings + comparing their sequences of UTF-16 code units values | params - compareFunc defining sort order (logic to use), first el, second el (both for comparison purposes)

Number conversion + checking - always floating point (even if int - 23 === 23.0) | base 10 system = 0-9 (what we're used to) + nums in JS use base 2 = 0-1 (binary), issue = certain nums hard to represent (0.1 - 0.1 + 0.2 = 0.300...4 but should be 0.3), sometimes rounding auto happens to hide this | 0.1 + 0.2 === 0.3 (false but should be true) | Number obj/func - parsing methods on this (nums from strings), 2nd optional argument - base number of system using (always pass in 10 to avoid some bugs), parseInt`('30', 10)` | Number.isNaN('20' or '20/0') = false (Inifnity + str are regular values - therefore not NaN) - why not perfect | Number.isFinite() = returns true is value passed is finite (neither positive Infinity, negative Infinity, nor NaN), doesn't convert param to number (checks it's of type Number), onyl finite values of the type number return true | Number.isInteger - valid too | (2.7).toFixed(0) = 3 (rounding decimals, returns a str, 2nd arg - amount of decimal places to return)

`BigInt` = primitive data type, special type introduced in ES2020 | used to store nums as large as desired (not limit) + accurately | 340444494848440344034n - 'n' at end represents a BigInt | nums represented in 64 bits - 64 1/0's to represent a number, only 53 used to store digits themselves - rest for storing position of decimal point + the sign, limit therefore for how big nums can be (Number.MAX_SAFE_INTEGER = largest num JS can safely represent, any larger cannot be accurately represented) | issues - database ID's dynamically generate (or from an API - we had no way of storing it until now...) | not possible to mix bigint with regular nums in operations (runtime error - must convert both to `BigInt(...)` - using constructor func), exceptions - comparisons (is bigInt num greater than regular) + plus operators when working with strs ()
