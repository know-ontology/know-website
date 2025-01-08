// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkDefList from "remark-deflist";
import tabBlocks from "docusaurus-remark-plugin-tab-blocks";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Know Ontology",
  tagline: "An everyday, commonsense ontology",
  favicon: "assets/img/favicon.ico",

  // Set the production url of your site here
  url: "https://know.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "know-ontology", // Usually your GitHub org/user name.
  projectName: "know-website", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: "./sidebars.js",
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            return `https://github.com/know-ontology/know-website/edit/master/doc/${docPath}`;
          },
          remarkPlugins: [
            remarkDefList,
            [
              tabBlocks,
              {
                labels: [
                  ["bash", "CLI"],
                  ["shell-session", "Shell"],
                ],
              },
            ],
          ],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "assets/img/docusaurus-social-card.jpg", // TODO
      navbar: {
        title: "The Know Ontology",
        logo: {
          alt: "Know Ontology Logo",
          src: "assets/img/logo.jpeg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "about",
            label: "About",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "classes",
            label: "Classes",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "properties",
            label: "Properties",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "downloads",
            label: "Downloads",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "sdk",
            label: "SDKs",
            position: "left",
          },
          {
            href: "https://github.com/know-ontology",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Ontology",
            items: [
              {
                label: "Classes",
                to: "/classes",
              },
              {
                label: "Properties",
                to: "/properties",
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/know-ontology",
              },
              {
                label: "GitHub",
                href: "https://github.com/know-ontology/know-ontology/issues",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://x.com/KnowOntology",
              },
              {
                label: "Forum",
                href: "https://forum.know.dev",
              },
            ],
          },
        ],
        copyright: " ",
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        defaultLanguage: "shell-session",
        additionalLanguages: [
          "bash",
          "json",
          "python",
          "rust",
          "shell-session",
        ],
      },
    }),
  plugins: [
    () => ({
      name: "symlink-resolver",
      configureWebpack() {
        return { resolve: { symlinks: false } };
      },
    }),
    [
      "@grnet/docusaurus-terminology",
      {
        termsDir: "./docs/glossary",
        docsDir: "./docs/",
        glossaryFilepath: "./docs/glossary.md",
      },
    ],
    () => ({
      name: "inject-tags",
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: "script",
              attributes: {
                src: "https://cdn.usefathom.com/script.js",
                "data-site": "IUIUDGEX",
                defer: "defer",
              },
            },
          ],
        };
      },
    }),
  ],
};

export default config;
