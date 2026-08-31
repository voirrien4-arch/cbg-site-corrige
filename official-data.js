const source = 'https://cbg-guinee.com/';

export const officialProjects = [
  {
    id: 'extension',
    title: "Projet d'extension",
    status: 'Achevé selon la page officielle',
    year: '2016–2024',
    image: 'https://cbg-guinee.com/wp-content/uploads/2026/03/DSC09287-1024x683.jpg',
    source: 'https://cbg-guinee.com/projets/projet-dextension',
    description: "Projet lancé en 2016 pour renforcer la capacité de production, moderniser les infrastructures ferroviaires et portuaires et consolider la position de la CBG sur le marché mondial de la bauxite.",
    facts: ["Nouvelles aires de stockage et de traitement à Sangarédi et Parawi", "Modernisation des infrastructures ferroviaires et portuaires", "Plus de 1 500 travailleurs mobilisés pendant les phases de construction", "Investissement annoncé : environ 1 milliard USD"]
  },
  {
    id: 'multi-user',
    title: 'Projet Multi-User du Chemin de Fer de Boké',
    status: 'Projet présenté par la CBG',
    year: 'Depuis 2015',
    image: 'https://cbg-guinee.com/wp-content/uploads/2025/12/Train-Voyageur-scaled-1.jpg',
    source: 'https://cbg-guinee.com/projets/multi-user',
    description: "Partenariat entre l'ANAIM, la CBG, GAC et COBAD pour une infrastructure ferroviaire partagée, avec une gouvernance organisée autour d'un Comité Technique et d'un Comité des Utilisateurs.",
    facts: ["Contrat d'opération signé le 24 juin 2015", "Infrastructure mutualisée avec l'ANAIM, la CBG, GAC et COBAD", "Signalisation moderne et renforcement des équipements de maintenance", "Objectifs de capacité mentionnés dans la page officielle : 51 Mt/an dès 2020 et 70 Mt à l'horizon 2023"]
  },
  {
    id: 'refinery',
    title: 'Projet de raffinerie',
    status: 'Développement annoncé',
    year: '2026',
    image: 'https://cbg-guinee.com/wp-content/uploads/2026/08/1.webp',
    source: 'https://cbg-guinee.com/projet-de-raffinerie-cbg-une-nouvelle-phase-decisive-vers-la-concretisation-du-projet/',
    description: "La CBG a publié une nouvelle étape de travail vers la concrétisation d'une future raffinerie, dans une logique de valorisation locale des ressources et d'industrialisation.",
    facts: ["Projet présenté comme une future raffinerie", "Nouvelle phase de travail publiée en août 2026", "Objectif annoncé : renforcer la valorisation locale", "Les paramètres techniques et le calendrier restent ceux publiés par la source officielle"]
  }
];

