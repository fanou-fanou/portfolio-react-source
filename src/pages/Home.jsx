import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
    return (
        <>
            <Header />



            <ServicesSection />

            <ProjectSection />
            <section className="social">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-12">
                                <h1 className="text-center  decorated-heading">Réseaux sociaux</h1>
                            </div>
                        </div>
                        <div className="col-6" >
                            <a href="https://github.com/fanou-fanou" target="_blank">
                                <img src={'tech/github.svg'} width={30} alt="github" />
                                github
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="https://www.facebook.com/Fanomezana0" target="_blank">
                                <img src={'tech/facebook.svg'} width={30} alt="facebook" />
                                facebook
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

