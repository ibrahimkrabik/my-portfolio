import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {SiTailwindcss} from "react-icons/si";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
        <li className="software-skill-inline">
            <i>
              <SiTailwindcss />
            </i>
            <p>Tailwind</p>
          </li>
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
