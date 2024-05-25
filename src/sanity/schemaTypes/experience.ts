import { defineField, defineType } from 'sanity'
import { FaBuilding } from 'react-icons/fa'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    icon: FaBuilding,
    fields: [
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'url',
            title: 'Company URL',
            type: 'url',
        }),
        defineField({
            name: 'startDate',
            title: 'Start date',
            type: 'date',
            validation: (rule) => rule.required(),
            options: {
                dateFormat: 'MMM YYYY',
            },
        }),
        defineField({
            name: 'endDate',
            title: 'End date',
            type: 'date',
            description: 'Leave this field empty if its ongoing',
            options: {
                dateFormat: 'MMM YYYY',
            },
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
            description: 'Skills and technologies used',
        }),
    ],
    orderings: [
        {
            title: 'Chronological order',
            name: 'chronological',
            by: [{ field: 'startDate', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'role',
            subtitle: 'company',
        },
    },
})
