import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" style={{
              display: "inline-block",
              wordWrap: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
              maxWidth: "85%", // Adjust as needed
              textAlign: "left",
            }} key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
  className="vertical-timeline-element--work"
  iconStyle={{
    background: "#AE944F",
    color: "#fff",
    textAlign: "center",
  }}
  icon={
    <img
      src={require(`../images/${work.image}`)} // Ensure the path is correct
      alt={work.title}
      style={{
        width: "100%", // Ensures it fills the circle
        height: "100%",
        borderRadius: "50%", // Keeps it circular
        objectFit: "cover",
      }}
    />
  }
  key={i}
>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
      <div>{mainTech}</div>
      <p
  style={{
    marginLeft: "10px",
    marginTop: "-4px",
    fontStyle: "italic",
    color: "#6c757d",
    fontSize: "0.9rem",
    whiteSpace: "normal", // Allows wrapping
    wordWrap: "break-word",
    overflowWrap: "break-word",
    maxWidth: "100%", // Ensures it stays within container
  }}
>
        {work.years}
      </p>
    </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
