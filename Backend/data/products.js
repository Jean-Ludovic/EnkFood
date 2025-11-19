// Backend/data/products.js

const products = [
  {
    name: "Burger EnkFood",
    description: "Burger gourmet avec steak, fromage et sauce maison.",
    price: 14.99,
    category: "burger",
    image: "/images/burger-enkfood.jpg",
    isAvailable: true,
  },
  {
    name: "Pizza Margherita",
    description: "Pizza classique tomate, mozzarella, basilic frais.",
    price: 12.49,
    category: "pizza",
    image: "/images/pizza-margherita.jpg",
    isAvailable: true,
  },
  {
    name: "Poutine Québécoise",
    description: "Frites, fromage en grains et sauce brune 😋",
    price: 11.5,
    category: "poutine",
    image: "/images/poutine-quebecoise.jpg",
    isAvailable: true,
  },
  {
    name: "Salade César",
    description: "Salade croquante avec poulet grillé et parmesan.",
    price: 10.0,
    category: "salade",
    image: "/images/salade-cesar.jpg",
    isAvailable: true,
  },
];

module.exports = products;

