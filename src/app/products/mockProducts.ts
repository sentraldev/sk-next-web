import {
  brands,
  displaySizeOptions,
  // processorOptions,
  ramOptions,
  storageOptions,
} from "../constants";
import { Product } from "../../models/product";

export const generateMockProducts: Product[] = [
  ...Array.from({ length: 100 }, (_, i) => {
    const id = i + 1;
    const models = [
      "ProBook",
      "VivoBook",
      "ThinkPad",
      "Swift",
      "Inspiron",
      "MacBook",
      "GalaxyBook",
      "Satellite",
      "Surface",
      "Modern",
    ];
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    const name = `${brand} ${model} ${randomNum}`;
    const category = "Laptop";
    const basePrice = Math.floor(Math.random() * 15000000) + 3500000;
    const price = basePrice;
    const ram = ramOptions[Math.floor(Math.random() * ramOptions.length)];
    const storage =
      storageOptions[Math.floor(Math.random() * storageOptions.length)];
    const processor: "Intel" | "AMD" | "Apple" =
      brand == "Apple"
        ? "Apple"
        : (["Intel", "AMD"][Math.floor(Math.random() * 2)] as "Intel" | "AMD");
    const displaySize =
      displaySizeOptions[Math.floor(Math.random() * displaySizeOptions.length)];
    const hasDiscount = Math.random() > 0.7;
    const discount = hasDiscount
      ? Math.floor(Math.random() * 30) + 5
      : undefined;
    const priceAfterDiscount = hasDiscount
      ? basePrice - Math.floor(basePrice * (discount! / 100))
      : undefined;
    const badge = hasDiscount ? `Diskon ${discount}%` : "";

    return {
      id,
      name,
      category,
      brand,
      price,
      img: "/temp/laptop.jpg",
      badge,
      discount,
      priceAfterDiscount,
      description: "",
      ram,
      storage,
      processor,
      displaySize,
    };
  }),
];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Lenovo GalaxyBook 4667",
    category: "Laptop",
    brand: "Lenovo",
    price: 8858246,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "256GB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Lenovo Ga\nlaxyBook 4667,
    category: Laptop,\n
    brand: Lenovo,\n
    price:885824,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 256GB,\n
    processor: Intel,\n
    displaySize:13`,
  },
  {
    id: 2,
    name: "Dell ProBook 6256",
    category: "Laptop",
    brand: "Dell",
    price: 16881579,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "512GB",
    processor: "AMD",
    displaySize: 14,
    description: `
    name: Dell ProB\nook 6256,
    category: Laptop,\n
    brand: Dell,\n
    price:1688157,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:14`,
  },
  {
    id: 3,
    name: "Apple Inspiron 2181",
    category: "Laptop",
    brand: "Apple",
    price: 8990401,
    img: "/temp/laptop.jpg",
    badge: "Diskon 27%",
    discount: 27,
    priceAfterDiscount: 6562993,
    ram: 32,
    storage: "256GB",
    processor: "Apple",
    displaySize: 14,
    description: `
    brand: Apple,
\n    price:899040,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 27%,\n
    discount:2,\n
    priceAfterDis\ncount:656299,
    ram:3,\n
    storage:\n 256GB,
    processor: Apple,\n
    displaySize:14`,
  },
  {
    id: 4,
    name: "Apple ProBook 7094",
    category: "Laptop",
    brand: "Apple",
    price: 14176933,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "2TB",
    processor: "Apple",
    displaySize: 14,
    description: `
    name: Apple Pro\nBook 7094,
    category: Laptop,\n
    brand: Apple,\n
    price:1417693,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 2TB,\n
    processor: Appl\ne,
    displaySize:14`,
  },
  {
    id: 5,
    name: "Apple Inspiron 1016",
    category: "Laptop",
    brand: "Apple",
    price: 7280531,
    img: "/temp/laptop.jpg",
    badge: "Diskon 32%",
    discount: 32,
    priceAfterDiscount: 4950762,
    ram: 8,
    storage: "512GB",
    processor: "Apple",
    displaySize: 14,
    description: `
    brand: Apple,
