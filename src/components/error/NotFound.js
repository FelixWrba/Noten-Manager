import { Link } from "react-router-dom";
import './style.css';
import Navbar from "../layout/Navbar";
import Footer from '../layout/Footer';

function NotFound() {
    document.title = 'Noten Manager - Nicht gefunden';
    return (<>
        <Navbar />
        <main className="error-page">
            <h1>Fehler <span className="green-title">404</span></h1>
            <p>Ein unerwarteter Fehler ist aufgetreten:</p>
            <code>Not found</code>
            <Link to="/" className="link-btn">Zurück zur Homepage</Link>
        </main>
        <Footer />
    </>)
}

export default NotFound;