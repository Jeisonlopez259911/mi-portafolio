import "./styles.css";

const img = require.context('../../../../assets/img', true);

export default function ProjectsPage() {
    return (
        <>
            <h1>Projects</h1>

            <div className="contenedor2">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                className="img-fluid rounded-start imagenP"
                                src={img(`./marvelCityIMG.PNG`)}
                                alt="mi foto"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 class="card-title">Proyecto Marvel City</h5>
                                <p className="card-text">Este proyecto se utilizo, la API de Marvel, con ayuda de el uso html, css, JavaScript y React, tambien utilizamos la metodologia SCRUM como medio de trabajo en un equipo de 7 integrantes, el cual utilizamos Jira para hacer las historias de usuario de los Sprints de cada semana y haciamos Dailys de 15 minutos todos los dias. </p>
                                <a href="https://marvel-portal-jeisonlopez259911.vercel.app" class="btn btn-primary" target="_blank_">ir a la pagina</a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>


    );
};