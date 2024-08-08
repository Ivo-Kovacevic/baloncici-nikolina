import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

function AboutUs() {
    return(
        <>
            <Box sx={{ textAlign: 'center', mx: {xs: 1, sm: 5, md: 20}, my: 20, '& *': {margin: 2} }}>
                <Typography variant='h4'>O nama</Typography>
                <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </Box>
        </>
    );
}

export default AboutUs;