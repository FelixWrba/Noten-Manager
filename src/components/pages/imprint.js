import { Link } from "react-router-dom";
import './style.css';


function Imprint() {
    return (<div className="document">
        <h1>Impressum von Noten Manager</h1>
        <h2>Über</h2>
        <p>Seitenbetreiber: Felix Wrba</p>
        <Link to="/">Startseite von Noten Manager</Link>
        <h2>Haftung</h2>
        <p>Es wird keine Haftung für Links übernommen, die zu externen Websiten führen.</p>
        <h2>Kontakt</h2>
        <p>Email: <a href="mailto:fmwrba@gmail.com">fmwrba@gmail.com</a></p>
        <p>Bugs oder Sicherheitslücken melden: <a href="https://github.com/FelixWrba/Noten-Manager/issues" target="_blank" rel="noopener noreferrer">Github</a></p>
        <h2>Urheberrecht</h2>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
            des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
            Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
    </div>)
}

export default Imprint;