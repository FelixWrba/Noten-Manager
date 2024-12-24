import { useRouteError, Link } from "react-router-dom";
import './style.css';
import Navbar from "../layout/Navbar";
import Footer from '../layout/Footer';

function ErrorPage() {
    const error = useRouteError();
    document.title = 'Noten Manager - Fehlermeldung';

    return (<>
        <Navbar />
        <main className="error-page">
            <h1>Fehler <span className="green-title">{error.status || '{status}'}</span></h1>
            <p>Ein unerwarteter Fehler ist aufgetreten:</p>
            <code>
                {JSON.stringify(error)}
            </code>
            <Link to="/" className="link-btn">Zurück zur Homepage</Link>
        </main>
        <Footer />
    </>)
}

export default ErrorPage;