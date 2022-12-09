import {projects} from "../../pages/api/work";
import {languages} from "../../tools/languages/languages";

const Projects = ({lang} : {lang: string}) => {

const language = languages[lang];


    return (
        <div className="container projects-container">
            {projects.map(project => {
                return <Project project={project} lang={lang} key={project.name}/>
            })}

            <div className="container-item project-item project-call-item" >
                <h3 className="has-text">{languages[lang].yourProject}</h3>
                <p className="has-text" data-textname="projectCall">{languages[lang].projectCall}</p>
                <a className="pseudo-button has-text" data-textname="bannerCTA" href="#contact">{languages[lang].bannerCTA}</a>
            </div>
        </div>
    );
}

export default Projects;

const Project = ({project, lang}) => {

    const langDescription = `description_${lang}`;
    return (<div className="container-item project-item">
                   
    <div className="item-image project-image" style={{backgroundImage: `url(${project.image_url})`}}></div>
    <h3 className="project-name">{project.name}</h3>

    <div className="project-details">
        <p>{project[langDescription]}</p>
        
        <div className="skill-list"></div>
        <div className="project-links">
            <a href={`${project.github_url}`}> <img src="/icon/technology/icon-github-light.svg" alt={`${languages[lang].githubLink}`} /></a> <a href={`${project.project_url}`}>{languages[lang].visit}</a>
        </div>
    </div>                    


</div>)
}