export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "title",
            title: "Post title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 90
            }
        },
        {
            name: "content",
            title: "Post content",
            type: "string",
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: [{ type: "author" }]
        }
    ]
}