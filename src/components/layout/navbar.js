import '../../App.css';
import './styles/navbar.css'
import HeaderLogo from '../../assets/favicon.png';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
    const navRef = useRef();

    const handleNavbar = () => {
        navRef.current.classList.toggle('mobile-nav__open')
    }

    return (<>
        <div className='navbar'>
            <a href='/' className='navbar-logo'>
                <img src={HeaderLogo} alt='Logo von Notenmanager' draggable='false' />
                <span>Noten&nbsp;Manager</span>
            </a>
            <button onClick={handleNavbar} className='icon icon-btn navbar-menu-icon'>
                <MenuIcon />
            </button>
            <nav>
                <Link to='/'>Startseite</Link>
                <Link to='/'>Startseite</Link>
                <Link to='/'>Startseite</Link>
                <Link to='/'>Startseite</Link>
            </nav>
        </div>
        <nav className='mobile-nav' ref={navRef}>
            <span>
                Navigation
                <button onClick={handleNavbar} className='icon-btn'>
                    <CloseIcon sx={{ color: 'white' }} className='icon' />
                </button>
            </span>
            <Link to='/'>Startseite</Link>
            <Link to='/'>Startseite</Link>
            <Link to='/'>Startseite</Link>
            <Link to='/'>Startseite</Link>
        </nav>
    </>);
}

export default Navbar;