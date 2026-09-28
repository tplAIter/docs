# tplAIter documentation

This is the public development preview of the documentation site for tplAIter. It is an independent presentation layer and does not change the Go `text/template` engine. There is no public deployment, tagged release, or compatibility promise yet.

The site is built with [Astro Starlight](https://starlight.astro.build/). Starlight supplies the responsive navigation, table of contents, theme switcher, code blocks, and Pagefind-powered static search; the docs content remains ordinary Markdown and MDX.

## Local development

Requires Bun 1.4.2 or newer.

```sh
bun install --frozen-lockfile
bun run dev
```

The production checks are:

```sh
bun run check
bun audit
```

The repository is a public development preview licensed under MIT. It has
no tagged release or compatibility promise.
