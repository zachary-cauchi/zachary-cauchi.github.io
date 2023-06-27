import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      description: {
        en: 'English About Me',
      },
    },
  ]
})
