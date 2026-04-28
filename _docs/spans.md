---
anchor: spans
nav_label: Span utilities
nav_section: Layout
sort: 11
---

<h2><a href="#{{ page.anchor }}">Grid span utilities</a></h2>
<p>Grid span classes define how many of the 12 columns a child element occupies. The <code>span()</code> mixin accepts the same semantic names as the utility classes.</p>

<div class="callout">
  <strong>Important</strong>
  Span utilities assume a 12-column grid. They output fixed <code>grid-column: span N</code> values. If you override <code>--scaffold-cols</code> on a grid, span utilities on that grid's direct children will no longer represent their named fractions — use explicit <code>grid-column</code> values instead.
</div>

<!-- <div markdown="1"> -->

| Class | Mixin | Columns | CSS output |
|---|---|---|---|
| `.scaffold-grid-span-full` | `span(full)` | 12 of 12 | `grid-column: 1 / -1` |
| `.scaffold-grid-span-half` | `span(half)` | 6 of 12 | `grid-column: span 6` |
| `.scaffold-grid-span-third` | `span(third)` | 4 of 12 | `grid-column: span 4` |
| `.scaffold-grid-span-two-thirds` | `span(two-thirds)` | 8 of 12 | `grid-column: span 8` |
| `.scaffold-grid-span-quarter` | `span(quarter)` | 3 of 12 | `grid-column: span 3` |
| `.scaffold-grid-span-three-quarters` | `span(three-quarters)` | 9 of 12 | `grid-column: span 9` |
{: .class-table}

<!-- </div> -->

<div class="preview">
  <div class="preview-label">Preview — all span variants</div>
  <div class="grid-demo" style="gap: 4px; row-gap: 6px;">
    <div class="cell span-full"></div>
    <div class="cell span-half"></div>
    <div class="cell span-half"></div>
    <div class="cell span-third"></div>
    <div class="cell span-third"></div>
    <div class="cell span-third"></div>
    <div class="cell span-quarter"></div>
    <div class="cell span-quarter"></div>
    <div class="cell span-quarter"></div>
    <div class="cell span-quarter"></div>
    <div class="cell span-two-thirds"></div>
    <div class="cell span-third"></div>
    <div class="cell span-three-quarters"></div>
    <div class="cell span-quarter"></div>
  </div>
</div>

<h3 id="{{ page.anchor }}-skip-spans"><a href="#{{ page.anchor }}-skip-spans">When to skip span utilities</a></h3>
<p>If all children in a grid are the same width, change the column count on the container — children flow into equal tracks automatically with no extra markup.</p>

{% highlight html %}
<!-- Without: span class on every child -->
<div class="scaffold-grid">
  <div class="scaffold-grid-span-third">...</div>
  <div class="scaffold-grid-span-third">...</div>
  <div class="scaffold-grid-span-third">...</div>
</div>

<!-- With: column count on the container -->
<div class="scaffold-grid" style="--scaffold-cols: repeat(3, 1fr)">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
{% endhighlight %}
