import home1 from "../../assets/images/home-1.jpg";
import home2 from "../../assets/images/home-2.jpg";
import home3 from "../../assets/images/home-3.jpg";
import brands1 from "../../assets/images/brands-1.gif";
import brands2 from "../../assets/images/brands-2.gif";

// English language
export const homeEN = {
  title: "Empowering circular fashion since 1947",
  buldingFashion: {
    title: "Building a zero-impact fashion",
    img: home1,
    paragraphs: [
      "We make high-quality recycled yarns for all types of fashion products, accessories and home textiles. Our products are made with Recover™, the lowest-impact recycled cotton fiber in today’s global market, according to the Higg MSI Index.",
    ],
  },
  circularProc: {
    title: "A circular process",
    img: home2,
    paragraphs: [
      "Recycled raw material, zero chemicals, zero water and minimal CO2 emissions. We keep textile waste out of landfill or incineration and we become less dependent on virgin finite materials. Our resource- and energy-efficient manufacturing process reflects our strong will to minimize our impact.",
    ],
  },
  fullyTT: {
    title: "Fully traceable and transparent",
    img: home3,
    paragraphs: [
      "We share the traceability and sustainability performance of each of our products to drive positive change and meet consumer demand for true transparency in fashion.",
      "All of our sustainability claims are supported by the most respected third-party certifications, as well as by studies we have conducted using LCA (Life Cycle Assessment) methodology.",
    ],
  },
  form: {
    title: "How can we help you?",
    paragraphs: [
      "Our facilities in Banyeres de Mariola are home to a great team of recycled yarn consultants and the most advanced technology to help you carry out your sustainable fashion project.",
      "Contact us to receive information about our products and to inquire about prices and minimum order quantities.",
    ],
    inputs: [
      { type: "text", name: "name", placeholder: "Name*" },
      { type: "text", name: "company", placeholder: "Company*" },
      { type: "email", name: "email", placeholder: "Email*" },
      { type: "text", name: "phone", placeholder: "Phone" },
      { type: "text", name: "message", placeholder: "Message*" },
    ],
    privacy: ["I have read and accept the", "Privacy Policy"],
    send: "SEND",
  },
  ourClients: "Our clients",
};

// Spanish language
export const homeES = {
  title: "Impulsando la moda circular desde 1947",
  buldingFashion: {
    title: "Impulsando una moda de impacto cero",
    img: home1,
    paragraphs: [
      "Fabricamos hilos reciclados de alta calidad para todo tipo de productos, de moda, accesorios y textil hogar. Nuestros productos están hechos con Recover™, la fibra de algodón reciclado de menor impacto del mercado global, según el Indice Higg MSI.",
    ],
  },
  circularProc: {
    title: "Un proceso circular",
    img: home2,
    paragraphs: [
      "Materia prima reciclada, cero productos químicos, cero agua y mínimas emisiones de CO2. Evitamos que el residuo textil vaya al vertedero o la incineración y somos menos dependientes de materias primas vírgenes y finitas. Nuestro proceso de fabricación eficiente refleja nuestra firme voluntad de minimizar nuestro impacto.",
    ],
  },
  fullyTT: {
    title: "Transparencia y trazabilidad",
    img: home2,
    paragraphs: [
      "Compartimos los datos de trazabilidad y sostenibilidad de cada uno de nuestros productos para satisfacer la demanda de una moda transparente por parte de los consumidores e impulsar el cambio positivo.",
      "Todas nuestras afirmaciones sobre sostenibilidad están respaldadas por las certificaciones más respetadas, así como por estudios que hemos realizado utilizando la metodología LCA (Life Cycle Assessment).",
    ],
  },
  form: {
    title: "¿En qué podemos ayudarte?",
    paragraphs: [
      "Un gran equipo de consultores de hilo reciclado y la más avanzada tecnología en nuestras instalaciones de Banyeres de Mariola te ayudarán a hacer realidad tu proyecto de moda sostenible.",
      "Contáctanos para recibir información sobre nuestros productos, precios y cantidades mínimas de pedido.",
    ],
    inputs: [
      { type: "text", name: "name", placeholder: "Nombre*" },
      { type: "text", name: "company", placeholder: "Compañia*" },
      { type: "email", name: "email", placeholder: "Email*" },
      { type: "text", name: "phone", placeholder: "Télefono" },
      { type: "text", name: "message", placeholder: "Mensaje*" },
    ],
    privacy: ["He leído y acepto la", "Política de privacidad"],
    send: "ENVIAR",
  },
  ourClients: "Nuestros clientes",
};
