export default {
  name: "blogHero",
  type: "object",
  fieldsets: [
    {
      title: "Blog Hero",
      name: "blogHeros",
      options: {
        collapsible: true,
      },
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subHeader1",
      title: "Sub Header 1",
      type: "string",
    },
    {
      name: "subHeader2",
      title: "Sub Header 2",
      type: "string",
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "string",
    },
  ],
};
