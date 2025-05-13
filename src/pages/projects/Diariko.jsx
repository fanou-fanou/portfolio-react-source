export default function Diariko() {
    return (
        <>
            <div className="container detail">
                <div className="row">
                    <div className="col-lg-12 add-pad">
                        <h1>Diariko</h1>
                        <p>Développement de la partie authentification et sécurité de l’API, avec gestion de la structure front-end.</p>
                        <img src={"/images/diariko-banner.jpg"} alt="diariko code" className="img-fluid" />
                        <h2>Application web sécurisée – Diariko</h2>
                        <p>
                            Pour le projet <b>Diariko</b>, j’ai travaillé principalement sur la mise en place d’un système d’authentification robuste et sur la sécurisation de l’API, tout en assurant une architecture front-end propre et évolutive.
                        </p>
                        <p>
                            Le back-end repose sur <b>ExpressJS</b> avec la gestion des sessions, des tokens JWT, des rôles utilisateurs, ainsi que des middlewares de contrôle d’accès. Du côté front-end, l’interface a été structurée avec <b>React</b> afin de garantir modularité et maintenabilité.
                        </p>

                        <h3>Objectifs du projet</h3>
                        <ul>
                            <li>Mettre en place une authentification sécurisée avec gestion de rôles</li>
                            <li>Protéger les routes sensibles de l’API via des middlewares</li>
                            <li>Organiser une structure front-end claire et adaptable</li>
                        </ul>

                        <h3>Stack technique</h3>
                        <ul>
                            <li><b>ExpressJS</b> pour le back-end API REST</li>
                            <li><b>React</b> pour le front-end</li>
                            <li><b>JWT</b>, <b>bcrypt</b>, middlewares de sécurité</li>
                            <li>Architecture MVC pour une bonne séparation des responsabilités</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="social">
                <div className="container">
                    <div className="row ">
                        <div className="col-6" >
                            <a href="https://www.diariko.com" target="_blank">
                                <img src={'/tech/net.svg'} width={30} alt="github" />
                                www.diariko.com
                            </a>
                        </div>
                        <div className="col-6">
                            <a >
                                <img src={'/tech/facebook.svg'} width={30} alt="facebook" />
                                Diariko
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

