---
anchor: class-reference
nav_label: Class reference
nav_section: Reference
sort: 40
---

<h2><a href="#{{ page.anchor }}">Class reference</a></h2>

<h3 id="{{ page.anchor }}-grid"><a href="#{{ page.anchor }}-grid">Grid <span class="tag tag-grid">grid</span></a></h3>

| Class | Mixin | Description | CSS |
|---|---|---|---|
| `.scaffold-grid` | `scaffold.grid()` | 12-column grid container | `display: grid; grid-template-columns: repeat(12, 1fr)` |
| `.scaffold-grid-span-full` | `scaffold.span(full)` | All 12 columns | `grid-column: 1 / -1` |
| `.scaffold-grid-span-half` | `scaffold.span(half)` | 6 columns | `grid-column: span 6` |
| `.scaffold-grid-span-third` | `scaffold.span(third)` | 4 columns | `grid-column: span 4` |
| `.scaffold-grid-span-two-thirds` | `scaffold.span(two-thirds)` | 8 columns | `grid-column: span 8` |
| `.scaffold-grid-span-quarter` | `scaffold.span(quarter)` | 3 columns | `grid-column: span 3` |
| `.scaffold-grid-span-three-quarters` | `scaffold.span(three-quarters)` | 9 columns | `grid-column: span 9` |
{: .class-table}

<h3 id="{{ page.anchor }}-flex"><a href="#{{ page.anchor }}-flex">Flex <span class="tag tag-flex">flex</span></a></h3>

| Class | Mixin | Description | CSS |
|---|---|---|---|
| `.scaffold-flex` | `scaffold.flex()` | Row flex container, wrapping | `display: flex; flex-wrap: wrap` |
| `.scaffold-flex-col` | `scaffold.flex($direction: column)` | Column direction | `flex-direction: column` |
| `.scaffold-flex-nowrap` | `scaffold.flex($wrap: nowrap)` | No wrapping | `flex-wrap: nowrap` |
| `.scaffold-flex-intrinsic` | — | Proportional flex child | `flex: var(--aspect-ratio, 1); min-width: 0` |
{: .class-table}

<h3 id="{{ page.anchor }}-alignment"><a href="#{{ page.anchor }}-alignment">Alignment <span class="tag tag-align">grid &amp; flex</span></a></h3>

<table class="class-table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
      <th>Preview</th>
      <th>CSS</th>
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

<h3 id="{{ page.anchor }}-utilities"><a href="#{{ page.anchor }}-utilities">Utilities <span class="tag tag-util">util</span></a></h3>

| Class | Mixin | Description | CSS |
|---|---|---|---|
| `.scaffold-container` | `scaffold.container()` | Centered max-width wrapper | `max-width: var(--scaffold-container-width)` |
| `.scaffold-container-full` | `scaffold.container($full: true)` | Full-width wrapper with side padding | `width: 100%; padding-inline: var(--scaffold-container-padding)` |
| `.scaffold-gap-sm` | — | Small gap | `gap: var(--scaffold-gap-sm)` |
| `.scaffold-gap-md` | — | Medium gap (default) | `gap: var(--scaffold-gap-md)` |
| `.scaffold-gap-lg` | — | Large gap | `gap: var(--scaffold-gap-lg)` |
{: .class-table}
