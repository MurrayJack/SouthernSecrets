export default {
    name: 'tour',
    title: 'Tours',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
        },
        {
            name: 'try',
            type: 'array', 
            of: [{type: 'block'}],
        },
        {
            name: 'information',
            title: 'Information',
            type: 'localeText'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'localeText'
        },
        {
            name: 'brochure',
            title: 'Brochure',
            type: 'localeString'
        },
        {
            name: 'brochureUrl',
            title: 'Brochure URL',
            type: 'url'
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
            // manufactor: 'manufactor.title',
            // media: 'defaultProductVariant.images[0]'
        }
    }
}
