import React from "react";
import "./Publications.css";
import { Fade } from "react-reveal";

import { publicationsHeader } from "../../portfolio.js";
import PublicationData from "../../shared/opensource/publications.json";
import PublicationCard from "../../components/publicationsCard/PublicationCard";

export default function Publications({ theme }) {
  return (
    <div id="publications">
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="publications-heading-div">
            <div className="publications-heading-text-div">
              <h1
                className="publications-heading-text"
                style={{ color: theme.text }}
              >
                {publicationsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {publicationsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="repo-cards-div-main">
        {PublicationData.data.map((repo) => {
          return <PublicationCard repo={repo} theme={theme} />;
        })}
      </div>
    </div>
  );
}
