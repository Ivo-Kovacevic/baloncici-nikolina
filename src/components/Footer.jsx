import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return(
        <>
            <Container sx={{ display: 'flex', my: 5 }}>
                <Typography flexGrow={1}>Balončići</Typography>
                <Stack direction='row' spacing={2}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <Typography>Contact</Typography>
                </Stack>
            </Container>
        </>
    );
}

export default Footer;