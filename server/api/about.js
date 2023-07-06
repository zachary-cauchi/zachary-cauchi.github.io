import { defineEventHandler } from 'h3'

const en = {
  about: `Hello!
  I'm a result-driven person who aims to deliver exceptional work.
  I am known for my adaptability to new projects, problem-solving skills in quality assurance testing, quality output, approachability, and enthusiasm.`,
  hobbies: `I have a fascination for the various computer systems - both hardware and software - that have existed throughout the ages.
  I enjoy exploring and learning about old technologies and recently deprecated ones.
  That doesn't stop me from exploring new ones though, and I always make it a point to brush up on the current comings and goings of programming tech.
  During my free time, I work on various software projects and enjoy challenging myself to learn new things; you never stop learning after all.`,
  forYou: `Given a goal, a project, and/or a company vision, I will make it my own and work tirelessly to see it reach its maximum potential.
  I will always prioritise quality work over easy work and will research the best ways to see a task done before committing it to practice.
  Above all else, I will always maintain transparent communication with my team and superiors, and deliver my work in a timely fashion and within deadline.`
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
