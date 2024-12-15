import ArrowBack from '@mui/icons-material/ArrowBack';
import './styles/style.css';

function TitleBar({ title }) {
    return (<header className='title-bar'>
        <span role='button' className='icon' onClick={() => window.history.back()}>
            <ArrowBack className='icon' />
        </span>
        <span>{title}</span>
    </header>)
}

export default TitleBar;