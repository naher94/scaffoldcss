---
anchor: container
nav_label: Container
nav_section: Layout
sort: 13
---

<h2><a href="#{{ page.anchor }}">Container</a></h2>

A max-width wrapper for centering content within a page. Available as `.scaffold-container` or the `container()` mixin. Configurable via custom properties.

<div class="code-tabs">
  <div class="code-tab-bar">
    <button class="active">Utility class</button>
    <button>SCSS mixin</button>
  </div>
  <div class="code-tab-panel active" markdown="1">

```html
<div class="scaffold-container">
  <div class="scaffold-grid">...</div>
</div>
```

  </div>
  <div class="code-tab-panel" markdown="1">

```scss
.page-wrapper {
  @include scaffold.container();
}

// With a custom max-width
.page-wrapper--wide {
  @include scaffold.container($width: 1440px);
}
```

  </div>
</div>

<h3 id="{{ page.anchor }}-full-width"><a href="#{{ page.anchor }}-full-width">Full-width variant</a></h3>

`.scaffold-container-full` spans the entire viewport width while keeping side padding.

<h3 id="{{ page.anchor }}-config"><a href="#{{ page.anchor }}-config">Configuring width and padding</a></h3>

```css
:root {
  --scaffold-container-width:      1440px;
  --scaffold-container-padding-sm: 1rem;
  --scaffold-container-padding:    2rem;
}
```
