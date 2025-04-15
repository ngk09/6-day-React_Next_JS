"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([
    { id: 1, title: "Laptop", desc: "Powerful laptop for work", image: "/laptop.jpg" },
    { id: 2, title: "Phone", desc: "Latest smartphone with AI camera", image: "/phone.jpg" },
    { id: 3, title: "Headphones", desc: "Noise-canceling wireless headphones", image: "/headphones.jpg" },
    { id: 4, title: "Smart Watch", desc: "Fitness tracker and smartwatch", image: "/watch.jpg" },
    { id: 5, title: "Tablet", desc: "Lightweight tablet for entertainment", image: "/tablet.jpg" }
  ]);
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  function addProductToCart(product) {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div className="p-4 bg-white min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-3 shadow-md bg-blue-500 text-white">
        <div className="flex items-center space-x-2">
          <img src="logo.jpg" alt="Flipkart Logo" width={120} height={50} />
          <h1 className="text-xl font-bold">NGK Store</h1>
        </div>

        {/* Navigation */}
        <div className="flex space-x-4">
          <Link href="/cart" className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
            🛒 Go to Cart ({cart.length})
          </Link>
        </div>
      </nav>

      {/* Products */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-white p-4 shadow-md rounded-md w-60">
            <Image src={product.image} alt={product.title} width={150} height={150} className="rounded-md" />
            <h2 className="font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">{product.desc}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => addProductToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
