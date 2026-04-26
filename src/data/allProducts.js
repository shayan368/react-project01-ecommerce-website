import laptop from "../assets/images/laptop.png";
import mouse from "../assets/images/mouse.png";
import blackheadphone from "../assets/images/black-headphone.png";
import headphone from "../assets/images/headphone.png";
import slimlaptop from "../assets/images/slim-laptop.png";
import monitor from "../assets/images/monitor.png";
import keyboard from "../assets/images/keyboard.png";
import gamingpc from "../assets/images/gamingpc.png";
import airPods from "../assets/images/airpods.png";
import mp3 from "../assets/images/mp3.png";

export const allProducts = [
  {
    id: 1,
    title: "Gaming PC",
    name: "High End Gaming PC",
    price: 1800,
    rating: 5,
    category: "Gaming PC",
    image: gamingpc,
    brand: "Dell",
    handPicked: true,
    mostViewed: true,
    inStock: true
  },
  {
    id: 2,
    title: "Laptop",
    name: "Gaming Laptop",
    price: 999,
    rating: 4,
    category: "Laptops",
    image: laptop,
    brand: "HP",
    handPicked: true,
    inStock: false
  },
  {
    id: 3,
    title: "Headphone",
    name: "Black Headphone",
    price: 100,
    rating: 4,
    category: "Accessories",
    image: blackheadphone,
    brand: "Apple",
    mostViewed: true,
    inStock: true
  },
  {
    id: 4,
    title: "Mouse",
    name: "Gaming Mouse",
    price: 50,
    rating: 5,
    category: "Accessories",
    image: mouse,
    brand: "Apple",
    mostViewed: true,
    inStock: true
  },
  {
    id: 5,
    title: "Laptop",
    name: "Slim Laptop",
    price: 220,
    rating: 5,
    category: "Laptops",
    image: slimlaptop,
    brand: "Samsung",
    handPicked: true,
    inStock: false
  },
  {
    id: 6,
    title: "Monitor",
    name: "UHD Display",
    price: 800,
    rating: 4,
    category: "Desktops",
    image: monitor,
    brand: "Dell",
    inStock: true
  },
  {
    id: 7,
    title: "Keyboard",
    name: "Mechanical Keyboard",
    price: 80,
    rating: 5,
    category: "Accessories",
    image: keyboard,
    brand: "Apple",
    mostViewed: true,
    inStock: true
  },
  {
    id: 8,
    title: "AirPods",
    name: "Apple AirPods Pro",
    price: 250,
    rating: 5,
    category: "Accessories",
    image: airPods,
    brand: "Apple",
    mostViewed: true,
    inStock: false
  },
  {
    id: 9,
    title: "MP3",
    name: "MP3 Player",
    price: 50,
    rating: 4,
    category: "Accessories",
    image: mp3,
    brand: "Samsung",
    inStock: true
  },
];