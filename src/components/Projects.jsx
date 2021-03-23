import React from "react";
import { Card, Avatar } from "antd";
import reactImg from "../images/reactImg.webp";
import portfolioImg from '../images/portfolioImg.png';
import coffeeImg from '../images/coffeeImg.png';
import newsGridImg from '../images/newsGridImg.png';
import basicsImg from '../images/basicsImg.png';

const Projects = () => {
  const { Meta } = Card;
  return (
    <div className="projects_container">
      <h1>Hover over a card to zoom in</h1>
      <h3>Click on the Desktop icon to go to the site</h3>

      <div class="box">
        <div class="ball"></div>
        <div class="ball_two"></div>
        <div class="ball_three"></div>
      </div>
      <div className="projects">
        <Card
        className="cards"
          cover={
            <img
              style={{
                minHeight: "200px",
                backgroundColor: "#1d1d1d",
                border: "1px solid #242424",
              }}
              // alt="example"
              src={coffeeImg}
            />
          }
        >
          <Meta
            avatar={<Avatar src={reactImg} />}
            title="Coffee Cafe"
            description="Online Coffee Shop where logged in users and order from a variety of menu items."
          />
           <a target="_blank" href="https://fir-react-auth-dacbf.firebaseapp.com/login"><i class="fas fa-desktop"></i></a>
        </Card>
        <Card
          className="cards"
          cover={
            <img
              style={{
                minHeight: "200px",
                backgroundColor: "#1d1d1d",
                border: "1px solid #242424",
              }}
              // alt="example"
              src={portfolioImg}
            />
          }
        >
          <Meta
            avatar={<Avatar src={reactImg} />}
            title="Personal Porfolio"
            description="Application to showcase my skills and projects. Built with anime.js and particles.js."
          />
            <a target="_blank" href="https://kterry1.github.io/portfolio/"><i class="fas fa-desktop"></i></a>
        </Card>
        <Card
          className="cards"
          cover={
            <img
              style={{
                minHeight: "200px",
                backgroundColor: "#1d1d1d",
                border: "1px solid #242424",
              }}
              // alt="example"
              src={newsGridImg}
            />
          }
        >
          <Meta
            avatar={<Avatar style={{backgroundColor: "white"}} src={basicsImg} />}
            title="News Grid"
            description="Online sports news site created for practicing CSS Grid."
          />
          <a target="_blank" href="https://kterry1.github.io/NewsGrid/"><i class="fas fa-desktop"></i></a>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
