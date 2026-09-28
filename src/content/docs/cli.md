---
title: CLI & MCP
description: Commands currently useful for inspection in the public development preview.
---

The current checkpoint is best used to inspect template repositories and validate package structure. MCP is the intended selection interface, not a claim that the live lifecycle is complete.

| Command | Purpose |
| --- | --- |
| `tplaiter template list` | List registered repositories and packages. |
| `tplaiter template show <ref>` | Show a package manifest and metadata. |
| `tplaiter template pull <ref>` | Copy a template tree to disk for study. |
| `tplaiter lint-template` | Run template repository self-checks. |
| `tplaiter stats` | Show project drift statistics. |
| `tplaiter mcp-server` | Expose preview CLI tools over stdio JSON-RPC. |

## Lifecycle boundary

The public development preview does not promise that live `new` or `update` workflows are available. Stock lifecycle commands can stop with `TRUST_ANCHOR_MISSING` or `TRUST_LIFECYCLE_UNAVAILABLE` while trust registration and lifecycle support are completed.

Use the inspection commands to review an already registered catalog. See [Getting started](/getting-started/) and [Development status](/status/) before planning a live project workflow.
