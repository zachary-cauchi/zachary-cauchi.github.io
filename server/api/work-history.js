import { defineEventHandler } from "h3";

export default defineEventHandler(() => ([
    {
        id: 1,
        title: {
            en: 'Software Developer'
        },
        employer: {
            en: 'Bank of Valletta'
        },
        department: {
            en: 'Cards department'
        },
        address: {
            en: 'Cannon Road, Central Business District, CBD 4060, Santa Venera, Malta'
        },
        website: {
            en: 'https://www.bov.com'
        },
        dateFrom: {
            year: 2021,
            month: 6,
            day: 30
        },
        dateTo: {
            year: 2023,
            month: 6,
            day: 29
        },
        description: {
            en: `Coordinate releases of vendor-supplied software packages to our infrastructure.
Develop and maintain in-house tools used by our client-facing teams.
Develop new tools for preparing and processing of transactions by our in-house teams.
Provide support outside of office hours to our operations teams to ensure reliable uptime of our client-
serving infrastructure and services.
Introduce new technologies to our teams to assist in development and productivity.`
        }
    },
    {
        id: 2,
        title: {
            en: 'Backend Software Developer'
        },
        employer: {
            en: 'NetRefer'
        },
        department: {
            en: ''
        },
        address: {
            en: 'Valley Road, Level 3, Domestica Complex, MSD 9020, Msida, Malta'
        },
        website: {
            en: 'https://www.netrefer.com'
        },
        dateFrom: {
            year: 2020,
            month: 11,
            day: 24
        },
        dateTo: {
            year: 2021,
            month: 6,
            day: 22
        },
        description: {
            en: `Work on the services, data models, and testing of upcoming products.
• Design aspects of the product.
• Implement features of the product.
• Build suitable tests and documentation.
Build suitable tools for testing components of the product.
Design and implement the DevOps infrastructure for running integration tests on package releases.`
        }
    },
    {
        id: 2,
        title: {
            en: 'Software Developer in Test'
        },
        employer: {
            en: 'NetRefer'
        },
        department: {
            en: ''
        },
        address: {
            en: 'Valley Road, Level 3, Domestica Complex, MSD 9020, Msida, Malta'
        },
        website: {
            en: 'https://www.netrefer.com'
        },
        dateFrom: {
            year: 2018,
            month: 12,
            day: 3
        },
        dateTo: {
            year: 2020,
            month: 6,
            day: 24
        },
        description: {
            en: `Begun the process of migrating from totally manual testing to an automated approach.
• Automating the quality assurance and testing of our products such as sanity testing.
• Automate client project testing such as onboardings and product integration.
Developing the tools used for building and writing our tests.
Assisting developers in development and testing of products.
Teaching my colleagues how to contribute to the automated test suite and the tools used.
Adapting our testing toolset to our products architecture.
Take part in the developers' code review process.
Oversee and develop test automation methodologies, tools, and projects for the tech team.`
        }
    }
]))