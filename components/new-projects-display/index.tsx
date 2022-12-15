import { useEffect, useState } from "react";
import { projects } from "../../pages/api/work";
import styles from "./index.style.module.scss";
import { languages } from "../../tools/languages/languages";

const NewProjectsDisplay = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <div className={`${styles.newProjectsDisplay} full-width`}>
      <div className={`${styles.projects} flex-c gap-xs full-width`}>
        <Project project={selectedProject} lang={lang} />
        <Tabs
          data={projects}
          handleSelected={setSelectedProject}
          selectedProject={selectedProject}
        />
      </div>
    </div>
  );
};

export default NewProjectsDisplay;

function Tabs({ data, handleSelected, selectedProject }) {
  return (
    <div className={`${styles.tabs} full-width flex-r justify-center wrap`}>
      {data &&
        data.map((item) => {
          const tabStyle = {};
          return (
            <Tab
              item={item}
              key={item.name}
              assignedStyle={tabStyle}
              action={handleSelected}
              selection={selectedProject}
            />
          );
        })}
    </div>
  );
}

function Tab({ item, assignedStyle, action, selection }) {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    selection.name === item.name ? setIsSelected(true) : setIsSelected(false);
  }, [selection.name, item.name]);

  const [tabStyle, setTabStyle] = useState({});
  useEffect(() => {
    if (item.style) {
      setTabStyle({
        background: item.style.colour_primary,
        color: item.style.colour_text,
      });
    }
  }, []);

  return (
    <button
      className={`${styles.tab} ${isSelected && styles.selected} discrete`}
      style={tabStyle}
      onClick={() => action(item)}
      aria-labelledby={item.name}
    >
      <div>
        <span className={`${styles.tabText}`}>{item.name}</span>
      </div>
    </button>
  );
}

function Project({ project, lang }) {
  function ProjectContent() {
    const projectImageUrl = project.image_url ? project.image_url : "";
    const langDescription = `description_${lang}`;
    return (
      <div className={`${styles.projectContent} flex-c p-5`}>
        <div
          className={`${styles.projectHeader} flex-c align-center full-width mb-5`}
        >
          <h3 className="project-name">{project.name}</h3>
        </div>
        <div
          className={`${styles.projectBody} flex-r full-width justify-center gap-md`}
        >
          <div
            className={styles.projectImage}
            style={{ backgroundImage: `url(${projectImageUrl}` }}
            aria-labelledby="a screenshot of the website"
          ></div>{" "}
          <div className={`${styles.projectInfo}`}>
            <div className={`${styles.projectDescription}`}>
              {project[langDescription]}
            </div>
            <div
              className={`${styles.projectLinks} flex-r justify-between full-width mt-4`}
            >
              {" "}
              <a href={`${project.github_url}`}>
                {" "}
                <img
                  src="/icon/technology/icon-github-light.svg"
                  alt={`${languages[lang].githubLink}`}
                />
              </a>{" "}
              <a href={`${project.project_url}`}>{languages[lang].visit}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  useEffect(() => {}, [project]);
  return (
    <div className={`${styles.project}`}>{project && <ProjectContent />}</div>
  );
}
