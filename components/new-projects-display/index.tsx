import { useState } from "react";
import styles from "./index.module.scss";

const NewProjectsDisplay = ({ lang }) => {
  const displayTab = () => {};
  const [selected, setSelected] = useState(null);
  const handleSelected = (key) => setSelected(key);

  return (
    <div className="new-projects-display full-width">
      <div className={"projects full-width"}>
        <ul
          className={`projects-list no-list-style flex-r justify-around full-width`}
        >
          <Project
            handleSelected={handleSelected}
            key={1}
            selected={selected === 1 ? true : false}
          />
          <Project
            handleSelected={handleSelected}
            key={2}
            selected={selected === 2 ? true : false}
          />
          <Project
            handleSelected={handleSelected}
            key={3}
            selected={selected === 3 ? true : false}
          />
        </ul>
      </div>
    </div>
  );
};

export default NewProjectsDisplay;

const Project = ({ project = null, handleSelected, selected, key }) => {
  return (
    <li className="project flex-r justify-center align-center">
      <div
        className="project-tab full-width flex-c align-center"
        onClick={() => {
          handleSelected(key);
        }}
      >
        <div className="tab-text">Project Title</div>
      </div>
      <div className={`project-body full-width ${selected && "selected"}`}>
        This is a project that I did to do a project and make it nice. And then
        I wrote some words about it
      </div>
    </li>
  );
};
