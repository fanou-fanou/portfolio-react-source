import dataServices from "../data/services";

export default function ServicesSection() {
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center  decorated-heading">Services & Compétences</h1>
                    </div>
                    {dataServices.map((service, index) => (
                        <div key={index} className="col-lg-3">
                            <div className="service">
                                <div className="text-center">
                                    {service.icons.map((icon, i) => (
                                        <img
                                            key={i}
                                            src={`/tech/${icon}.svg`}
                                            alt={icon}
                                            width={60}
                                            className="m-2"
                                        />
                                    ))}
                                </div>
                                <h3 className="my-4" >{service.title}</h3>
                                <p>{service.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
