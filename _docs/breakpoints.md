---
anchor: breakpoints
nav_label: Breakpoints
nav_section: Reference
sort: 42
---

<h2><a href="#{{ page.anchor }}">Breakpoints</a></h2>

Scaffold exposes breakpoints in two ways: a `breakpoint()` SCSS mixin for use inside your own rules, and a mobile-first prefix convention for utility classes.

<h3 id="{{ page.anchor }}-defaults"><a href="#{{ page.anchor }}-defaults">Default breakpoints</a></h3>

```scss
$breakpoints: (
  sm:  640px,
  md:  768px,
  lg:  1024px,
  xl:  1280px,
);
```

<h3 id="{{ page.anchor }}-mixin"><a href="#{{ page.anchor }}-mixin">breakpoint() mixin</a></h3>

Scopes styles to a breakpoint using a named keyword and an optional direction. Defaults to `up` — styles apply from that breakpoint and wider. Use `down` for desktop-first thinking: `breakpoint(lg, down)` reads as "apply this on everything up until large."

```scss
.article {
  @include scaffold.span(full);
  @include scaffold.breakpoint(md) { @include scaffold.span(two-thirds); }
}
.sidebar {
  @include scaffold.breakpoint(md, down) { display: none; }
}
```

<h3 id="{{ page.anchor }}-responsive-classes"><a href="#{{ page.anchor }}-responsive-classes">Responsive utility classes</a></h3>

Unprefixed classes apply at all sizes; prefixed classes apply at that breakpoint and above.

```html
<!-- Full width by default, half at md and up -->
<div class="scaffold-grid-span-full md:scaffold-grid-span-half">...</div>

<!-- Stacked on mobile, row at md and up -->
<div class="scaffold-flex scaffold-flex-col md:scaffold-flex">...</div>
```
