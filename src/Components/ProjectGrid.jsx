import React from 'react';
import ProjectCard from './ProjectCard';
import project1 from "../Assest/Images/PortfolioImages/1.png"
import project2 from "../Assest/Images/PortfolioImages/2.png"
import project3 from "../Assest/Images/PortfolioImages/3.png"
import project4 from "../Assest/Images/PortfolioImages/4.png"
import project5 from "../Assest/Images/PortfolioImages/5.png"
import project6 from "../Assest/Images/PortfolioImages/1.png"
import project7 from "../Assest/Images/PortfolioImages/7.png"
import project8 from "../Assest/Images/PortfolioImages/8.png"
import project9 from "../Assest/Images/PortfolioImages/8.png"
import project10 from "../Assest/Images/PortfolioImages/10.png"
import project11 from "../Assest/Images/PortfolioImages/11.png"
import project12 from "../Assest/Images/PortfolioImages/12.png"
import project13 from "../Assest/Images/PortfolioImages/13.png"
import project14 from "../Assest/Images/PortfolioImages/14.png"
import project15 from "../Assest/Images/PortfolioImages/15.png"
import project16 from "../Assest/Images/PortfolioImages/16.png"
import project17 from "../Assest/Images/PortfolioImages/17.png"

const projectsData = [
    { 
        title: 'LOLO CAB WALA', 
        link: 'https://lolocabwala.com/', 
        image: project1, // Replace with actual image path
        description: 'A cab booking platform that simplifies your ride experience.' 
    },
    { 
        title: 'Fly Your Tech', 
        link: 'https://flyyourtech.com/', 
        image: project2, // Replace with actual image path
        description: 'Tech blog and services for the modern enthusiast.' 
    },
    { 
        title: 'Shofy (Front-end)', 
        link: 'https://shofy-front-end.vercel.app/', 
        image: project3, // Replace with actual image path
        description: 'E-commerce platform with a sleek and user-friendly interface.' 
    },
    { 
        title: 'Student Hq', 
        link: 'https://studenthq.netlify.app/', 
        image: project4, // Replace with actual image path
        description: 'A comprehensive platform for students to manage their academic needs.' 
    },
    { 
        title: 'Gritstones', 
        link: 'https://www.gritstones.com/', 
        image: project5, // Replace with actual image path
        description: 'A fashion retail website offering a wide range of clothing options.' 
    },
    { 
        title: 'HodlSwap Telegram Bot (Blockchain Project)', 
        link: 'https://t.me/HodlSwap_bot?start', 
        image: project6, // Replace with actual image path
        description: 'A blockchain-based bot for managing your crypto portfolio.' 
    },
    { 
        title: 'The Saviour App', 
        link: 'https://play.google.com/store/apps/details?id=com.hackydesk.thesaviour', 
        image: project7, // Replace with actual image path
        description: 'An app designed to ensure your safety and security.' 
    },
    { 
        title: 'MoyeMeme (Blockchain Project)', 
        link: 'https://moyememe.com/', 
        image: project8, // Replace with actual image path
        description: 'A decentralized meme-sharing platform built on blockchain technology.' 
    },
    { 
        title: 'NEBULA.AI (Blockchain Project)', 
        link: 'https://nebuladotai.netlify.app/', 
        image: project9, // Replace with actual image path
        description: 'A blockchain project that leverages AI for innovative solutions.' 
    },
    { 
        title: 'HodlSwap (Website)', 
        link: 'https://hodlswap.org/', 
        image: project10, // Replace with actual image path
        description: 'A website for the HodlSwap blockchain platform.' 
    },
    { 
        title: 'Jiggy Tours (Website)', 
        link: 'https://jiggytours.netlify.app/', 
        image: project11, // Replace with actual image path
        description: 'A travel booking website offering personalized tour packages.' 
    },
    { 
        title: 'Tour Guide Enco (Website)', 
        link: 'https://tourguideenco.netlify.app/', 
        image: project12, // Replace with actual image path
        description: 'A platform that connects travelers with local guides.' 
    },
    { 
        title: 'Greater Realty (Website)', 
        link: 'https://greaterrealty.vercel.app/', 
        image: project13, // Replace with actual image path
        description: 'A real estate platform for buying, selling, and renting properties.' 
    },
    { 
        title: 'UKNATION (Website)', 
        link: 'https://e1cba0-a9.myshopify.com/?_ab=0&_fd=0&_sc=1', 
        image: project14, // Replace with actual image path
        description: 'An e-commerce platform featuring a wide range of products.' 
    },
    { 
        title: 'Cozy Apartment Listing (Website)', 
        link: 'https://greaterrealty.vercel.app/property/cozy-apartment', 
        image: project15, // Replace with actual image path
        description: 'A real estate listing for cozy apartments available for rent or sale.' 
    },
    { 
        title: 'Smile Studio (Website)', 
        link: 'https://smile-studio.vercel.app/', 
        image: project16, // Replace with actual image path
        description: 'A dental clinic website that showcases services and bookings.' 
    },
    { 
        title: 'Fusion7 (Website)', 
        link: 'https://fusion7.vercel.app/', 
        image: project17, // Replace with actual image path
        description: 'A tech solutions company offering a wide range of IT services.' 
    }
];

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
