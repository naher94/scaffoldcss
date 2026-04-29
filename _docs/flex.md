---
anchor: flex
nav_label: Flex
nav_section: Layout
sort: 12
---

<h2><a href="#{{ page.anchor }}">Flex</a></h2>

A layout layer for single-axis layouts, component-level alignment, and inline groupings. Available as both utility classes and the `flex()` mixin.

<div class="code-tabs">
  <div class="code-tab-bar">
    <button class="active">Utility class</button>
    <button>SCSS mixin</button>
  </div>
  <div class="code-tab-panel active" markdown="1">

```html
<div class="scaffold-flex scaffold-flex-col scaffold-gap-sm">
  <div>Item one</div>
  <div>Item two</div>
</div>
```

  </div>
  <div class="code-tab-panel" markdown="1">

```scss
.my-stack {
  @include scaffold.flex($direction: column);
  gap: var(--scaffold-gap-sm);
}
```

  </div>
</div>

<h3 id="{{ page.anchor }}-direction"><a href="#{{ page.anchor }}-direction">Direction modifiers <span class="tag tag-flex">flex</span></a></h3>

<div markdown="1">

| Class | Mixin | CSS output |
|---|---|---|
| `.scaffold-flex` | `flex()` | `display: flex; flex-wrap: wrap; flex-direction: row` |
| `.scaffold-flex-col` | `flex($direction: column)` | `flex-direction: column` |
| `.scaffold-flex-nowrap` | `flex($wrap: nowrap)` | `flex-wrap: nowrap` |
{: .class-table}

</div>

<h3 id="{{ page.anchor }}-align-items"><a href="#{{ page.anchor }}-align-items">Align items <span class="tag tag-align">grid &amp; flex</span></a></h3>

<div markdown="1">

| Class | CSS output |
|---|---|
| `.scaffold-items-start` | `align-items: flex-start` |
| `.scaffold-items-center` | `align-items: center` |
| `.scaffold-items-end` | `align-items: flex-end` |
| `.scaffold-items-stretch` | `align-items: stretch` |
{: .class-table}

</div>

<h3 id="{{ page.anchor }}-justify"><a href="#{{ page.anchor }}-justify">Justify content <span class="tag tag-align">grid &amp; flex</span></a></h3>

<div markdown="1">

| Class | CSS output |
|---|---|
| `.scaffold-justify-start` | `justify-content: flex-start` |
| `.scaffold-justify-center` | `justify-content: center` |
| `.scaffold-justify-end` | `justify-content: flex-end` |
| `.scaffold-justify-between` | `justify-content: space-between` |
| `.scaffold-justify-around` | `justify-content: space-around` |
{: .class-table}

</div>

<h3 id="{{ page.anchor }}-align-self"><a href="#{{ page.anchor }}-align-self">Align self <span class="tag tag-align">grid &amp; flex</span></a></h3>

Applies to individual children for one-off exceptions to the container's `align-items` value.

<div markdown="1">

| Class | CSS output |
|---|---|
| `.scaffold-self-start` | `align-self: flex-start` |
| `.scaffold-self-center` | `align-self: center` |
| `.scaffold-self-end` | `align-self: flex-end` |
| `.scaffold-self-stretch` | `align-self: stretch` |
{: .class-table}

</div>

<h3 id="{{ page.anchor }}-intrinsic"><a href="#{{ page.anchor }}-intrinsic">Proportional flex items</a></h3>

`.scaffold-flex-intrinsic` is a child utility for proportional side-by-side layouts. Set `--aspect-ratio` to width ÷ height on each item.

<div class="preview">
  <div style="display: flex; flex-wrap: nowrap; gap: 4px;">
    <div style="flex: calc(600/900); min-width: 0;">
      <img src="https://placehold.co/600x900" style="display: block; width: 100%; border-radius: var(--radius);">
    </div>
    <div style="flex: calc(1200/800); min-width: 0;">
      <img src="https://placehold.co/1200x800" style="display: block; width: 100%; border-radius: var(--radius);">
    </div>
    <div style="flex: calc(800/800); min-width: 0;">
      <img src="https://placehold.co/800x800" style="display: block; width: 100%; border-radius: var(--radius);">
    </div>
  </div>
</div>

```html
<div class="scaffold-flex">
  <div class="scaffold-flex-intrinsic" style="--aspect-ratio: calc(600/900)">
    <img src="portrait.jpg">
  </div>
  <div class="scaffold-flex-intrinsic" style="--aspect-ratio: calc(1200/800)">
    <img src="landscape.jpg">
  </div>
</div>
```
