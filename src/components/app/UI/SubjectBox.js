import { Link } from "react-router-dom";
import { HideSource } from "@mui/icons-material";
import './styles/style.css';

function SubjectBox({ name, average, id }) {
    const colors = ['red', 'darkred', 'green', 'darkgreen', 'blue', 'darkblue', 'brown', 'darkmagenta', 'orangered'];

    return (<Link to={`/app/subjects/${id}`} className="subject-box">
        <span className="subject-icon" style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}>{name[0]}</span>
        <div className="subject-data">
            <span className="subject-title">{name}</span>
            <span className="subject-average">
                <HideSource />
                <span>{average}</span>
            </span>
        </div>
    </Link>);
}

export default SubjectBox;