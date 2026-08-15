import React from "react";

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
      <div className="section-head">
        <span className="section-num mono">SKILLS</span>
        <h2>기술 스택</h2>
      </div>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3 className="mono">{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
