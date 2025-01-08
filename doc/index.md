---
slug: /
sidebar_label: Overview
sidebar_position: 0
---

# A Real-World Ontology for Gen AI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Know**–the _**K**nowledge **N**avigator **O**ntology for the **W**orld_–is
an [ontology] designed to capture and represent everyday knowledge to
augment large language models (LLMs) in real-world use cases such as
personal AI assistants.

Our domain is human life, both its everyday concerns and its major milestones.
We have limited the initial scope of the modeled concepts to only established
human universals: spacetime ([places], [events]) plus social ([people],
[groups], [organizations]). The inclusion criteria for modeled concepts are
pragmatic, beginning with universality and utility.

We also make available code-generated [software development kits] for the 12
most popular programming languages, enabling the direct use of ontology
concepts in software design and engineering.

## Class Overview

![Top-level classes](https://raw.githubusercontent.com/know-ontology/know-ontology/master/doc/classes.png)

## Base URI & Prefix

When working with [RDF] serializations and/or [SPARQL] queries, the ontology's
base URI and recommended prefix to use are the following:

<Tabs>
<TabItem value="turtle" label="Turtle">

```turtle
@prefix know: <https://know.dev/> .
```

</TabItem>
<TabItem value="jsonld" label="JSON-LD">

```json
{
  "@context": {
    "know": "https://know.dev/"
  },
  ...
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:know="https://know.dev/">
  ...
</rdf:RDF>
```

</TabItem>
<TabItem value="sparql" label="SPARQL">

```sparql
PREFIX know: <https://know.dev/>
```

</TabItem>
</Tabs>

## Linked Data Endpoint

The ontology concepts can be dereferenced in [linked data] form on this
website. If you have the [Raptor RDF] toolkit and utilities installed,
obtain machine-readable ontology concepts in RDF formats as simply as:

<Tabs>
<TabItem value="rapper" label="rapper">

```console
$ rapper -o turtle https://know.dev/Thing
```

</TabItem>
<TabItem value="rdfpipe" label="rdfpipe">

```console
$ rdfpipe -o turtle https://know.dev/Thing
```

</TabItem>
<TabItem value="roqet" label="roqet">

```console
$ roqet -e 'SELECT * FROM <https://know.dev/Thing> WHERE { ?s ?p ?o . }'
```

</TabItem>
<TabItem value="curl" label="curl">

```console
$ curl -H accept:text/turtle https://know.dev/Thing
```

</TabItem>
<TabItem value="wget" label="wget">

```console
$ wget -O- -q --header=accept:text/turtle https://know.dev/Thing
```

</TabItem>
</Tabs>

[events]: /Event
[groups]: /Group
[linked data]: https://en.wikipedia.org/wiki/Linked_data
[ontology]: /glossary/ontology
[organizations]: /Organization
[people]: /Person
[places]: /Place
[Raptor RDF]: https://librdf.org/raptor/
[RDF]: https://en.wikipedia.org/wiki/Resource_Description_Framework
[software development kits]: /learn/sdk
[SPARQL]: https://en.wikipedia.org/wiki/SPARQL
