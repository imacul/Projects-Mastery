import { SanityDocument } from "@sanity/types";

 const schema = {
   name: "templates",
   title: "Templates",
   type: "document",
   fields: [
     {
       name: "name",
       title: "Name",
       type: "string",
     },
     {
       name: "slug",
       title: "Slug",
       type: "slug",
       options: { source: "title" },
     },
     {
       name: "description",
       type: "text",
     },
     {
       name: "price",
       type: "number",
       // Only applicable for premium templates
       hidden: ({ document }: { document: SanityDocument }) =>
         document.category !== "premium",
     },
     {
       name: "category",
       type: "string",
       options: [
         { value: "free", label: "Free" },
         { value: "premium", label: "Premium" },
       ],
     },
     {
       name: "isFree",
       type: "boolean",
       // Automatically set based on the category
       computed: ({ document }: { document: SanityDocument }) =>
         document.category === "free",
     },
     {
       name: "images",
       title: "images",
       type: "image",
       options: {
         hotspot: true,
       },
     },
   ],
 };

export default schema;