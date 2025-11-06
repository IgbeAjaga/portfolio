import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";
import "../css/Portfolio.css";

let id = 0;

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (project) {
      let projectImage = "images/portfolio/" + project.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <img src={projectImage} alt={project.title} className="portfolio-image" />
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div style={{ textAlign: "center" }}>{project.title}</div>
            </a>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade direction="left" duration={1000} triggerOnce>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
