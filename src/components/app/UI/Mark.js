import './styles/style.css';

function Mark({ title, value }) {
    return (<div className='mark'>
        {!!title && (<span className="mark-label">{title}</span>)}
        <span className={`mark-number ${value > 4 ? 'warning' : ''}`}>{value}</span>
    </div>);
}

export default Mark;