export const officialOperations = [
  {
    id: 'mine', number: '01', title: 'Mine de Sangarédi', label: 'Extraction à ciel ouvert',
    image: 'https://cbg-guinee.com/wp-content/uploads/2025/06/DSC06022-scaled-1.jpg',
    source: 'https://cbg-guinee.com/no-operations/mines-de-sangaredi',
    description: "L'exploitation repose sur le décapage des couches superficielles, l'extraction du minerai et son acheminement vers les installations de traitement. La page officielle indique une capacité annuelle dépassant 18,5 millions de tonnes après les investissements d'extension.",
    facts: ['Région de Boké', 'Exploitation à ciel ouvert', 'Liaison ferroviaire vers Kamsar']
  },
  {
    id: 'rail', number: '02', title: 'Chemin de Fer de Boké', label: 'Transport ferroviaire',
    image: 'https://cbg-guinee.com/wp-content/uploads/2025/12/Train-Voyageur-scaled-1.jpg',
    source: 'https://cbg-guinee.com/no-operations/chemin-de-fer',
    description: "Le corridor relie la zone minière de Sangarédi aux installations et au port de Kamsar. Les sources officielles consultées mentionnent 132 km sur une page et environ 135 km sur une autre : cette différence est conservée comme incertitude éditoriale, sans arbitrage artificiel.",
    facts: ['Sangarédi → Kamsar', '132 km mentionnés sur une page officielle', 'Environ 135 km mentionnés sur la vue des opérations']
  },
  {
    id: 'plant', number: '03', title: 'Usine de Kamsar', label: 'Concassage et séchage',
    image: 'https://cbg-guinee.com/wp-content/uploads/2025/11/slide-cbg-4.webp',
    source: 'https://cbg-guinee.com/no-operations/usine-de-kamsar',
    description: "Le minerai reçu par voie ferrée est dirigé vers le concassage, avec trois granulométries, puis vers les fours de séchage. La page officielle indique une réduction de l'humidité à 3 %, un stacker pour les stocks stratégiques, des systèmes de captation des poussières et un dispositif d'eau recyclée.",
    facts: ['Trois granulométries distinctes', "Humidité réduite à 3 % selon la page officielle", 'Stockage stratégique par stacker']
  },
  {
    id: 'port', number: '04', title: 'Port de Kamsar', label: 'Chargement et exportation',
    image: 'https://cbg-guinee.com/wp-content/uploads/2026/05/image-article-01.webp',
    source: 'https://cbg-guinee.com/no-operations/port',
    description: "Le port constitue le dernier maillon de la chaîne industrielle. Le minerai préparé y est convoyé, pesé et chargé pour l'expédition vers les marchés internationaux. Les informations de capacité et de temps de chargement sont présentées dans la source officielle dédiée.",
    facts: ['Quai minéralier de Kamsar', 'Expédition vers les marchés internationaux', 'Capacité et cadence à consulter dans la page source']
  }
];

export const supportFunctions = [
  { title: 'Hygiène, Sécurité, Environnement & Communautés', source: 'Direction Groupe HSEC & Communautés', items: ['Direction Hygiène, Sécurité et Environnement', 'Performance Sociale et Relations Communautaires'] },
  { title: 'Technique & Maintenance', source: 'Direction Groupe Technique & Maintenance', items: ['Maintenance usine & ABS', 'Production et Distribution Energie', 'Entretien Civil et Intendance de l’eau', 'Electronique et Froid', 'Garage'] },
  { title: 'Stratégie, Développement & Qualité', source: 'Direction Groupe Stratégie, Développement & Qualité', items: ['Qualité', 'Reporting et Projets de Développement durable', 'Laboratoire-Chimie', 'Amélioration des affaires'] },
  { title: 'Ressources humaines & Administration', source: 'Direction Groupe Ressources Humaines & Administration', items: ['Administration', 'Administration du personnel', 'Santé d’entreprise', 'Communication & Relations publiques', 'Recrutement & Mobilité interne', 'Relations gouvernementales'] },
  { title: 'Comptabilité, Finances & IT', source: 'Direction Groupe Comptabilité, Finances & IT', items: ['Contrôle financier', 'Contrôle de gestion', 'Informatique & Télécommunication', 'Gestion du Carburant & Lubrifiants'] },
  { title: 'Juridique, Éthique & Conformité', source: 'Direction Juridique, Éthique & Conformité', items: ['Conformité', 'Droits des affaires', 'Contentieux juridiques', 'Réglementations internes, Permis et Autorisations'] },
  { title: 'Achats & Logistique', source: 'Direction Achats & Logistique', items: ['Achats Outre-Mer', 'Achats locaux et Contrats', 'Logistique, Transit et Douanes', 'Magasins'] },
  { title: 'Ingénierie, Projets & Innovation', source: 'Direction Ingénierie, Projets & Innovation', items: ['Ingénierie', 'Projets d’investissement', 'Gestion des Projets majeurs'] },
  { title: 'Prévention, Sûreté et Incendie', source: 'Direction Prévention, Sûreté et Incendie', items: ['Prévention & Sûreté', 'Incendie', 'Sécurité routière'] }
];

