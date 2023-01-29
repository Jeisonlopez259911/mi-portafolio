const img = require.context('../../../../assets/img', true);

const InfoPage = () => {

    return (
        <div className="Principal">
            <h1>Info</h1>
            <div>
                <img
                    className="imgInfo"
                    src={img(`./miFoto.jfif`)}
                    alt="mi foto"
                />
                <p>Mi nombre es Jeison Stiven Lopez Castro tengo 23 años estudie en la Institucion Educativa San Pedro Claver en Villamaria Caldas, hice un tecnologo  en diseño implementacion y mantenimiento de sistemas de telecomunicaciones en el  SENA el cual me certifique en el año 2021, en el año 2022 hice dos cursos de programacion en Mision Tic y Propercity, de los cuales me llevo un gran aprendizaje en conocimiento de programacion, los cuales aprendi python, HTML, CSS, JavaScript, React, manejo de APIs, utilizar la metodologia SCRUM para el desarrollo de paginas o aplicaciones web, manejo de Git, GitHub, Jira, Visual Studio Code y despliegue en vercel</p>
            </div>
        </div>
    );
  };
  
  export default InfoPage;