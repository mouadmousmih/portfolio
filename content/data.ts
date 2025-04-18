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
        href: "/cv.pdf",
        icon: "download",
        type: "download",
      },
      {
        label: "Me contacter",
        href: "mailto:mouad@example.com",
        icon: "mail",
      },
    ],
  }
  



  // data des projects 
 export const projects = [
  {
    title: "Portfolio personnel – Développeur Full Stack & DevOps",
    description: "Développement d’un portfolio moderne avec Next.js et Tailwind CSS pour présenter mes compétences, projets et expériences. Intégration d’animations, design responsive, et séparation du contenu dans des fichiers pour faciliter l’édition future via CMS.",
    image: "/image.png",
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Design Responsive', 'Sentry'],
    github: 'https://github.com/mouad/portfolio',
    demo: 'https://mouad.vercel.app'
  },
  
  {
    title: 'Plateforme de déploiement d’applications conteneurisées ',
    description: 'Développement d’une interface web pour lancer des déploiements Docker automatisés sur différents environnements',
    image: '/test2.png',
    tags: ['React.js', 'Node.js', 'Docker', 'GitHub Actions', 'JWT', 'MongoDB'],
    github: 'https://github.com/mouad/devops-saas',
    demo: '',
  },
  
    {
      title: 'Simulation Java pour l’optimisation du reroutage de camions frigorifiques',
      description: 'Implémentation en Java d’une simulation visant à tester des algorithmes de reroutage de camions pour optimiser la récupération de conteneurs frigorifiques vides tout en minimisant les coûts de trajet',
      image: '/tpe.png',
      tags: ['Java', 'Algorithmique', 'Simulation', 'Optimisation', 'Graphe'],
      github: '', // Ajoute le lien si tu as mis le code sur GitHub
      demo: '',   // Idem si tu veux ajouter une démo ou une vidéo
    }
   
]