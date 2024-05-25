import { defineField, defineType } from 'sanity'
import { FaFileCode } from 'react-icons/fa6'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: FaFileCode,
    fields: [
        defineField({
            name: 'name',
            title: 'Project name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'desc',
            title: 'Short project description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'url',
            title: 'Project URL',
            type: 'url',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Tags that describe the skills and technologies used',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'MMM YYYY',
            },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'desc',
            media: 'image',
        },
    },
    orderings: [
        {
            title: 'Chronological order',
            name: 'chronological',
            by: [{ field: 'date', direction: 'desc' }],
        },
    ],
})
