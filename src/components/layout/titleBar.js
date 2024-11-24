import { Link } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import './styles/style.css';

function TitleBar({ title }) {
    return (<header className='title-bar'>
        <Link to='/'>
            <ArrowBack className='icon' />
        </Link>
        <span>{title}</span>
    </header>)
}

export default TitleBar;