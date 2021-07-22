// building zero impact image
import products from "../../assets/images/products/products.jpg";

// procucts section
import ferreYarns from "../../assets/icons/products/ferre-yarns.svg";
import fblue from "../../assets/icons/products/f_images/fblue.svg";
import fearth from "../../assets/icons/products/f_images/fearth.svg";
import fjeans from "../../assets/icons/products/f_images/fjeans.svg";
import funo from "../../assets/icons/products/f_images/funo.svg";

export const productsEN = {
  zeroImpact: {
    sectionName: "Ferre / Products",
    title: "Building a zero-impact fashion",
    img: "",
    paragraph: [
      "We make high-quality recycled yarns for all types of fashion products, accessories and home textiles. Our products are made with Recover™, the lowest-impact recycled cotton fiber in today’s global market, according to the Higg MSI Index. We have a passion for low-impact yarns and a deep knowledge of what a recycled yarn is capable of. Our Yarn Consultants work with you to understand your brand’s needs and help you carry out your fashion projects by creating the best blend for your garments.",
    ],
  },
  ecologicalSection: {
    img: ferreYarns,
    paragraph: [
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
        tabs: [0], 
        img=funo, 
        type :"COPAC", 
        aplication:"Knitting, weaving and hosiery.", 
        specs: ["Nm 28", "Ne 17"], 
        materials: ["Recover™ recycled cotton", "Acrylic", "Other fibers"],
      },
      
    ],
  },
};

// { key: "rrCotton", name: "Recover™ recycled cotton", img: rrCotton },
    // { key: "rPolyester", name: "Recycled Polyester", img: rPolyester },
    // { key: "rWool", name: "Recycled wool", img: rWool },
    // { key: "oCotton", name: "Organic cotton", img: oCotton },
    // { key: "tencel", name: "TENCEL™", img: tencel },
    // { key: "acrylic", name: "Acrylic", img: acrylic },
    // { key: "polyester", name: "Polyester", img: polyester },
    // { key: "polyamide", name: "Polyamide", img: polyamide },
    // { key: "oFibers", name: "Other fibers", img: oFibers },
    // { key: "rrDenim", name: "Recover™ recycled denim", img: rrDenim },