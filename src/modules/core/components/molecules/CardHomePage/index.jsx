import "./styles.css";

const img = require.context('../../../../../assets/img', true);

export default function CardHomePage(){
    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        className="img-fluid rounded-start"
                        src={img(`./miFoto.jfif`)}
                        alt="mi foto"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 class="card-title">Mi Portafolio</h5>
                        <p className="card-text">Mi nombre es Jeison Stiven Lopez Castro tengo 23 años, amo la tecnologia, me gusta la programacion</p>
                        <a href="/"  class="btn btn-primary" target="_blank_">Saber mas</a>
                    </div>

                </div>

            </div>

        </div>
    );
};