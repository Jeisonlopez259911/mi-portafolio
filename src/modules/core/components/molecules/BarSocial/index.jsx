import { ImGithub, ImLinkedin, ImProfile } from "react-icons/im";
import './styles.css';

const doc = require.context('../../../../../assets/documents', true);

export function BarSocial(){
    return (
        <div className="navbar--left">
            <nav className="mvl-navbar">
                <a className="navbar-item GitHub" href='https://github.com/Jeisonlopez259911' target='_blank_'>
                    <ImGithub/>
                    GitHub
                </a>
            </nav>
            <nav className="mvl-navbar">
                <a className="navbar-item Linkedin" href='https://www.linkedin.com/in/jeison-stiven-lopez-castro-03a535256/' target='_blank_'>
                    <ImLinkedin />
                    Linkedin
                </a>
            </nav>
            <nav className="mvl-navbar">
                <a className="navbar-item HojaDeVida" href= {doc(`./HojaDeVida.pdf`)}  target='_blank_'>
                    <ImProfile />
                    Hoja de vida
                </a>
            </nav>
        </div>
    );
}