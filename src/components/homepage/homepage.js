import '../../App.css';
import Header from './Header';
import FeatureCard from './FeatureCard';

function HomePage() {
    return (<>
        <Header />
        
        <h2>Warum Noten Manager nutzen?</h2>
        <div>
            <FeatureCard title="Kostenlos" description="Noten Manager ist komplett gratis. Alle Features der App sind frei verfügbar." img="free.png" />
        </div>
    </>);
}

export default HomePage;