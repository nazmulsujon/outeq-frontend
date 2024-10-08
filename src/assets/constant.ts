import { Brand, Product, ProductDetailsType } from "@/types/global";

export const products: Product[] = [
  {
    name: "Smart Laptop",
    price: 36000,
    originalPrice: 56000,
    discount: 20,
    image: "/products/product-1.png",
    rating: 5,
  },
  {
    name: "Unique phone case",
    price: 600,
    originalPrice: 900,
    discount: 20,
    image: "/products/product-2.png",
    rating: 4.5,
  },
  {
    name: "Black headphone device premium",
    price: 36000,
    originalPrice: 56000,
    discount: 20,
    image: "/products/product-3.jpg",
    rating: 5,
  },
  {
    name: "Smart watch",
    price: 6000,
    originalPrice: 65000,
    discount: 10,
    image: "/products/product-4.png",
    rating: 4.5,
  },
  {
    name: "Smart airbirds",
    price: 1000,
    originalPrice: 1200,
    discount: 5,
    image: "/products/product-5.png",
    rating: 4,
  },
  {
    name: "Smart speaker device",
    price: 1100,
    originalPrice: 1500,
    discount: 5,
    image: "/products/product-6.png",
    rating: 5,
  },
  {
    name: "Smart Laptop",
    price: 36000,
    originalPrice: 56000,
    discount: 20,
    image: "/products/product-1.png",
    rating: 5,
  },
  {
    name: "Unique phone case",
    price: 600,
    originalPrice: 900,
    discount: 20,
    image: "/products/product-2.png",
    rating: 4.5,
  },
  {
    name: "Black headphone device",
    price: 36000,
    originalPrice: 56000,
    discount: 20,
    image: "/products/product-3.jpg",
    rating: 5,
  },
  {
    name: "Smart watch",
    price: 6000,
    originalPrice: 65000,
    discount: 10,
    image: "/products/product-4.png",
    rating: 4.5,
  },
  {
    name: "Smart airbirds",
    price: 1000,
    originalPrice: 1200,
    discount: 5,
    image: "/products/product-5.png",
    rating: 4,
  },
  {
    name: "Smart speaker device",
    price: 1100,
    originalPrice: 1500,
    discount: 5,
    image: "/products/product-6.png",
    rating: 5,
  },
  {
    name: "Smart Laptop",
    price: 36000,
    originalPrice: 56000,
    discount: 20,
    image: "/products/product-1.png",
    rating: 5,
  },
  {
    name: "Unique phone case",
    price: 600,
    originalPrice: 900,
    discount: 20,
    image: "/products/product-2.png",
    rating: 4.5,
  },
  {
    name: "Black headphone device",
    price: 36000,
    originalPrice: 56000,
    discount: 20,
    image: "/products/product-3.jpg",
    rating: 5,
  },
  {
    name: "Smart watch",
    price: 6000,
    originalPrice: 65000,
    discount: 10,
    image: "/products/product-4.png",
    rating: 4.5,
  },
  {
    name: "Smart airbirds",
    price: 1000,
    originalPrice: 1200,
    discount: 5,
    image: "/products/product-5.png",
    rating: 4,
  },
  {
    name: "Smart speaker device",
    price: 1100,
    originalPrice: 1500,
    discount: 5,
    image: "/products/product-6.png",
    rating: 5,
  },
  {
    name: "Smart Laptop",
    price: 36000,
    originalPrice: 56000,
    discount: 20,
    image: "/products/product-1.png",
    rating: 5,
  },
  {
    name: "Unique phone case",
    price: 600,
    originalPrice: 900,
    discount: 20,
    image: "/products/product-2.png",
    rating: 4.5,
  },
  {
    name: "Black headphone device",
    price: 36000,
    originalPrice: 56000,
    discount: 20,
    image: "/products/product-3.jpg",
    rating: 5,
  },
  {
    name: "Smart watch",
    price: 6000,
    originalPrice: 65000,
    discount: 10,
    image: "/products/product-4.png",
    rating: 4.5,
  },
  {
    name: "Smart airbirds",
    price: 1000,
    originalPrice: 1200,
    discount: 5,
    image: "/products/product-5.png",
    rating: 4,
  },
  {
    name: "Smart speaker device",
    price: 1100,
    originalPrice: 1500,
    discount: 5,
    image: "/products/product-6.png",
    rating: 5,
  },
  {
    name: "Smart Laptop",
    price: 36000,
    originalPrice: 56000,
    discount: 20,
    image: "/products/product-1.png",
    rating: 5,
  },
  {
    name: "Unique phone case",
    price: 600,
    originalPrice: 900,
    discount: 20,
    image: "/products/product-2.png",
    rating: 4.5,
  },
  {
    name: "Black headphone device",
    price: 36000,
    originalPrice: 56000,
    discount: 20,
    image: "/products/product-3.jpg",
    rating: 5,
  },
  {
    name: "Smart watch",
    price: 6000,
    originalPrice: 65000,
    discount: 10,
    image: "/products/product-4.png",
    rating: 4.5,
  },
  {
    name: "Smart airbirds",
    price: 1000,
    originalPrice: 1200,
    discount: 5,
    image: "/products/product-5.png",
    rating: 4,
  },
  {
    name: "Smart speaker device",
    price: 1100,
    originalPrice: 1500,
    discount: 5,
    image: "/products/product-6.png",
    rating: 5,
  },
];

