---
anchor: introduction
nav_label: Introduction
nav_section: Getting started
sort: 2
---

<h2><a href="#{{ page.anchor }}">Introduction</a></h2>

Scaffold stays close to native CSS Grid rather than abstracting it away. The goal is to fill the gaps where Grid is verbose or repetitive, not to reinvent it. If you know CSS Grid, you already know most of Scaffold.

Mixins are the primitive layer. Every layout concept — grid, span, flex, container, gap — is available as a SCSS mixin first. Utility classes are generated output from those same mixins, so both approaches produce identical CSS. Use whichever fits your workflow.

Everything is customizable via CSS custom properties. Classes are the convenience layer; custom properties are the real configuration surface.

All classes are prefixed with `scaffold-` to avoid conflicts with other libraries or existing project CSS. Custom properties use the same `--scaffold-` namespace, so there's one consistent naming system throughout.

<h3 id="{{ page.anchor }}-grid-or-flex"><a href="#{{ page.anchor }}-grid-or-flex">Grid or flex?</a></h3>

Moving away from the traditional 12-col flex grid hack, the question becomes when should I use grid and when should I use flex?

If the layout structure defines the content layout then grid is what you need, if the content determine the layout flex is what you need!

If you're defining the structure first — a 12-column page layout, a fixed card grid — that's Grid. If the content is driving its own size and you're just controlling how items flow and align — a nav bar, a tag list, a button group — that's Flex.