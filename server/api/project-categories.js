import { defineEventHandler } from 'h3'
export const projectCategories = [
  {
    id: 1,
    title: {
      en: 'Web Projects',
    },
  },
  {
    id: 2,
    title: {
      en: 'Experiments'
    }
  },
  {
    id: 3,
    title: {
      en: 'DevOps'
    },
  },
  {
    id: 4,
    title: {
      en: 'Embedded Hardware'
    }
  },
  {
    id: 5,
    title: {
      en: 'Performance-Intensive Apps'
    }
  },
  {
    id: 6,
    title: {
      en: 'AI'
    }
  }
]

export default defineEventHandler(() => {
  return projectCategories
})
