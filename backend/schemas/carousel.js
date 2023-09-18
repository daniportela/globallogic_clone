export default {
    name: "carousel",
    title: "Carousel",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Slide image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "title",
            title: "Slide title",
            type: "string"
        },
        {
            name: "content",
            title: "Slide content",
            type: "string"
        },
        {
            name: "link",
            title: "Read more link",
            type: "string"
        }
    ]
}