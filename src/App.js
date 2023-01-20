import './App.css';
import { BarSocial } from './modules/core/components/molecules/BarSocial';
import Footer from './modules/core/components/molecules/Footer';
import { NavMenu } from './modules/core/components/molecules/NavMenu';
import AppRoutes from './routes.js';

function App() {
  return (

    <div className="App">
      <NavMenu/>
      <BarSocial/>
      <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;
