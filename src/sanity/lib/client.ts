import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId, useCdn } from '../env'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    // stega: {
    //     enabled: false,
    //     studioUrl: '/studio',
    // },
})

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
    return builder.image(source)
}
