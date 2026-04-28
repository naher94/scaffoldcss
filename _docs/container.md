---
anchor: container
nav_label: Container
nav_section: Layout
sort: 13
---

<h2><a href="#{{ page.anchor }}">Container</a></h2>
<p>A max-width wrapper for centering content within a page. Available as <code>.scaffold-container</code> or the <code>container()</code> mixin. Configurable via custom properties.</p>

<div class="code-tabs">
  <div class="code-tab-bar">
    <button class="active">Utility class</button>
    <button>SCSS mixin</button>
  </div>
  <div class="code-tab-panel active">
{% highlight html %}
<div class="scaffold-container">
  <div class="scaffold-grid">...</div>
</div>
{% endhighlight %}
  </div>
  <div class="code-tab-panel">
{% highlight scss %}
.page-wrapper {
  @include scaffold.container();
}

// With a custom max-width
.page-wrapper--wide {
  @include scaffold.container($width: 1440px);
}
{% endhighlight %}
  </div>
</div>

<h3 id="{{ page.anchor }}-full-width"><a href="#{{ page.anchor }}-full-width">Full-width variant</a></h3>
<p><code>.scaffold-container-full</code> spans the entire viewport width while keeping side padding.</p>

<h3 id="{{ page.anchor }}-config"><a href="#{{ page.anchor }}-config">Configuring width and padding</a></h3>

{% highlight css %}
:root {
  --scaffold-container-width:      1440px;
  --scaffold-container-padding-sm: 1rem;
  --scaffold-container-padding:    2rem;
}
{% endhighlight %}
