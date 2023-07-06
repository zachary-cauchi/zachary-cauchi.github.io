import { defineEventHandler } from "h3";
import { skillCategories } from "./skill-categories";

export default defineEventHandler(() => ([
    {
        id: 1,
        name: 'Java',
        category: 1,
        skill: 100,
        icon: 'devicon:java'
    },
    {
        id: 2,
        name: 'C#',
        category: 1,
        skill: 90,
        icon: 'devicon:csharp'
    },
    {
        id: 3,
        name: 'JavaScript',
        category: 1,
        skill: 100,
        icon: 'devicon:javascript'
    },
    {
        id: 4,
        name: 'TypeScript',
        category: 1,
        skill: 100,
        icon: 'devicon:typescript'
    },
    {
        id: 5,
        name: 'Python',
        category: 1,
        skill: 90,
        icon: 'devicon:python'
    },
    {
        id: 6,
        name: 'C++',
        category: 1,
        skill: 70,
        icon: 'devicon:cplusplus'
    },
    {
        id: 7,
        name: 'C',
        category: 1,
        skill: 70,
        icon: 'devicon:c'
    },
    {
        id: 8,
        name: 'SQL',
        category: 3,
        skill: 65,
        icon: 'devicon:sqlite'
    },
    {
        id: 9,
        name: 'Vue',
        category: 4,
        skill: 65,
        icon: 'devicon:vuejs'
    },
    {
        id: 10,
        name: 'Angular',
        category: 4,
        skill: 50,
        icon: 'devicon:angular'
    },
].sort((a, b) => b.skill - a.skill)))
