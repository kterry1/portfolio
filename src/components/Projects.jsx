import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import tsImg from "../images/tsImg.jpg";
import reactImg from "../images/reactImg.webp";
import reduxImg from "../images/reduxImg.jpg";
const Projects = () => {
  const { Meta } = Card;
  return (
    <div className="projects_container">
      <h1>Hover over a card to see more</h1>
      <h3>Click on a project to see the site</h3>

      <div class="box">
        <div class="ball"></div>
        <div class="ball_two"></div>
        <div class="ball_three"></div>
      </div>
      <div className="projects">
        <Card
          style={{
            width: 300,
            border: "1px solid #5f5f5f",
            backgroundColor: "#242424",
          }}
          cover={
            <img
              style={{
                minHeight: "200px",
                backgroundColor: "#1d1d1d",
                border: "1px solid #5f5f5f",
              }}
              // alt="example"
              src={
                "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              }
            />
          }
        >
          <Meta
            avatar={<Avatar src={tsImg} />}
            title="Drag and Drop"
            description="TypeScript application that allows a user to drag and drop items on a Kibana Board."
          />
          <Meta
            avatar={
              <Avatar
                src={reactImg}
                style={{ position: "relative", bottom: "50px" }}
              />
            }
          />
          <Meta
            avatar={
              <Avatar
                src={reduxImg}
                style={{ position: "relative", bottom: "30px", right: "48px" }}
              />
            }
          />
        </Card>
        <Card
          style={{
            width: 300,
            border: "1px solid #5f5f5f",
            backgroundColor: "#242424",
          }}
          cover={
            <img
              style={{
                minHeight: "200px",
                backgroundColor: "#1d1d1d",
                border: "1px solid #5f5f5f",
              }}
              // alt="example"
              src={
                "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              }
            />
          }
        >
          <Meta
            avatar={<Avatar src={tsImg} />}
            title="Drag and Drop"
            description="TypeScript application that allows a user to drag and drop items on a Kibana Board."
          />
          <Meta
            avatar={
              <Avatar
                src={reactImg}
                style={{ position: "relative", bottom: "50px" }}
              />
            }
          />
          <Meta
            avatar={
              <Avatar
                src={reduxImg}
                style={{ position: "relative", bottom: "30px", right: "48px" }}
              />
            }
          />
        </Card>
        <Card
          style={{
            width: 300,
            border: "1px solid #5f5f5f",
            backgroundColor: "#242424",
          }}
          cover={
            <img
              style={{
                minHeight: "200px",
                backgroundColor: "#1d1d1d",
                border: "1px solid #5f5f5f",
              }}
              // alt="example"
              src={
                "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              }
            />
          }
        >
          <Meta
            avatar={<Avatar src={tsImg} />}
            title="Drag and Drop"
            description="TypeScript application that allows a user to drag and drop items on a Kibana Board."
          />
          <Meta
            avatar={
              <Avatar
                src={reactImg}
                style={{ position: "relative", bottom: "50px" }}
              />
            }
          />
          <Meta
            avatar={
              <Avatar
                src={reduxImg}
                style={{ position: "relative", bottom: "30px", right: "48px" }}
              />
            }
          />
        </Card>
      </div>
    </div>
  );
};

export default Projects;