export const productDetails: ProductDetailsType = {
  name: "Your Product Name Here",
  price: 9000,
  originalPrice: 10000,
  discount: 20,
  status: "Pre-order",
  proBookAmount: 10000,
  productCode: "Sk-02",
  images: {
    default: "/products/product-1.png",
    colorImages: {
      Grey: "/products/product-1.png",
      LightBlue: "/products/product-2.png",
      Black: "/products/product-3.jpg",
    },
    thumbnailImages: [
      "/products/product-1.png",
      "/products/product-2.png",
      "/products/product-3.jpg",
    ],
  },
  colors: [
    { name: "Grey", hex: "#A9A9A9" },
    { name: "LightBlue", hex: "#87CEEB" },
    { name: "Black", hex: "#000000" },
  ],
  specification: {
    brand: "Apple",
    name: "Apple Watch Ultra 2",
    model: "Apple Watch Ultra 2 with Alpine Loop GPS + Cellular",
    chargingInterface: "Magnetic Fast Charger",
    callingFeatures: "Yes",
    batteryCapacity: "Li-ion 542 mAh | non-removable",
    material: "Titanium | Alpine Loop Strap",
    chargingTime: "1.5 Hours",
    chipset: "Apple S9",
    memory: "64 GB",
    os: "watchOS 10",
    display:
      "Retina LTPO OLED | 3000 nits | 1.92 inches | 502 x 410 pixels | Sapphire crystal glass | Always-on display",
    sweatAndWaterResistance:
      "IP6X certified | 100m water resistant | 40m swimproof/diving",
    batteryLife: "36 Hours",
    otherFeatures: [
      "Dual Loud Speakers",
      "Accelerometer",
      "Gyro",
      "Heart Rate",
      "Barometer",
      "Always-on altimeter (-500m to 9000m)",
      "Compass",
      "SpO2",
      "VO2max",
      "Temperature (body)",
    ],
  },
  warranty: {
    support: "Apple Store 1 Year Warranty Support",
    policy:
      "Explore our Warranty Policy page for detailed information about our warranty coverage.",
  },
  description: {
    productName: "Apple Watch Ultra 2",
    productModel: "Apple Watch Ultra 2 with Alpine Loop GPS + Cellular",
    productDescription:
      "Apple Watch Ultra 2 with Alpine Loop GPS + Cellular embodies innovation and style with its solid Titanium build. Its Alpine loop design not only lends a sporty aesthetic but also ensures durability, marrying style with ruggedness. With cellular connectivity, you're always connected on the go. Plus, it excels in precise health and workout monitoring, delivering real-time insights. The watch boasts a long-lasting battery, ensuring uninterrupted service for all your needs. It's a blend of elegance, performance, and resilience, making it an ideal companion for modern lifestyles.",
    features: [
      "Apple Silicon S9 chipset to enhance the overall performance",
      "Cellular system is added to get in touch with every person",
      "Titanium build with robust construction and athletic appearance",
      "Alpine loop offers all-encompassing comfort on your wrist",
      "3,000-nit (peak) display for exceptional visual presentation",
      "Precise dual GPS to keep a record of your every action",
      "100m water resistance ensures its protection beneath the water",
      "Manually create your health data by monitoring your health condition",
      "Multisport tracking with accuracy augments your proficiency in workout",
      "36 hours of mega battery life to explore without worrying about battery life",
    ],
    priceInBangladesh:
      "The latest price of Apple Watch Ultra 2 in Bangladesh starts from 99,000 BDT. To get this Apple Watch Ultra 2 you have to pre-order it through any of our selling platforms.",
    whereToBuy:
      "Looking for the best place to purchase the latest gaming laptops, Apple products, or other top-quality gadgets in Bangladesh? Look no further than Apple Gadgets, the unparalleled leader in providing top-notch gadgets in the country. Enjoy the convenience of two shopping options with us - either through our seamless online platform (Apple Gadgets) or by visiting our physical outlets in different locations. Rest assured, we have you covered for all your gadget needs including Apple Watch Ultra 2.",
  },
};

