export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60484f6868e93e74eced7282',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7xmrkjhc',
                  apiId: '96a07b42-6d02-4d00-a53b-c81dc52986ea'
                },
                {
                  buildHookId: '60484f68621dd37bd1c8f471',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fmc2skty',
                  apiId: '4af7d95f-5137-496f-8ae7-f6f6d8f7432f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jacksrf/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fmc2skty.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
