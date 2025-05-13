export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Enchanté, je suis <span className="name">Fanomezana Rabevasoa</span></h1>
                        <h2>Développeur <span className="role">Full Stack & Mobile</span></h2>
                        <p>Spécialisé en <strong>JavaScript / TypeScript</strong>, <strong>PHP</strong> et <strong>Flutter</strong>.</p>
                    </div>
                    <div className="col-lg-6">
                        <img src={"/images/me.jpg"} alt="fanomezana rabevasoa" className="img-fluid img-me" />
                    </div>
                </div>
            </div>
        </header>
    );
};

