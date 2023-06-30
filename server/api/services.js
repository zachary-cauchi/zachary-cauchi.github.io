import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'C#',
      description: {
        en: 'I am experienced with using C# to develop Enterprise-ready web APIs using frameworks and tools such as ASP.NET Core and Microsoft Orleans.',
      },
      icon: 'devicon:csharp',
      image: null,
    },
    {
      id: 2,
      title: 'Typescript',
      description: {
        en: 'I am adept with using Javascript and Typescript to create microservices, perform automated testing of websites, and develop CI/CD actions.',
      },
      icon: 'devicon:typescript',
      image: null,
    },
    {
      id: 3,
      title: 'C++',
      description: {
        en: 'I have experience with using C/C++ for developing embedded programs and applications as well as performance-intensive applications.'
      },
      icon: 'devicon:cplusplus',
      image: null,
    },
    {
      id: 4,
      title: 'Python',
      description: {
        en: 'In my AI-oriented projects, I use Python as the main language of choice.',
      },
      icon: 'devicon:python',
      image: null,
    },
  ]
})
