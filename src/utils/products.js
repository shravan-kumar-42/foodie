const products = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 299,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Cheese Burger",
    category: "Burgers",
    price: 199,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    name: "French Fries",
    category: "Snacks",
    price: 129,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Chicken Biryani",
    category: "Indian",
    price: 249,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Chicken Pizza",
    category: "Pizza",
    price: 349,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Veg Burger",
    category: "Burgers",
    price: 179,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&h=400&fit=crop"
  },
  {
    id: 7,
    name: "Pasta Alfredo",
    category: "Pasta",
    price: 279,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&h=400&fit=crop"
  },
  {
    id: 8,
    name: "Chicken Wings",
    category: "Chicken",
    price: 299,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1637273484026-11d51fb64024?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8fHww"
  },
  {
    id: 9,
    name: "Tacos",
    category: "Mexican",
    price: 229,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop"
  },
  {
    id: 10,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 199,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop"
  },
  {
    id: 11,
    name: "Ice Cream",
    category: "Desserts",
    price: 149,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop"
  },
  {
    id: 12,
    name: "Pancakes",
    category: "Breakfast",
    price: 219,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop"
  },
  {
    id: 13,
    name: "Caesar Salad",
    category: "Salads",
    price: 229,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop"
  },
  {
    id: 14,
    name: "Sushi Platter",
    category: "Japanese",
    price: 599,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop"
  },
  {
    id: 15,
    name: "Ramen",
    category: "Japanese",
    price: 349,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop"
  },
  {
    id: 16,
    name: "Dosa",
    category: "South Indian",
    price: 129,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&h=400&fit=crop"
  },
  {
    id: 17,
    name: "Masala Dosa",
    category: "South Indian",
    price: 149,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 18,
    name: "Paneer Tikka",
    category: "Indian",
    price: 279,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=400&fit=crop"
  },
  {
    id: 19,
    name: "Butter Chicken",
    category: "Indian",
    price: 329,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=400&fit=crop"
  },
  {
    id: 20,
    name: "Momos",
    category: "Chinese",
    price: 159,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=600&h=400&fit=crop"
  },
  {
    id: 21,
    name: "Fresh Orange Juice",
    category: "Juices",
    price: 119,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop"
  },
  {
    id: 22,
    name: "Mango Juice",
    category: "Juices",
    price: 129,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ28lMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 23,
    name: "Watermelon Juice",
    category: "Juices",
    price: 109,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1680954464671-6191ab264214?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 24,
    name: "Pineapple Juice",
    category: "Juices",
    price: 119,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1596392301391-e8622b210bd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGluZWFwcGxlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 25,
    name: "Apple Juice",
    category: "Juices",
    price: 129,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1605199910378-edb0c0709ab4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 26,
    name: "Grape Juice",
    category: "Juices",
    price: 119,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhcGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 27,
    name: "Lemon Juice",
    category: "Juices",
    price: 79,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=400&fit=crop"
  },
  {
    id: 28,
    name: "Pomegranate Juice",
    category: "Juices",
    price: 149,
    rating: 4.7,
    image:
      "https://media.istockphoto.com/id/1216412521/photo/pomegranate-juice.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bz44Wojb-w3vHxMcIFtvXA-AEyXTitlGbCU9ugE6EXY="
  },
  {
    id: 29,
    name: "Cold Coffee",
    category: "Beverages",
    price: 149,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop"
  },
  {
    id: 30,
    name: "Chocolate Milkshake",
    category: "Milkshakes",
    price: 179,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop"
  },
  {
    id: 31,
    name: "Strawberry Milkshake",
    category: "Milkshakes",
    price: 179,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 32,
    name: "Vanilla Milkshake",
    category: "Milkshakes",
    price: 169,
    rating: 4.5,
    image:
      "https://plus.unsplash.com/premium_photo-1695868328902-b8a3b093da74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFuaWxsYSUyMG1pbGtzaGFrZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 33,
    name: "Mango Smoothie",
    category: "Smoothies",
    price: 189,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=400&fit=crop"
  },
  {
    id: 34,
    name: "Strawberry Smoothie",
    category: "Smoothies",
    price: 189,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&h=400&fit=crop"
  },
  {
    id: 35,
    name: "Banana Smoothie",
    category: "Smoothies",
    price: 169,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1685967836529-b0e8d6938227?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 36,
    name: "Fresh Lime Soda",
    category: "Beverages",
    price: 89,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&h=400&fit=crop"
  },
  {
    id: 37,
    name: "Iced Tea",
    category: "Beverages",
    price: 99,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop"
  },
  {
    id: 38,
    name: "Mojito",
    category: "Mocktails",
    price: 149,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=400&fit=crop"
  },
  {
    id: 39,
    name: "Virgin Pina Colada",
    category: "Mocktails",
    price: 179,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop"
  },
  {
    id: 40,
    name: "Fresh Fruit Juice",
    category: "Juices",
    price: 119,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&h=400&fit=crop"
  }
];

export default products;