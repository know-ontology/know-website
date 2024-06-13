// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  about: [
    "index",
    {
      type: "category",
      label: "Getting Started",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Getting Started",
        description: " ",
        slug: "/learn",
        keywords: [],
      },
      items: [{ type: "autogenerated", dirName: "learn" }],
    },
    "bibliography",
    /*"features", "glossary"*/
  ],
  classes: [
    {
      type: "category",
      label: "Classes",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Classes",
        description: " ",
        slug: "/classes",
        keywords: [],
      },
      items: [
        "Activity",
        "Airport",
        "Appointment",
        "Birth",
        "Birthday",
        "BirthdayParty",
        "BuddhistTemple",
        "Cafe",
        "Church",
        "Class",
        "Community",
        "Company",
        "Conference",
        "Congregation",
        "Consortium",
        "Corporation",
        "Death",
        "Event",
        "Family",
        "File",
        "Government",
        "Graduation",
        "Group",
        "HinduTemple",
        "Holiday",
        "Hospital",
        "Hotel",
        "Landmark",
        "Link",
        "Meeting",
        "Meetup",
        "Mosque",
        "Nationality",
        "Organization",
        "Party",
        "Person",
        "Place",
        "Pub",
        "Restaurant",
        "School",
        "Synagogue",
        "Temple",
        "Thing",
        "University",
        "Venue",
        "Wedding",
      ],
    },
  ],
  properties: [
    {
      type: "category",
      label: "Properties",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Properties",
        description: " ",
        slug: "/properties",
        keywords: [],
      },
      items: [
        "account",
        "age",
        "alias",
        "ancestor",
        "aunt",
        //"birth", // FIXME
        "brother",
        "child",
        "colleague",
        "cousin",
        "daughter",
        //"death", // FIXME
        "descendant",
        "email",
        "end",
        "father",
        "grandchild",
        "granddaughter",
        "grandfather",
        "grandmother",
        "grandparent",
        "grandson",
        "honorific",
        "husband",
        "id",
        "knows",
        //"link", // FIXME
        "logo",
        "member",
        "memberOf",
        "mother",
        "name",
        //"nationality", // FIXME
        "nephew",
        "nibling",
        "niece",
        "note",
        "parent",
        "partner",
        "phone",
        "photo",
        "pibling",
        //"place", // FIXME
        "relative",
        "sex",
        "sibling",
        "sister",
        "size",
        "sizeInBytes",
        "son",
        "speaks",
        "spouse",
        "start",
        "stepchild",
        "stepdaughter",
        "stepfather",
        "stepmother",
        "stepparent",
        "stepson",
        "uncle",
        "url",
        "wife",
      ],
    },
  ],
  downloads: ["downloads"],
  sdk: [
    {
      type: "category",
      label: "Frameworks",
      collapsible: false,
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Software Development Kits (SDKs)",
        description: " ",
        slug: "/sdk",
        keywords: [],
      },
      items: [{ type: "autogenerated", dirName: "sdk" }],
    },
  ],
};

export default sidebars;
