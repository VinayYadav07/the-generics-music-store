export const productsArr = [
  {
    id: 1,
    title: "Album 1",
    price: 24.99,
    category: "Music",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    ],
    reviews: [
      "Very good product",
      "Nice quality",
      "I really liked this product",
    ],
    rating: 4.5,
  },
  {
    id: 2,
    title: "Album 2",
    price: 29.99,
    category: "Music",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    ],
    reviews: ["Good product", "Worth the price", "Nice quality"],
    rating: 4.0,
  },
  {
    id: 3,
    title: "Album 3",
    price: 19.99,
    category: "Music",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    ],
    reviews: ["Amazing product", "Good quality", "Satisfied with the product"],
    rating: 4.8,
  },
  {
    id: 4,
    title: "Album 4",
    price: 34.99,
    category: "Music",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    ],
    reviews: ["Nice product", "I liked it", "Good quality"],
    rating: 4.2,
  },
  {
    id: 5,
    title: "T-Shirt",
    price: 29.99,
    category: "Merch",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
    ],
    reviews: ["Comfortable T-Shirt", "Good material", "Nice design"],
    rating: 4.3,
  },

  {
    id: 6,
    title: "Coffee Cup",
    price: 14.99,
    category: "Merch",
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQ9utBv1TsKBLX6aXcruwV3ZP8zeHVC_nqhgCvCRhVxLeGHniNqi1UdU&s=10",
      "https://www.bbassets.com/media/uploads/p/l/40337943_2-starbucks-coffee-classic-iced-coffee-short.jpg",
    ],
    reviews: ["Nice cup", "Good quality", "Worth the price"],
    rating: 4.1,
  },
];

export const musicProducts = productsArr.filter(
  (product) => product.category === "Music",
);

export const merchProducts = productsArr.filter(
  (product) => product.category === "Merch",
);

export const products = productsArr;

export const getProductById = (id) => {
  return productsArr.find((product) => product.id === id);
};

export const getProductsByCategory = (category) => {
  return productsArr.filter((product) => product.category === category);
};
