# The Generics - Music Store (E-Commerce Website)

This is my e-commerce website project made with React.
In this website user can see music albums and merchandise, check product details, add products in cart and login.

**Live Link:** https://the-generics-music-store.vercel.app

![Store page](screenshots/generics-merch.webp)

## Features

- 11 pages using React Router (Home, Store, Product Details, Cart, About, Contact, Movies, Login, Sign Up, Profile, Change Password)
- 6 products in 2 categories (4 albums and 2 merchandise)
- Add to cart, increase or decrease quantity and see total price
- Cart is saved in localStorage for every user, so cart is not lost after page refresh
- Message shows when product is added or removed from cart
- Sign up, login and change password using Firebase Authentication (REST API)
- Some pages open only after login (Products, Product Details, Cart, Profile, Change Password)
- User is logged out automatically when login time is over
- Context API is used for cart and login data
- Movies page gets data from Firebase Realtime Database
- Contact form saves data in Firebase Realtime Database
- 404 page for wrong URL

## Tech Used

- React.js
- JavaScript
- Vite
- Context API
- React Router
- React Bootstrap and Bootstrap
- React Icons
- Firebase Authentication (REST API)
- Firebase Realtime Database

## Screenshots

| Store | Home |
|---|---|
| ![Store](screenshots/generics-store.webp) | ![Home](screenshots/generics-home.webp) |

## What I Learned

- How to use Context API to share data in many components
- How to make protected routes in React Router
- How login works with token and how to logout when token time is over
- How to save data in localStorage and Firebase

## Problems I Faced

- In starting, cart was same for all users. I fixed it by saving cart with user email in localStorage.
- User was staying logged in even after token time was over. I added a timer to logout the user.
- Sometimes movies data was not loading. I added error message and it tries again after few seconds.

## Future Plans

- Add search and filter for products
- Save cart in Firebase so it works on any device
- Add order history page

## How to Run

1. Clone the project

```bash
git clone https://github.com/VinayYadav07/the-generics-music-store.git
cd the-generics-music-store
```

2. Install packages

```bash
npm install
```

3. Make a `.env` file in the main folder and add your Firebase key

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

4. Start the project

```bash
npm run dev
```

5. Open http://localhost:5173 in browser

## Made By

**Vinay Kumar Yadav**

- Portfolio: https://portfolio-rho-red-54.vercel.app
- LinkedIn: https://www.linkedin.com/in/vinay-yadav-593b53329
- GitHub: https://github.com/VinayYadav07
