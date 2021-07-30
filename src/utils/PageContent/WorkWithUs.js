import wwu from "../../assets/images/work-with-us-1.jpg";

// ----------work with us english----------
export const workWithUsEN = {
  workFerre: {
    sectionName: "Ferre / Work with us",
    title: "Work at Ferre",
    img: wwu,
    paragraphs: [
      "At Ferre we have a passion for low-impact yarns and a deep knowledge of what a recycled yarn is capable of. We are Yarn Experts and Yarn Consultants. We work with brands to understand their needs and help them carry out their fashion projects by creating the best sustainable yarn for their garments.",
    ],
  },
  form: {
    title: "Join our team",
    paragraphs: [
      "We highly value dynamic individuals who make meaningful change happen.",
      "Get in touch.",
    ],
    inputs: [
      { type: "text", name: "name", placeholder: "Name*" },
      { type: "email", name: "email", placeholder: "Email*" },
      { type: "text", name: "phone", placeholder: "Phone" },
    ],
    loadFile: {
      resume: ["Please upload your resume (.pdf / 1MB max.)"],
      load: { type: "file", name: "file" },
    },
    privacy: ["I have read and accept the", "Privacy Policy"],
    send: "SEND",
  },
};

// ----------work with us spanish----------
export const workWithUsES = {
  workFerre: {
    sectionName: "Ferre / Trabaja con nosotros",
    title: "Trabajar en Ferre",
    img: wwu,
    paragraphs: [
      "En Ferre tenemos pasión por los hilos de bajo impacto y un profundo conocimiento de las posibilidades del hilo reciclado. Somos Expertos en Hilo y Consultores de Hilo. Trabajamos con las marcas para entender sus necesidades y ayudarles a llevar a cabo sus proyectos de moda, creando el mejor hilo Sustentable para sus prendas.",
    ],
  },
  form: {
    title: "Únete a nuestro equipo",
    paragraphs: [
      "Valoramos mucho a las personas dinámicas que nos ayudan a lograr cambios significativos.",
      "Contacta con nosotros.",
    ],
    inputs: [
      { type: "text", name: "name", placeholder: "Nombre*" },
      { type: "email", name: "email", placeholder: "Email*" },
      { type: "text", name: "phone", placeholder: "Télefono" },
    ],
    loadFile: {
      resume: ["Por favor, adjunta tu CV (.pdf / 1MB max.)"],
      load: { type: "file", name: "file" },
    },
    privacy: ["He leído y acepto la", "Política de privacidad"],
    send: "ENVIAR",
  },
};
