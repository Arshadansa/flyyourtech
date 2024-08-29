import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-[#0c0d2c] flex flex-col justify-between border-gray-600 border shadow-gray-600 text-white rounded-lg p-4 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-700 ease-in-out">
      <div>
        <Link to={`/${link}`}>
          <div className="overflow-hidden rounded-md mb-4">
            <img
              src={image}
              alt={title}
              className="rounded-md hover:cursor-pointer w-full"
            />
          </div>
        </Link>

        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>

      <div className="flex items-center justify-between mt-7">
        <div className="flex space-x-2">
          <FaReact className="text-blue-400" size={24} />
          <SiTailwindcss className="text-teal-400" size={24} />
          <SiTypescript className="text-blue-500" size={24} />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 hover:underline hover:cursor-pointer   inline-block"
        >
          Check live site
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
