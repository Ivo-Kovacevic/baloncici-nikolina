import HeroText from '../components/HeroText'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

function Home() {

    return(
        <>
            <HeroText />

            <AboutUs />

            <ContactUs />
        </>
    )
}

export default Home;