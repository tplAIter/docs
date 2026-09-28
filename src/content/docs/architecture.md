---
title: Architecture
description: Separate source templates, selection, rendering, and optional semantic context.
---

Packages compose while the engine stays focused. The system separates source templates, selection, and rendering so each layer can be inspected independently.

## The flow

```text
source template files → manifest and exports → Go text/template render → destination
```

A repository exposes named template packages. A manifest describes inputs and outputs. The Go engine renders selected files into a destination. Optional graph data describes relationships around that materialization.

## Independent graph layers

The source dependency DAG, export selection graph, and optional post-render semantic graph are separate layers. Ordinary rendering does not depend on graph analysis.

This boundary keeps an optional inspection feature from changing the rendering contract. See [Graphs & context](/graphs/) for the local explorer and its evidence rules.
