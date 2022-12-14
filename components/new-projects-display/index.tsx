import { useEffect, useState } from "react";
import { projects } from "../../pages/api/work";
import styles from "./index.style.module.scss";

const NewProjectsDisplay = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <div className={`${styles.newProjectsDisplay} full-width`}>
      <div className={`${styles.projects} flex-c gap-xs full-width`}>
        <Tabs
          data={projects}
          handleSelected={setSelectedProject}
          selectedProject={selectedProject}
        />
        <Project project={selectedProject} lang={lang} />
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

  return (
    <button
      className={`${styles.tab} ${isSelected && styles.selected} discrete`}
      style={assignedStyle}
      onClick={() => action(item)}
    >
      <div>
        <span className={`${styles.tabText}`}>{item.name}</span>
      </div>
    </button>
  );
}

function Project({ project, lang }) {
  function ProjectContent() {
    return <div className={`${styles.projectContent}`}>{project.name}</div>;
  }
  useEffect(() => {}, [project]);
  return (
    <div className={`${styles.project}`}>{project && <ProjectContent />}</div>
  );
}
