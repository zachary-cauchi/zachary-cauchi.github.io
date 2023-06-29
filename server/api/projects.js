import { defineEventHandler } from 'h3'
import { categories } from './categories'

export default defineEventHandler(async () => {

  return [
    {
      id: 1,
      title: 'zachary-cauchi.github.io',
      category: {
        ...categories[0],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'The repo for this very website, built using Nuxt.js and deployed via Github Actions.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: 'https://avatars.githubusercontent.com/u/23012377?v=4',
      url: 'https://github.com/zachary-cauchi/zachary-cauchi.github.io',
    },
    {
      id: 2,
      title: 'github-actions-hot-repos',
      category: {
        ...categories[2],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'A GitHub Action I created to display your top 5 latest updated repos. The action release is also auto-updated by Dependabot with new security updates. The action can be viewed on the marketplace at https://github.com/marketplace/actions/get-hot-repos',
      },
      desc: {
          en: 'View Source Code',
      },
      image: 'https://avatars.githubusercontent.com/u/44036562?s=280&v=4',
      url: 'https://github.com/zachary-cauchi/github-action-hot-repos',
    },
  ]
})