export const leadership = [
  ['Karifa Condé', 'Directeur Général'], ['Morifing Condé', 'Directeur Groupe Ressources humaines & Administration'], ['Pierre Dominique Traoré', 'Directeur Groupe Stratégie, Développement & Qualité'], ['Sidiki Fofana', 'Directeur Groupe Services Techniques & Maintenance'], ['Thierno Sadou Diallo', 'Directeur Groupe Opérations'], ['Alsény Conté', 'Directeur Groupe Mine'], ['Gilles Déry', 'Directeur Groupe Comptabilité, Finances & IT'], ['Mamadou Kaba Baldé', 'Directeur Usine & Boucle des Opérations'], ['Nyankoye Fara Haba', 'Directeur Chemin de Fer de Boké'], ['Sonda Diawara', 'Directeur Port'], ['Malick Diop', 'Directeur Logistique & Achats'], ['Dramé Aicha Barry', 'Directrice Administrative'], ['Mamadou Oury Diallo', 'Directeur Ingénierie, Projets & Innovation'], ['Namory Camara', 'Directeur Prévention & Sûreté'], ['Lousseny Cissé', 'Directeur Juridique, Ethique & Conformité'], ['Sékou Sano', 'Directeur Hygiène, Sécurité, Environnement & Communautés'], ['Aliou Bah', 'Chef Service Entretien Civil & Intendance de l’Eau'], ['Saran Camara', 'Cheffe Service Performance Sociale & Relations Communautaires'], ['Joseph Kékoura Dyuola', 'Chef Service Administration du personnel'], ["N'Famara Kébé", "Chef Service Santé d'entreprise"], ['Oumar Sy', 'Chef Service Qualité'], ['Morissanda Kéïta', 'Chef Service Maintenance & ABS'], ['Ansoumane Condé', 'Chef Service Administration & Supports Zone Mine'], ['Mariama Tounkara', 'Cheffe Service Administration & Finances du Projet Multi-User'], ['Ahmadou Camara', 'Chef Service Opérations Ferroviaires'], ['Mamadou Aliou Barry', 'Conseiller chargé de mission'], ['Cécile Finda Koundouno', 'Assistante Exécutive Direction Générale']
].map(([name, position]) => ({ name, position }));

