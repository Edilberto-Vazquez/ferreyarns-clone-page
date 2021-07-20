// positive impacts slide
// slide
import coyuchi from "../assets/images/positive_impact_slide/coyuchi.jpg";
import kimoaH from "../assets/images/positive_impact_slide/kimoa-hoodie.jpg";
import kimoaTs from "../assets/images/positive_impact_slide/kimoa-tshirt.jpg";
import mudJ from "../assets/images/positive_impact_slide/mud-jeans.jpg";
// title
import fblue from "../assets/icons/ecological_title/fblue.svg";
import fjeans from "../assets/icons/ecological_title/fjeans.svg";
import fearth from "../assets/icons/ecological_title/fearth.svg";
// compositon
import cottonI from "../assets/icons/ecological_description/cotton-icon-white.svg";
import poliesterI from "../assets/icons/ecological_description/poliester-icon-white.svg";
import otherF from "../assets/icons/ecological_description/other-fibers.svg";
import oraganicC from "../assets/icons/ecological_description/organic-cotton.svg";
// envSavItemEn images
import bi from "../assets/icons/positive_impact/bottle-icon.svg";
import ci from "../assets/icons/positive_impact/chemical-icon.svg";
import co2 from "../assets/icons/positive_impact/co2-icon.svg";
import ei from "../assets/icons/positive_impact/energy-icon.svg";
import ti from "../assets/icons/positive_impact/textil-icon.svg";
import wi from "../assets/icons/positive_impact/water-icon.svg";

export const posImpSlide = [
  {
    sectionImg: kimoaTs,
    titleImg: fblue,
    brand: "Kimoa",
    garment: "T-SHIRT",
    compositions: [
      { percentage: "50%", material: "rrCotton" },
      { percentage: "47%", material: "rPolyester" },
      { percentage: "3%", material: "oFibers" },
    ],
    totalSavings: [
      { title: "liters of water saved", number: "1,343", timg: wi },
      { title: "kg of CO_2 saved", number: "2", timg: co2 },
      { title: "kg of chemicals saved", number: "0.1", timg: ci },
      { title: "kWh of energy saved", number: "5", timg: ei },
      { title: "PET bottle units saved", number: "4", timg: bi },
    ],
    dataSource:
      "Data calculated using the LCA methodology and verified by AITEX, Universitat de València and UNESCO.",
  },
  {
    sectionImg: kimoaH,
    titleImg: fblue,
    brand: "Kimoa",
    garment: "Hoodie",
    compositions: [
      { percentage: "50%", material: "rrCotton" },
      { percentage: "47%", material: "rPolyester" },
      { percentage: "3%", material: "oFibers" },
    ],
    totalSavings: [
      { title: "liters of water saved", number: "2,090", timg: wi },
      { title: "kg of 〖CO〗_2 saved", number: "3", timg: co2 },
      { title: "kg of chemicals saved", number: "0.2", timg: ci },
      { title: "kWh of energy saved", number: "8", timg: ei },
      { title: "PET bottle units saved", number: "6", timg: bi },
    ],
    dataSource:
      "Data calculated using the LCA methodology and verified by AITEX, Universitat de València and UNESCO.",
  },
  {
    sectionImg: mudJ,
    titleImg: fjeans,
    brand: "Mud Jeans",
    garment: "Denim",
    compositions: [
      { percentage: "50%", material: "rrCotton" },
      { percentage: "50%", material: "oCotton" },
    ],
    totalSavings: [
      { title: "liters of water saved", number: "5,971", timg: wi },
      { title: "kg of 〖CO〗_2 saved", number: "9", timg: co2 },
      { title: "kg of chemicals saved", number: "0.5", timg: ci },
      { title: "kWh of energy saved", number: "22", timg: ei },
    ],
    dataSource:
      "Data calculated using the LCA methodology and verified by AITEX, Universitat de València and UNESCO.",
  },
  {
    sectionImg: coyuchi,
    titleImg: fblue,
    brand: "Coyuchi",
    garment: "Blanket",
    compositions: [
      { percentage: "45%", material: "rrCotton" },
      { percentage: "50%", material: "oCotton" },
      { percentage: "3%", material: "oFibers" },
    ],
    totalSavings: [
      { title: "liters of water saved", number: "16,420", timg: wi },
      { title: "kg of 〖CO〗_2 saved", number: "25", timg: co2 },
      { title: "kg of chemicals saved", number: "1.2", timg: ci },
      { title: "kWh of energy saved", number: "62", timg: ei },
    ],
    dataSource:
      "Data calculated using the LCA methodology and verified by AITEX, Universitat de València and UNESCO.",
  },
];

export const envSavItemEn = [
  { img: bi, number: 28, title: "billion liters of water saved" },
  {
    img: ci,
    number: 40.2,
    title: "million kg of CO2 emissions saved",
  },
  { img: co2, number: 2.1, title: "million kg of chemicals saved" },
  {
    img: ei,
    number: 1.9,
    title: "million kg textile waste recycled",
  },
  { img: ti, number: 102.7, title: "million kWh of energy saved" },
  { img: wi, number: 5.8, title: "million PET bottle units saved" },
];
