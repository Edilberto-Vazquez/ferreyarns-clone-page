// building zero impact image
import products from "../../assets/images/products/products.jpg";
// procucts section
import ferreYarns from "../../assets/icons/products/ferre-yarns.svg";
// procucts section types
import fblue from "../../assets/icons/products/f_images/fblue.svg";
import fearth from "../../assets/icons/products/f_images/fearth.svg";
import fjeans from "../../assets/icons/products/f_images/fjeans.svg";
import funo from "../../assets/icons/products/f_images/funo.svg";
// procucts section materials
import rrCotton from "../../assets/icons/products/materials/cotton-icon-white.svg";
import rPolyester from "../../assets/icons/products/materials/poliester-icon-white.svg";
import rWool from "../../assets/icons/products/materials/wool.svg";
import oCotton from "../../assets/icons/products/materials/organic-cotton.svg";
import tencel from "../../assets/icons/products/materials/tecnel.svg";
import acrylic from "../../assets/icons/products/materials/acrylic.svg";
import polyester from "../../assets/icons/products/materials/polyester.svg";
import polyamide from "../../assets/icons/products/materials/polyamide.svg";
import oFibers from "../../assets/icons/products/materials/other-fibers.svg";
import rrDenim from "../../assets/icons/products/materials/denim.svg";

