interface Resource {
  type: string;
  // Add other properties as needed
}

const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          "HTML/CSS Templates",
          "React Templates",
          "Angular Templates",
          "Vue Templates",
          "WordPress Themes",
          "Landing Pages",
          "E-commerce Templates",
          "Other",
        ],
      },
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["free", "premium"],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      hidden: ({ parent }: { parent: Resource }) => parent.type !== "premium",
    },
  ],
};

export default schema;
