import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom'


function ContactUs() {
    return(
        <>
            <Box sx={{ textAlign: 'center', mx: {xs: 1, sm: 5, md: 20}, my: 20, '& *': {margin: 2} }}>
                <Typography variant='h4'>Kontaktirajte nas</Typography>
                <Typography component='p' variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                <Button component={RouterLink} to='/kontakt' variant='contained' sx={{ m: 2 }}>KONTAKT</Button>
            </Box>
        </>
    );
}

export default ContactUs;