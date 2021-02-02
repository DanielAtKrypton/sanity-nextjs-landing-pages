export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        repoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  name: '',
                  apiId: '04bf8eee-878a-4685-8d2a-2159275cc3e9'
                },
                {
                  buildHookId: '5f47e57f3b410a70bec59168',
                  title: 'Landing pages Website',
                  name: '',
                  apiId: '7e740745-2e2e-4427-be81-aded75334337'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Daniel Kaminski de Souza/https:&#x2F;&#x2F;github.com&#x2F;krypton-unite&#x2F;website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;kryptonunite.netlify.app&#x2F;', category: 'apps'}
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
