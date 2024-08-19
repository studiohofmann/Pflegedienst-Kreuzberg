import { defineField } from "sanity";
import { ArrowDownIcon } from '@sanity/icons'


const footer = {
    name: "footer",
    title: "Footer",
    type: "document",
    icon: ArrowDownIcon,

    fields: [
        defineField({
            name: "copyright",
            title: "Copyright",
            type: "string",

        }),
        defineField({
            name: "designDevelopment",
            title: "Design & Development",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
};

export default footer;