const pdf = (title, category, year, file, page) => ({ title, category, year, file, page: page || '', source });
export const officialDocuments = [
  pdf('Mécanisme de gestion des plaintes communautaires', 'Social', '2026', 'MECANISME-DE-GESTION-DES-PLAINTES-COMMUNAUTAIRES.pdf'),
  pdf('Past Compensation Report 2010–2015', 'Social', '2015', 'Past-compensation-Report-2010-2015.pdf'),
  pdf('CBG CFB projet MU — Annexes section 8', 'Social', '2026', 'CBG-CFB-projet-MU-Annexes-Sect.-8-.pdf'),
  pdf('CBG CFB projet MU — Annexes section 6', 'Social', '2026', 'CBG-CFB-projet-MU-Annexes-Sect.-6-compresse.pdf'),
  pdf('Community Development Plan 2024', 'Social', '2024', 'Community-Development-Plan.pdf'),
  pdf('Resettlement Policy Framework', 'Social', '2024', '240130_CBG_RPF_Disclosure_Version.pdf'),
  pdf('Stakeholder Engagement Plan 2022–2025 — français', 'Social', '2022–2025', '2022-2025-SEP-SUMMARY-FRANCAIS.pdf'),
  pdf('Stakeholder Engagement Plan 2022–2025 — anglais', 'Social', '2022–2025', '2022-2025-SEP-SUMMARY-ENGLISH.pdf'),
  pdf('Publication de condamnation 2025', 'Gouvernance et éthique', '2025', 'Publication-de-condamnation-2025.pdf'),
  pdf('Tableau des condamnations 2025', 'Gouvernance et éthique', '2025', 'Publication-de-condamnation-2025.pdf'),
  pdf('Tableau des condamnations 2024', 'Gouvernance et éthique', '2024', 'FICHE-DE-PUBLICATION-DE-COMPTES-RENDUS-DE-CONDAMNATIONS-2024-1.pdf'),
  pdf('Convention de base CBG–Halco, concession 1963', 'Gouvernance et éthique', '1963', 'Convention-de-base-CBG-Halco-concession-1963.pdf'),
  pdf('Politique des Droits Humains', 'Gouvernance et éthique', '2026', 'Politique-des-Droits-Humains.pdf'),
  pdf('Politique de Management', 'Gouvernance et éthique', '2026', 'Politique-de-Management.pdf'),
  pdf('Politique de lutte contre la corruption', 'Gouvernance et éthique', '2026', 'Politique-de-lutte-contre-la-Corruption.pdf'),
  pdf('Politique Achats Responsables', 'Gouvernance et éthique', '2026', 'Politique-Achats-Responsables.pdf'),
  pdf('ITIE — Déclaration impôts et taxes 2025', 'Gouvernance et éthique', '2025', 'ITIE-Declaration-Impots-et-Taxes-2025.pdf'),
  pdf('ITIE — Déclaration impôts et taxes 2024', 'Gouvernance et éthique', '2024', 'ITIE-Declaration-Impots-et-Taxes-2024.pdf'),
  pdf('ITIE — Déclaration impôts et taxes 2023', 'Gouvernance et éthique', '2023', 'ITIE-Declaration-Impots-et-Taxes-2023.pdf'),
  pdf('ITIE — Déclaration impôts et taxes 2022', 'Gouvernance et éthique', '2022', 'ITIE-Declaration-Impots-et-Taxes-2022.pdf'),
  pdf('ITIE — Déclaration impôts et taxes 2021', 'Gouvernance et éthique', '2021', 'ITIE-Declaration-Impots-et-Taxes-2021.pdf'),
  pdf('ITIE — Déclaration impôts et taxes 2020', 'Gouvernance et éthique', '2020', 'ITIE-Declaration-Impots-et-Taxes-2020.pdf'),
  pdf('ITIE — Déclaration impôts et taxes 2019', 'Gouvernance et éthique', '2019', 'ITIE-Declaration-Impots-et-Taxes-2019.pdf'),
  pdf('ITIE — Déclaration impôts et taxes 2018', 'Gouvernance et éthique', '2018', 'ITIE-Declaration-Impots-et-Taxes-2018.pdf'),
  pdf('Attestation EY sur l’ITIE 2024', 'Gouvernance et éthique', '2024', 'EYs-attestation-on-EITI-2024-1.pdf'),
  pdf('Attestation EY sur l’ITIE 2023', 'Gouvernance et éthique', '2023', 'EYs-attestation-on-EITI-2023.pdf'),
  pdf('Attestation EY sur l’ITIE 2022', 'Gouvernance et éthique', '2022', 'EYs-attestation-on-EITI-2022.pdf'),
  pdf('Tableau des condamnations 2021–2022', 'Gouvernance et éthique', '2021–2022', 'Tableau-des-condamnations-2021-2022.pdf'),
  pdf('Synthèse des condamnations CBG', 'Gouvernance et éthique', '2026', 'Synthese-Condamnations-CBG-Final-Presentation.pdf'),
  pdf('Amendement 2005 — CBG, Compagnie des Bauxites de Guinée', 'Gouvernance et éthique', '2005', '2729-cbg-compagnie-des-bauxites-de-guinee-amendement-2005.pdf'),
  pdf('Compte rendu de jugements d’ordre social 2024', 'Gouvernance et éthique', '2024', 'Compte-Rendu-De-Jugements-Dordre-Social-2024.pdf'),
  pdf('Politique HSECQ 2026', 'Santé et sécurité', '2026', 'Politique-HSECQ-2026.pdf'),
  pdf('Politique de gestion des risques', 'Santé et sécurité', '2026', 'Politique-de-Gestion-des-Risques.pdf'),
  pdf('Politique anti-alcool et anti-drogue', 'Santé et sécurité', '2026', 'Politique-Anti-Alcool-et-Anti-Drogue.pdf'),
  pdf('Certificat de conformité environnementale 2026–2027', 'Environnement & durabilité', '2026–2027', 'Certificat-Conformite-Environnementale-2026-2027.pdf'),
  pdf('Rapport de développement durable 2025', 'Environnement & durabilité', '2025', 'Rapport-de-Developpement-Durable-2025-1.pdf'),
  pdf('Rapport de développement durable 2024', 'Environnement & durabilité', '2024', 'Rapport-de-Developpement-Durable-2024-1.pdf'),
  pdf('Rapport de développement durable 2023', 'Environnement & durabilité', '2023', 'Rapport-de-Developpement-Durable-2023-1.pdf'),
  pdf('Rapport de développement durable 2022', 'Environnement & durabilité', '2022', 'Rapport-de-Developpement-Durable-2022-1-1.pdf'),
  pdf('Rapport de développement durable 2021', 'Environnement & durabilité', '2021', 'Rapport-de-Developpement-Durable-2021-1.pdf'),
  pdf('Production d’énergie électrique 2025', 'Environnement & durabilité', '2025', 'Production-denergie-electrique-2025.pdf'),
  pdf('Production d’énergie électrique 2024', 'Environnement & durabilité', '2024', 'Production-denergie-electrique-2024.pdf'),
  pdf('Production d’énergie électrique 2023', 'Environnement & durabilité', '2023', 'Production-denergie-electrique-2023.pdf'),
  pdf('Production d’énergie électrique 2022', 'Environnement & durabilité', '2022', 'Production-denergie-electrique-2022.pdf'),
  pdf('Émissions de gaz à effet de serre 2025', 'Environnement & durabilité', '2025', 'Emission-Gaz-a-effet-de-serre-2025.pdf'),
  pdf('Politique sur la gestion des ressources et l’efficacité énergétique', 'Environnement & durabilité', '2026', 'Politique-sur-la-Gestion-des-Ressources-et-de-l-Efficacite-Energetique.pdf'),
  pdf('Politique de gestion des déchets', 'Environnement & durabilité', '2026', 'Politique-de-Gestion-des-Dechets.pdf'),
  pdf('Note de service DG — réduction des gaz à effet de serre', 'Environnement & durabilité', '2026', 'Note-de-Service-DG-CBG-Reduction-de-Gaz-a-effet-de-Serre.pdf'),
  pdf('Inventaire des rejets atmosphériques fixes 2025', 'Environnement & durabilité', '2025', 'Inventaire-des-Rejets-atmospheriques-fixes-2025.pdf'),
  pdf('ESMS D390 GEN MAN 001 EN V00 Rev01', 'Environnement & durabilité', '2026', 'ESMS-D390-GEN-MAN-001-EN-V00-Rev01.pdf'),
  pdf('Environmental and Social Monitoring Report — May 2025', 'Environnement & durabilité', '2025', 'ES-Monitoring-Rpt-May-2025.pdf'),
  pdf('Environmental and Social Monitoring Report — November 2024', 'Environnement & durabilité', '2024', 'ES-Monitoring-Rpt-Nov-2024.pdf'),
  pdf('Environmental and Social Monitoring Report — November 2023', 'Environnement & durabilité', '2023', 'ES-Monitoring-Rpt-Nov-2023.pdf'),
  pdf('Environmental and Social Monitoring Report — June 2023', 'Environnement & durabilité', '2023', 'ES-Monitoring-Rpt-June-2023.pdf'),
  pdf('Environmental and Social Monitoring Report — October 2021', 'Environnement & durabilité', '2021', 'ES-Monitoring-Rpt-Oct-2021.pdf'),
  pdf('Environmental and Social Monitoring Report — July 2019', 'Environnement & durabilité', '2019', 'ES-Monitoring-Rpt-July-2019.pdf'),
  pdf('Environmental and Social Monitoring Report — February 2018', 'Environnement & durabilité', '2018', 'ES-Monitoring-Rpt-Feb-2018.pdf'),
  pdf('Environmental and Social Monitoring Report — July 2017', 'Environnement & durabilité', '2017', 'ES-Monitoring-Rpt-July-2017.pdf'),
  pdf('CBG Appel à manifestation d’intérêt — ferraille', 'Appels d’offres et recrutements', '2026', 'CBG-Appel-Manifestation-Interet-Ferraille.pdf')
].map((item) => {
  const file = `https://cbg-guinee.com/wp-content/uploads/${item.title.startsWith('Certificat') ? '2026/08' : '2026/06'}/${item.file}`;
  return { ...item, file, page: item.page || file };
});

