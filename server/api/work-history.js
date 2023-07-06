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
            en: `Coordinated releases of vendor-supplied software packages from start to finish.
Developed and maintained in-house tools used by client-facing teams.
Developed new tools for preparing and processing of financial transactions.
Provided support outside of office hours to operations teams to ensure reliable uptime of client-
serving infrastructure and services.
Introduced new technologies to assist in development and productivity.
Kept log of production-impacting incidents, their causes, and instructions on how to mitigate them.`
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
            en: `Worked on the services, data models, and testing of upcoming products.
• Designed aspects of the product.
• Implemented features of the product.
• Built suitable tests and documentation.
Built suitable tools for testing components of the product.
Designed and implemented the DevOps infrastructure for running integration tests on package releases.`
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
            en: `Designed and developed an automated suite of tests for phasing out manual testing of software products.
• Automated the quality assurance and testing suites of products such as sanity testing.
• Automated client project testing such as onboardings and new product integrations.
Developed the tools used for building and writing of tests.
Assisted developers in development and testing of products.
Taught colleagues how to contribute to the automated test suite and how to effectively use the tools for doing so.
Adapted the testing toolset to the products architecture where the toolset would not function as expected.
Took part in developer code review process.
Oversaw and developed test automation methodologies, tools, and projects for the tech team.`
        }
    }
]))