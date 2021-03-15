export default {
    widgets: [
        {
            name: 'structure-menu',
            layout: {
                width: 'small',
                height: 'large'
            }
        },
        {
            name: 'document-list',
            options: {
                title: 'Last edited posts',
                order: '_updatedAt desc',
                types: ['post']
            },
            layout: {
                width: 'large',
                height: 'large'
            }
        },
        {
            name: 'project-users',
            layout: {
                width: 'small',
                height: 'large'
            }
        },
        {
            name: 'project-info',
            layout: {
                width: 'full',
                height: 'small'
            }
        },
    ]
}