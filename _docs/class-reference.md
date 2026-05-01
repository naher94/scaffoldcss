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

| Class | Description | CSS |
|---|---|---|
| `.scaffold-justify-start` | Pack items to start | `justify-content: flex-start` |
| `.scaffold-justify-center` | Center items | `justify-content: center` |
| `.scaffold-justify-end` | Pack items to end | `justify-content: flex-end` |
| `.scaffold-justify-between` | Space between items | `justify-content: space-between` |
| `.scaffold-justify-around` | Space around items | `justify-content: space-around` |
| `.scaffold-items-start` | Align children to start | `align-items: flex-start` |
| `.scaffold-items-center` | Align children to center | `align-items: center` |
| `.scaffold-items-end` | Align children to end | `align-items: flex-end` |
| `.scaffold-items-stretch` | Stretch children to fill | `align-items: stretch` |
| `.scaffold-self-start` | Align self to start | `align-self: flex-start` |
| `.scaffold-self-center` | Align self to center | `align-self: center` |
| `.scaffold-self-end` | Align self to end | `align-self: flex-end` |
| `.scaffold-self-stretch` | Stretch self to fill | `align-self: stretch` |
{: .class-table}

<h3 id="{{ page.anchor }}-utilities"><a href="#{{ page.anchor }}-utilities">Utilities <span class="tag tag-util">util</span></a></h3>

| Class | Mixin | Description | CSS |
|---|---|---|---|
| `.scaffold-container` | `scaffold.container()` | Centered max-width wrapper | `max-width: var(--scaffold-container-width)` |
| `.scaffold-container-full` | `scaffold.container($full: true)` | Full-width wrapper with side padding | `width: 100%; padding-inline: var(--scaffold-container-padding)` |
| `.scaffold-gap-sm` | — | Small gap | `gap: var(--scaffold-gap-sm)` |
| `.scaffold-gap-md` | — | Medium gap (default) | `gap: var(--scaffold-gap-md)` |
| `.scaffold-gap-lg` | — | Large gap | `gap: var(--scaffold-gap-lg)` |
{: .class-table}