// -----------Products english-----------
export const productsEN = {
  zeroImpact: {
    sectionName: "Ferre / Products",
    title: "Building a zero-impact fashion",
    img: products,
    paragraphs: [
      "We make high-quality recycled yarns for all types of fashion products, accessories and home textiles. Our products are made with Recover™, the lowest-impact recycled cotton fiber in today’s global market, according to the Higg MSI Index.",
      "We have a passion for low-impact yarns and a deep knowledge of what a recycled yarn is capable of. Our Yarn Consultants work with you to understand your brand’s needs and help you carry out your fashion projects by creating the best blend for your garments.",
    ],
  },
  ecologicalSection: {
    img: ferreYarns,
    paragraphs: [
      "Ferre yarns are made from recycled cotton textile waste, thus a percentage of other fibers such as polyester, viscose, acrylic, wool or nylon may be identified during final composition testing.",
    ],
    materialSection: [
      { tab: 0, name: "All" },
      { tab: 1, name: "Recover™ recycled cotton" },
      { tab: 2, name: "Recycled Polyester" },
      { tab: 3, name: "Recycled wool" },
      { tab: 4, name: "Organic cotton" },
      { tab: 5, name: "Post-consumer" },
      { tab: 6, name: "TENCEL™" },
      { tab: 7, name: "Acrylic" },
      { tab: 8, name: "Polyester" },
    ],

    materialItem: [
      {
        tabs: [0, 1, 7],
        img: funo,
        type: "COPAC",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 28", "Ne 17"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "50%",
          },

          { name: "Acrylic", img: acrylic, percentage: "45%" },

          { name: "Other fibers", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 8],
        img: funo,
        type: "POLICOTON",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 40", "Ne 24"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "52%",
          },
          { name: "Polyester", img: polyester, percentage: "45%" },
          { name: "Other fibers", img: oFibers, percentage: "3%" },
        ],
      },
      {
        tabs: [0, 1, 8],
        img: funo,
        type: "COTOPOL 30",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 30", "Ne 18"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "60%",
          },
          { name: "Polyester", img: polyester, percentage: "35%" },
          { name: "Other fibers", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 8],
        img: funo,
        type: "COTOTAP",
        aplication: "Weaving.",
        specs: ["Nm 15", "Ne 9"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "70%",
          },
          { name: "Polyester", img: polyester, percentage: "25%" },
          { name: "Other fibers", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 8],
        img: funo,
        type: "COTOPOL 20",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 20", "Ne 12"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "70%",
          },
          { name: "Polyester", img: polyester, percentage: "25%" },
          { name: "Other fibers", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 8],
        img: funo,
        type: "COTOPOL 90/10",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 20", "Ne 12"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "87%",
          },
          { name: "Polyester", img: polyester, percentage: "10%" },
          { name: "Other fibers", img: oFibers, percentage: "3%" },
        ],
      },
      {
        tabs: [0, 1, 2],
        img: fblue,
        type: "B-52",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 34", "Ne 20", "Nm 50", "Ne 30", "Nm28", "Ne 17"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "50%",
          },
          { name: "Recycled Polyester", img: rPolyester, percentage: "47%" },
          { name: "Other fibers", img: oFibers, percentage: "3%" },
        ],
      },
      {
        tabs: [0, 1, 2],
        img: fblue,
        type: "B-75",
        aplication: "Weaving.",
        specs: ["Nm 13.5", "Ne 8"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "70%",
          },
          { name: "Recycled Polyester", img: rPolyester, percentage: "25%" },
          { name: "Other fibers", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 4],
        img: fearth,
        type: "E-50",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 44", "Ne 26", "Nm 28", "Ne 17"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "50%",
          },
          { name: "Organic cotton", img: oCotton, percentage: "50%" },
        ],
      },
      {
        tabs: [0, 2, 3],
        img: fearth, // is fwool
        type: "W-25",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 28", "Ne 17"],
        materials: [
          {
            name: "Recycled post-industrial wool",
            img: rWool,
            percentage: "25%",
          },
          { name: "Recycled Polyester", img: rPolyester, percentage: "55%" },
          { name: "Polyamide", img: polyamide, percentage: "17%" },
          { name: "Other fibers", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 4, 5],
        img: fjeans,
        type: "J-30",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 15", "Ne 9"],
        materials: [
          { name: "Recover™ recycled denim", img: rrDenim, percentage: "27%" },
          { name: "Organic cotton", img: oCotton, percentage: "70%" },
          { name: "Other fibers", img: oFibers, percentage: "3%" },
        ],
      },
      {
        tabs: [0, 1, 4, 5],
        img: fjeans,
        type: "j-50",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 15", "Ne 9"],
        materials: [
          { name: "Recover™ recycled denim", img: rrDenim, percentage: "45%" },
          { name: "Organic cotton", img: oCotton, percentage: "50%" },
          { name: "Other fibers", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 2],
        img: fearth, // is ftech
        type: "T-25",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 50", "Ne 30"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "25%",
          },
          { name: "Recycled Polyester", img: rPolyester, percentage: "75%" },
        ],
      },
      {
        tabs: [0, 1, 2, 6],
        img: funo, // is ftres
        type: "3-25",
        aplication: "Knitting, weaving and hosiery.",
        specs: ["Nm 50", "Ne 30"],
        materials: [
          {
            name: "Recover™ recycled cotton",
            img: rrCotton,
            percentage: "25%",
          },
          { name: "Recycled Polyester", img: rPolyester, percentage: "45%" },
          { name: "TENCEL™", img: tencel, percentage: "30%" },
        ],
      },
    ],
  },
  form: {
    title: "Request our Color Book",
    paragraphs: [
      "In it you will find our stock service products, applications and technical information for all of our yarn families and subfamilies. The Color Book perfectly embodies our passion for beautiful, accurate colors and our constant pursuit of a zero-impact fashion.",
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
};

// -----------Products spanish-----------
export const productsES = {
  zeroImpact: {
    sectionName: "Ferre / Productos",
    title: "Impulsando una moda de impacto cero",
    img: products,
    paragraphs: [
      "Fabricamos hilos reciclados de alta calidad para todo tipo de productos de moda, accesorios y textil hogar. Nuestros productos están hechos con Recover™, la fibra de algodón reciclado de menor impacto del mercado global, según el Indice Higg MSI.",
      "Tenemos pasión por los hilos de bajo impacto y un profundo conocimiento de las posibilidades del hilo reciclado. Nuestros Consultores de Hilo trabajarán contigo para comprender las necesidades de tu marca y ayudarte a llevar a cabo tus proyectos de moda, creando el mejor hilo sostenible para tus prendas.",
    ],
  },
  ecologicalSection: {
    img: ferreYarns,
    paragraphs: [
      "Los hilos Ferre están hechos a partir de residuo textil de algodón reciclado, por lo que puede detectarse un porcentaje de otras fibras como poliéster, viscosa, acrílico, lana o nylon en las pruebas finales de composición.",
    ],
    materialSection: [
      { tab: 0, name: "Todos" },
      { tab: 1, name: "Algodón reciclado Recover™ " },
      { tab: 2, name: "Poliéster reciclado" },
      { tab: 3, name: "Lana reciclada" },
      { tab: 4, name: "Algodón orgánico" },
      { tab: 5, name: "Posconsumo" },
      { tab: 6, name: "TENCEL™" },
      { tab: 7, name: "Acrílico" },
      { tab: 8, name: "Poliéster" },
    ],

    materialItem: [
      {
        tabs: [0, 1, 7],
        img: funo,
        type: "COPAC",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 28", "Ne 17"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "50%",
          },

          { name: "Acrílico", img: acrylic, percentage: "45%" },

          { name: "Otras fibras", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 8],
        img: funo,
        type: "POLICOTON",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 40", "Ne 24"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "52%",
          },
          { name: "Poliéster", img: polyester, percentage: "45%" },
          { name: "Otras fibras", img: oFibers, percentage: "3%" },
        ],
      },
      {
        tabs: [0, 1, 8],
        img: funo,
        type: "COTOPOL 30",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 30", "Ne 18"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "60%",
          },
          { name: "Poliéster", img: polyester, percentage: "35%" },
          { name: "Otras fibras", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 8],
        img: funo,
        type: "COTOTAP",
        aplication: "Weaving.",
        specs: ["Nm 15", "Ne 9"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "70%",
          },
          { name: "Poliéster", img: polyester, percentage: "25%" },
          { name: "Otras fibras", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 8],
        img: funo,
        type: "COTOPOL 20",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 20", "Ne 12"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "70%",
          },
          { name: "Poliéster", img: polyester, percentage: "25%" },
          { name: "Otras fibras", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 8],
        img: funo,
        type: "COTOPOL 90/10",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 20", "Ne 12"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "87%",
          },
          { name: "Poliéster", img: polyester, percentage: "10%" },
          { name: "Otras fibras", img: oFibers, percentage: "3%" },
        ],
      },
      {
        tabs: [0, 1, 2],
        img: fblue,
        type: "B-52",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 34", "Ne 20", "Nm 50", "Ne 30", "Nm28", "Ne 17"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "50%",
          },
          { name: "Poliéster reciclado", img: rPolyester, percentage: "47%" },
          { name: "Otras fibras", img: oFibers, percentage: "3%" },
        ],
      },
      {
        tabs: [0, 1, 2],
        img: fblue,
        type: "B-75",
        aplication: "Weaving.",
        specs: ["Nm 13.5", "Ne 8"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "70%",
          },
          { name: "Poliéster reciclado", img: rPolyester, percentage: "25%" },
          { name: "Otras fibras", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 4],
        img: fearth,
        type: "E-50",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 44", "Ne 26", "Nm 28", "Ne 17"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "50%",
          },
          { name: "Algodón orgánico", img: oCotton, percentage: "50%" },
        ],
      },
      {
        tabs: [0, 2, 3],
        img: fearth, // is fwool
        type: "W-25",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 28", "Ne 17"],
        materials: [
          {
            name: "Lana posindustrial reciclada",
            img: rWool,
            percentage: "25%",
          },
          { name: "Poliéster reciclado", img: rPolyester, percentage: "55%" },
          { name: "Poliamida", img: polyamide, percentage: "17%" },
          { name: "Otras fibras", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 4, 5],
        img: fjeans,
        type: "J-30",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 15", "Ne 9"],
        materials: [
          { name: "Denim reciclado Recover™", img: rrDenim, percentage: "27%" },
          { name: "Algodón orgánico", img: oCotton, percentage: "70%" },
          { name: "Otras fibras", img: oFibers, percentage: "3%" },
        ],
      },
      {
        tabs: [0, 1, 4, 5],
        img: fjeans,
        type: "j-50",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 15", "Ne 9"],
        materials: [
          { name: "Denim reciclado Recover™", img: rrDenim, percentage: "45%" },
          { name: "Algodón orgánico", img: oCotton, percentage: "50%" },
          { name: "Otras fibras", img: oFibers, percentage: "5%" },
        ],
      },
      {
        tabs: [0, 1, 2],
        img: fearth, // is ftech
        type: "T-25",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 50", "Ne 30"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "25%",
          },
          { name: "Poliéster reciclado", img: rPolyester, percentage: "75%" },
        ],
      },
      {
        tabs: [0, 1, 2, 6],
        img: funo, // is ftres
        type: "3-25",
        aplication: "Géneros de punto, tejidos y calcetería.",
        specs: ["Nm 50", "Ne 30"],
        materials: [
          {
            name: "Algodón reciclado Recover™",
            img: rrCotton,
            percentage: "25%",
          },
          { name: "Poliéster reciclado", img: rPolyester, percentage: "45%" },
          { name: "TENCEL™", img: tencel, percentage: "30%" },
        ],
      },
    ],
  },
  form: {
    title: "Request our Color Book",
    paragraphs: [
      "En él encontrarás los colores, gramajes y aplicaciones de todas nuestras familias y subfamilias de hilos. El Color Book encarna a la perfección nuestra pasión por los colores bellos y precisos y nuestra constante búsqueda de una moda de impacto cero.",
    ],
    inputs: [
      { type: "text", name: "name", placeholder: "Nombre*" },
      { type: "text", name: "company", placeholder: "Compañia*" },
      { type: "email", name: "email", placeholder: "Email*" },
      { type: "text", name: "phone", placeholder: "Teléfono" },
      { type: "text", name: "message", placeholder: "Mensaje*" },
    ],
    privacy: ["He leído y acepto la", "Política de privacidad"],
    send: "ENVIAR",
  },
};
