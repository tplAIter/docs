---
title: Template packages
description: Independent foundations in the tplAIter public development preview.
---

The public development preview is organized around independent packages. Each package can evolve on its own cadence.

| Package | Role |
| --- | --- |
| Base | Shared conventions and neutral building blocks. |
| Go | A Go service foundation with an idiomatic project shape. |
| Rust | A Rust service foundation for teams working in Rust. |
| React + Next | A planned modifier path; React and the Next modifier are not shipped yet. |

## Review package structure

Use the catalog commands to inspect a registered package before using it:

```sh
tplaiter template list
tplaiter template show <ref>
```

Template package validation is documented separately in [Template validation](/docs/template-validation/).
