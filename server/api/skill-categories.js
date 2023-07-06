import { defineEventHandler } from 'h3'
export const skillCategories = [
  {
    id: 1,
    title: {
      en: 'Programming Languages',
    },
  },
  {
    id: 2,
    title: {
      en: 'DevOps'
    }
  },
  {
    id: 3,
    title: {
      en: 'Data'
    },
  },
  {
    id: 4,
    title: {
      en: 'Web / Frontend'
    }
  },
  {
    id: 5,
    title: {
      en: 'Backend Frameworks'
    }
  },
]

export default defineEventHandler(() => {
  return skillCategories
})
