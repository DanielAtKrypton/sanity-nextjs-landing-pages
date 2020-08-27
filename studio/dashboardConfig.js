export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f47d9ff7b5df1fd1a15b971',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eznewo87',
                  apiId: 'b3c3c8d8-6142-4fc9-a1ec-5a01216ae655'
                },
                {
                  buildHookId: '5f47d9ff567c36df334d1277',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kb6gmve7',
                  apiId: '47b4a310-cfc9-4eae-8c16-cd7ec7353b84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanielAtKrypton/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kb6gmve7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
