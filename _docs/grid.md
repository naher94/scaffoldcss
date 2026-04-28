---
anchor: grid
nav_label: Grid
nav_section: Layout
sort: 10
---

<h2><a href="#{{ page.anchor }}">Grid</a></h2>

The `.scaffold-grid` class sets `display: grid` and a 12-column layout in one step. The equivalent `grid()` mixin produces the same output for use inside your own SCSS rules.

<div class="preview">
  <!-- <div class="preview-label">Preview — two halves</div> -->
  <div class="grid-demo">
    <div class="cell span-half"> .span-half </div>
    <div class="cell span-half"> .span-half </div>
  </div>
</div>

<div class="code-tabs">
  <div class="code-tab-bar">
    <button class="active">Utility class</button>
    <button>SCSS mixin</button>
  </div>
  <div class="code-tab-panel active" markdown="1">

```html
<div class="scaffold-grid">
  <div class="scaffold-grid-span-half">Left</div>
  <div class="scaffold-grid-span-half">Right</div>
</div>
```

  </div>
  <div class="code-tab-panel" markdown="1">

```scss
.my-layout {
  @include scaffold.grid();
}
.my-layout__item {
  @include scaffold.span(half);
}
```

  </div>
</div>

<h3 id="{{ page.anchor }}-overriding-columns"><a href="#{{ page.anchor }}-overriding-columns">Overriding column count</a></h3>

The `--scaffold-cols` custom property lets you change the column structure on a per-instance basis.

```html
<!-- Via custom property on the element -->
<div class="scaffold-grid" style="--scaffold-cols: repeat(8, 1fr)">...</div>
```

```scss
// Via mixin argument
.my-layout {
  @include scaffold.grid($cols: repeat(8, 1fr));
}
```

Every `.scaffold-grid` declares `--scaffold-cols` locally, so nested grids always reset to 12 columns and are unaffected by a parent's column override.
