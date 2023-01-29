import "./styles.css";
import CIcon  from '@coreui/icons-react';
import { cifCo } from '@coreui/icons';


const img = require.context('../../../../../assets/img', true);

export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="contenedorT">
                    <h2 className="tituloF">mi footer</h2>
                </div>

                <img
                    className="imgFooter1"
                    src={img(`./prosper.png`)}
                    alt="mi foto"
                />
                <img
                    className="imgFooter2"
                    src={img(`./MisionTic.jpg`)}
                    alt="mi foto"
                />
                <img
                    className="imgFooter3"
                    src={img(`./SenaColombiaLogo.png`)}
                    alt="mi foto"
                />
                <CIcon className="banderaCol" icon={cifCo} />
            </footer>
            <div>Mi portafolio - Jeison Stiven Lopez Castro © 2023</div>
        </>

    )
}