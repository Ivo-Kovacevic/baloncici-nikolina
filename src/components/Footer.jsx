import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return(
        <>
            <Container sx={{ display: 'flex', my: 5 }}>

                <Typography flexGrow={1}>Balončići 2024</Typography>

                <Stack direction='row' spacing={2}>

                    <Link href='https://www.facebook.com/profile.php?id=61561337233731' target='_blank' rel='noopener'>
                        <FacebookIcon />
                    </Link>

                    <Link href='https://www.instagram.com/baloncici_nikolina?ihsg=MXJjZTQ5cGU3ZzBxdQ==' target='_blank' rel='noopener'>
                        <InstagramIcon />
                    </Link>

                    <RouterLink to='/kontakt' style={{ textDecoration: 'none '}}>
                        <Typography>Kontakt</Typography>
                    </RouterLink>
                </Stack>

            </Container>
        </>
    );
}

export default Footer;