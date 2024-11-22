import { Link } from 'react-router-dom';
import './styles/style.css';

function Footer() {
    return (<div className='footer'>
        <p>&copy;2024 Felix Wrba.</p>
        <p><Link to='/imprint'>Impressum</Link></p>
    </div>);
}

export default Footer;