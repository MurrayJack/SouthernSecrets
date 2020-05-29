import supportedLanguages from './supportedLanguages'

export default {
    name: 'localeText',
    type: 'object',
    fieldsets: [
        {
            title: 'Translations',
            name: 'translations',
            options: { collapsible: true }
        }
    ],
    fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: 'array', 
        of: [{type: 'block'}],
        fieldset: lang.isDefault ? null : 'translations'
    }))
}
