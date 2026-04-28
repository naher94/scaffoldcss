---
anchor: custom-properties
nav_label: Custom properties
nav_section: Reference
sort: 41
---

<h2><a href="#{{ page.anchor }}">Custom properties</a></h2>

All configurable values are exposed as CSS custom properties. Override them in `:root` or scope them to a specific element.

<div markdown="1">

| Property | Default | Controls |
|---|---|---|
| `--scaffold-cols` | `repeat(12, 1fr)` | Grid column template |
| `--scaffold-gap` | `1rem` | Default grid/flex gap |
| `--scaffold-gap-sm` | `0.5rem` | `.gap-sm` value |
| `--scaffold-gap-md` | `1rem` | `.gap-md` value |
| `--scaffold-gap-lg` | `2rem` | `.gap-lg` value |
| `--scaffold-container-width` | `1280px` | Max container width |
| `--scaffold-container-padding-sm` | `1rem` | Container padding on mobile |
| `--scaffold-container-padding` | `1.5rem` | Container padding at md and up |
{: .class-table}

</div>
