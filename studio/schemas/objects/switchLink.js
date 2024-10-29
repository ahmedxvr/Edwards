export default {
    name: 'switchLink',
    title: 'Switch link',
    type: 'object',
    fields: [
        {
            name: 'mainMenu',
            type: 'array',
            of: [{ type: 'pageLink' }, { type: 'pageAnchorLink' }, { type: 'anchorLink' }],
            validation: Rule => Rule.required().max(1),
        },
    ],
    preview: {
        select: {
            mainMenu: 'mainMenu',
        },
        prepare({ mainMenu }) {
            return {
                title: mainMenu && mainMenu[0].linkText || 'Link',
            };
        }
    },
}