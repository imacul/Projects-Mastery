const schema = {
  name: "Templates",
  title: "Templates",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "Category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      Options: {
        list: [
          "Ecommerce Templates",
          "Site Templates",
          "Marketing Templates",
          "CMS Templates",
          "Blogging",
        ],
      },
    },
  ],
};

export default schema;
