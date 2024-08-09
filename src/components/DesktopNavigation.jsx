import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'

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
                <Button>POČETNA</Button>
                <Button>DEKORACIJE</Button>
                <Button>KONTAKT</Button>
            </Stack>
        </>
    );
}

export default DesktopNavigation;