import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: "C#",
      description: {
        en: "I am experienced with using C# to develop Enterprise-ready web APIs using frameworks and tools such as ASP.NET Core and Microsoft Orleans.",
      },
      icon: "devicon:csharp",
      image: null,
    },
    {
      id: 2,
      title: "Rust",
      description: {
        en: "I create secure and performant applications and web APIs using Rust, capable of coordinating multiple separate applications to service client requests..",
      },
      icon: "devicon:rust",
      image: null,
    },
    {
      id: 3,
      title: "C++",
      description: {
        en: "I have experience with using C/C++ for developing embedded programs and applications as well as performance-intensive applications.",
      },
      icon: "devicon:cplusplus",
      image: null,
    },
    {
      id: 4,
      title: "Python",
      description: {
        en: "In my AI-oriented projects, I use Python as the main language of choice. I also use it with ansible for deployment automations.",
      },
      icon: "devicon:python",
      image: null,
    },
  ];
});
