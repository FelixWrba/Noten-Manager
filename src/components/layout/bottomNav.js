import { Link, Outlet, useLocation } from "react-router-dom";
import './styles/bottomNav.css';

// Icons
import DashboardIcon from '@mui/icons-material/SpaceDashboardOutlined';
import SectionsIcon from '@mui/icons-material/DatasetOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';

import DashboardIconFill from '@mui/icons-material/SpaceDashboard';
import SectionsIconFill from '@mui/icons-material/Dataset';
import SettingsIconFill from '@mui/icons-material/Settings';

function BottomNav() {
    const location = useLocation();

    const navLinks = [
        { path: '/app', label: 'Übersicht', icon: DashboardIcon, iconFill: DashboardIconFill },
        { path: '/app/subjects', label: 'Fächer', icon: SectionsIcon, iconFill: SectionsIconFill },
        { path: '/app/settings', label: 'Einstellungen', icon: SettingsIcon, iconFill: SettingsIconFill },
    ];

    return (<>
        <div className="bottom-nav">
            {navLinks.map(({ path, label, icon: Icon, iconFill: IconFill }) => (
                <Link
                    key={label}
                    to={path === '/app' ? '.' : `.${path.replace('/app', '')}`}
                    className={`bottom-link ${location.pathname === path ? 'current' : ''}`}
                >
                    {location.pathname === path ? <IconFill /> : <Icon />}
                    <span>{label}</span>
                </Link>
            ))}
        </div>

        <Outlet />
    </>);
}

export default BottomNav;