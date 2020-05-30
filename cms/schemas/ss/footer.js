export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'active',
            title: 'Active',
            type: 'boolean'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        }
    ],

    preview: {
        select: {
            title: 'title',
            manufactor: 'url',
            media: 'image',
        }
    }
}
