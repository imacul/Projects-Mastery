const schema = {
  name: "TemplatesPlaylist",
  title: "Templates Playlist",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "templates",
      title: "Templates",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "Templates" }],
        },
      ],
    },
  ],
};

export default schema;
