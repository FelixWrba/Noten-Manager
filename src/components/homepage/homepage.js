import '../../App.css';
import Header from './header';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import FeatureCard from './featureCard';

function HomePage() {
    return (<>
        <Navbar />
        <Header />

        <h2>Warum Noten Manager nutzen?</h2>
        <div>
            <FeatureCard title="Kostenlos" description="Noten Manager ist komplett gratis. Alle Features der App sind frei verfügbar." img="free.png" />
        </div>
        
        <Footer />
    </>);
}

export default HomePage;