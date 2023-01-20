import "./styles.css";

const img = require.context('../../../../assets/img', true);

const NotFoundPage404 = () => {
    return (
      <>
        <h1>404 Not found page</h1>
        <br />
        <h2>Creiste que esta ruta existia pero no es un error 404</h2>
        <br />
        <h3>Y soy Dio hahaha </h3>
        <img
          className="imgnofound"
          src={img(`./Dio-personaje.png`)}
          alt="mi foto"
        />
      </>
    );
  };
  
  export default NotFoundPage404;