export const brands: Brand[] = [
  { image: "/brands/amazfit.svg", alt: "amazfit logo" },
  { image: "/brands/anker.svg", alt: "anker logo" },
  { image: "/brands/apple.svg", alt: "apple logo" },
  { image: "/brands/asus.svg", alt: "asus logo" },
  { image: "/brands/awei.svg", alt: "awei logo" },
  { image: "/brands/baseus.svg", alt: "baseus logo" },
  { image: "/brands/colmi.svg", alt: "colmi logo" },
  { image: "/brands/fantech.svg", alt: "fantech logo" },
  { image: "/brands/google.svg", alt: "google logo" },
  { image: "/brands/havit.svg", alt: "havit logo" },
  { image: "/brands/haylou.svg", alt: "haylou logo" },
  { image: "/brands/hoco.svg", alt: "hoco logo" },
  { image: "/brands/imki.svg", alt: "imki logo" },
  { image: "/brands/jbl.svg", alt: "jbl logo" },
  { image: "/brands/joyroom.svg", alt: "joyroom logo" },
  { image: "/brands/kiselect.svg", alt: "kiselect logo" },
  { image: "/brands/lenovo.svg", alt: "lenovo logo" },
  { image: "/brands/logitech.svg", alt: "logitech logo" },
  { image: "/brands/noise.svg", alt: "noise logo" },
  { image: "/brands/oneplus.svg", alt: "oneplus logo" },
  { image: "/brands/realme.svg", alt: "realme logo" },
  { image: "/brands/remax.svg", alt: "remax logo" },
  { image: "/brands/sanag.svg", alt: "sanag logo" },
  { image: "/brands/sony.svg", alt: "sony logo" },
  { image: "/brands/tp-link.svg", alt: "tp-link logo" },
  { image: "/brands/wiwu.svg", alt: "wiwu logo" },
  { image: "/brands/xiaomi.svg", alt: "xiaomi logo" },
];

