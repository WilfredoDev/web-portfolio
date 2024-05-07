import {
    backend,
    web,
    creator,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mysql,
    express,
    laravel,
    php,
    mongodb,
    git,
    docker,
    redmasiva,
    carrent,
    tripguide,
    sociopedia,
    isboset,
    omar,
    samuel,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "FullStack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Php",
      icon: php,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "SysAdmin Operator & Server Manager",
      company_name: "Redmasiva",
      icon: redmasiva,
      iconBg: "#383E56",
      date: "January 2022 - January 2023",
      points: [
        "Conducted routine checks on server performance, monitoring RAM, disk space, SQL usage, and antivirus scans to ensure server security.",
        "Provided customer support for VPS and web hosting services, assisting clients with technical issues.",
        "Managed server migrations and configured operating system images for VPS deployment, including DHCP IP configuration.",
      ],
    },
    {
      title: "Web developer and group leader",
      company_name: "Redmasiva",
      icon: redmasiva,
      iconBg: "#383E56",
      date: "January 2023 - March 2024",
      points: [
        "Designed full-stack websites following specific brand and client requirements.",
        "Developed software for internal company tasks and third-party clients.",
        "Designed database schemas and relationships to ensure scalability and minimize conflicts during development.",
        "Conducted code reviews and delegated tasks to other team members, ensuring project quality and efficiency."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Known for problem-solving skills, efficient task management, and clear communication. Proficient in leading teams, adapting to changes, and meeting deadlines, ensuring project success at every stage.",
      name: "Isboset Nuñez",
      designation: "FullStack Web Developer",
      company: "Redmasiva",
      image: isboset,
    },
    {
      testimonial:
        "For the last 3 years, Wilfredo Pinto has been an integral part of our team, demonstrating exceptional performance in the area of server administration. His proactive, kind attitude and problem-solving ability highlight him as a responsible and committed professional in each of his assignments.",
      name: "Omar Rivas",
      designation: "COO",
      company: "Redmasiva",
      image: omar,
    },
    {
      testimonial:
        "Working with Wilfredo has been excellent! His dedication, responsibility and commitment to his work are exemplary. He always demonstrates a positive and proactive attitude in all tasks assigned to him. His ability to efficiently solve problems has been wonderful for our team.",
      name: "Samuel Rojas",
      designation: "CEO",
      company: "Redmasiva",
      image: samuel,
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce",
      description:
        "Web-based platform which allows users to view a catalog of products, make online purchases and manage a unique customer profile. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
          icon: reactjs
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
          icon: tailwind
        },
        {
          name: "MySQL",
          color: "blue-text-gradient",
          icon: mysql
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
          icon: nodejs
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sociopedia",
      description:
        "Web interface that simulates a clone of a social network such as Facebook and allows you interaction in real time with functions such as chatting, likes, publications and comments",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
          icon: reactjs
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
          icon: nodejs
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
          icon: mongodb
        },
        {
          name: "express",
          color: '',
          icon: express
        }
      ],
      image: sociopedia,
      source_code_link: "https://github.com/WilfredoDev/socialApp",
    },
    {
      name: "Control Task Panel",
      description:
        "Web application that allows you to manage tasks and projects assigned to specific users within the platform taking into account roles and permissions",
      tags: [
        {
          name: "Laravel",
          color: "pink-text-gradient",
          icon: laravel
        },
        {
          name: "php",
          color: "blue-text-gradient",
          icon:php
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
          icon:tailwind
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };