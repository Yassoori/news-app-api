import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { ArticleContext } from "../context/ArticleContext";

const About = () => {
  return (
    <div className="content">
      <div className="article">
        <h2 className="yassername">Yasser Saeed</h2>
        <img
          src="public/image/about-image-crop.jpg"
          alt="I am very handsome"
          className="image"
        />
        <div>
          <p className="description">
            I am a web design student looking for roles in front end development
            or UI and UX design. I enjoy coding, and find it interesting and
            fulfilling to work on the technical side of things. I have a deep
            passion for the arts, and have experience in the field. I would be
            excited to learn and bring my creative skills to web development.
          </p>
          <p className="description">
            I am also currently a multi‐disciplinary artist and photographer
            whose oeuvre and practice develops from personal interests,
            experiences and research in architecture, history, and typography. I
            pursue this work in my own direction, but often in service for
            social causes and community projects. Most prominently that includes
            art for fundraising and raising awareness for the humanitarian
            crisis in Sudan with the Sudanese community here in Auckland.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
