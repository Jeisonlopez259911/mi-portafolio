import "./styles.css";
import CIcon  from '@coreui/icons-react';
import { cifCo } from '@coreui/icons';


const img = require.context('../../../../../assets/img', true);

export default function Footer(){
    return(
        <footer className="footer">
            <h2>mi footer </h2>
            <img
                className="imgFooter1"
                src={img(`./prosper.png`)}
                alt="mi foto"
            />
            <CIcon icon={cifCo} />
        </footer>
    )
}