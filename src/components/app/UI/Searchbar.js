import { Search } from "@mui/icons-material";
import './styles/style.css';

function Searchbar({ placeholder }) {
    return (<div className="searchbar">
        <Search />
        <input type="search" placeholder={placeholder} autoComplete="off" spellCheck='false' />
    </div>);
}

export default Searchbar;