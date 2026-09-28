---
title: Development status
description: Scope and availability in the current public development preview.
---

The core is being prepared as a clean, independently reviewed public source tree. Template packages are separate repositories and are not bundled into the core repository.

## Current checkpoint

| Area | Status |
| --- | --- |
| Public core preview | Under active development. |
| Go `text/template` rendering | The current rendering model. |
| Catalog inspection | Available for registered repositories and packages. |
| Local graph viewer | Available for inspection. |
| Live `new` and `update` lifecycle | Not available in this checkpoint. |
| Tagged release and compatibility promise | Not available. |

## Development-preview boundary

The checkpoint preserves the Go `text/template` rendering model. It has not been published as a release and has no compatibility or support commitment.

Read-only commands and template authoring references are the supported starting point while lifecycle and trust registration work continues. The [graphs documentation](/docs/graphs/) describes the local explorer's evidence limits, and [CLI & MCP](/docs/cli/) documents the inspection-oriented command surface.
