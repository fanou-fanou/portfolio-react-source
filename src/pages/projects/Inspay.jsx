export default function Inspay() {
    return (
        <div className="container detail">
            <div className="row">
                <div className="col-lg-12 add-pad">
                    <h1>Lycée FJKM Fenoarivo</h1>
                    <p>Développement d’un logiciel de gestion d’école avec une gestion des données scalable et performante.</p>

                    <img src={"/images/fjkm.jpg"} alt="lycée fenoarivo code" className="img-fluid" />
                    <h2>Application de gestion scolaire hybride – Lycée FJKM Fenoarivo</h2>
                    <p>
                        Ce projet a consisté à développer un logiciel complet de gestion scolaire pour le <b>Lycée FJKM Fenoarivo</b>, avec une attention particulière portée à la <b>scalabilité</b> et à la <b>performance</b> de la gestion des données.
                    </p>
                    <p>
                        L’application a été réalisée en <b>Java</b> avec <b>JavaFX</b> pour l’interface graphique, et repose sur une architecture hybride permettant le fonctionnement en ligne et hors ligne.
                        En mode connecté, les données sont stockées dans une base <b>PostgreSQL</b>, tandis qu’en mode hors ligne, une base <b>SQLite</b> prend le relais, avec un système de <b>synchronisation automatique</b> des données.
                    </p>

                    <h3>Objectifs du projet</h3>
                    <ul>
                        <li>Gérer les élèves, les enseignants, les matières et les emplois du temps</li>
                        <li>Offrir un accès rapide aux données avec ou sans connexion internet</li>
                        <li>Permettre une synchronisation fluide entre les bases de données locales et distantes</li>
                    </ul>

                    <h3>Stack technique</h3>
                    <ul>
                        <li><b>Java</b> & <b>JavaFX</b> pour l'application de bureau</li>
                        <li><b>PostgreSQL</b> pour la base de données distante (mode en ligne)</li>
                        <li><b>SQLite</b> pour la base locale (mode hors ligne)</li>
                        <li>Mécanisme de <b>synchronisation des données</b> intégré</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}