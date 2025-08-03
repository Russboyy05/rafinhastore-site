import React, { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    name: "La Combinación",
    rarity: "Muito Raro",
    price: "1000 Robux ou €10",
    image:
      "https://tr.rbxcdn.com/6c6be3bd7e5d26a6e0871677e8b89188/420/420/Image/Png",
  },
  {
    id: 2,
    name: "Pacote de Boosts",
    rarity: "Raro",
    price: "600 Robux ou €6",
    image:
      "https://tr.rbxcdn.com/9b5cb02a23e7b839e1eaa8c3e4f1d6c6/420/420/Image/Png",
  },
  {
    id: 3,
    name: "Skin do Chaos",
    rarity: "Épico",
    price: "1500 Robux ou €15",
    image:
      "https://tr.rbxcdn.com/e1774d3b7b2b3c01a7ea4c8e717401eb/420/420/Image/Png",
  },
];

export default function RafinhaStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 p-4 text-white font-sans">
      <header className="text-center py-8">
        <motion.h1
          className="text-5xl font-extrabold drop-shadow-2xl tracking-wide"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🎮 RafinhaStore Roblox
        </motion.h1>
        <p className="text-lg mt-2">Itens exclusivos para Steal a Brainrot!</p>
        <motion.img
          src="https://tr.rbxcdn.com/13fcf216844006ebf7b66b401f79a8a0/420/420/Image/Png"
          alt="Roblox Avatar"
          className="mx-auto mt-4 w-24 h-24 rounded-full shadow-lg border-4 border-white"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white text-black rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.name} className="rounded-xl w-32 h-32 object-cover mb-4" />
            <h2 className="text-xl font-bold text-center">{item.name}</h2>
            <p className="text-sm text-pink-600">{item.rarity}</p>
            <p className="mt-2 text-center">💰 {item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-4 bg-pink-600 text-white py-2 px-6 rounded-full hover:bg-pink-700 transition"
            >
              Adicionar
            </button>
          </motion.div>
        ))}
      </main>

      <section className="mt-16 bg-white text-black p-6 max-w-lg mx-auto rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold text-center mb-4">🛒 Carrinho</h3>
        {cart.length === 0 ? (
          <p className="text-center">Nenhum item no carrinho ainda.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="border-b pb-2 flex justify-between">
                <span>{item.name}</span>
                <span className="text-pink-600">{item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer className="mt-20 text-center text-sm text-white/80">
        Entrega manual via Roblox após confirmação de pagamento. © RafinhaStore 2025
      </footer>
    </div>
  );
}