import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { ArticleContext } from "../context/ArticleContext";

// Api key
const apiKey = import.meta.env.VITE_API_KEY;

const Homepage = () => {
  // set up the article context
  const { setSelectedArticle } = useContext(ArticleContext);
  // useState definitions for all our inputs:
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState("");
  const [topic, setTopic] = useState("general");
  const [language, setLanguage] = useState("en");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  // set a state for news (all my articles)
  const [news, setNews] = useState([]);
  // const [newsList, setNewsList] = useState([]);
  // set a state for loading
  const [loading, setLoading] = useState(true);
  // define iseNavigate
  const navigate = useNavigate();

  // useEffect - api call inside
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&category=${topic}&q=${searchTerm}&apiKey=${apiKey}`
        );
        const articles = response.data.articles.map((article) => {
          return {
            ...article,
            onSelect: () => setSelectedArticle(article),
          };
        });
        console.log(response.data.articles);
        setNews(articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, [country, language, topic, searchTerm, apiKey]);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(
  //         `https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&category=${topic}&q=${searchTerm}&apiKey=${apiKey}`
  //       );
  //       const articles = response.data.articles.map((article) => {
  //         return {
  //           ...article,
  //           onSelect: () => setSelectedArticle(article),
  //         };
  //       });
  //       console.log(response.data.articles);
  //       setNewsList(articles);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchNews();
  // }, [country, language, topic, searchTerm, apiKey]);

  return (
    <div>
      <div id="search-bar">
        <button
          onClick={(e) => setTopic(e.target.value)}
          className="topic-button"
          value="general"
        >
          General
        </button>
        <button
          onClick={(e) => setTopic(e.target.value)}
          className="topic-button"
          value="business"
        >
          Business
        </button>
        <button
          onClick={(e) => setTopic(e.target.value)}
          className="topic-button"
          value="entertainment"
        >
          Entertainment
        </button>
        <button
          onClick={(e) => setTopic(e.target.value)}
          className="topic-button"
          value="health"
        >
          Health
        </button>
        <button
          onClick={(e) => setTopic(e.target.value)}
          className="topic-button"
          value="science"
        >
          Science
        </button>
        <button
          onClick={(e) => setTopic(e.target.value)}
          className="topic-button"
          value="sports"
        >
          Sports
        </button>
        <button
          onClick={(e) => setTopic(e.target.value)}
          className="topic-button"
          value="technology"
        >
          Technology
        </button>
        <div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
          className="language-button"
        >
          {language}
        </button>
        <div
          id="language-dropdown"
          style={
            languageDropdownOpen
              ? { visibility: "visible", width: "100px" }
              : { visibility: "hidden", width: "0" }
          }
        >
          <button
            onClick={(e) => setLanguage(e.target.value)}
            className="language-button"
            value="en"
          >
            English
          </button>
          <button
            onClick={(e) => setLanguage(e.target.value)}
            className="language-button"
            value="fr"
          >
            French
          </button>
          <button
            onClick={(e) => setLanguage(e.target.value)}
            className="language-button"
            value="ar"
          >
            Arabic
          </button>
          <button
            onClick={(e) => setLanguage(e.target.value)}
            className="language-button"
            value="ru"
          >
            Russian
          </button>
          {/* </select> */}
        </div>
      </div>

      <div id="side-bar">
        <div id="country-container">
          <button
            onClick={(e) => setCountry(e.target.value)}
            className="country-button"
            value=""
          >
            World
          </button>
          <button
            onClick={(e) => setCountry(e.target.value)}
            className="country-button"
            value="us"
          >
            United States
          </button>
          <button
            onClick={(e) => setCountry(e.target.value)}
            className="country-button"
            value="gb"
          >
            United Kingdom
          </button>
          <button
            onClick={(e) => setCountry(e.target.value)}
            className="country-button"
            value="fr"
          >
            France
          </button>
          <button
            onClick={(e) => setCountry(e.target.value)}
            className="country-button"
            value="sa"
          >
            Saudi Arabia
          </button>
          <button
            onClick={(e) => setCountry(e.target.value)}
            className="country-button"
            value="ru"
          >
            Russia
          </button>
        </div>
      </div>
      <div>
        <div className="content">
          {loading ? (
            <div className="loader">
              <Oval
                color="#141414"
                secondaryColor="#c70000"
                height={100}
                width={100}
              />
            </div>
          ) : news.length === 0 ? (
            <p>No Articles Found</p>
          ) : (
            news.map((item) => (
              <div
                key={item.url}
                className="article"
                onClick={() => {
                  item.onSelect();
                  navigate("/article/");
                }}
              >
                <h2 className="title">{item.title}</h2>
                <img src={item.urlToImage} alt={item.title} className="image" />
                <p className="description">{item.description}</p>
                <div className="source-container">
                  <p className="author">{item.author}</p>
                  <p className="source">{item.source.name}</p>
                  <p className="published-at">{item.publishedAt}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
