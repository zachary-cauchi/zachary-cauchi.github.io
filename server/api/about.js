import { defineEventHandler } from 'h3'

const en = {
  about: `Hello and welcome! In my professional life, I prioritize quality and timely delivery. I firmly believe in the importance of clear communication and respect for deadlines. I'm someone who enjoys aligning my efforts with your project or company vision, striving to contribute effectively and learn along the way.

	Off the clock, I'm an avid technology enthusiast. I love to explore everything from the deep history of computer systems to the latest trends in programming tech. You can often find me tinkering with a software project or diving into the stories of deprecated technologies.`
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
