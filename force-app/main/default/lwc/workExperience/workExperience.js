import { LightningElement } from "lwc";

export default class WorkExperience extends LightningElement {
  workExperienceData = {
    heading: "WORK EXPERIENCE",
    workExperiences: [
      {
        role: "Lead Developer",
        companyName: "Google",
        duration: "2019 - Present",
        description: "Google Description",
        descriptionPoints: [
          "Google Description Point 1",
          "Google Description Point 2",
          "Google Description Point 3"
        ],
        technologiesUsed: {
          heading: "TECHNOLOGIES USED",
          list: ["React.js", "Redux", "Node.js", "Express.js"]
        }
      },
      {
        role: "Senior Software Developer",
        companyName: "Facebook",
        duration: "2014 - 2018",
        description: "Facebook Description",
        descriptionPoints: [
          "Facebook Description Point 1",
          "Facebook Description Point 2",
          "Facebook Description Point 3"
        ],
        technologiesUsed: {
          heading: "TECHNOLOGIES USED",
          list: ["Python", "Django", "Flask", "Redis", "PostgreSQL"]
        }
      },
      {
        role: "Software Developer",
        companyName: "AMAZON",
        duration: "2012 - 2014",
        description: "AMAZON Description",
        descriptionPoints: [
          "AMAZON Description Point 1",
          "AMAZON Description Point 2",
          "AMAZON Description Point 3"
        ],
        technologiesUsed: {
          heading: "TECHNOLOGIES USED",
          list: ["Java", "MySQL", "PHP", "HTML", "CSS"]
        }
      },
      {
        role: "Web Developer",
        companyName: "Microsoft",
        duration: "2011 - 2012",
        description: "Microsoft Description",
        descriptionPoints: [
          "Microsoft Description Point 1",
          "Microsoft Description Point 2",
          "Microsoft Description Point 3"
        ],
        technologiesUsed: {
          heading: "TECHNOLOGIES USED",
          list: ["C#", "Visual Basic", "ASP.NET", "SQL Server"]
        }
      }
    ]
  };
}
