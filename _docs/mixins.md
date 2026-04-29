---
anchor: mixins
nav_label: Mixins
nav_section: Reference
sort: 43
---

<h2><a href="#{{ page.anchor }}">Mixins</a></h2>

Every utility class in Scaffold is generated from a corresponding SCSS mixin. Use mixins when you want Scaffold's layout logic inside your own semantic class names.

```scss
@use 'scaffold/scaffold' as scaffold;
```

<hr class="divider">

<h3 id="mixin-grid"><a href="#mixin-grid">grid()</a></h3>

Sets up a 12-column grid container.

```scss
.page-grid    { @include scaffold.grid(); }
.sidebar-grid { @include scaffold.grid($cols: repeat(4, 1fr)); }
.tight-grid   { @include scaffold.grid($gap: 0.5rem); }
```

<h3 id="mixin-span"><a href="#mixin-span">span()</a></h3>

Sets `grid-column` on a grid child.

```scss
// Accepted values: full | half | third | two-thirds | quarter | three-quarters
.article { @include scaffold.span(two-thirds); }
.sidebar { @include scaffold.span(third); }
```

<h3 id="mixin-flex"><a href="#mixin-flex">flex()</a></h3>

Sets up a flex container. All arguments are optional.

```scss
.nav-bar    { @include scaffold.flex(); }
.card-stack { @include scaffold.flex($direction: column, $wrap: nowrap); }
```

<h3 id="mixin-container"><a href="#mixin-container">container()</a></h3>

Creates a centered max-width wrapper. Pass `$full: true` for the full-width variant.

```scss
.page         { @include scaffold.container(); }
.page--narrow { @include scaffold.container($width: 720px); }
.page--full   { @include scaffold.container($full: true); }
```

<h3 id="mixin-breakpoint"><a href="#mixin-breakpoint">breakpoint()</a></h3>

Wraps content in a media query. Supports mobile-first (up, default) and desktop-first (down).

```scss
.article {
  @include scaffold.span(full);
  @include scaffold.breakpoint(md) { @include scaffold.span(two-thirds); }
}
.sidebar {
  @include scaffold.breakpoint(md, down) { display: none; }
}
```
