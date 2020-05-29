export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'hero',
            title: 'Hero',
            type: 'blogHero'
        },
        // {
        //     name: 'slug',
        //     title: 'Slug',
        //     type: 'slug',
        //     options: {
        //         source: 'title',
        //         maxLength: 96
        //     }
        // },
        // {
        //     title: 'Default variant',
        //     name: 'defaultProductVariant',
        //     type: 'productVariant'
        // },
        // {
        //     title: 'Variants',
        //     name: 'variants',
        //     type: 'array',
        //     of: [
        //         {
        //             title: 'Variant',
        //             type: 'productVariant'
        //         }
        //     ]
        // },
        // {
        //     title: 'Tags',
        //     name: 'tags',
        //     type: 'array',
        //     of: [
        //         {
        //             type: 'string'
        //         }
        //     ],
        //     options: {
        //         layout: 'tags'
        //     }
        // },
        // {
        //     name: 'vendor',
        //     title: 'Vendor',
        //     type: 'reference',
        //     to: { type: 'vendor' }
        // },
        // {
        //     name: 'blurb',
        //     title: 'Blurb',
        //     type: 'localeString'
        // },
        // {
        //     name: 'categories',
        //     title: 'Categories',
        //     type: 'array',
        //     of: [
        //         {
        //             type: 'reference',
        //             to: { type: 'category' }
        //         }
        //     ]
        // },
        // {
        //     name: 'body',
        //     title: 'Body',
        //     type: 'localeBlockContent'
        // }
    ],

    preview: {
        select: {
            title: 'title',
        }
    }
}
