---
title: Getting started
description: Explore the current public development preview from a reviewed checkout.
---

The current core is an unreleased public development snapshot. Start with a reviewed checkout and the inspection workflow while lifecycle support is being completed.

## Build from a reviewed checkout

There is no public tagged release or compatibility promise yet. With Go 1.26 or newer, build the binary from the reviewed source checkout:

```sh
go build -o tplaiter .
```

## Inspect a registered catalog

A template repository must already be registered in the local tplAIter home. The checkpoint exposes these commands for catalog inspection:

```sh
tplaiter template list
tplaiter template show <ref>
tplaiter template pull <ref> --dest ./template
```

## Know the current boundary

Stock lifecycle commands can stop with `TRUST_ANCHOR_MISSING` or `TRUST_LIFECYCLE_UNAVAILABLE`. Live project creation and update are unavailable in this checkpoint, so the supported starting point is read-only exploration and template authoring reference.

See [Development status](/docs/status/) for the current scope and [CLI & MCP](/docs/cli/) for the available inspection commands.
