import { Link } from "react-router-dom";
import projectsList from "../data/projects";

export default function ProjectSection() {
    return (
        <section className="project-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <h1 className="text-center  decorated-heading">mes projets</h1>
                    </div>
                    {projectsList.map((project, index) => (
                        <div className="col-lg-4 mt-5" key={index}>
                            <div className="projet">
                                <img
                                    src={`/images/${project.image}.jpg`}
                                    alt={project.title}
                                    className="img-fluid"
                                />
                                <div className="content">
                                    <h3 >{project.title}</h3>
                                    <p className="tech" >{project.tech}</p>
                                    <p >{project.content}</p>
                                    <Link className="btn btn-more" to={project.link}>Voir les détails</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
