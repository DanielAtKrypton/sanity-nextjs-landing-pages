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
                  buildHookId: '5f47e57faaca5575c559084f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vxxrrn3u',
                  apiId: '04bf8eee-878a-4685-8d2a-2159275cc3e9'
                },
                {
                  buildHookId: '5f47e57f3b410a70bec59168',
                  title: 'Landing pages Website',
                  name: 'kryptonunite',
                  apiId: '6b7156d6-62f4-4959-a2e5-014522e1e4ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krypton-unite/website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kryptonunite.netlify.app', category: 'apps'}
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
