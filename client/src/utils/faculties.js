const faculties = [
  {
    name: "Agriculture",
    value: "Agric",
    departments: [
      {
        value: "Aquacul",
        name: "Aquaculture And Fishery Management",
      },
      {
        value: "ForestLife",
        name: "Forest Resource And Wild Life",
      },
      {
        value: "AniSci",
        name: "Animal Science",
      },
      {
        value: "CropSci",
        name: "Crop Science",
      },
      {
        value: "AgricEco",
        name: "Agricultural Economics And Extension Services",
      },
      {
        value: "FoodSci",
        name: "Food Science And Nutrition",
      },
      {
        value: "SoilSci",
        name: "Soil Science And Management",
      },
    ],
  },
  {
    name: "Art",
    value: "Art",
    departments: [
      {
        value: "LingStudies",
        name: "Linguistics Studies",
      },
      {
        value: "EngLit",
        name: "English And Literature",
      },
      {
        value: "ForeLang",
        name: "Foreign Languages",
      },
      {
        value: "HisIntStu",
        name: "History And International Studies",
      },
      {
        value: "MasCom",
        name: "Mass Communication",
      },
      {
        value: "Philosophy",
        name: "Philosophy",
      },
      {
        value: "Religion",
        name: "Religion",
      },
      {
        value: "ThrArts",
        name: "Theatre Arts",
      },
    ],
  },
  {
    name: "Social Science",
    value: "SoSci",
    departments: [
      {
        value: "ECO",
        name: "Economics",
      },
      {
        value: "GeoRegPln",
        name: "Geo Regional Planning",
      },
      {
        value: "PolSci",
        name: "Political Science",
      },
      {
        value: "SociWrk",
        name: "Social Work",
      },
      {
        value: "SociAnth",
        name: "Sociology And Anthropology",
      },
    ],
  },
  {
    name: "Engineering",
    value: "Engn",
    departments: [
      {
        value: "ChemEng",
        name: "Chemical Engineering",
      },
      {
        value: "CivilEng",
        name: "Civil Engineering",
      },
      {
        value: "CompEng",
        name: "Computer Engineering",
      },
      {
        value: "ElecEng",
        name: "Electrical/Electronic Engineering",
      },
      {
        value: "MechEng",
        name: "Mechanical Engineering",
      },
      {
        value: "MetalEng",
        name: "Metallurgical And Material Engineering",
      },
      {
        value: "PetroEng",
        name: "Petroleum Engineering",
      },
      {
        value: "ProdEng",
        name: "Production Engineering",
      },
    ],
  },
  {
    name: "Environmental Science",
    value: "EnvSci",
    departments: [
      {
        value: "Archit",
        name: "Architecture",
      },
      {
        value: "EstMgt",
        name: "Estate Management",
      },
      {
        value: "FiApSci",
        name: "Fine/Applied Science",
      },
      {
        value: "Geomantics",
        name: "Geomantics",
      },
      {
        value: "QuanSurv",
        name: "Quantity Survey",
      },
    ],
  },
  {
    name: "Law",
    value: "Law",
    departments: [
      {
        value: "BusLaw",
        name: "Business Law",
      },
      {
        value: "JursInt",
        name: "Jurisprudence And International Law",
      },
      {
        value: "PrivLaw",
        name: "Private And Property Law",
      },
      {
        value: "PubLaw",
        name: "Public Law",
      },
    ],
  },
  {
    name: "Dentistry",
    value: "Dent",
    departments: [
      {
        value: "OralMax",
        name: "Oral And Maxillofacial Surgery",
      },
      {
        value: "OralRad",
        name: "Oral Diagnosis And Radiology",
      },
      {
        value: "PreDent",
        name: "Preventive Dentistry",
      },
      {
        value: "ResDEnt",
        name: "Restorative Dentistry",
      },
    ],
  },
  {
    name: "Management Science",
    value: "MgtSci",
    departments: [
      {
        value: "Accnt",
        name: "Accounting",
      },
      {
        value: "ActSci",
        name: "Actuarial Science",
      },
      {
        value: "BanFin",
        name: "Banking And Finance",
      },
      {
        value: "BusAdmin",
        name: "Business Administrator",
      },
      {
        value: "Ent",
        name: "Entrepreneurship",
      },
      {
        value: "Hrm",
        name: "Human Resources",
      },
      {
        value: "Insu",
        name: "Insurance",
      },
      {
        value: "Mrkt",
        name: "Marketing",
      },
    ],
  },
  {
    name: "Medicine",
    value: "Med",
    departments: [
      {
        value: "Bms",
        name: "Basic Medical Science",
      },
      {
        value: "Dent",
        name: "Dentistry",
      },
      {
        value: "Meds",
        name: "Medicine",
      },
    ],
  },
  {
    name: "Pharmacy",
    value: "Pharma",
    departments: [
      {
        value: "CliPharm",
        name: "Clinical Pharmacy Practice",
      },
      {
        value: "ChemPharm",
        name: "Pharmaceutical Chemistry",
      },
      {
        value: "PharMicro",
        name: "Pharmacuetical Microbiology",
      },
      {
        value: "PharmTox",
        name: "Pharmacology And Toxicology",
      },
    ],
  },
  {
    name: "Physical Science",
    value: "PhySci",
    departments: [
      {
        value: "Chem",
        name: "Chemistry",
      },
      {
        value: "CompSci",
        name: "Computer Science",
      },
      {
        value: "Geo",
        name: "Geology",
      },
      {
        value: "Math",
        name: "Mathematics",
      },
      {
        value: "Phys",
        name: "Physics",
      },
      {
        value: "Stats",
        name: "Statistics",
      },
    ],
  },
  {
    name: "Vetirinary Medicine",
    value: "VetMed",
    departments: [
      {
        value: "VPHM",
        name: "Vet Pub Health and Medicine",
      },
      {
        value: "VTSR",
        name: "Vet Surgery and Radiology",
      },
      {
        value: "VTMicro",
        name: "Veterinary Microbiology",
      },
      {
        value: "VTPara",
        name: "Veterinary Parasitology",
      },
    ],
  },
];

export default faculties;
