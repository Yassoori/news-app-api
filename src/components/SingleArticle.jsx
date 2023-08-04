import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleContext } from "../context/ArticleContext";

const SingleArticle = () => {
  // bring in the selected article
  const { selectedArticle } = useContext(ArticleContext);
  // create a variable for the useNavigate
  const navigate = useNavigate();

  return (
    <div className="content">
      <div onClick={() => navigate("/")} className="back-button, article">
        <h2 className="title">{selectedArticle.title}</h2>
        <img
          src={selectedArticle.urlToImage}
          alt={selectedArticle.title}
          className="image"
        />
        <div className="source-container">
          <p className="author">{selectedArticle.author}</p>
          <p className="source">{selectedArticle.source.name}</p>
          <p className="published-at">{selectedArticle.publishedAt}</p>
        </div>
        <p className="description">{selectedArticle.content}</p>
      </div>
    </div>
  );
};

export default SingleArticle;
