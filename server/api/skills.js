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
    {
        id: 11,
        name: 'Azure DevOps',
        category: 2,
        skill: 80,
        icon: 'devicon:azuredevops'
    },
    {
        id: 12,
        name: 'Git',
        category: 2,
        skill: 80,
        icon: 'devicon:git'
    },
    {
        id: 13,
        name: 'GitHub Actions',
        category: 2,
        skill: 80,
        icon: 'devicon:githubactions'
    },
    {
        id: 14,
        name: 'Ballerina',
        category: 1,
        skill: 60,
        icon: 'devicon:ballerina'
    },
    {
        id: 15,
        name: 'Cloudflare',
        category: 2,
        skill: 65,
        icon: 'devicon:cloudflare'
    },
    {
        id: 16,
        name: 'Docker',
        category: 2,
        skill: 70,
        icon: 'devicon:docker'
    },
    {
        id: 17,
        name: 'Podman',
        category: 6,
        skill: 70,
        icon: 'devicon:postman'
    },
    {
        id: 17,
        name: 'Cypress',
        category: 6,
        skill: 80,
        icon: 'devicon:cypressio'
    },
    {
        id: 18,
        name: 'Mongodb',
        category: 3,
        skill: 70,
        icon: 'devicon:mongodb'
    },
].sort((a, b) => b.skill - a.skill)))
