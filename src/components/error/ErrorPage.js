import { useRouteError } from "react-router-dom";
import './style.css';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (<div className="error-page">
        <h1><span className="green-title">Noten Manager</span> - Fehler {error.status ||'{status}'}</h1>
        <p>Ein unerwarteter Fehler ist aufgetreten:</p>
        <code>
            {JSON.stringify(error)}
        </code>
        <a href="/">Zurück zur Homepage</a>
    </div>)
}

export default ErrorPage;