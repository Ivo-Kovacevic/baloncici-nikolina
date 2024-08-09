import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

function Navbar() {
    
    return (
        <>
            <AppBar position='static' sx={{ bgcolor: 'transparent' }}>
                <Toolbar component={Container}>
                    <Box flexGrow={1}>
                        <Typography variant='h4'>Balončići</Typography>
                    </Box>

                    <DesktopNavigation />

                    <MobileNavigation />
                </Toolbar>
            </AppBar>
        </>
    );

}

export default Navbar;