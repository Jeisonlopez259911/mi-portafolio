import "./styles.css";

const img = require.context('../../../../assets/img', true);

const NotFoundPage404 = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              <h1>404 Not found page</h1>
              <br />
              <h2>Creiste que esta ruta existia pero no es un error 404</h2>
              <br />
              <h3>Y soy Dio hahaha </h3>
            </div>
            <div className="col">
              <img
                className="imgnofound"
                src={img(`./Dio-personaje.png`)}
                alt="mi foto"
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default NotFoundPage404;