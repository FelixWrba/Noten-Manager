import Navbar from "./Navbar";
import Footer from "./Footer";
import TitleBar from './TitleBar';

function PageLayout({ title, children }) {
    return (<>
        {
            // Replace Navbar with TitleBar if tile is defined
            title ? <TitleBar title={title} /> : <Navbar />
        }

        <main>
            {children}
        </main>

        <Footer />
    </>)
}

export default PageLayout;