export default {
    name: "clients",
    title: "Clients",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Client logo",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "name",
            title: "Client name",
            type: "string"
        }
    ]
}