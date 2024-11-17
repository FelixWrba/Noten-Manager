import '../../App.css';
import HeaderLogo from '../../assets/favicon.png';
import { useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
    const navRef = useRef();

    const handleNavbar = () => {
        navRef.current.classList.toggle('homepage--mobile-nav__open')
    }

    return (<>
        <div className='homepage--navbar'>
            <a href='/' className='homepage--navbar-logo'>
                <img src={HeaderLogo} alt='Logo von Notenmanager' draggable='false' />
                <span>Noten&nbsp;Manager</span>
            </a>
            <button onClick={handleNavbar} className='icon icon-btn homepage--navbar-menu-icon'>
                <MenuIcon />
            </button>
            <nav>
                <a href='/'>Startseite</a>
                <a href='/'>Startseite</a>
                <a href='/'>Startseite</a>
                <a href='/'>Startseite</a>
            </nav>
        </div>
        <nav className='homepage--mobile-nav' ref={navRef}>
            <span>
                Navigation
                <button onClick={handleNavbar} className='icon-btn'>
                    <CloseIcon sx={{ color: 'white' }} className='icon' />
                </button>
            </span>
            <a href='/'>Startseite</a>
            <a href='/'>Startseite</a>
            <a href='/'>Startseite</a>
            <a href='/'>Startseite</a>
        </nav>
    </>);
}

export default Navbar;