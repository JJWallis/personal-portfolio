# Joshua Jameson-Wallis - Personal Portfolio

This is a solution to the [Minimalist portfolio website coding challenge](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G) on Frontend Mentor

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

JS:

---

Double vs triple equals = double compares just the value + auto-type converts to do this - str converted to num | triple compares its type + value | all with conditional equality (boolean returned)

Arr methods - map() = returns back new arr + original untouched | filter() = returns back new arr + original untouched, returns a boolean value + based off that modifies pre-existing arr values | reduce() = more powerful + complex actions, instead of chaining methods can do all logic within this, 1st param - accumilator (empty arr, zero, whatever) + 2nd each val in arr being iterated over

Undefined vs Null = undefined means value doesn't exist | null - intentional setting of this has yet to have a value (empty placeholder value) - use for readability + highlighting intent

Data types - primitive (boolean, str, nums, BigInt for big nums, Symbol for unique values) + non-primitive (objs, arrs, maps, sets)

Rest + Spread operators

Destructuring - readability for arrs (var names vs relying on order) + for objs if abbreviated original key names

Number problems - BigInt solves certain issues when dealing with big numbers | certain combo of decimal nums causing issues - relates to its binary conversion | Math.floor() + toFixed() help as well (precision important - dealing with money)

Promises - Promises and why might you use them/integrate into app? | https://jsonplaceholder.typicode.com/ | typically API calls + async code (vs synchronous) | RESTFUL services

Value vs Reference - pass by value (not a ref to original value) - when modified original isn't | Ref - passing ref to non-primitive type

Git - what is it + why use it + common commands? | branch - piece of code separate from main repo | different stages | adding commit msgs | pulling + pushing

Agile + Scrum = Scrum is a framework for developing and sustaining complex products, goal - actionable amount of work to learn form every sprit (two-week period of time) where we deliver some form of value, in sprit - standups at beginning of day (what's blocking us + help to un-block, what we're doing + did - keeping everyone aware + work flowing in right direction), team agreements about when something is 'ready' but can be opinionated (pulling things in + out when everyone agrees it makes sense), usually retrospective at end - reflect how team performed + what can be improved, plan at start - what tickets to take in + stay within same amount of work you've done in previous sprits | Agile - process for how software engineering teams are run, setting processes + procedures in there - Scrum common version of this

CSS - Selector differences | what is responsive design + how might you implement it? - having your website/app functional + appear correctly on any screen size/device | typical desktop, mobile, tablet (some watch size) | media-queries - keep track of width to change layout | sizing - rems, ems, %

Generics - how do you stay up to date?, orgs looking for passionate devs (blog, meetups)| why you? - bring something new (how differ to teammates - CSS animation guy vs other focused roles) | why us? | biggest professional achievement - can be anywhere (doesnt have to be technical) | why are you looking to leave your job?

Your questions - Any questions for me? - what team (size)/project working on? - shows interest in company + fellow employees, what code quality standards does the company follow? - git practices/flow, pushing straight to master (bad - having to fix in future - stressful) | what is the best part of working here? - exposes bad companies (if they struggle to answer question or think for too long, or paid on time) | why are you interested in hiring me? - exit question | Final statement - relating to your passion about working there, issues company is facing (so they remember you more)
