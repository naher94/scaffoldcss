---
anchor: gap
nav_label: Gap
nav_section: Layout
sort: 14
---

<h2><a href="#{{ page.anchor }}">Gap</a></h2>

Gap utility classes map to three t-shirt sizes backed by custom properties, and work in both grid and flex contexts.

<div markdown="1">

| Class | Default value | Custom property |
|---|---|---|
| `.scaffold-gap-sm` | `0.5rem` | `--scaffold-gap-sm` |
| `.scaffold-gap-md` | `1rem` | `--scaffold-gap-md` |
| `.scaffold-gap-lg` | `2rem` | `--scaffold-gap-lg` |
{: .class-table}

</div>

<h3 id="{{ page.anchor }}-row-col"><a href="#{{ page.anchor }}-row-col">Independent row and column gap</a></h3>

```html
<!-- Tighter rows, wider columns -->
<div class="scaffold-grid" style="--scaffold-row-gap: 0.5rem; --scaffold-col-gap: 2rem">
  ...
</div>
```
