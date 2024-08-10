import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import { Link as RouterLink } from 'react-router-dom'

function DesktopNavigation() {

    return(
        <>
            <Stack
                direction='row'
                spacing={2}
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'flex',
                    },
                }}
            >
                <Button component={RouterLink} to='/'>POČETNA</Button>
                <Button component={RouterLink} to='/dekoracije'>DEKORACIJE</Button>
                <Button component={RouterLink} to='/kontakt'>KONTAKT</Button>
            </Stack>
        </>
    );
}

export default DesktopNavigation;