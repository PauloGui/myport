import React from 'react'

const Contact = props => {
    return (
        <div>
            <div id="contact" className="container-fluid bg-grey">
                <h2 className="text-center">Contato</h2>
                <div className="row">
                    <div className="col-sm-5">
                        <p>Contacte-me e entrarei em contato dentro de 24 horas.</p>
                        <p><span className="glyphicon glyphicon-map-marker"></span> Brasília, BR</p>
                        <p><span className="glyphicon glyphicon-phone"></span> +55 61 99845.1867</p>
                        <p><span className="glyphicon glyphicon-envelope"></span> paulopgss@gmail.com</p>
                    </div>
                    <div className="col-sm-7  ">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input className="form-control" id="name" name="name" placeholder="Nome" type="text" required />
                            </div>
                            <div className="col-sm-6 form-group">
                                <input className="form-control" id="email" name="email" placeholder="E-mail" type="email" required />
                            </div>
                        </div>
                        <textarea className="form-control" id="comments" name="comments" placeholder="Mensagem" rows="5"></textarea><br />
                        <div className="row">
                            <div className="col-sm-12 form-group">
                                <button className="btn btn-default pull-right" type="submit">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact