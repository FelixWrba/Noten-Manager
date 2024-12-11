import { Link, Outlet } from "react-router-dom";
import './styles/bottomNav.css';

function BottomNav() {
    return (<>
        <div className='bottom-nav'>
            <Link to='/app'>Übersicht</Link>
            <Link to='./sections'>Sektionen</Link>
            <Link to='./settings'>Einstellungen</Link>
        </div>
        
        <Outlet />
    </>)
}

export default BottomNav;