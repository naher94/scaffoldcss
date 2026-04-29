---
anchor: install
nav_label: Installation
nav_section: Getting started
sort: 3
---

<h2><a href="#{{ page.anchor }}">Installation</a></h2>

<h3 id="{{ page.anchor }}-using-scss"><a href="#{{ page.anchor }}-using-scss">Using SCSS</a></h3>

Copy the [`_sass/scaffold/`](https://github.com/naher94/scaffoldcss/tree/main/_sass/scaffold) folder into your project's `_sass/` directory, then import the entry point:

```scss
// your main stylesheet
@use 'scaffold/scaffold';
```

<h3 id="{{ page.anchor }}-using-compiled-css"><a href="#{{ page.anchor }}-using-compiled-css">Using compiled CSS</a></h3>

<!-- TODO add the link here -->
Copy the [compiled CSS]() directly into your project's directory if you don't need the SCSS mixins:

```html
<link rel="stylesheet" href="scaffold.css">
```

<h3 id="{{ page.anchor }}-whats-included"><a href="#{{ page.anchor }}-whats-included">What's included</a></h3>

Scaffold ships two artifacts: the compiled `dist/scaffold.css` for drop-in use, and the raw `_sass/scaffold/` source for projects that want to use the mixins or customize the token defaults.

If you use the SCSS route with mixins only and never reference utility classes in your HTML, the compiled output will be significantly smaller since only the mixins you actually call get included.

<h3 id="{{ page.anchor }}-file-structure"><a href="#{{ page.anchor }}-file-structure">Library file structure</a></h3>

```text
_sass/
  scaffold/
    _variables.scss   ← breakpoints, gap tokens, container width/padding
    _mixins.scss      ← all mixin definitions
    _grid.scss        ← .scaffold-grid, .scaffold-grid-span-*, .scaffold-gap-* + responsive variants
    _flex.scss        ← .scaffold-flex, direction, alignment classes + responsive variants
    scaffold.scss     ← .scaffold-container, .scaffold-container-full + @forward everything
dist/
  scaffold.css        ← compiled CSS for drop-in use
```
