// ./sanity/lib/fetch.ts
'use server'
import type { QueryParams } from 'next-sanity'

import { client } from './client'

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    tags,
}: {
    query: string
    params?: QueryParams
    tags?: string[]
}) {
    return client.fetch<QueryResponse>(query, params, {
        next: {
            revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
            tags,
        },
    })
}
