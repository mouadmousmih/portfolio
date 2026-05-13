



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
    title: "Stagiaire Développeur Backend & DevOps",
    entreprise: "OCP Group (Office Chérifien des Phosphates) — DSI · Casablanca, Maroc",
    date: "Mars – Juin 2025",
    contexte:
      "La DSI du groupe OCP souhaitait développer une API interne pour le suivi des équipements industriels, tout en modernisant sa chaîne de livraison via la conteneurisation et l'automatisation CI/CD.",
    taches: [
      "Développement d'une API REST interne (Java / Spring Boot) pour le suivi des équipements industriels, avec authentification JWT et documentation Swagger.",
      "Conteneurisation avec Docker et docker-compose — environnement reproductible sur 3 environnements (dev, recette, pré-prod).",
      "Pipeline Jenkins automatisé (build, tests unitaires, SonarQube, packaging Docker) — cycle de livraison réduit de 2 jours à quelques heures.",
      "Scripts Bash / Python pour l'automatisation de tâches récurrentes (rotation de logs, health checks, reporting).",
    ],
    action:
      "Intervention sur l'ensemble de la chaîne DevOps et développement backend pour renforcer la fiabilité, la traçabilité et la maintenabilité de la plateforme industrielle.",
  },
  {
    id: 2,
    title: "Stagiaire Développeur Backend",
    entreprise: "Inwi (opérateur télécom) — DSI · Casablanca, Maroc",
    date: "Juin – Août 2024",
    contexte:
      "La DSI d'Inwi développait une application de gestion des réclamations clients et souhaitait renforcer le backend ainsi qu'automatiser les traitements de données.",
    taches: [
      "Développement de modules backend en Python / FastAPI pour une application de gestion des réclamations clients, intégrée au SI existant via API REST.",
      "Conception et optimisation de requêtes SQL sur PostgreSQL (rapports, tableaux de bord internes).",
      "Automatisation de traitements de données via scripts Python (parsing CSV/JSON, nettoyage, insertion en base).",
      "Traitement de tickets Jira, correction de bugs et participation aux revues de code en méthodologie Agile.",
    ],
    action:
      "Contribution au développement backend et à l'automatisation des flux de données pour améliorer le traitement des réclamations clients.",
  },
 
];
