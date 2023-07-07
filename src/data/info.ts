export const info = {
  baseUrl: "https://olivo.moe/",
  name: "Edwin Olivo",
  jobDescription: "Web Developer",
  about: `Soy ingeniero de software y vivo en Tepic, México.
    Recién egresado de la universidad con una especialización en desarrollo web.
    Aunque no tengo experiencia laboral previa, cuento con conocimientos teóricos y prácticos sobre los lenguajes de programación y herramientas relacionadas con el desarrollo web.
    Además, tengo la capacidad de utilizar mi formación y creatividad para resolver problemas, y trabajar en equipo para lograr objetivos.
  `,

  experience: [
    {
      name: "CICESE-UT3",
      position: "Becario",
      location: "Tepic, Nayarit, México",
      startDate: "Septiembre 2022",
      endDate: "Diciembre 2022",
      description: [
        "Responsable de desarrollar parte de la `interfaz web` para el nuevo sistema de gestión de inventario. Empleando `Pug` para componentes y *layouts*, y `Vue` para añadir funcionalidad.",
        "Codificación del *end points* para la aplicación usando `Express` y `TypeScript`.",
        "Encargado de la `migración` y `actualización` base de datos. Detección de registros duplicados; eliminación de dependencias incoherentes; corrección de código de caracteres; creación nuevas tablas para el nuevo modelo; y reorganización de los campos derivados."
      ],
    },

    {
      name: "D4ALL",
      position: "Editor de contenidos",
      location: "Tepic, Nayarit, México",
      startDate: "Junio 2022",
      endDate: "Agosto 2022",
      description: [
        "Trasladar el contenido (texto, tablas e imágenes) del sitio web antiguo al nuevo seleccionando el componente de interfaz adecuado para cada instancia.",
        "Colaboración con el equipo de desarrollo y diseño en la detección de errores e inconsistencias en los componentes Drupal.",
        "Empleé `Jira` para el control de las asignaciones o *tickets*.",
      ],
    },

    {
      name: "Unidad Académica de Economía",
      position: "Porgramador",
      location: "Tepic, Nayarit, México",
      startDate: "Diciembre 2019",
      endDate: "Marzo 2020",
      description: [
        "Colaboré de manera productiva en equipo para conocer los requisitos y las especificaciones en torno a la gestión de historiales médicos.",
        "Codifiqué el módulo de odontología con Java Swing para el registro de las revisiones dentales.",
        "Participe activamente en el diseño de funcionalidades para cada especialidad médica.",
        "Encargado de garantizar la aplicación de las reglas de normalización en la base de datos."
      ],
    },
  ],

  education: [
    {
      name: "Universidad Autónoma de Nayarit",
      location: "Tepic, Nayarit, México",
      startDate: "2017",
      endDate: "2023",
      description: [
        "Licenciatura en Sistemas Computacionales",
      ],
    },
  ],

  socialMedia: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    github: "https://github.com/MrOlivo",
    email: "mailto:user@domain.com",
    linkedin: "https://www.linkedin.com/in/edwin-olivo-garcia/",
  },

  projects: [
    {
      title: "Personal Portfolio",
      isFeatured: true,
      thumbnails: {
        png: "/assets/images/astro-portfolio.png",
        avif: "/assets/images/astro-portfolio.avif",
        webp: "/assets/images/astro-portfolio.webp",
      },
      githubUrl: "https://github.com/MrOlivo/astro-portfolio",
      liveUrl: "https://mrolivo.github.io",
    },
    {
      title: "Brutalism Concept website",
      isFeatured: true,
      thumbnails: {
        png: "/assets/images/brutalism.png",
        avif: "/assets/images/brutalism.avif",
        webp: "/assets/images/brutalism.webp",
      },
      githubUrl: "https://github.com/MrOlivo/Brutalism-UI",
      liveUrl: "https://mrolivo.github.io/Brutalism-UI",
    },
  ],
};
