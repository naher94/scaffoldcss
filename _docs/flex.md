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

<h3 id="{{ page.anchor }}-justify"><a href="#{{ page.anchor }}-justify">Justify content <span class="tag tag-align">grid &amp; flex</span></a></h3>

Controls how children are distributed along the main axis, parallel to the flex direction. Since `scaffold-flex` defaults to row, that means horizontal distribution, as shown in the previews. The same classes apply in column layouts too.

<table class="class-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
      <th>Preview</th>
      <th>CSS output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.scaffold-justify-start</code></td>
      <td>Pack items to start</td>
      <td><div class="mini-preview flex-justify-mini" style="justify-content: flex-start;"><div></div><div></div><div></div></div></td>
      <td><code>justify-content: flex-start</code></td>
    </tr>
    <tr>
      <td><code>.scaffold-justify-center</code></td>
      <td>Center items</td>
      <td><div class="mini-preview flex-justify-mini" style="justify-content: center;"><div></div><div></div><div></div></div></td>
      <td><code>justify-content: center</code></td>
    </tr>
    <tr>
      <td><code>.scaffold-justify-end</code></td>
      <td>Pack items to end</td>
      <td><div class="mini-preview flex-justify-mini" style="justify-content: flex-end;"><div></div><div></div><div></div></div></td>
      <td><code>justify-content: flex-end</code></td>
    </tr>
    <tr>
      <td><code>.scaffold-justify-between</code></td>
      <td>Space between items</td>
      <td><div class="mini-preview flex-justify-mini" style="justify-content: space-between;"><div></div><div></div><div></div></div></td>
      <td><code>justify-content: space-between</code></td>
    </tr>
    <tr>
      <td><code>.scaffold-justify-around</code></td>
      <td>Space around items</td>
      <td><div class="mini-preview flex-justify-mini" style="justify-content: space-around;"><div></div><div></div><div></div></div></td>
      <td><code>justify-content: space-around</code></td>
    </tr>
  </tbody>
</table>

<h3 id="{{ page.anchor }}-align-items"><a href="#{{ page.anchor }}-align-items">Align items <span class="tag tag-align">grid &amp; flex</span></a></h3>

Controls how all children align on the cross axis, perpendicular to the flex direction. Since `scaffold-flex` defaults to row, that means vertical alignment, as shown in the previews. The same classes apply in column layouts too.

<table class="class-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
      <th>Preview</th>
      <th>CSS output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.scaffold-items-start</code></td>
      <td>Align children to start</td>
      <td><div class="mini-preview flex-align-items-mini" style="align-items: flex-start;"><div style="height: 45%;"></div><div style="height: 80%;"></div><div style="height: 60%;"></div></div></td>
      <td><code>align-items: flex-start</code></td>
    </tr>
    <tr>
      <td><code>.scaffold-items-center</code></td>
      <td>Align children to center</td>
      <td><div class="mini-preview flex-align-items-mini" style="align-items: center;"><div style="height: 45%;"></div><div style="height: 80%;"></div><div style="height: 60%;"></div></div></td>
      <td><code>align-items: center</code></td>
    </tr>
    <tr>
      <td><code>.scaffold-items-end</code></td>
      <td>Align children to end</td>
      <td><div class="mini-preview flex-align-items-mini" style="align-items: flex-end;"><div style="height: 45%;"></div><div style="height: 80%;"></div><div style="height: 60%;"></div></div></td>
      <td><code>align-items: flex-end</code></td>
    </tr>
    <tr>
      <td><code>.scaffold-items-stretch</code></td>
      <td>Stretch children to fill</td>
      <td><div class="mini-preview flex-align-items-mini" style="align-items: stretch;"><div></div><div></div><div></div></div></td>
      <td><code>align-items: stretch</code></td>
    </tr>
  </tbody>
</table>

<h3 id="{{ page.anchor }}-align-self"><a href="#{{ page.anchor }}-align-self">Align self <span class="tag tag-align">grid &amp; flex</span></a></h3>

Applies to individual children for one-off exceptions to the container's `align-items` value.

<table class="class-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
      <th>Preview</th>
      <th>CSS output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.scaffold-self-start</code></td>
      <td>Align self to start</td>
      <td><div class="mini-preview flex-align-self-mini"><div class="fasm-side"></div><div style="align-self: flex-start;"></div><div class="fasm-side"></div></div></td>
      <td><code>align-self: flex-start</code></td>
    </tr>
    <tr>
      <td><code>.scaffold-self-center</code></td>
      <td>Align self to center</td>
      <td><div class="mini-preview flex-align-self-mini"><div class="fasm-side"></div><div style="align-self: center;"></div><div class="fasm-side"></div></div></td>
      <td><code>align-self: center</code></td>
    </tr>
    <tr>
      <td><code>.scaffold-self-end</code></td>
      <td>Align self to end</td>
      <td><div class="mini-preview flex-align-self-mini"><div class="fasm-side"></div><div style="align-self: flex-end;"></div><div class="fasm-side"></div></div></td>
      <td><code>align-self: flex-end</code></td>
    </tr>
    <tr>
      <td><code>.scaffold-self-stretch</code></td>
      <td>Stretch self to fill</td>
      <td><div class="mini-preview flex-align-self-mini"><div class="fasm-side"></div><div style="align-self: stretch;"></div><div class="fasm-side"></div></div></td>
      <td><code>align-self: stretch</code></td>
    </tr>
  </tbody>
</table>

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
