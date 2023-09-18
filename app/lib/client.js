import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: "m7s93b3p",
    dataset: "production",
    apiVersion: "2023-09-16",
    useCdn: true
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)