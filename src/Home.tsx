import Navbar from './Home components/Navbar';
import Carousel from './Home components/Carousel';
import MainHome from './Home components/MainHome';
import Footer from './Home components/Footer';
import Darkmode from './Home components/Darkmode';

export default function Home() {
  return (<>
    <Darkmode />
    <Navbar />
    <Carousel />
    <MainHome />
    <Footer />
    </>
  )}
