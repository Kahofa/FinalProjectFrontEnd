import React from "react";

const games = [
  {
    title: "Shadow Gambit",
    discount: "-50%",
    price: "4 950₸",
    oldPrice: "9 280₸",
    image: "https://via.placeholder.com/300x150", // Замените на реальную ссылку
    endDate: "13 мар в 21:59",
  },
  {
    title: "Wings Sale",
    discount: "До -85%",
    price: "",
    oldPrice: "",
    image: "https://via.placeholder.com/300x150", // Замените на реальную ссылку
    endDate: "8 мар в 23:00",
  },
  {
    title: "SpellForce Franchise",
    discount: "-71%",
    price: "10 334₸",
    oldPrice: "36 142₸",
    image: "https://via.placeholder.com/300x150", // Замените на реальную ссылку
    endDate: "Акция дня!",
  },
  {
    title: "Young Souls",
    discount: "-65%",
    price: "2 240₸",
    oldPrice: "6 480₸",
    image: "https://via.placeholder.com/300x150", // Замените на реальную ссылку
    endDate: "Акция дня!",
  },
];

const GameCard = ({ title, discount, price, oldPrice, image, endDate }) => {
  return (
    <div className="bg-blue-900 p-4 rounded-lg shadow-lg w-64">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded" />
      <h3 className="text-white text-lg font-bold mt-2">{title}</h3>
      <p className="text-gray-300 text-sm">{endDate}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="bg-green-500 text-black font-bold px-2 py-1 rounded">{discount}</span>
        {price && <span className="text-white text-lg font-semibold">{price}</span>}
      </div>
      {oldPrice && <p className="text-gray-400 text-sm line-through">{oldPrice}</p>}
    </div>
  );
};

const SteamSaleCards = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-800">
      {games.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}
    </div>
  );
};

export default SteamSaleCards;
