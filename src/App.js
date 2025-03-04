import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import f1 from "./images/f1.mp4";



function App() {
  // Состояние для отзывов
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("reviews")) || []
  );
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);

  // Фильтрация игр
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);


  const games = [
    { title: "God of War", genre: "Экшен, мифология", img: "godofwar.jpg" },
    { title: "The Last of Us", genre: "Выживание, драма", img: "lastofus.jpg" },
    { title: "Cyberpunk 2077", genre: "Футуристический экшен-RPG", img: "cyberpunk2077.jpg" },
    { title: "The Witcher 3: Wild Hunt", genre: "Фэнтези, RPG", img: "witcher3.jpg" },
    { title: "Elden Ring", genre: "Открытый мир, souls-like", img: "eldenring.jpg" },
    { title: "Red Dead Redemption 2", genre: "Вестерн, открытый мир", img: "rdr2.jpg" },
    { title: "Horizon Forbidden West", genre: "Фантастика, приключения", img: "horizonfw.jpg" },
    { title: "Ghost of Tsushima", genre: "Самураи, экшен", img: "ghostoftsushima.jpg" },
    { title: "Dark Souls III", genre: "Экшен, хардкор", img: "darksouls3.jpg" },
    { title: "Bloodborne", genre: "Готический хоррор, souls-like", img: "bloodborne.jpg" },
    { title: "Resident Evil 4 Remake", genre: "Хоррор, выживание", img: "re4remake.jpg" },
    { title: "Death Stranding", genre: "Приключения, постапокалипсис", img: "deathstranding.jpg" }
];


  useEffect(() => {
    setFilteredGames(games);
  }, []);

  // Обновление фильтра
  useEffect(() => {
    setFilteredGames(
      games.filter((game) =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  // Добавление отзыва
  const addReview = () => {
    if (reviewText.trim() === "") return;
    const newReviews = [...reviews, { text: reviewText, rating }];
    setReviews(newReviews);
    localStorage.setItem("reviews", JSON.stringify(newReviews));
    setReviewText("");
    setRating(5);
  };
  

  // Настройки слайдера
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  

  return (
    <div className="app">
      {/* Хедер */}
      
      <header className="header">
      <div className="header-logo">
      <img src="game1.jpg" alt="CyberQuest 2078" />
  </div>
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Популярное</a></li>
            <li><a href="#">Новинки</a></li>
            <li><a href="#">Отзывы</a></li>
          </ul>
        </nav>
        <label for="nav_check" class="menu">
      <div></div>
      <div></div>
      <div></div>
  </label>
      </header>
{/* Видео-заставка */}
<div className="header-background-intro">
        <video autoPlay loop muted>
        <source src={f1} type="video/mp4" />
        </video>
        <div className="header-background-intro-text">
          <h1>Исследуй мир игр</h1>
          <p>Открывай новые вселенные, знакомься с друзьями и оценивай игры.</p>
          <div className="button">
            <a href="#"><span>Исследовать</span></a>
          </div>
        </div>
      </div>
      
      
      {/* Слайдер популярных игр */}
      <Slider {...sliderSettings}>
        {filteredGames.map((game, index) => (
          <div key={index} className="game-card">
            <img src={game.img} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.genre}</p>
          </div>
        ))}
      </Slider>
      
      <div className="basic-section">
      <div className="service-container">
        <h2>Популярные игры</h2>
        {/* Фильтр и поиск игр */}
      <input
        type="text"
        placeholder="Поиск игр..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
        <div className="game-grid">
          {games.map((game, index) => (
            <div key={index} className="game-card">
              <img src={game.img} alt={game.title} />
              <h3>{game.title}</h3>
              <p>{game.genre}</p>
              <button>5 звездочек будет в будущем</button>
            </div>
          ))}
        </div>
      </div>
    </div>
      
      {/* Отзывы с рейтингом */}
      <div className="review-section">
        <h2>Отзывы</h2>
        <input
          type="text"
          placeholder="Введите ваш отзыв..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        <button onClick={addReview}>Добавить отзыв</button>
        <div className="review-list">
          {reviews.map((rev, index) => (
            <div key={index} className="review-card">
              <p>"{rev.text}"</p>
              <span>Оценка: {rev.rating}/10</span>
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
