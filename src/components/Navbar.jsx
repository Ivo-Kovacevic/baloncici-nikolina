import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function Navbar() {
    
    return (
        <>
            <AppBar position='static' sx={{ bgcolor: 'transparent' }}>
                <Toolbar component={Container}>
                    <Box flexGrow={1}>
                        <Typography variant='h4'>Balončići</Typography>
                    </Box>
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
                </Toolbar>
            </AppBar>
        </>
    );

}

export default Navbar;