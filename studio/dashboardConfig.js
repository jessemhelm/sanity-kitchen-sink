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
                  buildHookId: '625b1ee3943e534d630b2f70',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-44vbc1go',
                  apiId: 'bb562372-cf49-41ab-87ff-459c0ac7cebf'
                },
                {
                  buildHookId: '625b1ee4d04b9a47dd16577d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z5m3pjab',
                  apiId: 'f91ffc77-3ae4-4777-a4c6-e41b776c9e88'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jessemhelm/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z5m3pjab.netlify.app', category: 'apps'}
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
