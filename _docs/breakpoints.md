---
anchor: breakpoints
nav_label: Breakpoints
nav_section: Utilities
sort: 21
---

<h2><a href="#{{ page.anchor }}">Breakpoints</a></h2>

Breakpoints are exposed as a SCSS mixin. Responsive utility classes use a mobile-first prefix convention.

<h3 id="{{ page.anchor }}-defaults"><a href="#{{ page.anchor }}-defaults">Default breakpoints</a></h3>

```scss
$breakpoints: (
  sm:  640px,
  md:  768px,
  lg:  1024px,
  xl:  1280px,
);
```

<h3 id="{{ page.anchor }}-responsive-classes"><a href="#{{ page.anchor }}-responsive-classes">Responsive utility classes</a></h3>

Unprefixed classes apply at all sizes; prefixed classes apply at that breakpoint and above.

```html
<!-- Full width by default, half at md and up -->
<div class="scaffold-grid-span-full md:scaffold-grid-span-half">...</div>

<!-- Stacked on mobile, row at md and up -->
<div class="scaffold-flex scaffold-flex-col md:scaffold-flex">...</div>
```
