# Joshua Jameson-Wallis - Personal Portfolio

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
-  [Acknowledgments](#acknowledgments)

## Overview

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
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
   color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
   console.log('🎉')
}
```

### Continued development

### Useful resources

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

## Acknowledgments

###### TODO

HTML:

CSS:

Diff colour shades Sass map |

JS:

SVG animation - outline drawing | bounce effect | descendant class for button:hover to animate SVG | <g> | hmarbuegr animation - rotating both top line + middle ones fades out (opacity) - classic animation used for it to change into close cross icon

Design basics - design note

---

Linked list - multiple types (singular, doubly linked, circular linked + can be both double + circular at same time) | similar to arr as list of items - but instead of index values each item points to the next (doubly - points to next + previous item) | thats how you traverse it + know where you are | great for certian actions - inserting data is good (between two points + change their positions) but grabbing individual data is longer (vs specific index)

Binary tree - root node at top + every single node in tree can only have two children max | L + R directions/properties of each node pointing to child nodes (forms tree + contains childrens value) - how you traverse it | reversing/inverting + sorting -

Stack + Queue - very similar to one another | Stacks - like a stack of books (most recently read/taken book goes on top/taken from the top of pile - at end of stack) | LIFO - last in first out (push() + pop()) | Queues - like a queue in real life (opposite) - first out is front of line + when join go to back of queue- FIFO (first in first out) | methods - dequeue() for first out + take off front of queue (pop()) + enqueue() for first in + adding to back

Merge Sort algo - type of divide + conquer algo | large issue of sorting an array + divide into ever increasingly smaller subsets until bunch of small subsets of original values remain (middle line in img) | you then start conquering those subsets by combining them together over + over again until resulting in sorted arr | Quick Sort algo - few differences with performance (merge is quicker but requires more space - weigh both space + time complexity for importance)

Dictionary/Map/Hash Table = taking a key + converting to a value in some storage method | JS - could use an obj or map to show this | key mapping to a value - what we've doing this whole time

Graph - undirected + directed types of graph most common | diff - directed points you in direction you can go from one node to another (arrow directions) | undirected - uni-directional (two-way road from two connecting nodes) | vertices/nodes - places/destinations graph points to + will have some kind of identifyable value associated with them (numbers in circles) | edges - lines connecting one verticy/node to another that can also have values associated with them (ex: time length to reach it) | google maps ex - graph destination to destination (following bunch of edges that connect to verticies), edges would be roads + verticies as points where you can turn from one road to another (calculates most efficient route)

Binary search - efficient + commonly used (regarding web dev) | started with an array (must be sorted) | go to middle of arr - to determine which direction to go to (to find desired value) | img ex - 13 greater than 11 so goes right + cuts the array in half with all remaining items in that direction (hence binary name) | repeats the logic until finds desired value | chosen center starting point - if odd amount of numbers chooses one of the two center values

Depth first search (Top-Bottom in binary tree ex) - go as deep as possible first on one side (0-3) then up one level (3-1) + back to bottom again (1-4) + up to 0 again + back down to 6 (other side) etc | Breadth (opposite - deepest values last to be searched - L-R in binary tree ex) - go down one level (0-1) + searching all accross that horiztonal level (1 - 2) + then down to next one (2-3) + repeat for that horiztonal level (3-6) | performance differences not too noticable - but one more efficient that other based on problem

Memoization - fetching usecase (preventing bunch of server calls as cached result) | recursive func - cache the results so doesn't need to do much when calling itself with same inputs | outside of React - storing results in arr/var (conditionals to check each execution is value present there)

Recursion - func which calls itself over + over until eventually exits out of itself + goes all way down the stack | fibinachi sequence - takes prev two nums + adds together to get new num in sequence | n param - desired number, returns 1 if 1-2 inputted to provide starting point for sequence | if not - returns closest prev number (desired number - 1) plus second closest prev number (desired number - 2) + adds togther (call parent func to do this) |

Big O Notation - calculating time + space complexity of algo | figuring out amount of times performing an operation - n times (squared or in constant time being once)
