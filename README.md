# 🍴 Foodie - Food Ordering Web Application

A responsive food ordering web application built using **React.js and Vite**.

Foodie allows users to browse food and drinks, search products, filter products by category, add items to a cart, manage quantities, and view the total cart amount.

---

## 🚀 Live Demo

Coming soon...

---

## 📌 Project Overview

Foodie is a frontend food ordering application developed using React.js.

The project focuses on building a clean, responsive, and interactive user interface using reusable React components, React Hooks, state management, conditional rendering, and responsive CSS.

### Users can:

- Browse food and drinks
- Search for food items
- Filter products by category
- Add products to the cart
- Increase or decrease product quantity
- Remove products from the cart
- View total cart items
- View total cart price
- Access About and Contact sections
- Use the responsive mobile navigation menu

---

## ✨ Features

### 🛒 Shopping Cart

- Add products to cart
- Increase product quantity
- Decrease product quantity
- Remove products from cart
- Display total cart quantity
- Calculate total cart price
- Cart dropdown interface
- Checkout button UI
- Quantity badge on product cards

### 🔍 Search

Users can search for food products by entering the product name.

Example:

```text
Pizza
Burger
Biryani
Juice

🏷️ Category Filter

Products can be filtered based on their category.

The application supports categories such as:

Pizza
Burgers
Snacks
Indian
Desserts
Drinks
Smoothies
And more

📱 Responsive Design

The application is designed to work across:

Desktop
Laptop
Tablet
Mobile

The navigation menu automatically adapts to smaller screen sizes.

🍕 Product Cards

Each product card displays:

Product image
Product category
Product name
Rating
Price
Add to Cart button
Quantity controls
Quantity badge

📄 About Section

Provides information about the Foodie application and its features.

📞 Contact Section

Includes:

Address
Phone
Email
Opening hours
Contact form UI

🛠️ Technologies Used
Frontend
React.js
JavaScript
HTML5
CSS3
Development Tools
Vite
npm
Visual Studio Code
Git
GitHub
React Concepts Used
Functional Components
useState Hook
Props
Event Handling
Conditional Rendering
List Rendering
Array Methods
State Management
Component Reusability


📂 Project Structure
my-react-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── utils/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md


⚙️ Installation
1. Clone the Repository
git clone https://github.com/shravan-kumar-42/foodie.git
2. Navigate to the Project
cd foodie
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev

The application will be available at the local URL provided by Vite, usually:

http://localhost:5173/


🏗️ Build for Production

To create a production build:

npm run build

The production files will be generated in:

dist/


🔎 Preview Production Build

After creating the production build:

npm run preview

This allows you to preview the production build locally.

🧠 Application Logic

The application uses React's useState Hook to manage:

Cart
Search
Category
Mobile Menu
Cart Visibility


🛒 Cart Flow
User selects product
        ↓
   Add to Cart
        ↓
Product added to cart
        ↓
   Quantity = 1
        ↓
   User clicks +
        ↓
 Quantity increases
        ↓
  Cart total updates


🔍 Search Flow
User enters search
        ↓
Product list is filtered
        ↓
Matching products displayed


🏷️ Category Filter Flow
User selects category
        ↓
Products are filtered
        ↓
Selected category products displayed


📊 Product Data

Product information is stored in:

src/utils/products.js

Each product contains information such as:

{
  id: 1,
  name: "Margherita Pizza",
  category: "Pizza",
  price: 299,
  rating: 4.7,
  image: "image-url"
}


🎯 Learning Objectives

This project was created to practice and understand:

React fundamentals
Component-based development
Props
State management
React Hooks
Conditional rendering
Event handling
Array methods
Search functionality
Category filtering
Shopping cart logic
Responsive CSS
Git and GitHub workflow


🔮 Future Improvements

Possible future improvements include:

User authentication
Backend integration
Database integration
Real checkout functionality
Payment gateway integration
Order history
User profile
Product details page
Wishlist
Order tracking
Admin dashboard
Backend API
MySQL database
Deployment


👨‍💻 Author

Shravan Kumar G

- GitHub: [shravan-kumar-42](https://github.com/shravan-kumar-42)
- LinkedIn: [Shravan Kumar G](https://www.linkedin.com/in/shravan-kumar-g-111720306)
- LeetCode: [Shravankumar42](https://leetcode.com/u/Shravankumar42/)
- HackerRank: [shravankumarg361](https://www.hackerrank.com/shravankumarg361)

📜 License

This project is created for learning and educational purposes.

⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.