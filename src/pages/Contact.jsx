///send contact on email 

export default () => {
    return (

        <>
            <div className="container contact-section">
                <div className="row">
                    <div className="col-12">

                        <h1 className="text-center  decorated-heading">Me Contacter</h1>
                    </div>
                    <div className="col-lg-4 offset-lg-4">
                        <form action="">
                            <div className="mt-3">
                                <label htmlFor="fullname">Nom Complet:</label>
                                <input type="text" className="form-control" id="fullname" name="fullname" />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="fullname">Adresse Email:</label>
                                <input type="email" className="form-control" id="email" name="email" />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="objet">Objet:</label>
                                <input type="text" className="form-control" id="objet" name="objet" />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" rows={10} id="message" className="form-control"></textarea>
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-more w-100">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}