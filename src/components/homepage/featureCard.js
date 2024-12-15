import './styles/style.css';

function FeatureCard(props) {

    return (<div>
        {/* <img src={path + props.img} alt={props.img} /> */}
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default FeatureCard;