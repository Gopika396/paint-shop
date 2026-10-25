import interiorCan from "../assets/image/interior_can.jpg";
import exteriorCan from "../assets/image/exterior_can.jpg";
import woodCan from "../assets/image/wood_can.jpg";
import luxuryCan from "../assets/image/luxury_can.jpg";
import metalCan from "../assets/image/metal_can.jpg";
import kitchen from "../assets/image/kitchen.jpg";
import neutralRoom from "../assets/image/neutral_living_room.jpg";
import pinkBedroom from "../assets/image/pink_bedroom.jpg";
import yellowDining from "../assets/image/yellow_dining_room.jpg";
import paintRoller from "../assets/image/paint_roller_and_tray.jpg";
import paintBrushes from "../assets/image/paint_brushes.jpg";
import exteriorCategory from "../assets/image/exterior_paint_category.jpg";
import metalCategory from "../assets/image/metal_paint_category.jpg";

export const products = [
  {
    id: 1,
    name: "Everyday Interior Emulsion",
    category: "Interior",
    finish: "Matte",
    description: "A soft matte finish for everyday living spaces.",
    price: 899,
    size: "1 L",
    image: interiorCan,
    colour: "#d9c6ad",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "WeatherGuard Exterior",
    category: "Exterior",
    finish: "Satin",
    description: "An exterior paint option for a refreshed facade.",
    price: 1299,
    size: "1 L",
    image: exteriorCan,
    colour: "#b8c9b7",
    badge: "Exterior"
  },
  {
    id: 3,
    name: "Natural Wood Finish",
    category: "Wood",
    finish: "Gloss",
    description: "A glossy finish option for wooden surfaces.",
    price: 749,
    size: "1 L",
    image: woodCan,
    colour: "#a86e48",
    badge: ""
  },
  {
    id: 4,
    name: "Signature Luxury Paint",
    category: "Interior",
    finish: "Satin",
    description: "A refined satin finish for statement interiors.",
    price: 1599,
    size: "1 L",
    image: luxuryCan,
    colour: "#b9a3c8",
    badge: "Premium"
  },
  {
    id: 5,
    name: "Metal Surface Enamel",
    category: "Metal",
    finish: "Gloss",
    description: "A smooth enamel finish for metal surfaces.",
    price: 699,
    size: "500 ml",
    image: metalCan,
    colour: "#85949b",
    badge: ""
  },
  {
    id: 6,
    name: "Kitchen Fresh Finish",
    category: "Interior",
    finish: "Satin",
    description: "A clean look for kitchen and utility spaces.",
    price: 999,
    size: "1 L",
    image: kitchen,
    colour: "#d9d0bd",
    badge: ""
  },
  {
    id: 7,
    name: "Calm Neutral Collection",
    category: "Interior",
    finish: "Matte",
    description: "Neutral-inspired colours for peaceful interiors.",
    price: 1099,
    size: "1 L",
    image: neutralRoom,
    colour: "#c8b7a0",
    badge: "Popular"
  },
  {
    id: 8,
    name: "Blush Room Colour",
    category: "Interior",
    finish: "Matte",
    description: "A gentle pink-inspired shade for accent walls.",
    price: 949,
    size: "1 L",
    image: pinkBedroom,
    colour: "#d5a2a4",
    badge: ""
  },
  {
    id: 9,
    name: "Sunshine Accent Colour",
    category: "Interior",
    finish: "Satin",
    description: "A warm yellow-inspired shade for bright spaces.",
    price: 949,
    size: "1 L",
    image: yellowDining,
    colour: "#d6b94f",
    badge: "New"
  },
  {
    id: 10,
    name: "Pro Paint Roller Kit",
    category: "Accessories",
    finish: "Tools",
    description: "A roller and tray set for your painting project.",
    price: 399,
    size: "1 kit",
    image: paintRoller,
    colour: "#c77c5d",
    badge: ""
  },
  {
    id: 11,
    name: "Painter's Brush Set",
    category: "Accessories",
    finish: "Tools",
    description: "Brushes for edges, details and smaller areas.",
    price: 249,
    size: "1 set",
    image: paintBrushes,
    colour: "#a77955",
    badge: ""
  },
  {
    id: 12,
    name: "Exterior Home Collection",
    category: "Exterior",
    finish: "Matte",
    description: "Explore exterior colour ideas for your home.",
    price: 1399,
    size: "1 L",
    image: exteriorCategory,
    colour: "#8eaa94",
    badge: ""
  },
  {
    id: 13,
    name: "Metal Protection Collection",
    category: "Metal",
    finish: "Gloss",
    description: "A finish option for metal gates and railings.",
    price: 799,
    size: "500 ml",
    image: metalCategory,
    colour: "#89969d",
    badge: ""
  }
];

export const categories = [
  "All",
  "Interior",
  "Exterior",
  "Wood",
  "Metal",
  "Accessories"
];

export const finishes = ["All", "Matte", "Satin", "Gloss", "Tools"];
