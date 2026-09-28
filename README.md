# tplAIter documentation

This is the public development preview of the documentation site for tplAIter. It is an independent presentation layer and does not change the Go engine. There is no public deployment, tagged release, or compatibility promise yet.

## Local development

Requires Bun 1.4.2 or newer.

```sh
bun install --frozen-lockfile
bun run dev
```

The production checks are:

```sh
bun run lint
bun run build
bun audit
```

The repository is a public development preview licensed under MIT. It has
no tagged release or compatibility promise.
