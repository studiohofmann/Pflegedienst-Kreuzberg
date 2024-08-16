import { defineField } from "sanity";
import { HomeIcon } from '@sanity/icons'


const home = {
    name: "home",
    title: "Home",
    type: "document",
    icon: HomeIcon,

    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "comingSoon",
            title: "Coming Soon",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: 'bild',
            title: 'Bild',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ]
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
};

export default home;