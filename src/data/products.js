import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // men's tshirt
  {
    _id: uuid(),
    marker: "Essentials",
    brand: "Nike",

    image: {
      src: "https://live.staticflickr.com/65535/51956317341_fbd4785483_z.jpg",
      alt: "regular fit tshirt",
    },
    name: "Regular Fit T-shirt",
    idealFor: "men",
    productType: "t-shirt",
    price: 399.0,
    size: "M",
    color: "wax flower",
    rating: 4,
    addedToCart: false,
    addedToWishlist: false,
  },

  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956317296_38153e7b65_z.jpg",
      alt: "oversize tshirt",
    },
    brand: "Nike",

    name: "Oversize T-shirt",
    idealFor: "men",
    productType: "t-shirt",
    price: 799.0,
    size: "L",
    color: "violet",
    rating: 4.2,
    addedToCart: false,
    addedToWishlist: false,
  },

  {
    _id: uuid(),
    marker: "Essentials",

    image: {
      src: "https://live.staticflickr.com/65535/51955325067_b5ff7b481b_z.jpg",
      alt: "printed tshirt",
    },
    brand: "Nike",

    name: "Printed T-shirt",
    idealFor: "men",
    productType: "t-shirt",
    price: 699.0,
    size: "S",
    color: "Black",
    rating: 3.5,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Essentials",

    image: {
      src: "https://live.staticflickr.com/65535/51956317261_cbd0088b84_z.jpg",
      alt: "printed-2 tshirt",
    },
    brand: "Zara",

    name: "Printed T-shirt",
    productType: "t-shirt",
    idealFor: "men",
    price: 799.0,
    size: "M",
    color: "white",
    rating: 3.8,
    addedToCart: false,
    addedToWishlist: false,
  },

  // men's shirt
  {
    _id: uuid(),
    marker: "Conscious choice",
    brand: "Zara",

    image: {
      src: "https://live.staticflickr.com/65535/51956612639_1c77fe7901_z.jpg",
      alt: "regular fit shirt",
    },

    name: "Regular Fit Resort shirt",
    idealFor: "men",
    productType: "shirt",
    price: 799.0,
    size: "M",
    color: "torqouise/striped",
    rating: 4.6,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",
    brand: "Louis Philip",

    image: {
      src: "https://live.staticflickr.com/65535/51956317211_29243e96c7_z.jpg",
      alt: "regular fit shirt",
    },

    name: "Regular Fit Resort shirt",
    productType: "shirt",
    idealFor: "men",
    price: 799.0,
    size: "XL",
    color: "brown/striped",
    rating: 4.8,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",
    brand: "Louis Philip",

    image: {
      src: "https://live.staticflickr.com/65535/51956379163_1a0f9fc32e_z.jpg",
      alt: "patterned shirt",
    },

    name: "Patterned shirt",
    productType: "shirt",
    idealFor: "men",
    price: 1499.0,
    size: "XL",
    color: "pruple/patterned",
    rating: 3.2,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",
    brand: "Louis Philip",

    image: {
      src: "https://live.staticflickr.com/65535/51956317151_b4d7a16752_z.jpg",
      alt: "patterned shirt",
    },

    name: "Patterned Resort shirt",
    idealFor: "men",
    productType: "shirt",
    price: 1299.0,
    size: "L",
    color: "black/Rick and morty",
    rating: 2,
    addedToCart: false,
    addedToWishlist: false,
  },

  // men's hoodies
  {
    _id: uuid(),
    marker: "essentials",
    brand: "Adidas",

    image: {
      src: "https://live.staticflickr.com/65535/51956867270_087ff3b29c_z.jpg",
      alt: "Relaxed Fit hoodie",
    },

    name: "Relaxed Fit Hoodie",
    idealFor: "men",
    productType: "hoodie",
    price: 1499.0,
    size: "L",
    color: "black",
    rating: 1,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",
    brand: "Adidas",

    image: {
      src: "https://live.staticflickr.com/65535/51956576059_e2bcd6e133_z.jpg",
      alt: "Relaxed Fit Printed hoodie",
    },

    name: "Relaxed Fit Printed Hoodie",
    idealFor: "men",
    productType: "hoodie",
    price: 2699.0,
    size: "S",
    color: "light blue",
    rating: 2.5,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",
    brand: "Adidas",

    image: {
      src: "https://live.staticflickr.com/65535/51956576039_da5c92cf38_z.jpg",
      alt: "regular fit hoodie",
    },

    name: "Relaxed Fit Tie-Dye Hoodie",
    idealFor: "men",
    productType: "hoodie",
    price: 2299.0,
    size: "S",
    color: "light yellow",
    rating: 3.8,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",
    brand: "Puma",

    image: {
      src: "https://live.staticflickr.com/65535/51956280076_4189f51175_z.jpg",
      alt: "Relaxed Fit Hoodie",
    },

    name: "Relaxed Fit Hoodie",
    idealFor: "men",
    productType: "hoodie",
    price: 2299.0,
    size: "L",
    color: "navy blue",
    rating: 4,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956342618_9c1ff2c8af_z.jpg",
      alt: "Relaxed Fit Hoodie",
    },
    brand: "Puma",

    name: "Relaxed Fit Hoodie",
    idealFor: "men",
    productType: "hoodie",
    price: 1999.0,
    size: "M",
    color: "cream",
    rating: 3.7,
    addedToCart: false,
    addedToWishlist: false,
  },

  // women

  // women's dresses
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956379448_9b02ff4f38_z.jpg",
      alt: "tshirt dress",
    },
    brand: "Forever 21",

    name: "T-shirt dress",
    idealFor: "women",
    productType: "dress",
    price: 799.0,
    size: "M",
    color: "peach",
    rating: 4,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51955325277_5461721098_z.jpg",
      alt: "Floral puff-sleeved dress",
    },
    brand: "Forever 21",

    name: "Floral puff-sleeved dress",
    idealFor: "women",
    productType: "dress",
    price: 2299.0,
    size: "M",
    color: "dark grey/floral",
    rating: 2.9,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956379433_f73bf759c8_z.jpg",
      alt: "V-neck dress",
    },
    brand: "Zara",

    name: "V-neck dress",
    idealFor: "women",
    productType: "dress",
    price: 1999.0,
    size: "S",
    color: "light beige/floral",
    rating: 4.2,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51955325252_ee73ed3444_z.jpg",
      alt: "wide dress",
    },
    brand: "Zara",

    name: "Wide dress",
    idealFor: "women",
    productType: "dress",
    price: 1499.0,
    size: "XL",
    color: "torquoise/floral",
    rating: 1.2,
    addedToCart: false,
    addedToWishlist: false,
  },

  // sweatshirt
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51956612954_3de7a8bacf_z.jpg",
      alt: "sweatshirt",
    },
    brand: "Calvin Klien",

    name: "Sweatshirt",
    idealFor: "women",
    productType: "sweatshirt",
    price: 799.0,
    size: "XL",
    color: "dark brown",
    rating: 3.6,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51956904250_5cf219b28e_z.jpg",
      alt: "sweatshirt",
    },
    brand: "Calvin Klien",

    name: "Zip-through sweatshirt",
    idealFor: "women",
    productType: "sweatshirt",
    price: 1499.0,
    size: "L",
    color: "black",
    rating: 3.8,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51955325377_a6e8c1c101_z.jpg",
      alt: "printed sweatshirt",
    },
    brand: "Calvin Klien",

    name: "Printed sweatshirt",
    idealFor: "women",
    productType: "sweatshirt",
    price: 1999.0,
    size: "M",
    color: "light grey marl/nfl",
    rating: 3.8,
    addedToCart: false,
    addedToWishlist: false,
  },

  // women tops
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51955325602_eca310e943_z.jpg",
      alt: "ribbed top",
    },
    brand: "Nike",

    name: "Ribbed top",
    idealFor: "women",
    productType: "top",
    price: 1299.0,
    size: "M",
    color: "pink",
    rating: 4.6,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51956379698_5609091562_z.jpg",
      alt: "ribbed top",
    },
    brand: "Nike",

    name: "Ribbed top",
    idealFor: "women",
    productType: "top",
    price: 1299.0,
    size: "S",
    color: "orange",
    rating: 3.2,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51955325557_e7065a565f_z.jpg",
      alt: "cotton t-shirt",
    },
    brand: "Nike",

    name: "Cotton T-shirt",
    idealFor: "women",
    productType: "top",
    price: 399.0,
    size: "M",
    color: "light pink",
    rating: 4.6,
    addedToCart: false,
    addedToWishlist: false,
  },
];
