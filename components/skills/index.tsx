import { skills } from "../../pages/api/skills";

const Skills = ({ lang }) => {
  return (
    <div className="container skills-container">
      {skills &&
        skills.map((skill) => {
          return <Skill skill={skill} key={skill.name} />;
        })}
    </div>
  );
};

export default Skills;

const Skill = ({ skill }) => {
  return (
    <div
      className="container-item skill-item"
      data-aos="flip-${direction}"
      data-aos-duration="800"
    >
      <img
        className="item-image skill-icon"
        src={`${skill.icon_url}`}
        alt={`${skill.name}`}
      />
      <span className="item-name skill-name">{skill.name}</span>
    </div>
  );
};
