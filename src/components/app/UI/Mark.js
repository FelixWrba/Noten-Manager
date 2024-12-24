import './styles/style.css';

function Mark({ title, value, small = false }) {
    // displays a mark with small title, big number. If small, display it smaller as button
    return (<div className={`mark ${small && 'small'}`} role={small && 'button'}>
        {!!title && (<span className="mark-label">{title}</span>)}
        <span className={`mark-number ${value > 4 ? 'warning' : ''}`}>{value}</span>
    </div>);
}

export default Mark;