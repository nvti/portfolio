import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion } from "baseui/accordion";
import { Fade } from "react-reveal";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <div className="main" id="educations">
                <div className="educations-header-div">
                  <Fade bottom duration={2000} distance="20px">
                    <h1
                      className="educations-header"
                      style={{ color: theme.text }}
                    >
                      {section["title"]}
                    </h1>
                  </Fade>
                </div>
                <div className="educations-body-div">
                  {section["experiences"].map((experience) => {
                    return (
                      <ExperienceCard experience={experience} theme={theme} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
