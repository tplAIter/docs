---
title: Template engine
description: tplAIter keeps Go text/template as its reviewable rendering foundation.
---

tplAIter uses Go's standard `text/template` engine. Templates stay close to the files they produce, with explicit data and predictable rendering.

## A small template

```gotemplate
{{- if .ServiceName }}
package {{ .PackageName }}

// {{ .ServiceName }} is ready to compose.
type {{ .ServiceName }} struct{}
{{- end }}
```

## Why `text/template`

The engine is part of the Go standard library, needs no Python runtime, and makes the template boundary easy to review. Package authors can keep ordinary source files alongside their manifests.

The documentation site uses Astro Starlight for static documentation only. It does not affect generated projects or replace the Go rendering engine.
