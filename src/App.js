import './App.css';
import Footer from './modules/core/components/molecules/Footer';
import { NavMenu } from './modules/core/components/molecules/NavMenu';
import AppRoutes from './routes.js';

function App() {
  return (

    <div className="App">
      <NavMenu/>
      <AppRoutes />
      <Footer/>
    </div>
  );
}

export default App;
