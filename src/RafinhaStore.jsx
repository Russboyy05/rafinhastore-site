import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    name: "La Combinación",
    rarity: "Muito Raro",
    price: "1000 Robux ou €10",
    image: "https://tr.rbxcdn.com/asset-thumbnail/image/6c6be3bd7e5d26a6e0871677e8b89188/420/420/Image/Png"
  }
];

export default function RafinhaStore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-indigo-600 p-4 text-white">
      <header className="text-center py-6">
        <motion.h1
          className="text-4xl font-bold drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          RafinhaStore 🧠
        </motion.h1>
        <p className="text-lg">A melhor loja para itens de Steal a Brainrot!</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white text-black rounded-2xl shadow-xl hover:scale-105 transition-all p-4"
          >
            <img src={item.image} alt={item.name} className="rounded-xl mb-4" />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-sm text-pink-600">{item.rarity}</p>
            <p className="mt-2">💰 {item.price}</p>
            <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl">
              Comprar
            </button>
          </div>
        ))}
      </section>

      <section className="mt-12 max-w-md mx-auto">
        <h3 className="text-2xl mb-4">🔐 Login</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nome de usuário"
            className="w-full p-2 rounded text-black"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-2 rounded text-black"
          />
          <button className="w-full bg-indigo-500 hover:bg-indigo-600 py-2 rounded-xl text-white">
            Entrar
          </button>
        </form>
      </section>

      <footer className="mt-16 text-center text-sm opacity-70">
        Entrega manual via Roblox após confirmação de pagamento.
      </footer>
    </div>
  );
}