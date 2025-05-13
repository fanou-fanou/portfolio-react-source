import { Link } from "react-router-dom";

export default () => {
    return (
        <nav>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Link to={"/"} className="me">fr</Link>
                    </div>
                    <div>
                        <Link to={"/projects"} className="project-link">MES PROJETS</Link>
                        <Link to={"/contact"} className="btn btn-contact">ME CONTACTER</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}