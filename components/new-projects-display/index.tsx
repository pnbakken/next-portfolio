import { useEffect, useState } from "react";
import { projects } from "../../pages/api/work";
import styles from "./index.style.module.scss";

const NewProjectsDisplay = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <div className="new-projects-display full-width">
      <div className={"projects flex-c gap-xs full-width"}>
        <Tabs data={projects} handleSelected={setSelectedProject} />
        <Project project={selectedProject} />
      </div>
    </div>
  );
};

export default NewProjectsDisplay;

function Tabs({ data, handleSelected }) {
  return (
    <div
      className={`${styles.tabs} full-width flex-r justify-center gap-md wrap`}
    >
      {data &&
        data.map((item, index) => {
          const tabStyle = {};
          return (
            <Tab
              item={item}
              key={item.name}
              assignedStyle={tabStyle}
              action={handleSelected}
            />
          );
        })}
    </div>
  );
}

function Tab({ item, assignedStyle, action }) {
  return (
    <button
      className={`${styles.tab}`}
      style={assignedStyle}
      onClick={() => action(item)}
    >
      <div className={`${styles.skew}`}>
        <span className={`${styles.tabText}`}>{item.name}</span>
      </div>
    </button>
  );
}

function Project({ project }) {
  function ProjectContent() {
    return <div className={`${styles.projectContent}`}>{project.name}</div>;
  }
  useEffect(() => {}, [project]);
  return (
    <div className={`${styles.project}`}>{project && <ProjectContent />}</div>
  );
}
