import { Link } from 'react-router-dom';
import './styles/style.css';

function Header() {
    return (<div className='homepage--header'>
        <h1>Noten Manager</h1>
        <p>Behalte deine schulischen Leinstungen kostenlos im Überblick.</p>
        <Link to="/get-started" className='link-btn link-btn--white'>Jetzt loslegen</Link>
    </div>);
}

export default Header;