import { BarSocial } from "../../components/molecules/BarSocial";
import CardHomePage from "../../components/molecules/CardHomePage";


const HomePage = () => {

    return (
      <div className="Principal">
        <h1>Pagina Principal</h1>
          <CardHomePage/>
          <BarSocial/>
      </div>
    );
  };
  
  export default HomePage;