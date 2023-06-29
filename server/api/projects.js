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
        en: 'The repo for this very website, built using Vue, Nuxt.js and deployed via Github Actions.',
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
    {
      id: 3,
      title: 'zachs-movie-database',
      category: {
        ...categories[1],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'A minimal IMDB clone for the purpose of learning Dotnet Orleans.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: '/images/projects/orleans.png',
      url: 'https://github.com/zachary-cauchi/zachs-movie-database',
    },
    {
      id: 4,
      title: 'angular-sample-todo-app',
      category: {
        ...categories[0],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'A sample todo app as an intermediate Angular tutorial.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: '/images/projects/angular.png',
      url: 'https://github.com/zachary-cauchi/angular-sample-todo-app',
    },
    {
      id: 5,
      title: 'golang-angular-sample-app',
      category: {
        ...categories[2],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'A full-stack app which follows experimenting with both Go and Angular.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: '/images/projects/go.png',
      url: 'https://github.com/zachary-cauchi/golang-angular-sample-app',
    },
    {
      id: 6,
      title: 'Galaxior Conquest',
      category: {
        ...categories[0],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'My first web project. A simple game with a simple goal; fly through space, attack the turrets on the enemy ship, and destroy them all to win. Uses PHP for basic hosting and account management. Undergoing conversion to a Ballerina hosting and backend.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: '/images/projects/galaxior-conquest.png',
      url: 'https://github.com/zachary-cauchi/galaxior-conquest',
    },
    {
      id: 7,
      title: 'ballerina-experimentation',
      category: {
        ...categories[1],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'Experimentation with the Ballerina programming language. Features a minimal web server and MySQL REST API as a test of its network-first features.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: '/images/projects/ballerina.png',
      url: 'https://github.com/zachary-cauchi/ballerina-experimentation',
    },
    {
      id: 8,
      title: 'ps2-code-samples',
      category: {
        ...categories[3],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'A collection of learning samples and Docker devcontainer for the PlayStation 2. Most samples are either taken from existing repositories, or dissected to understand how they work.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: '/images/projects/playstation.png',
      url: 'https://github.com/zachary-cauchi/ps2-code-samples',
    },
    {
      id: 9,
      title: 'Ray Tracer',
      category: {
        ...categories[4],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'A ray tracer implemented in C++ supporting whitter-style ray tracing, path tracing, and more.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: '/images/projects/ray-tracer.png',
      url: 'https://github.com/zachary-cauchi/CPS5124-assignment-1',
    },
    {
      id: 10,
      title: 'N-Body Gravity Simulator',
      category: {
        ...categories[4],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'A very simple n-body simulator. The main star of this program is that it is highly-distributed, using OpenMP for multi-core execution and OpenMPI for multi-computer distributed computing. All scripts for executing it are configured to run on the Sun Grid Engine. A separate python GUI program is also present for viewing the results. To execute the program, a devcontainer is also present for perusal.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: '/images/projects/nbody.png',
      url: 'https://github.com/zachary-cauchi/CPS3236-assignment-1-nbody-sim',
    },
    {
      id: 10,
      title: 'MiniBooNE dataset classifier',
      category: {
        ...categories[5],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'An exploration of 3 different basic classifier implementations for classifying signal events from background events in the MiniBooNE dataset. All implementations are written as Jupyter notebooks and a writeup is present to discuss the results.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: '/images/projects/miniboone.png',
      url: 'https://github.com/zachary-cauchi/CCE5225-assignment-1',
    },
    {
      id: 10,
      title: 'Bayesian Chain vs Binary Relavance',
      category: {
        ...categories[5],
        date: {
          en: 'June 2023',
        },
      },
      content: {
        en: 'An evaluation on whether the Bayesian Chain Classifier outperforms the Binary Relavance Model in multi-label classification. All sources are present in a Jupyter notebook alongside a writeup of the findings.',
      },
      desc: {
          en: 'View Source Code',
      },
      image: '/images/projects/bayesian-chain.png',
      url: 'https://github.com/zachary-cauchi/CCE5225-assignment-2',
    },
  ]
})
