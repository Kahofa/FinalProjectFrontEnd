import { useState } from "react";
import React from "react";
import "./App.css";


const games = [
  {
    title: "Cyber Quest",

    description: "Футуристическое приключение в мире киберпанка.",
    status: "Играю",
    rating: "8/10",
  },
  {
    title: "Dark Abyss",

    description: "Мрачное фэнтези с глубокой историей и сложными боссами.",
    status: "Пройдено",
    rating: "9/10",
  },
];

function Header({ isHidden }) {
  return (
    <header className={`header retro-header ${isHidden ? "hidden" : ""}`}>
      <h1 className="header-title transition-text">Моя игровая библиотека</h1>
      <p className="header-description transition-text">
        Коллекция любимых игр с прогрессом и оценками.
      </p>
    </header>
  );
}

function GameCard({ game, isVisible }) {
  return (
    <div className={`game-card retro-card transition-text ${isVisible ? "" : "hidden"}`}>
      <img src={game.cover} alt="Game cover" className="game-cover" />
      <h2 className="game-title retro-text transition-text">{game.title}</h2>
      <p className="game-description retro-text transition-text">{game.description}</p>
      <p className="game-status retro-text transition-text">Статус: {game.status}</p>
      <p className="game-rating retro-text transition-text">Оценка: {game.rating}</p>
    </div>
  );
}

export default function GameLibrary() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeGame = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 300);
  };

  const nextGame = () => {
    if (currentIndex < games.length) {
      changeGame(currentIndex + 1);
    }
  };

  const prevGame = () => {
    if (currentIndex > 0) {
      changeGame(currentIndex - 1);
    }
  };

  return (
    <div className="game-library retro-bg">
      <Header isHidden={currentIndex !== 0} />
      {currentIndex > 0 && (
        <GameCard game={games[currentIndex - 1]} isVisible={!isTransitioning} />
      )}
      <div className="nav-buttons">
        {currentIndex > 0 && (
          <button className="nav-button left retro-button transition-text" onClick={prevGame}>
            ◀
          </button>
        )}
        {currentIndex < games.length && (
          <button className="nav-button right retro-button transition-text" onClick={nextGame}>
            ▶
          </button>
        )}
      </div>
    </div>
  );
}
