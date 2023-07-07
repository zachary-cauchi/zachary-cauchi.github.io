import { defineEventHandler } from 'h3'

const en = {
  about: `Hello!
  I'm a result-driven person who aims to deliver exceptional work.
  I am known for my adaptability to new projects, problem-solving skills in quality assurance testing, quality output, approachability, and problem-solving.`,
  hobbies: `I have a fascination for the various computer systems - both hardware and software - throughout the ages.
  I enjoy exploring and learning about old technologies and recently deprecated ones.
  During my free time, I work on various software projects and enjoy challenging myself to learn new things; you never stop learning after all.`,
  forYou: `Given a goal, a project, and/or a company vision, I will make it my own and work tirelessly to see it reach its maximum potential.`
}

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      description: {
        en,
      },
    },
  ]
})