export const recruitment = {
  source: 'https://cbg-guinee.com/carrieres/le-processus-de-recrutement',
  steps: ['Publication des offres', 'Soumission des candidatures en ligne', 'Pré-sélection des dossiers', 'Évaluations techniques et tests', 'Entretien oral', 'Test médical', 'Décision et offre', 'Intégration et formation'],
  note: "La page officielle indique que les offres d'emploi et de stage sont publiées sur les canaux officiels de la CBG. Aucune offre fictive n'est affichée ici.",
  areas: ['Développement durable et responsabilité sociétale', 'Ressources humaines et formation', 'Finance, audit et contrôle de gestion', 'Systèmes d’information et technologies', 'Communication et relations publiques', 'Juridique et conformité', 'Ingénierie et innovation industrielle', 'Usine et production', 'Chemins de fer et logistique industrielle', 'Approvisionnement et chaîne d’approvisionnement']
};

export const officialHistory = [
  ['1963', 'Création de la CBG', "La Compagnie des Bauxites de Guinée est créée le 1er octobre 1963 dans le cadre de la mise en valeur du potentiel bauxitique de la région de Boké."],
  ['1965', "Création de l'OFAB", "L’Office d’Aménagement de Boké est créé pour contribuer à la construction et à la gestion des infrastructures de la CBG."],
  ['1967', 'Réorganisation de la participation', "La participation de Harvey Aluminium est réorganisée entre Alcan, Alcoa, Martin Marietta, Péchiney et Montecatini."],
  ['1970–1972', 'Construction des infrastructures', "Les principaux ouvrages de génie civil sont réalisés, notamment la ligne ferroviaire reliant Sangarédi à Kamsar."],
  ['1971–1973', 'Construction de Kamsar', "L’usine de Kamsar ainsi que les cités et zones industrielles de Kamsar et Sangarédi sont construites."],
  ['Janvier 1973', 'Achèvement de la ligne ferroviaire', 'La ligne ferroviaire jusqu’à Kamsar est achevée.'],
  ['Avril 1973', 'Première pelle et premier train', "La première pelle minière est mise en service et le premier train de minerai part de Sangarédi."],
  ['30 avril 1973', 'Démarrage à Kamsar', 'Les opérations de broyage et de stockage commencent à Kamsar.'],
  ['2 août 1973', 'Première exportation', "La première exportation de bauxite a lieu à bord du Coronia, avec un volume initial publié de 19 000 tonnes."],
  ['1993', 'Premier exportateur mondial', 'La chronologie officielle indique que la Guinée devient le premier exportateur mondial de bauxite.'],
  ['2005', 'Convention de base', 'La Convention de base de la CBG est renouvelée.'],
  ['2007', 'Cap du million de tonnes', "La CBG franchit le cap du million de tonnes produites en une année, après 34 ans d’exploitation."],
  ['2010', 'Direction guinéenne', 'Pour la première fois, un Guinéen est nommé à la tête de la Compagnie.'],
  ['2014', 'Extension et modernisation', 'Un programme d’extension et de modernisation des installations industrielles est lancé.'],
  ['2017', 'Triple certification ISO', 'La CBG obtient une triple certification ISO mentionnée dans sa chronologie officielle.'],
  ['2022', 'Certification ASI', 'La CBG obtient la certification Aluminium Stewardship Initiative (ASI), selon la chronologie publiée.'],
  ['1er octobre 2023', '60 ans et 50 ans', 'La CBG célèbre 60 ans d’existence juridique et 50 ans d’exploitation industrielle.'],
  ['2024', 'Production publiée', 'La chronologie officielle mentionne une production de 18 279 755 tonnes de bauxite en 2024.'],
  ['29 janvier 2025', 'ASI Performance Standard', 'La CBG annonce l’obtention de la certification définitive ASI Performance Standard.']
].map(([date, title, copy]) => ({ date, title, copy, source: 'https://cbg-guinee.com/notre-compagnie/notre-histoire' }));

