import React from "react";
import Reveal from "./Reveal";

const SKILL_GROUPS = [
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "Spring Security", "JPA", "MyBatis"],
  },
  {
    label: "Database",
    items: ["Oracle", "MySQL", "MariaDB", "PostgreSQL", "Redis"],
  },
  {
    label: "Frontend",
    items: ["React", "JavaScript", "axios", "React Router", "Chart.js"],
  },
  {
    label: "Infra & Tools",
    items: ["AWS", "Linux", "Git", "GitHub", "REST API"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <Reveal as="div" className="section-head">
        <span className="section-num mono">SKILLS</span>
        <h2>기술 스택</h2>
      </Reveal>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal as="div" className="skill-group" key={group.label} delay={i * 90}>
            <h3 className="mono">{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
