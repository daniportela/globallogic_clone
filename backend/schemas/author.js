export default {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        {
            name: "profilepic",
            title: "Profile picture",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "role",
            title: "Current role",
            type: "string"
        },
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: "articles",
            title: "Published articles",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "post" }]
                }
            ]
        }
    ]
}