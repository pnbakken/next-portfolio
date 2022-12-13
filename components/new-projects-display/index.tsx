import { useState } from "react";
import { projects } from "../../pages/api/work";

const NewProjectsDisplay = ({ lang }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="new-projects-display full-width">
      <div className={"projects full-width"}>
        <Tabs data={projects} handleSelected={setSelectedProject} />
      </div>
    </div>
  );
};

export default NewProjectsDisplay;

function Tabs({ data, handleSelected }) {
  return <div className="tabs"></div>;
}

function Project({ data }) {
  return <div className="project"></div>;
}
