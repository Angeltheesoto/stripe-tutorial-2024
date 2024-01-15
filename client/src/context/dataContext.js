import React, { createContext, useState } from "react";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const cartItems = localStorage.getItem("cart");
  const [data, setData] = useState([
    {
      _id: "65973e542916b94401cd546d",
      image: "https://i.postimg.cc/LXppdSQW/Cute-burger-shirt-blk.jpg",
      title: "Burger shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
      quantity: {
        small: 10,
        medium: 10,
        large: 10,
      },
    },
    {
      _id: "6597405f2916b94401cd546e",
      image: "https://i.postimg.cc/prBVcr2k/Cute-burger-shirt.jpg",
      title: "Burger shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
      quantity: {
        small: 10,
        medium: 10,
        large: 10,
      },
    },
    {
      _id: "659740b52916b94401cd546f",
      image: "https://i.postimg.cc/k4vdqHkg/Cute-pizza-shirt-blk.jpg",
      title: "Pizza shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
      quantity: {
        small: 10,
        medium: 10,
        large: 10,
      },
    },
    {
      _id: "659740cf2916b94401cd5470",
      image: "https://i.postimg.cc/T1kMWD28/Cute-pizza-shirt.jpg",
      title: "Pizza shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
      quantity: {
        small: 10,
        medium: 10,
        large: 10,
      },
    },
    {
      _id: "659741162916b94401cd5471",
      image: "https://i.postimg.cc/MHZJTDSb/Cute-taco-shirt-blk.jpg",
      title: "Taco shirt | black",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
      quantity: {
        small: 10,
        medium: 10,
        large: 10,
      },
    },
    {
      _id: "659741352916b94401cd5472",
      image: "https://i.postimg.cc/2jTftPQH/Cute-taco-shirt.jpg",
      title: "Taco shirt | white",
      desc: "Short Sleeve 100% Cotton T-Shirt with Cute picture.",
      price: "17.99",
      quantity: {
        small: 10,
        medium: 10,
        large: 10,
      },
    },
  ]);
  const [cart, setCart] = useState(cartItems ? JSON.parse(cartItems) : []);

  // ?Check if the items exists in localstorage
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <dataContext.Provider value={{ data, cart, setCart }}>
      {children}
    </dataContext.Provider>
  );
};
