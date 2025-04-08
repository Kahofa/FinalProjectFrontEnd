import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import f1 from "./images/f1.mp4";
import godofwar from "./images/godofwar.jpg";
import lastofus from "./images/lastofus.jpg";
import cyberpunk from "./images/cyberpunk.jpg";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [gameTitle, setGameTitle] = useState("");
  const [recommendations, setRecommendations] = useState(
    JSON.parse(localStorage.getItem("recommendations")) || []
  );



  const sliderGames = [
    { title: "God of War", genre: "Экшен, мифология", img: godofwar },
    { title: "The Last of Us", genre: "Выживание, драма", img: lastofus },
    { title: "Cyberpunk 2077", genre: "Футуристический экшен-RPG", img: cyberpunk },
  ];

  const catalogGames = [
    { title: "The Witcher 3: Wild Hunt", genre: "Фэнтези, RPG", img: "witcher3.jpg" },
    { title: "Elden Ring", genre: "Открытый мир, souls-like", img: "eldenring.jpg" },
    { title: "Red Dead Redemption 2", genre: "Вестерн, открытый мир", img: "rdr2.jpg" },
    { title: "Horizon Forbidden West", genre: "Фантастика, приключения", img: "horizonfw.jpg" },
    { title: "Ghost of Tsushima", genre: "Самураи, экшен", img: "ghostoftsushima.jpg" },
    { title: "Dark Souls III", genre: "Экшен, хардкор", img: "darksouls3.jpg" }
  ];

  useEffect(() => {
    setFilteredGames(
      catalogGames.filter((game) =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const addRecommendation = (recom) => {
    recom.preventDefault();
    if (!gameTitle.trim()) return;
    const updatedRecommendations = [...recommendations, { title: gameTitle }];
    setRecommendations(updatedRecommendations);
    localStorage.setItem("recommendations", JSON.stringify(updatedRecommendations));
    setGameTitle("");
  };


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-logo">
          <img src="game1.jpg" alt="иконка" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#catalog">Каталог</a></li>
            <li><a href="#popular">Популярное</a></li>
            <li><a href="#new">Новинки</a></li>
            <li><a href="#reviews">Отзывы</a></li>
          </ul>
        </nav>
      </header>

      <div id="home" className="header-background-intro">
        <video autoPlay loop muted>
          <source src={f1} type="video/mp4" />
        </video>
        <div className="header-background-intro-text">
          <h1>Исследуй мир игр</h1>
          <p>Открывай новые вселенные, знакомься с друзьями и оценивай игры.</p>
          <div className="button">
            <a href="#catalog"><span>Исследовать</span></a>
          </div>
        </div>
      </div>

      <div className="slidetop">
        <h2 id="popular">Лучшие релизы десятилетия</h2>
      </div>
      <Slider {...sliderSettings}>
        {sliderGames.map((game, index) => (
          <div key={index} className="game-slide">
            <img src={game.img} alt={game.title} />
            <div className="game-info">
              <h3>{game.title}</h3>
              <p>{game.genre}</p>
            </div>
          </div>
        ))}
      </Slider>

        <div id="catalog" className="basic-section">
          <div className="service-container">
            <h2>Популярные игры</h2>
            <input
              type="text"
              placeholder="Поиск игр..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <div className="game-grid">
              {filteredGames.map((game, index) => (
                <div key={index} className="game-card">
                  <img src={game.img} alt={game.title} />
                  <h3>{game.title}</h3>
                  <p>{game.genre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      
      <div id="reviews" className="review-section">
        <h2>Рекомендуйте игры</h2>
      <form onSubmit={addRecommendation} className="recommendation-form">
        <input
          type="text"
          placeholder="Введите название игры"
          value={gameTitle}
          onChange={(game) => setGameTitle(game.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
      <div className="review-list">
        {recommendations.map((rec, index) => (
          <div key={index} className="review-card">
            <h3>{rec.title}</h3>
          </div>
        ))}
      </div>
    </div>

      
      {/* Футер */}
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h1>Навигация</h1>
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Каталог</a></li>
              <li><a href="#">Популярное</a></li>
              <li><a href="#">Новинки</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h1>Свяжитесь с нами</h1>
            <ul>
              <li><a href="#">support@gamelibrary.com</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">Discord</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h1>О нас</h1>
            <p>GameLibrary - это портал для поиска, оценки и обзора игр.</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