\n    price:728053,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 32%,\n
    discount:3,\n
    priceAfterDis\ncount:495076,
    ram:,\n
    storage\n: 512GB,
    processor: Apple,\n
    displaySize:14`,
  },
  {
    id: 6,
    name: "Lenovo GalaxyBook 7167",
    category: "Laptop",
    brand: "Lenovo",
    price: 6920605,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "512GB",
    processor: "AMD",
    displaySize: 14,
    description: `
    name: Lenovo Ga\nlaxyBook 7167,
    category: Laptop,\n
    brand: Lenovo,\n
    price:692060,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:14`,
  },
  {
    id: 7,
    name: "HP Modern 3009",
    category: "Laptop",
    brand: "HP",
    price: 15051398,
    img: "/temp/laptop.jpg",
    badge: "Diskon 17%",
    discount: 17,
    priceAfterDiscount: 2492661,
    ram: 4,
    storage: "1TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    brand: HP,
\n    price:1505139,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 17%,\n
    discount:1,\n
    priceAfterDis\ncount:249266,
    ram:,\n
    storage\n: 1TB,
    processor: Intel,\n
    displaySize:13`,
  },
  {
    id: 8,
    name: "HP GalaxyBook 7544",
    category: "Laptop",
    brand: "HP",
    price: 18390163,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "256GB",
    processor: "Intel",
    displaySize: 15,
    description: `
    name: HP Galaxy\nBook 7544,
    category: Laptop,\n
    brand: HP,\n
    price:183901\n6,
    img:"/temp/lap\ntop.jpg,
    badge:",\n
    ram:1,\n
    storage: 256GB,\n
    processor: Intel,\n
    displaySize:15`,
  },
  {
    id: 9,
    name: "Acer VivoBook 4920",
    category: "Laptop",
    brand: "Acer",
    price: 8114772,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 32,
    storage: "2TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Acer Vivo\nBook 4920,
    category: Laptop,\n
    brand: Acer,\n
    price:811477,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:3,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 10,
    name: "Toshiba GalaxyBook 9097",
    category: "Laptop",
    brand: "Toshiba",
    price: 17727271,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "512GB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: Toshiba G\nalaxyBook 9097,
    category: Laptop,\n
    brand: Toshiba,\n
    price:1772727,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 11,
    name: "Asus VivoBook 4354",
    category: "Laptop",
    brand: "Asus",
    price: 7232367,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "1TB",
    processor: "Intel",
    displaySize: 15,
    description: `
    name: Asus Vivo\nBook 4354,
    category: Laptop,\n
    brand: Asus,\n
    price:723236,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:1,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:15`,
  },
  {
    id: 12,
    name: "Toshiba ThinkPad 6050",
    category: "Laptop",
    brand: "Toshiba",
    price: 12909712,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 15,
    description: `
    name: Toshiba T\nhinkPad 6050,
    category: Laptop,\n
    brand: Toshiba,\n
    price:1290971,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:1,\n
    storage: 512GB,\n
    processor: Intel,\n
    displaySize:15`,
  },
  {
    id: 13,
    name: "MSI ProBook 7190",
    category: "Laptop",
    brand: "MSI",
    price: 4597523,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "1TB",
    processor: "Intel",
    displaySize: 14,
    description: `
    name: MSI ProBo\nok 7190,
    category: Laptop,\n
    brand: MSI,\n
    price:459752,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:14`,
  },
  {
    id: 14,
    name: "MSI Satellite 1226",
    category: "Laptop",
    brand: "MSI",
    price: 13905460,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "2TB",
    processor: "AMD",
    displaySize: 13,
    description: `
    name: MSI Satel\nlite 1226,
    category: Laptop,\n
    brand: MSI,\n
    price:1390546\n,
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:2,\n
    storage: 2TB,\n
    processor: AMD,\n
    displaySize:13`,
  },
  {
    id: 15,
    name: "Lenovo Inspiron 1268",
    category: "Laptop",
    brand: "Lenovo",
    price: 8978160,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "512GB",
    processor: "AMD",
    displaySize: 16,
    description: `
    name: Lenovo In\nspiron 1268,
    category: Laptop,\n
    brand: Lenovo,\n
    price:897816,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:1,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 16,
    name: "Acer GalaxyBook 1252",
    category: "Laptop",
    brand: "Acer",
    price: 8016056,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "2TB",
    processor: "AMD",
    displaySize: 16,
    description: `
    name: Acer Gala\nxyBook 1252,
    category: Laptop,\n
    brand: Acer,\n
    price:801605,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:2,\n
    storage: 2TB,\n
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 17,
    name: "Lenovo ThinkPad 5106",
    category: "Laptop",
    brand: "Lenovo",
    price: 16445311,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "2TB",
    processor: "AMD",
    displaySize: 16,
    description: `
    name: Lenovo Th\ninkPad 5106,
    category: Laptop,\n
    brand: Lenovo,\n
    price:1644531,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:1,\n
    storage: 2TB,\n
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 18,
    name: "Dell Surface 3260",
    category: "Laptop",
    brand: "Dell",
    price: 7813637,
    img: "/temp/laptop.jpg",
    badge: "Diskon 29%",
    discount: 29,
    priceAfterDiscount: 5547683,
    ram: 8,
    storage: "512GB",
    processor: "Intel",
    displaySize: 16,
    description: `
    brand: Dell,
\n    price:781363,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 29%,\n
    discount:2,\n
    priceAfterDis\ncount:554768,
    ram:,\n
    storage\n: 512GB,
    processor: Intel,\n
    displaySize:16`,
  },
  {
    id: 19,
    name: "Samsung Swift 5811",
    category: "Laptop",
    brand: "Samsung",
    price: 18408018,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "2TB",
    processor: "Intel",
    displaySize: 14,
    description: `
    name: Samsung S\nwift 5811,
    category: Laptop,\n
    brand: Samsung,\n
    price:1840801,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:1,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:14`,
  },
  {
    id: 20,
    name: "Dell VivoBook 7445",
    category: "Laptop",
    brand: "Dell",
    price: 14330180,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "1TB",
    processor: "AMD",
    displaySize: 16,
    description: `
    name: Dell Vivo\nBook 7445,
    category: Laptop,\n
    brand: Dell,\n
    price:1433018,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 1TB,\n
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 21,
    name: "Acer Swift 8630",
    category: "Laptop",
    brand: "Acer",
    price: 11027000,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 32,
    storage: "2TB",
    processor: "Intel",
    displaySize: 15,
    description: `
    name: Acer Swif\nt 8630,
    category: Laptop,\n
    brand: Acer,\n
    price:1102700,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:3,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:15`,
  },
  {
    id: 22,
    name: "Samsung Swift 3121",
    category: "Laptop",
    brand: "Samsung",
    price: 12810996,
    img: "/temp/laptop.jpg",
    badge: "Diskon 9%",
    discount: 9,
    priceAfterDiscount: 1658007,
    ram: 4,
    storage: "2TB",
    processor: "Intel",
    displaySize: 15,
    description: `
    brand: Samsung,\n
    price:1281099,\n
    img:"/temp/laptop.jpg,\n
    badge: Diskon 9%,\n
    discount:,\n
    priceAfterDiscount:165800,\n
    ram:,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:15`,
  },
  {
    id: 23,
    name: "Dell MacBook 1302",
    category: "Laptop",
    brand: "Dell",
    price: 7625289,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "1TB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: Dell MacB\nook 1302,
    category: Laptop,\n
    brand: Dell,\n
    price:762528,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 1TB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 24,
    name: "MSI Modern 6246",
    category: "Laptop",
    brand: "MSI",
    price: 15341662,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "256GB",
    processor: "AMD",
    displaySize: 13,
    description: `
    name: MSI Moder\nn 6246,
    category: Laptop,\n
    brand: MSI,\n
    price:1534166\n,
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:1,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:13`,
  },
  {
    id: 25,
    name: "Toshiba ProBook 5551",
    category: "Laptop",
    brand: "Toshiba",
    price: 5469445,
    img: "/temp/laptop.jpg",
    badge: "Diskon 17%",
    discount: 17,
    priceAfterDiscount: 4539640,
    ram: 32,
    storage: "256GB",
    processor: "Intel",
    displaySize: 15,
    description: `
    brand: Toshiba,\n
    price:546944,\n
    img:"/temp/laptop.jpg,\n
    badge: Diskon 17%,\n
    discount:1,\n
    priceAfterDiscount:453964,\n
    ram:3,\n
    storage: 256GB,\n
    processor: Intel,\n
    displaySize:15`,
  },
  {
    id: 26,
    name: "Acer ProBook 9304",
    category: "Laptop",
    brand: "Acer",
    price: 5049864,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 32,
    storage: "256GB",
    processor: "AMD",
    displaySize: 13,
    description: `
    name: Acer ProB\nook 9304,
    category: Laptop,\n
    brand: Acer,\n
    price:504986,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:3,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:13`,
  },
  {
    id: 27,
    name: "Apple Satellite 2411",
    category: "Laptop",
    brand: "Apple",
    price: 4009479,
    img: "/temp/laptop.jpg",
    badge: "Diskon 20%",
    discount: 20,
    priceAfterDiscount: 3207584,
    ram: 32,
    storage: "1TB",
    processor: "Apple",
    displaySize: 14,
    description: `
    brand: Apple,
\n    price:400947,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 20%,\n
    discount:2,\n
    priceAfterDis\ncount:320758,
    ram:3,\n
    storage:\n 1TB,
    processor: Apple,\n
    displaySize:14`,
  },
  {
    id: 28,
    name: "Samsung Inspiron 3272",
    category: "Laptop",
    brand: "Samsung",
    price: 13373850,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "512GB",
    processor: "Intel",
    displaySize: 15,
    description: `
    name: Samsung I\nnspiron 3272,
    category: Laptop,\n
    brand: Samsung,\n
    price:1337385,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 512GB,\n
    processor: Intel,\n
    displaySize:15`,
  },
  {
    id: 29,
    name: "MSI Satellite 7984",
    category: "Laptop",
    brand: "MSI",
    price: 11868923,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 16,
    description: `
    name: MSI Satel\nlite 7984,
    category: Laptop,\n
    brand: MSI,\n
    price:1186892\n,
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:1,\n
    storage: 512GB,\n
    processor: Intel,\n
    displaySize:16`,
  },
  {
    id: 30,
    name: "Acer Swift 8082",
    category: "Laptop",
    brand: "Acer",
    price: 13782618,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "2TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Acer Swif\nt 8082,
    category: Laptop,\n
    brand: Acer,\n
    price:1378261,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 31,
    name: "Samsung Surface 4752",
    category: "Laptop",
    brand: "Samsung",
    price: 16111863,
    img: "/temp/laptop.jpg",
    badge: "Diskon 20%",
    discount: 20,
    priceAfterDiscount: 2889491,
    ram: 32,
    storage: "1TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    brand: Samsung,\n
    price:1611186,\n
    img:"/temp/laptop.jpg,\n
    badge: Diskon 20%,\n
    discount:2,\n
    priceAfterDiscount:288949,\n
    ram:3,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 32,
    name: "Lenovo ProBook 7608",
    category: "Laptop",
    brand: "Lenovo",
    price: 3850304,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "1TB",
    processor: "Intel",
    displaySize: 14,
    description: `
    name: Lenovo Pr\noBook 7608,
    category: Laptop,\n
    brand: Lenovo,\n
    price:385030,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:2,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:14`,
  },
  {
    id: 33,
    name: "Asus ThinkPad 5507",
    category: "Laptop",
    brand: "Asus",
    price: 7133508,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "2TB",
    processor: "AMD",
    displaySize: 14,
    description: `
    name: Asus Thin\nkPad 5507,
    category: Laptop,\n
    brand: Asus,\n
    price:713350,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 2TB,\n
    processor: AMD,\n
    displaySize:14`,
  },
  {
    id: 34,
    name: "Samsung MacBook 6793",
    category: "Laptop",
    brand: "Samsung",
    price: 17883520,
    img: "/temp/laptop.jpg",
    badge: "Diskon 8%",
    discount: 8,
    priceAfterDiscount: 6452839,
    ram: 16,
    storage: "2TB",
    processor: "AMD",
    displaySize: 15,
    description: `
    brand: Samsung,\n
    price:1788352,\n
    img:"/temp/laptop.jpg,\n
    badge: Diskon 8%,\n
    discount:,\n
    priceAfterDiscount:645283,\n
    ram:1,\n
    storage: 2TB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 35,
    name: "Apple Satellite 2596",
    category: "Laptop",
    brand: "Apple",
    price: 6810805,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "2TB",
    processor: "Apple",
    displaySize: 13,
    description: `
    name: Apple Sat\nellite 2596,
    category: Laptop,\n
    brand: Apple,\n
    price:681080,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:1,\n
    storage: 2TB,\n
    processor: Appl\ne,
    displaySize:13`,
  },
  {
    id: 36,
    name: "Microsoft Satellite 6184",
    category: "Laptop",
    brand: "Microsoft",
    price: 3506364,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "256GB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: Microsoft\n Satellite 6184,
    category: Laptop,\n
    brand: Microsoft,\n
    price:350636,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:1,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 37,
    name: "Acer MacBook 4594",
    category: "Laptop",
    brand: "Acer",
    price: 6644308,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "1TB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: Acer MacB\nook 4594,
    category: Laptop,\n
    brand: Acer,\n
    price:664430,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 1TB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 38,
    name: "Dell Inspiron 8661",
    category: "Laptop",
    brand: "Dell",
    price: 8795728,
    img: "/temp/laptop.jpg",
    badge: "Diskon 6%",
    discount: 6,
    priceAfterDiscount: 8267985,
    ram: 32,
    storage: "2TB",
    processor: "AMD",
    displaySize: 13,
    description: `
    brand: Dell,
\n    price:879572,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 6%,\n
    discount:,\n
    priceAfterDi\nscount:826798,
    ram:3,\n
    storage:\n 2TB,
    processor: AMD,\n
    displaySize:13`,
  },
  {
    id: 39,
    name: "Lenovo Satellite 1815",
    category: "Laptop",
    brand: "Lenovo",
    price: 13476778,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "256GB",
    processor: "AMD",
    displaySize: 13,
    description: `
    name: Lenovo Sa\ntellite 1815,
    category: Laptop,\n
    brand: Lenovo,\n
    price:1347677,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:1,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:13`,
  },
  {
    id: 40,
    name: "Apple MacBook 8043",
    category: "Laptop",
    brand: "Apple",
    price: 11400183,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "512GB",
    processor: "Apple",
    displaySize: 16,
    description: `
    name: Apple Mac\nBook 8043,
    category: Laptop,\n
    brand: Apple,\n
    price:1140018,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:,\n
    storage: 512GB,\n
    processor: Apple,\n
    displaySize:16`,
  },
  {
    id: 41,
    name: "MSI ThinkPad 7010",
    category: "Laptop",
    brand: "MSI",
    price: 4448765,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "256GB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: MSI Think\nPad 7010,
    category: Laptop,\n
    brand: MSI,\n
    price:444876,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 42,
    name: "Microsoft Inspiron 6287",
    category: "Laptop",
    brand: "Microsoft",
    price: 13273151,
    img: "/temp/laptop.jpg",
    badge: "Diskon 17%",
    discount: 17,
    priceAfterDiscount: 1016716,
    ram: 32,
    storage: "1TB",
    processor: "Intel",
    displaySize: 14,
    description: `
    brand: Microsof\nt,
    price:1327315,\n
    img:"/temp/laptop.jpg,\n
    badge: Diskon 17%,\n
    discount:1,\n
    priceAfterDiscount:101671,\n
    ram:3,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:14`,
  },
  {
    id: 43,
    name: "Apple Surface 1475",
    category: "Laptop",
    brand: "Apple",
    price: 11435312,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 32,
    storage: "256GB",
    processor: "Apple",
    displaySize: 16,
    description: `
    name: Apple Sur\nface 1475,
    category: Laptop,\n
    brand: Apple,\n
    price:1143531,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:3,\n
    storage: 256GB,\n
    processor: Apple,\n
    displaySize:16`,
  },
  {
    id: 44,
    name: "Apple Satellite 9191",
    category: "Laptop",
    brand: "Apple",
    price: 14844501,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "1TB",
    processor: "Apple",
    displaySize: 16,
    description: `
    name: Apple Sat\nellite 9191,
    category: Laptop,\n
    brand: Apple,\n
    price:1484450,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:,\n
    storage: 1TB,\n
    processor: Appl\ne,
    displaySize:16`,
  },
  {
    id: 45,
    name: "Apple MacBook 6739",
    category: "Laptop",
    brand: "Apple",
    price: 16027643,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 32,
    storage: "2TB",
    processor: "Apple",
    displaySize: 13,
    description: `
    name: Apple Mac\nBook 6739,
    category: Laptop,\n
    brand: Apple,\n
    price:1602764,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:3,\n
    storage: 2TB,\n
    processor: Appl\ne,
    displaySize:13`,
  },
  {
    id: 46,
    name: "Samsung Surface 5769",
    category: "Laptop",
    brand: "Samsung",
    price: 15045589,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "512GB",
    processor: "AMD",
    displaySize: 13,
    description: `
    name: Samsung S\nurface 5769,
    category: Laptop,\n
    brand: Samsung,\n
    price:1504558,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:13`,
  },
  {
    id: 47,
    name: "Dell Inspiron 8724",
    category: "Laptop",
    brand: "Dell",
    price: 5415979,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "2TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Dell Insp\niron 8724,
    category: Laptop,\n
    brand: Dell,\n
    price:541597,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:2,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 48,
    name: "Lenovo Inspiron 2821",
    category: "Laptop",
    brand: "Lenovo",
    price: 11609250,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "512GB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Lenovo In\nspiron 2821,
    category: Laptop,\n
    brand: Lenovo,\n
    price:1160925,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:,\n
    storage: 512GB,\n
    processor: Intel,\n
    displaySize:13`,
  },
  {
    id: 49,
    name: "Dell Inspiron 8956",
    category: "Laptop",
    brand: "Dell",
    price: 7203234,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "1TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Dell Insp\niron 8956,
    category: Laptop,\n
    brand: Dell,\n
    price:720323,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 50,
    name: "Microsoft Surface 5363",
    category: "Laptop",
    brand: "Microsoft",
    price: 17528776,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "512GB",
    processor: "AMD",
    displaySize: 13,
    description: `
    name: Microsoft\n Surface 5363,
    category: Laptop,\n
    brand: Microsoft,\n
    price:1752877,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:13`,
  },
  {
    id: 51,
    name: "Dell VivoBook 8239",
    category: "Laptop",
    brand: "Dell",
    price: 5689492,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "512GB",
    processor: "AMD",
    displaySize: 16,
    description: `
    name: Dell Vivo\nBook 8239,
    category: Laptop,\n
    brand: Dell,\n
    price:568949,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:2,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 52,
    name: "MSI ProBook 5427",
    category: "Laptop",
    brand: "MSI",
    price: 7034145,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "1TB",
    processor: "Intel",
    displaySize: 15,
    description: `
    name: MSI ProBo\nok 5427,
    category: Laptop,\n
    brand: MSI,\n
    price:703414,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:2,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:15`,
  },
  {
    id: 53,
    name: "Asus ThinkPad 1715",
    category: "Laptop",
    brand: "Asus",
    price: 10282484,
    img: "/temp/laptop.jpg",
    badge: "Diskon 19%",
    discount: 19,
    priceAfterDiscount: 8328813,
    ram: 32,
    storage: "256GB",
    processor: "AMD",
    displaySize: 16,
    description: `
    brand: Asus,
\n    price:1028248,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 19%,\n
    discount:1,\n
    priceAfterDis\ncount:832881,
    ram:3,\n
    storage:\n 256GB,
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 54,
    name: "Lenovo VivoBook 5821",
    category: "Laptop",
    brand: "Lenovo",
    price: 11361855,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "256GB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: Lenovo Vi\nvoBook 5821,
    category: Laptop,\n
    brand: Lenovo,\n
    price:1136185,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:1,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 55,
    name: "MSI Satellite 8928",
    category: "Laptop",
    brand: "MSI",
    price: 17442397,
    img: "/temp/laptop.jpg",
    badge: "Diskon 13%",
    discount: 13,
    priceAfterDiscount: 5174886,
    ram: 32,
    storage: "256GB",
    processor: "AMD",
    displaySize: 13,
    description: `
    brand: MSI,
\n    price:1744239,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 13%,\n
    discount:1,\n
    priceAfterDis\ncount:517488,
    ram:3,\n
    storage:\n 256GB,
    processor: AMD,\n
    displaySize:13`,
  },
  {
    id: 56,
    name: "Apple Surface 2723",
    category: "Laptop",
    brand: "Apple",
    price: 10898256,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "512GB",
    processor: "Apple",
    displaySize: 13,
    description: `
    name: Apple Sur\nface 2723,
    category: Laptop,\n
    brand: Apple,\n
    price:1089825,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:,\n
    storage: 512GB,\n
    processor: Apple,\n
    displaySize:13`,
  },
  {
    id: 57,
    name: "Toshiba Satellite 9268",
    category: "Laptop",
    brand: "Toshiba",
    price: 16931653,
    img: "/temp/laptop.jpg",
    badge: "Diskon 9%",
    discount: 9,
    priceAfterDiscount: 5407805,
    ram: 16,
    storage: "1TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    brand: Toshiba,\n
    price:1693165,\n
    img:"/temp/laptop.jpg,\n
    badge: Diskon 9%,\n
    discount:,\n
    priceAfterDiscount:540780,\n
    ram:1,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 58,
    name: "MSI GalaxyBook 9984",
    category: "Laptop",
    brand: "MSI",
    price: 17393661,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "1TB",
    processor: "AMD",
    displaySize: 16,
    description: `
    name: MSI Galax\nyBook 9984,
    category: Laptop,\n
    brand: MSI,\n
    price:1739366\n,
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:2,\n
    storage: 1TB,\n
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 59,
    name: "Asus ProBook 5748",
    category: "Laptop",
    brand: "Asus",
    price: 12875454,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 15,
    description: `
    name: Asus ProB\nook 5748,
    category: Laptop,\n
    brand: Asus,\n
    price:1287545,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:1,\n
    storage: 512GB,\n
    processor: Intel,\n
    displaySize:15`,
  },
  {
    id: 60,
    name: "Toshiba MacBook 1760",
    category: "Laptop",
    brand: "Toshiba",
    price: 11755653,
    img: "/temp/laptop.jpg",
    badge: "Diskon 25%",
    discount: 25,
    priceAfterDiscount: 8816740,
    ram: 8,
    storage: "2TB",
    processor: "AMD",
    displaySize: 15,
    description: `
    brand: Toshiba,\n
    price:1175565,\n
    img:"/temp/laptop.jpg,\n
    badge: Diskon 25%,\n
    discount:2,\n
    priceAfterDiscount:881674,\n
    ram:,\n
    storage: 2TB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 61,
    name: "Lenovo MacBook 7082",
    category: "Laptop",
    brand: "Lenovo",
    price: 6327087,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "256GB",
    processor: "AMD",
    displaySize: 16,
    description: `
    name: Lenovo Ma\ncBook 7082,
    category: Laptop,\n
    brand: Lenovo,\n
    price:632708,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 62,
    name: "MSI Inspiron 5807",
    category: "Laptop",
    brand: "MSI",
    price: 4086457,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 32,
    storage: "256GB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: MSI Inspi\nron 5807,
    category: Laptop,\n
    brand: MSI,\n
    price:408645,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:3,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 63,
    name: "Samsung ThinkPad 7341",
    category: "Laptop",
    brand: "Samsung",
    price: 8442534,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "256GB",
    processor: "AMD",
    displaySize: 14,
    description: `
    name: Samsung T\nhinkPad 7341,
    category: Laptop,\n
    brand: Samsung,\n
    price:844253,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:14`,
  },
  {
    id: 64,
    name: "Toshiba Satellite 9693",
    category: "Laptop",
    brand: "Toshiba",
    price: 17182148,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "512GB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: Toshiba S\natellite 9693,
    category: Laptop,\n
    brand: Toshiba,\n
    price:1718214,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 65,
    name: "Acer MacBook 5307",
    category: "Laptop",
    brand: "Acer",
    price: 18001860,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "1TB",
    processor: "Intel",
    displaySize: 14,
    description: `
    name: Acer MacB\nook 5307,
    category: Laptop,\n
    brand: Acer,\n
    price:1800186,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:14`,
  },
  {
    id: 66,
    name: "Microsoft GalaxyBook 8878",
    category: "Laptop",
    brand: "Microsoft",
    price: 6380333,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "2TB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: Microsoft\n GalaxyBook 8878,
    category: Laptop,\n
    brand: Microsoft,\n
    price:638033,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 2TB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 67,
    name: "Toshiba Surface 1585",
    category: "Laptop",
    brand: "Toshiba",
    price: 17535517,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "512GB",
    processor: "AMD",
    displaySize: 16,
    description: `
    name: Toshiba S\nurface 1585,
    category: Laptop,\n
    brand: Toshiba,\n
    price:1753551,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 68,
    name: "Toshiba Inspiron 6224",
    category: "Laptop",
    brand: "Toshiba",
    price: 8846663,
    img: "/temp/laptop.jpg",
    badge: "Diskon 13%",
    discount: 13,
    priceAfterDiscount: 7696597,
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 16,
    description: `
    brand: Toshiba,\n
    price:884666,\n
    img:"/temp/laptop.jpg,\n
    badge: Diskon 13%,\n
    discount:1,\n
    priceAfterDiscount:769659,\n
    ram:1,\n
    storage: 512GB,\n
    processor: Intel,\n
    displaySize:16`,
  },
  {
    id: 69,
    name: "Acer ProBook 4442",
    category: "Laptop",
    brand: "Acer",
    price: 15421426,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "256GB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: Acer ProB\nook 4442,
    category: Laptop,\n
    brand: Acer,\n
    price:1542142,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 70,
    name: "MSI Satellite 4773",
    category: "Laptop",
    brand: "MSI",
    price: 14363247,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "256GB",
    processor: "AMD",
    displaySize: 14,
    description: `
    name: MSI Satel\nlite 4773,
    category: Laptop,\n
    brand: MSI,\n
    price:1436324\n,
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:2,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:14`,
  },
  {
    id: 71,
    name: "Lenovo GalaxyBook 6108",
    category: "Laptop",
    brand: "Lenovo",
    price: 14195103,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "256GB",
    processor: "Intel",
    displaySize: 15,
    description: `
    name: Lenovo Ga\nlaxyBook 6108,
    category: Laptop,\n
    brand: Lenovo,\n
    price:1419510,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:,\n
    storage: 256GB,\n
    processor: Intel,\n
    displaySize:15`,
  },
  {
    id: 72,
    name: "Dell Surface 7485",
    category: "Laptop",
    brand: "Dell",
    price: 14218123,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "512GB",
    processor: "AMD",
    displaySize: 13,
    description: `
    name: Dell Surf\nace 7485,
    category: Laptop,\n
    brand: Dell,\n
    price:1421812,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:1,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:13`,
  },
  {
    id: 73,
    name: "Microsoft Satellite 7736",
    category: "Laptop",
    brand: "Microsoft",
    price: 16797962,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "2TB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: Microsoft\n Satellite 7736,
    category: Laptop,\n
    brand: Microsoft,\n
    price:1679796,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:1,\n
    storage: 2TB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 74,
    name: "Toshiba Inspiron 1723",
    category: "Laptop",
    brand: "Toshiba",
    price: 14660764,
    img: "/temp/laptop.jpg",
    badge: "Diskon 24%",
    discount: 24,
    priceAfterDiscount: 1142181,
    ram: 32,
    storage: "512GB",
    processor: "Intel",
    displaySize: 13,
    description: `
    brand: Toshiba,\n
    price:1466076,\n
    img:"/temp/laptop.jpg,\n
    badge: Diskon 24%,\n
    discount:2,\n
    priceAfterDiscount:114218,\n
    ram:3,\n
    storage: 512GB,\n
    processor: Intel,\n
    displaySize:13`,
  },
  {
    id: 75,
    name: "MSI Modern 2848",
    category: "Laptop",
    brand: "MSI",
    price: 8891434,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "2TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: MSI Moder\nn 2848,
    category: Laptop,\n
    brand: MSI,\n
    price:889143,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:1,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 76,
    name: "Dell Swift 9499",
    category: "Laptop",
    brand: "Dell",
    price: 8601368,
    img: "/temp/laptop.jpg",
    badge: "Diskon 28%",
    discount: 28,
    priceAfterDiscount: 6192985,
    ram: 16,
    storage: "2TB",
    processor: "AMD",
    displaySize: 16,
    description: `
    brand: Dell,
\n    price:860136,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 28%,\n
    discount:2,\n
    priceAfterDis\ncount:619298,
    ram:1,\n
    storage:\n 2TB,
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 77,
    name: "Dell Satellite 7832",
    category: "Laptop",
    brand: "Dell",
    price: 13671402,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 32,
    storage: "512GB",
    processor: "AMD",
    displaySize: 13,
    description: `
    name: Dell Sate\nllite 7832,
    category: Laptop,\n
    brand: Dell,\n
    price:1367140,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:3,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:13`,
  },
  {
    id: 78,
    name: "Acer GalaxyBook 3160",
    category: "Laptop",
    brand: "Acer",
    price: 9353259,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 32,
    storage: "256GB",
    processor: "AMD",
    displaySize: 16,
    description: `
    name: Acer Gala\nxyBook 3160,
    category: Laptop,\n
    brand: Acer,\n
    price:935325,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:3,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 79,
    name: "Toshiba Inspiron 9693",
    category: "Laptop",
    brand: "Toshiba",
    price: 12323350,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 32,
    storage: "2TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Toshiba I\nnspiron 9693,
    category: Laptop,\n
    brand: Toshiba,\n
    price:1232335,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:3,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 80,
    name: "Lenovo GalaxyBook 1319",
    category: "Laptop",
    brand: "Lenovo",
    price: 12280622,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "2TB",
    processor: "Intel",
    displaySize: 16,
    description: `
    name: Lenovo Ga\nlaxyBook 1319,
    category: Laptop,\n
    brand: Lenovo,\n
    price:1228062,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:16`,
  },
  {
    id: 81,
    name: "Microsoft Surface 3731",
    category: "Laptop",
    brand: "Microsoft",
    price: 5492376,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "256GB",
    processor: "Intel",
    displaySize: 16,
    description: `
    name: Microsoft\n Surface 3731,
    category: Laptop,\n
    brand: Microsoft,\n
    price:549237,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:1,\n
    storage: 256GB,\n
    processor: Intel,\n
    displaySize:16`,
  },
  {
    id: 82,
    name: "HP Surface 1801",
    category: "Laptop",
    brand: "HP",
    price: 9242437,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "2TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: HP Surfac\ne 1801,
    category: Laptop,\n
    brand: HP,\n
    price:924243\n,
    img:"/temp/lap\ntop.jpg,
    badge:",\n
    ram:2,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 83,
    name: "Asus ThinkPad 6691",
    category: "Laptop",
    brand: "Asus",
    price: 17518006,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "1TB",
    processor: "AMD",
    displaySize: 14,
    description: `
    name: Asus Thin\nkPad 6691,
    category: Laptop,\n
    brand: Asus,\n
    price:1751800,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 1TB,\n
    processor: AMD,\n
    displaySize:14`,
  },
  {
    id: 84,
    name: "Dell ThinkPad 2651",
    category: "Laptop",
    brand: "Dell",
    price: 7254742,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "512GB",
    processor: "AMD",
    displaySize: 15,
    description: `
    name: Dell Thin\nkPad 2651,
    category: Laptop,\n
    brand: Dell,\n
    price:725474,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 512GB,\n
    processor: AMD,\n
    displaySize:15`,
  },
  {
    id: 85,
    name: "Lenovo VivoBook 2615",
    category: "Laptop",
    brand: "Lenovo",
    price: 4476959,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "2TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Lenovo Vi\nvoBook 2615,
    category: Laptop,\n
    brand: Lenovo,\n
    price:447695,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 86,
    name: "Lenovo Swift 5118",
    category: "Laptop",
    brand: "Lenovo",
    price: 17185161,
    img: "/temp/laptop.jpg",
    badge: "Diskon 16%",
    discount: 16,
    priceAfterDiscount: 4435536,
    ram: 24,
    storage: "512GB",
    processor: "Intel",
    displaySize: 14,
    description: `
    brand: Lenovo,
\n    price:1718516,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 16%,\n
    discount:1,\n
    priceAfterDis\ncount:443553,
    ram:2,\n
    storage:\n 512GB,
    processor: Intel,\n
    displaySize:14`,
  },
  {
    id: 87,
    name: "Toshiba Swift 5764",
    category: "Laptop",
    brand: "Toshiba",
    price: 12550004,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "512GB",
    processor: "Intel",
    displaySize: 15,
    description: `
    name: Toshiba S\nwift 5764,
    category: Laptop,\n
    brand: Toshiba,\n
    price:1255000,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 512GB,\n
    processor: Intel,\n
    displaySize:15`,
  },
  {
    id: 88,
    name: "Toshiba Modern 7066",
    category: "Laptop",
    brand: "Toshiba",
    price: 15665007,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "1TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Toshiba M\nodern 7066,
    category: Laptop,\n
    brand: Toshiba,\n
    price:1566500,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 89,
    name: "Asus Inspiron 2889",
    category: "Laptop",
    brand: "Asus",
    price: 14558881,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "512GB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Asus Insp\niron 2889,
    category: Laptop,\n
    brand: Asus,\n
    price:1455888,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 512GB,\n
    processor: Intel,\n
    displaySize:13`,
  },
  {
    id: 90,
    name: "MSI Satellite 7001",
    category: "Laptop",
    brand: "MSI",
    price: 9062565,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "256GB",
    processor: "AMD",
    displaySize: 16,
    description: `
    name: MSI Satel\nlite 7001,
    category: Laptop,\n
    brand: MSI,\n
    price:906256,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 256GB,\n
    processor: AMD,\n
    displaySize:16`,
  },
  {
    id: 91,
    name: "Toshiba Inspiron 2313",
    category: "Laptop",
    brand: "Toshiba",
    price: 6626238,
    img: "/temp/laptop.jpg",
    badge: "Diskon 29%",
    discount: 29,
    priceAfterDiscount: 4704629,
    ram: 32,
    storage: "1TB",
    processor: "Intel",
    displaySize: 14,
    description: `
    brand: Toshiba,\n
    price:662623,\n
    img:"/temp/laptop.jpg,\n
    badge: Diskon 29%,\n
    discount:2,\n
    priceAfterDiscount:470462,\n
    ram:3,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:14`,
  },
  {
    id: 92,
    name: "Apple MacBook 9639",
    category: "Laptop",
    brand: "Apple",
    price: 15446569,
    img: "/temp/laptop.jpg",
    badge: "Diskon 32%",
    discount: 32,
    priceAfterDiscount: 10503667,
    ram: 4,
    storage: "256GB",
    processor: "Apple",
    displaySize: 16,
    description: `
    brand: Apple,
\n    price:1544656,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 32%,\n
    discount:3,\n
    priceAfterDis\ncount:1050366,
    ram:,\n
    storage\n: 256GB,
    processor: Apple,\n
    displaySize:16`,
  },
  {
    id: 93,
    name: "HP Surface 9181",
    category: "Laptop",
    brand: "HP",
    price: 4538970,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 4,
    storage: "256GB",
    processor: "Intel",
    displaySize: 14,
    description: `
    name: HP Surfac\ne 9181,
    category: Laptop,\n
    brand: HP,\n
    price:453897\n,
    img:"/temp/lap\ntop.jpg,
    badge:",\n
    ram:,\n
    storage: 256GB,\n
    processor: Intel,\n
    displaySize:14`,
  },
  {
    id: 94,
    name: "Asus ThinkPad 3860",
    category: "Laptop",
    brand: "Asus",
    price: 16871781,
    img: "/temp/laptop.jpg",
    badge: "Diskon 19%",
    discount: 19,
    priceAfterDiscount: 3666143,
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 15,
    description: `
    brand: Asus,
\n    price:1687178,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 19%,\n
    discount:1,\n
    priceAfterDis\ncount:366614,
    ram:1,\n
    storage:\n 512GB,
    processor: Intel,\n
    displaySize:15`,
  },
  {
    id: 95,
    name: "HP VivoBook 8593",
    category: "Laptop",
    brand: "HP",
    price: 12608490,
    img: "/temp/laptop.jpg",
    badge: "Diskon 28%",
    discount: 28,
    priceAfterDiscount: 9078113,
    ram: 24,
    storage: "1TB",
    processor: "AMD",
    displaySize: 14,
    description: `
    brand: HP,
\n    price:1260849,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 28%,\n
    discount:2,\n
    priceAfterDis\ncount:907811,
    ram:2,\n
    storage:\n 1TB,
    processor: AMD,\n
    displaySize:14`,
  },
  {
    id: 96,
    name: "Samsung GalaxyBook 2274",
    category: "Laptop",
    brand: "Samsung",
    price: 16688577,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 24,
    storage: "2TB",
    processor: "Intel",
    displaySize: 15,
    description: `
    name: Samsung G\nalaxyBook 2274,
    category: Laptop,\n
    brand: Samsung,\n
    price:1668857,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:2,\n
    storage: 2TB,\n
    processor: Inte\nl,
    displaySize:15`,
  },
  {
    id: 97,
    name: "Dell MacBook 9837",
    category: "Laptop",
    brand: "Dell",
    price: 14399231,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 16,
    storage: "1TB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Dell MacB\nook 9837,
    category: Laptop,\n
    brand: Dell,\n
    price:1439923,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:1,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:13`,
  },
  {
    id: 98,
    name: "Lenovo Surface 3103",
    category: "Laptop",
    brand: "Lenovo",
    price: 13116907,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 32,
    storage: "256GB",
    processor: "Intel",
    displaySize: 13,
    description: `
    name: Lenovo Su\nrface 3103,
    category: Laptop,\n
    brand: Lenovo,\n
    price:1311690,\n
    img:"/temp/lapto\np.jpg,
    badge:",\n
    ram:3,\n
    storage: 256GB,\n
    processor: Intel,\n
    displaySize:13`,
  },
  {
    id: 99,
    name: "Toshiba ProBook 6931",
    category: "Laptop",
    brand: "Toshiba",
    price: 9910563,
    img: "/temp/laptop.jpg",
    badge: "",
    ram: 8,
    storage: "1TB",
    processor: "Intel",
    displaySize: 14,
    description: `
    name: Toshiba P\nroBook 6931,
    category: Laptop,\n
    brand: Toshiba,\n
    price:991056,\n
    img:"/temp/lapt\nop.jpg,
    badge:",\n
    ram:,\n
    storage: 1TB,\n
    processor: Inte\nl,
    displaySize:14`,
  },
  {
    id: 100,
    name: "Dell VivoBook 7256",
    category: "Laptop",
    brand: "Dell",
    price: 15215131,
    img: "/temp/laptop.jpg",
    badge: "Diskon 16%",
    discount: 16,
    priceAfterDiscount: 2780711,
    ram: 4,
    storage: "2TB",
    processor: "AMD",
    displaySize: 13,
    description: `
    brand: Dell,
\n    price:1521513,
  \n  img:"/temp/laptop.jpg,
    badge: Diskon 16%,\n
    discount:1,\n
    priceAfterDis\ncount:278071,
    ram:,\n
    storage\n: 2TB,
    processor: AMD,\n
    displaySize:13`,
  },
];