// export const categories = [
//   {
//     name: "Watches",
//     href: "watches",
//     subcategories: [
//       {
//         name: "Smart Watch",
//         href: "watches/smart-watch",
//       },
//       {
//         name: "Smart Band",
//         href: "watches/smart-band",
//       },
//       {
//         name: "Watch Strap",
//         href: "watches/watch-strap",
//       },
//     ],
//   },
//   {
//     name: "Earphones",
//     href: "earphones",
//     subcategories: [
//       {
//         name: "TWS",
//         href: "earphones/tws",
//       },
//       {
//         name: "Neckband",
//         href: "earphones/neckband",
//       },
//       {
//         name: "Wired Earphone",
//         href: "earphones/wired-earphone",
//       },
//       {
//         name: "Gaming Earphone",
//         href: "earphones/gaming-earphone",
//       },
//     ],
//   },
//   {
//     name: "Headphones",
//     href: "headphones",
//     subcategories: [
//       {
//         name: "Wired Headphone",
//         href: "headphones/wired-headphone",
//       },
//       {
//         name: "Wireless Headphone",
//         href: "headphones/wireless-headphone",
//       },
//       {
//         name: "Gaming Headphone",
//         href: "headphones/gaming-headphone",
//       },
//     ],
//   },
//   {
//     name: "Speakers",
//     href: "speakers",
//     subcategories: [
//       {
//         name: "Mini Speaker",
//         href: "speakers/mini-speaker",
//       },
//       {
//         name: "Base Speaker",
//         href: "speakers/base-speaker",
//       },
//       {
//         name: "Bluetooth Speaker",
//         href: "speakers/bluetooth-speaker",
//       },
//     ],
//   },
//   {
//     name: "Mic & Accessories",
//     href: "mic-accessories",
//     subcategories: [
//       {
//         name: "Wired Microphone",
//         href: "mic-accessories/wired-microphone",
//       },
//       {
//         name: "Wireless Microphone",
//         href: "mic-accessories/wireless-microphone",
//       },
//       {
//         name: "Microphone Accessories",
//         href: "mic-accessories/microphone-accessories",
//       },
//     ],
//   },
//   {
//     name: "Powerbank",
//     href: "powerbank",
//     subcategories: [
//       {
//         name: "Magnetic Powerbank",
//         href: "powerbank/magnetic-powerbank",
//       },
//       {
//         name: "Wired Powerbank",
//         href: "powerbank/wired-powerbank",
//       },
//     ],
//   },
//   {
//     name: "Charger & Cable",
//     href: "charger-cable",
//     subcategories: [
//       {
//         name: "Charger Set",
//         href: "charger-cable/charger-set",
//       },
//       {
//         name: "Charging Adapter",
//         href: "charger-cable/charging-adapter",
//       },
//       {
//         name: "Power Charger",
//         href: "charger-cable/power-charger",
//       },
//       {
//         name: "Wireless Charger",
//         href: "charger-cable/wireless-charger",
//       },
//       {
//         name: "Cable",
//         href: "charger-cable/cable",
//       },
//     ],
//   },
//   {
//     name: "Computer & Accessories",
//     href: "computer-accessories",
//     subcategories: [
//       {
//         name: "Mouse",
//         href: "computer-accessories/mouse",
//       },
//       {
//         name: "Mouse Pad",
//         href: "computer-accessories/mouse-pad",
//       },
//       {
//         name: "Keyboard",
//         href: "computer-accessories/keyboard",
//       },
//       {
//         name: "Game Controller",
//         href: "computer-accessories/game-controller",
//       },
//       {
//         name: "Web Camera",
//         href: "computer-accessories/web-camera",
//       },
//     ],
//   },
//   {
//     name: "Smart TV & Accessories",
//     href: "smart-tv-accessories",
//     subcategories: [
//       {
//         name: "Apple TV Boxes",
//         href: "smart-tv-accessories/apple-tv-boxes",
//       },
//       {
//         name: "Android TV Boxes",
//         href: "smart-tv-accessories/android-tv-boxes",
//       },
//       {
//         name: "TV Accessories",
//         href: "smart-tv-accessories/tv-accessories",
//       },
//     ],
//   },
//   {
//     name: "Camera & Accessories",
//     href: "camera-accessories",
//     subcategories: [
//       {
//         name: "Action Camera",
//         href: "camera-accessories/action-camera",
//       },
//       {
//         name: "Camera Accessories",
//         href: "camera-accessories/camera-accessories",
//       },
//     ],
//   },
//   {
//     name: "Wifi & Connectivity",
//     href: "wifi-connectivity",
//     subcategories: [
//       {
//         name: "Router",
//         href: "wifi-connectivity/router",
//       },
//       {
//         name: "Pocket Router",
//         href: "wifi-connectivity/pocket-router",
//       },
//       {
//         name: "Repeater",
//         href: "wifi-connectivity/repeater",
//       },
//       {
//         name: "Bluetooth Dongle",
//         href: "wifi-connectivity/bluetooth-dongle",
//       },
//       {
//         name: "Wifi Dongle",
//         href: "wifi-connectivity/wifi-dongle",
//       },
//     ],
//   },
//   {
//     name: "Others Accessories",
//     href: "others-accessories",
//     subcategories: [
//       {
//         name: "Usb Hub",
//         href: "others-accessories/usb-hub",
//       },
//       {
//         name: "Converters",
//         href: "others-accessories/converters",
//       },
//       {
//         name: "Audio Cable",
//         href: "others-accessories/audio-cable",
//       },
//       {
//         name: "Power Strip",
//         href: "others-accessories/power-strip",
//       },
//       {
//         name: "LED Light",
//         href: "others-accessories/led-light",
//       },
//     ],
//   },
// ];
