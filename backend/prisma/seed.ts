import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.favorite.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const streetwear = await prisma.category.create({ data: { name: "Streetwear" } });
  const formal = await prisma.category.create({ data: { name: "Formal" } });
  const casual = await prisma.category.create({ data: { name: "Casual" } });
  const sport = await prisma.category.create({ data: { name: "Sport" } });

  const products = [
    {
      name: "Onitsuka Tiger Mexico 66",
      price: 89.90,
      brand: "Onitsuka Tiger",
      sizes: ["44", "45", "46", "47"],
      colors: ["rgba(253, 187, 4, 1)", "rgba(87, 25, 26, 1)"],
      posterUrls: ["/assets/products/onitsukaTigerMexico.png", "/assets/products/onitsukaTigerMexicoRed.png"],
      categoryId: streetwear.id,
    },
    {
      name: "Adidas Spezial",
      price: 79.90,
      brand: "Adidas",
      sizes: ["44", "45", "46", "47"],
      colors: ["rgba(51, 64, 75, 1)", "rgba(75, 38, 28, 1)"],
      posterUrls: ["/assets/products/adidasSpezial.png", "/assets/products/adidasSpezialPlave.png"],
      categoryId: streetwear.id,
    },
    {
      name: "Zara Dress Shoes",
      price: 49.90,
      brand: "Zara",
      sizes: ["44", "45", "46", "47"],
      colors: [],
      posterUrls: ["/assets/products/zaraDressShoes.png"],
      categoryId: formal.id,
    },
    {
      name: "Sinsay Black Pants",
      price: 29.90,
      brand: "Sinsay",
      sizes: ["S", "M", "L", "XL"],
      colors: [],
      posterUrls: ["/assets/products/sinsayBlackPants.png"],
      categoryId: casual.id,
    },
    {
      name: "Acne Studios Yoyogi 2021F Jeans",
      price: 299.90,
      brand: "Acne Studios",
      sizes: ["S", "M", "L", "XL"],
      colors: [],
      posterUrls: ["/assets/products/acneJeans.png"],
      categoryId: streetwear.id,
    },
    {
      name: "Bershka Sweatpants",
      price: 19.90,
      brand: "Bershka",
      sizes: ["S", "M", "L", "XL"],
      colors: [],
      posterUrls: ["/assets/products/bershkaSweatpants.png"],
      categoryId: casual.id,
    },
    {
      name: "Reserved T-Shirt",
      price: 9.90,
      brand: "Reserved",
      sizes: ["S", "M", "L", "XL"],
      colors: [],
      posterUrls: ["/assets/products/reservedTShirt.png"],
      categoryId: casual.id,
    },
    {
      name: "Pull&Bear Hoodie",
      price: 19.90,
      brand: "Pull&Bear",
      sizes: ["S", "M", "L", "XL"],
      colors: ["rgba(128, 128, 128, 1)", "rgba(0, 0, 0, 1)"],
      posterUrls: ["/assets/products/pullbearHoodie.png", "/assets/products/pullbearHoodieBlack.png"],
      categoryId: casual.id,
    },
    {
      name: "Bershka Spider-Man Long Sleeve",
      price: 29.90,
      brand: "Bershka",
      sizes: ["S", "M", "L", "XL"],
      colors: [],
      posterUrls: ["/assets/products/bershkaSpiderLongSleeve.png"],
      categoryId: streetwear.id,
    },
    {
      name: "Bershka Blue Shirt",
      price: 29.90,
      brand: "Bershka",
      sizes: ["S", "M", "L", "XL"],
      colors: ["rgba(197, 203, 217, 1)", "rgba(163, 152, 134, 1)"],
      posterUrls: ["/assets/products/bershkaBlueShirt.png", "/assets/products/zaraBlackShirt.png"],
      categoryId: formal.id,
    },
    {
      name: "Bershka Green Shirt",
      price: 29.90,
      brand: "Bershka",
      sizes: ["S", "M", "L", "XL"],
      colors: [],
      posterUrls: ["/assets/products/bershkaGreenShirt.png"],
      categoryId: formal.id,
    },
    {
      name: "Zara Sweatshirt",
      price: 19.90,
      brand: "Zara",
      sizes: ["S", "M", "L", "XL"],
      colors: ["rgba(0, 0, 0, 1)", "rgba(0, 128, 0, 1)"],
      posterUrls: ["/assets/products/zaraSweathshirt.png", "/assets/products/zaraSweathshirtGreen.png"],
      categoryId: casual.id,
    },
    {
      name: "Nike Regular Sportske Hlače",
      price: 20.00,
      brand: "Nike",
      sizes: ["S", "M", "L", "XL"],
      colors: ["rgba(29, 111, 63, 1)", "rgba(218, 63, 68, 1)"],
      posterUrls: ["/assets/products/nikeHlaceRoze.png"],
      categoryId: sport.id,
    },
    {
      name: "Puma Sportske Hlače",
      price: 39.90,
      brand: "Puma",
      sizes: ["S", "M", "L", "XL"],
      colors: [],
      posterUrls: ["/assets/products/pumaSivaTuta.png"],
      categoryId: sport.id,
    },
    {
      name: "Puma Sportska Jakna",
      price: 50.90,
      brand: "Puma",
      sizes: ["S", "M", "L", "XL"],
      colors: [],
      posterUrls: ["/assets/products/pumaSportskaJakna.png", "/assets/products/pumaSportskaJakna2.png"],
      categoryId: sport.id,
    },
    {
      name: "Nike Sportska Jakna",
      price: 104.95,
      brand: "Nike",
      sizes: ["S", "M", "L", "XL"],
      colors: [],
      posterUrls: ["/assets/products/nikeSportskaJakna.png"],
      categoryId: sport.id,
    },
    {
      name: "Adidas Performance Dres",
      price: 59.90,
      brand: "Adidas",
      sizes: ["S", "M", "L", "XL"],
      colors: [],
      posterUrls: ["/assets/products/adidasDres.png"],
      categoryId: sport.id,
    },
    {
      name: "Nike Tenisice za Trčanje",
      price: 59.90,
      brand: "Nike",
      sizes: ["44", "45", "46", "47"],
      colors: ["rgba(74, 88, 119, 1)", "rgba(255, 255, 255, 1)"],
      posterUrls: ["/assets/products/nikeTenisicePlave.png", "/assets/products/nikeTenisiceBile.png"],
      categoryId: sport.id,
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log("Seed completed: 4 categories, 18 products");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
