export default {
  name: "review",
  title: "Reviews",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "tour",
      title: "Tour",
      type: "string",
    },
    {
      name: "review",
      title: "Review",
      type: "string",
    },
    {
      name: "active",
      title: "Active?",
      type: "boolean",
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "review",
    },
  },
};
