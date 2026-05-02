---
anchor: introduction
nav_label: Introduction
nav_section: Getting started
sort: 2
---

<h2><a href="#{{ page.anchor }}">Introduction</a></h2>

Scaffold stays close to native CSS Grid rather than abstracting it away. The goal is to fill the gaps where Grid is verbose or repetitive, not to reinvent it. If you know CSS Grid, you already know most of Scaffold.

Mixins are the foundation. Every layout concept — grid, span, flex, container, gap — is available as a SCSS mixin first. Utility classes are generated from those same mixins, so both approaches produce identical CSS. Use whichever fits your workflow.

Everything is customizable via CSS custom properties. Classes are the convenience layer; custom properties are where you actually configure things.

All classes are prefixed with `scaffold-` to avoid conflicts with other libraries or existing project CSS. Custom properties use the same `--scaffold-` namespace, so there's one consistent naming system throughout.

<h3 id="{{ page.anchor }}-grid-or-flex"><a href="#{{ page.anchor }}-grid-or-flex">Grid or flex?</a></h3>

If you're coming from a traditional 12-column flex grid, start by asking: *does the structure come first, or does the content?*

If you're defining the structure first — a 12-column page layout, a fixed card grid — use Grid. If content drives its own size and you're controlling how items flow and align — a nav bar, a tag list, a button group — use Flex.