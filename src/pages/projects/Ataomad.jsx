export default function Ataomad() {
    return (
        <>
            <div className="container detail">
                <div className="row">
                    <div className="col-lg-12 add-pad">
                        <h1>Atoamad</h1>
                        <p>Développement d’une API REST avec Laravel 6 pour le site Atoamad, incluant la gestion des utilisateurs et l’optimisation des performances.</p>

                        <img src={"/images/ataomad-banner.png"} alt="atoamad code" className="img-fluid" />
                        <h2>Développement d’une API performante – Atoamad</h2>
                        <p>
                            Le projet <b>Atoamad</b> repose sur la création d’une API REST robuste à l’aide de <b>Laravel 6</b>, destinée à alimenter le site web en données structurées et sécurisées.
                            En parallèle, j’ai aussi travaillé sur l’intégration front-end en <b>React</b>, garantissant une communication fluide entre l’interface utilisateur et l’API.
                        </p>

                        <h3>Objectifs du projet</h3>
                        <ul>
                            <li>Créer une API REST modulaire avec Laravel 6</li>
                            <li>Mettre en place une gestion complète des utilisateurs (inscription, connexion, rôles)</li>
                            <li>Optimiser les performances et la sécurité de l’ensemble de la plateforme</li>
                        </ul>

                        <h3>Stack technique</h3>
                        <ul>
                            <li><b>Laravel 6</b> pour la création de l’API REST</li>
                            <li><b>React</b> pour l’interface côté client</li>
                            <li>Utilisation de <b>Sanctum</b> et <b>middleware</b> pour sécuriser les routes</li>
                            <li>Optimisations SQL, cache, pagination, et gestion des erreurs centralisée</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="social">
                <div className="container">
                    <div className="row ">
                        <div className="col-6" >
                            <a href="https://www.ataomad.com" target="_blank">
                                <img src={'/tech/net.svg'} width={30} alt="github" />
                                www.ataomad.com
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="https://www.facebook.com/ataomad" target="_blank">
                                <img src={'/tech/facebook.svg'} width={30} alt="facebook" />
                                ataomad
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}