export const officialNews = [
  { date: '31 août 2026', category: 'Communiqué de presse', title: 'Projet de Raffinerie CBG : une nouvelle phase décisive vers la concrétisation du projet', image: 'https://cbg-guinee.com/wp-content/uploads/2026/08/1.webp', source: 'https://cbg-guinee.com/projet-de-raffinerie-cbg-une-nouvelle-phase-decisive-vers-la-concretisation-du-projet/' },
  { date: '18 août 2026', category: 'Communiqué de presse', title: 'La Chambre des Mines de Guinée et la CBG renforcent la réponse au VIH/sida à Kamsar', image: 'https://cbg-guinee.com/wp-content/uploads/2026/08/5Y8A3090-scaled.webp', source: 'https://cbg-guinee.com/la-chambre-des-mines-de-guinee-et-la-compagnie-des-bauxites-de-guinee-renforcent-la-reponse-au-vih-sida-a-kamsar' },
  { date: '8 août 2026', category: 'Actualité', title: 'La CBG, Founding Partner du premier Simandou Mining Summit', image: 'https://cbg-guinee.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-06-at-15.47.34.webp', source: 'https://cbg-guinee.com/' },
  { date: '6 juillet 2026', category: 'Actualité', title: 'La CBG accompagne la 4e édition du Championnat d’Afrique WT/CAT U-12', image: 'https://cbg-guinee.com/wp-content/uploads/2026/07/CBG-111-scaled.jpg', source: 'https://cbg-guinee.com/' },
  { date: '24 juin 2026', category: 'Communiqué de presse', title: 'Wo’Mines 2026 : la CBG aux côtés de Women in Mining Guinée', image: 'https://cbg-guinee.com/wp-content/uploads/2026/06/WoMines-105-1-1-scaled.webp', source: 'https://cbg-guinee.com/womines-2026-la-cbg-aux-cotes-de-women-in-mining-guinee-pour-promouvoir-le-leadership-feminin-dans-le-secteur-minier/' },
  { date: '8 mai 2026', category: 'Actualité', title: 'La CBG accueille des cadres de la SONAP pour un stage d’immersion professionnelle', image: 'https://cbg-guinee.com/wp-content/uploads/2026/05/image-article-01.webp', source: 'https://cbg-guinee.com/' },
  { date: '26 juin 2025', category: 'Communiqué de presse', title: 'Les Mines au service du développement communautaire', image: 'https://cbg-guinee.com/wp-content/uploads/2025/06/DSC06022-scaled-1.webp', source: 'https://cbg-guinee.com/les-mines-au-service-du-developpement-communautaire' },
  { date: '28 mars 2025', category: 'Gouvernance', title: 'Clap de fin pour la 99e session du Comité Technique de la CBG', image: 'https://cbg-guinee.com/wp-content/uploads/2025/01/Janvier-scaled-1-1024x683.jpg', source: 'https://cbg-guinee.com/medias/nouvelles' }
];

export const governance = {
  source,
  ownership: "L’État guinéen détient environ 49 % du capital. Les 51 % restants sont détenus par Halco Mining, composé d’Alcoa, Rio Tinto et Dadco Investments selon la page officielle.",
  bodies: [
    ['Conseil d’administration', 'Définit les orientations stratégiques de la Société et veille à leur mise en œuvre.'],
    ['Comité consultatif', 'Prépare les réunions du Conseil d’administration et examine notamment les budgets, états financiers et investissements stratégiques.'],
    ['Comité technique', 'Examine les sujets liés à l’exploration, au forage, au minage, au rail, à l’usine, à l’expédition et aux installations.'],
    ['Comité d’audit', 'Assiste les organes de gouvernance dans la supervision, le contrôle, les états financiers, les risques et le Code de conduite.'],
    ['CDDES', 'Comité de Développement Durable, Écologique et Social : conseille sur les enjeux environnementaux, sociaux, les risques, les parties prenantes et les doléances.']
  ]
};

export const officialSource = source;
