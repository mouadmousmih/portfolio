



// content/hero.ts


export const hero = {
        titleParts: {
          beforeEmoji: "Salut",
          emoji: "👋",
          afterEmoji: ", c’est Mouad"
        },
      
        subtitle: {
          before: "Étudiant en Master",
          highlight1: "Ingénierie du Web",
          middle: "& Objets Connectés, Je cherche une",
          highlight2: "alternance",
          after: "dès septembre 2025.",
        },
        description:
          "Passionné de dev, fan de défis, et surtout... prêt à ne pas casser la prod (enfin, j’essaie)",
      
    buttons: [
      {
        label: "Télécharger CV",
        href: "/MOUSMIH__Mouad.pdf",
        icon: "download",
        type: "download",
      },
      {
        label: "Me contacter",
        href: "mailto:mouadmousmih@gmail.com",
        icon: "mail",
      },
    ],
  }
  



  // data des projects 



  export const projects_paragraphe = { 
    text: " Voici quelques projets récents que j’ai réalisés pour mettre en pratique mes compétences en Dev & DevOps."}



 export const projects = [
  {
    title: "Portfolio personnel – Développeur Full Stack & DevOps",
    description: "Développement d’un portfolio moderne avec Next.js et Tailwind CSS pour présenter mes compétences, projets et expériences. Intégration d’animations, design responsive, et séparation du contenu dans des fichiers pour faciliter l’édition future via CMS.",
    image: "/image.png",
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Design Responsive', 'Sentry'],
    github: 'https://github.com/mouadmousmih/portfolio',
    demo: ''
  },
  
  {
    title: 'Plateforme de déploiement d’applications conteneurisées ',
    description: 'Développement d’une interface web pour lancer des déploiements Docker automatisés sur différents environnements',
    image: '/projet_deploy.png',
    tags: ['React.js', 'Node.js', 'Docker', 'GitHub Actions', 'JWT', 'MongoDB'],
    github: 'https://github.com/mouadmousmih',
    demo: '',
  },
  
    {
      title: 'Simulation Java pour l’optimisation du reroutage de camions frigorifiques',
      description: 'Implémentation en Java d’une simulation visant à tester des algorithmes de reroutage de camions pour optimiser la récupération de conteneurs frigorifiques vides tout en minimisant les coûts de trajet',
      image: '/tpe.png',
      tags: ['Java', 'Algorithmique', 'Simulation', 'Optimisation', 'Graphe'],
      github: '', 
      demo: '',   
    }
   
]



// experiences 
export const experiences = [
  {
    id: 1,
    title: "Stage DevOps – Licence",
    entreprise: "NGIT Agence Digitale",
    date: "Mars – Juin 2023",
    contexte:
      "L’entreprise souhaitait automatiser les déploiements et mettre en place une supervision de ses services conteneurisés.",
    taches: [
      "Conteneurisation des services avec Docker sur les environnements dev et staging.",
      "Déploiement de la supervision avec Prometheus et Grafana.",
      "Mise en place de l’alerting et gestion des logs avec Sentry.",
      "Automatisation des workflows CI/CD via GitHub Actions.",
    ],
    action:
      "Intervention sur l’ensemble de la chaîne DevOps pour renforcer la fiabilité et la maintenabilité de la plateforme.",
  },
  {
    id: 2,
    title: "Stage Développeur Web – DUT",
    entreprise: "PWIS",
    date: " Avril – Juillet 2022",
    contexte:
      "L’entreprise développait une plateforme interne de gestion de tâches et souhaitait renforcer la sécurité et la fiabilité du backend.",
    taches: [
      "Développement d’API REST sécurisées avec Node.js, Express et JWT.",
      "Mise en place de tests automatisés avec Jest.",
      "Collaboration avec l’équipe DevOps pour préparer le déploiement initial.",
    ],
    action:
      "Découverte des pratiques DevOps et participation à la transition vers des workflows CI/CD.",
  },
 
];
