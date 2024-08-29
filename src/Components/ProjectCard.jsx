import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="border hover:scale-105  hover:shadow-2xl hover:shadow-gray-600 shadow-gray-600 transition-all duration-700 ease-in-out rounded-lg p-4 shadow-lg">
      <Link to={`/${link}`}>
        <img
          src={image}
          alt={title}
          className="rounded-md hover:cursor-pointer mb-4"
        />
      </Link>

      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline hover:cursor-pointer mt-4 inline-block"
      >
        Visit Project
      </a>
    </div>
  );
};

export default ProjectCard;
