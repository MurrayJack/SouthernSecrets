export default {
  name: "tour",
  title: "Tours",
  type: "document",
  fieldsets: [
    {
      name: "slider",
      title: "Home Page: Slider",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "tour_images",
      title: "Tour Photos",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "small_image",
      title: "Home Page: Image",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "tour_details",
      title: "Tour Details",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "tour_brochure",
      title: "Tour Brochure",
      options: {
        collapsible: true,
        collapsed: true,
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
      name: "active",
      title: "Active",
      type: "boolean",
    },

    {
      name: "homepage_active",
      title: "Show On Homepage",
      type: "boolean",
      fieldset: "small_image",
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      fieldset: "small_image",
    },

    // slider
    {
      name: "slider_active",
      title: "Show In Slider",
      type: "boolean",
      fieldset: "slider",
    },
    {
      name: "slider_blurb",
      title: "Blurb",
      type: "array",
      of: [{ type: "string" }],
      fieldset: "slider",
    },
    {
      name: "slider_image",
      title: "Image",
      type: "image",
      fieldset: "slider",
    },

    // tour images
    {
      name: "images",
      title: "Images",
      type: "array",
      fieldset: "tour_images",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },

    // Tour Details
    {
      name: "information",
      title: "Information",
      type: "localeText",
      fieldset: "tour_details",
    },
    {
      name: "description",
      title: "Description",
      type: "localeText",
      fieldset: "tour_details",
    },

    
    {
      name: "brochure",
      title: "Brochure",
      type: "localeString",
      fieldset: "tour_brochure",
    },
    {
      name: "brochureUrl",
      title: "Brochure URL",
      type: "url",
      fieldset: "tour_brochure",
    },

  ],

  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
  },
};
