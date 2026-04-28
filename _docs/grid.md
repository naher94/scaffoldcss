---
anchor: grid
nav_label: Grid
nav_section: Layout
sort: 10
---

<h2><a href="#{{ page.anchor }}">Grid</a></h2>
<p>The <code>.scaffold-grid</code> class sets <code>display: grid</code> and a 12-column layout in one step. The equivalent <code>grid()</code> mixin produces the same output for use inside your own SCSS rules.</p>

<div class="code-tabs">
  <div class="code-tab-bar">
    <button class="active">Utility class</button>
    <button>SCSS mixin</button>
  </div>
  <div class="code-tab-panel active">
{% highlight html %}
<div class="scaffold-grid">
  <div class="scaffold-grid-span-half">Left</div>
  <div class="scaffold-grid-span-half">Right</div>
</div>
{% endhighlight %}
  </div>
  <div class="code-tab-panel">
{% highlight scss %}
.my-layout {
  @include scaffold.grid();
}
.my-layout__item {
  @include scaffold.span(half);
}
{% endhighlight %}
  </div>
</div>

<div class="preview">
  <div class="preview-label">Preview — two halves</div>
  <div class="grid-demo">
    <div class="cell span-half"></div>
    <div class="cell span-half"></div>
  </div>
</div>

<h3 id="{{ page.anchor }}-overriding-columns"><a href="#{{ page.anchor }}-overriding-columns">Overriding column count</a></h3>
<p>The <code>--scaffold-cols</code> custom property lets you change the column structure on a per-instance basis.</p>

{% highlight html %}
<!-- Via custom property on the element -->
<div class="scaffold-grid" style="--scaffold-cols: repeat(8, 1fr)">...</div>
{% endhighlight %}

{% highlight scss %}
// Via mixin argument
.my-layout {
  @include scaffold.grid($cols: repeat(8, 1fr));
}
{% endhighlight %}

<p>Every <code>.scaffold-grid</code> declares <code>--scaffold-cols</code> locally, so nested grids always reset to 12 columns and are unaffected by a parent's column override.</p>
