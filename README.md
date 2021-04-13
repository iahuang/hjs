# H.js

Declarative HTML syntax in Javascript

## Getting Started

You can find the following files in the `build/` folder of this repository:

```
h.js        - A development build of H.js
h.min.js    - A minified production build of H.js
h.d.ts      - Typescript bindings for H.js
```

Alternatively, you can use this CDN link:

`https://cdn.jsdelivr.net/gh/iahuang/hjs/build/h.min.js`

## What is H.js?

H.js adds a single global variable called `H` to your project. The best way to describe what H.js does is to show an example of its use:

```js
let el = H.div({ class: "big-text" })(
    H.span("Some text!"),
    H.button({
        onclick: (ev) => {
            console.log("clicked!");
        },
    })("Press me!")
);
```

As you can see, H.js is a way to include HTML syntax directly into your code. As web apps increase in complexity, the structure of your HTML and the supporting Javascript code become more and more intertwined. Here are a variety of other solutions for describing HTML elements in Javascript code, and the pros and cons of using them.

### Vanilla JS/Template Strings

```js
let template = `
<div class="some-text">
    message: $$MESSAGE
</div>
`;

element.innerHTML = template.replace("$$MESSAGE", "Hi there!");
```

Problems:

-   Template strings are ugly and lack syntax highlighting and editor features such as autocomplete and autoformatting
-   No access to the underlying elements inside the template string
-   Template strings break indentation in the code

### `<template>`

```html
<template id="my-template">
    <div class="some-text"></div>
</template>
```

```js
let el = document.querySelector("#my-template").content.cloneNode(true);
el.querySelector(".some-text").innerText = "message: Hi there!;

someElement.appendChild(el);
```

Problems:

-   Lots of boilerplate code
-   Heavy use of `querySelector` and other manual DOM manipulation functions
-   Function of JS code is unclear without first seeing the corresponding HTML template

### React.js

```jsx
let message = "Hi there!";
let el = <div class="some-text">message: {message}</div>;
```

This code is good, however the use of JSX syntax requires extra preprocessors and bundlers such as Webpack. For larger projects, this is fine, but in the case that you want to make a simple user interface with only a couple dozen lines of code, having to set up an entire React project might be a bit of a headache.

## H.js / Documentation

H.js is a simple library that fills the gap between `.replace`ing HTML template strings and installing gigabytes worth of `node_modules` just to display some text on your screen. H.js allows you to write declarative Javascript code that mimics the look and feel of HTML while allowing for better integration and control of your layouts, all with minimal setup and effort.

In essence, H.js just adds syntactical sugar to the `document.createElement` method. H.js' provides element builder functions such as `H.div`, `H.img`, `H.span` and so on, for almost every [standard HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) that, when called, return native DOM objects that can be manipulated as you would expect. 

### Syntax

The syntax of these functions looks like this:

```js
// implied that there are no attributes, only content
let aDivElement = H.div("child1", "child2")
```

```js
// explicitly defines both attributes and content
let aDivElement = H.div({class: "className", attr2: value, attr3: value})(
    "child1",
    "child2"
)
```

```js
// implied that there is no content, only attributes
let aDivElement = H.div({class: "className});
```

```js
// implied that there is neither attributes nor content
let aDivElement = H.div()
```

## License

This project is licensed under the terms of the MIT license. This means you are free to modify and distribute this library for both commercial and non-commerical use. More information can be found in the `LICENSE` file of this repository.