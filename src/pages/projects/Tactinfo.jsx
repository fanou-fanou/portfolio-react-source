import { Link } from "react-router-dom";

export default function Tactinfo() {
    return (
        <div className="container detail">
            <div className="row">
                <div className="col-lg-12 add-pad">
                    <h1>TACTINFO</h1>
                    <p>Développement du site de l’université avec un système intégré de gestion de l’institut et des étudiants.</p>

                    <img src={"/images/tactinfo-code.png"} alt="tactinfo code" className="img-fluid" />
                    <h2>Développement d’un site institutionnel hybride – Université Tactinfo</h2>
                    <p>Dans le cadre de la transformation numérique de l’Université Tactinfo, j’ai été chargé de concevoir et de développer un site web hybride permettant à la fois la présentation des différents services proposés par l’institut et la gestion interne de ses activités.</p>
                    <p>Le projet repose sur une architecture <b>Express.js</b> pour le back-end et <b>Angular</b> pour le front-end, avec une approche modulable et scalable afin de répondre aux besoins futurs de l’établissement.</p>
                    <h3>Objectifs du projet</h3>
                    <ul>
                        <li>Créer une vitrine numérique moderne pour l’université</li>
                        <li>Mettre en place une plateforme de gestion des personnels, étudiants, départements et cours</li>
                        <li>Permettre une administration sécurisée et fluide des données en temps réel</li>
                    </ul>
                    <h3>Un développement en cours</h3>
                    <p>Le projet est actuellement en cours de construction. Une attention particulière est portée à l’ergonomie, la performance et la sécurité. Une interface utilisateur intuitive est développée pour faciliter la prise en main du système par les membres de l’administration.</p>
                    <h3>Stack technique</h3>
                    <ul>
                        <li><b>Angular</b> pour le front-end SPA</li>
                        <li><b>Express.js</b> et Node.js pour l’API REST</li>
                        <li>Authentification sécurisée, gestion des rôles, architecture modulaire</li>
                    </ul>

                    <Link to={"https://github.com/fanou-fanou/tactinfo"} target="_blank">📁 Code source disponible sur GitHub -  cliquez ici</Link>
                </div>
            </div>
        </div>
    );
}
