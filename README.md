# The Know.dev Website

This is the public source repository for the [know.dev] documentation website.

## Prerequisites

- [Node.js] 18+

## Development

```console
cd etc/docusaurus
npm install
npm run start
```

## Hosting

The website is hosted as a static site at [Render], fronted by [know-proxy]
which serves up the [ontology] as [linked data] for semantic clients while
proxying through browser requests to the static site.

[know.dev]: https://know.dev
[know-proxy]: https://github.com/know-ontology/know-proxy
[linked data]: https://en.wikipedia.org/wiki/Linked_data
[Node.js]: https://nodejs.org
[ontology]: https://github.com/know-ontology/know-ontology
[Render]: https://render.com
