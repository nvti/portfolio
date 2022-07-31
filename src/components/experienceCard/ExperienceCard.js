import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade, Flip } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div className="experience-card">
        <Flip left duration={2000}>
          <div className="experience-card-logo">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(0.9)",
              }}
              src={require(`../../assests/images/${experience["logo_path"]}`)}
              alt=""
            />
          </div>
        </Flip>
        <Fade right duration={2000} distance="40px">
          <div className="experience-card-body-div" style={{ width: "100%" }}>
            <div
              className="experience-card-header-div"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="experience-card-title">
                <h2
                  className="experience-card-title"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {experience.company}
                </h3>
              </div>
              <div className="experience-card-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {experience.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {/* {degree.descriptions.map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })} */}
              <p
                className="experience-card-description"
                style={{ color: theme.text }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
