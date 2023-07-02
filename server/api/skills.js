import { defineEventHandler } from "h3";

export default defineEventHandler(() => ([
    {
        id: 1,
        name: 'Java',
        skill: 100,
        icon: 'devicon:java'
    },
    {
        id: 2,
        name: 'C#',
        skill: 90,
        icon: 'devicon:csharp'
    },
    {
        id: 3,
        name: 'JavaScript',
        skill: 100,
        icon: 'devicon:javascript'
    },
    {
        id: 4,
        name: 'TypeScript',
        skill: 100,
        icon: 'devicon:typescript'
    },
    {
        id: 5,
        name: 'Python',
        skill: 90,
        icon: 'devicon:python'
    },
    {
        id: 6,
        name: 'C++',
        skill: 70,
        icon: 'devicon:cplusplus'
    },
    {
        id: 7,
        name: 'C',
        skill: 70,
        icon: 'devicon:c'
    },
    {
        id: 8,
        name: 'SQL',
        skill: 65,
        icon: 'devicon:sqlite'
    },
    {
        id: 9,
        name: 'Vue',
        skill: 65,
        icon: 'devicon:vuejs'
    },
    {
        id: 10,
        name: 'Angular',
        skill: 50,
        icon: 'devicon:angular'
    },
].sort((a, b) => b.skill - a.skill)))
