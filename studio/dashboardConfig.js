export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c54b571ac00c3ea80b5ed4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r2rmapv2',
                  apiId: 'd7e7b6e7-1c8b-47c3-a77c-3054faf1ac55'
                },
                {
                  buildHookId: '62c54b57fdad0444228c2f1e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-24am7f12',
                  apiId: '62b42b9c-25df-4819-9f3c-5094f5c3a0b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bryanjhickey/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-24am7f12.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
