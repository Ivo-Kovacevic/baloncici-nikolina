import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { Link as RouterLink } from 'react-router-dom'

export default function MobileNavigation() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">

        <ListItem disablePadding>
            <ListItemButton>
                <CloseIcon/>
            </ListItemButton>
          </ListItem>

        <Divider />
        
        <List>
        {['POČETNA', 'DEKORACIJE', 'KONTAKT'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={RouterLink} to={index===0 ? '/' : text.toLowerCase()}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} 
        sx={{
            display: {
                xs: 'flex',
                sm: 'none',
            },
            alignItems: 'center',
        }}
      >
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor={'right'}>
        {DrawerList}
      </Drawer>
    </div>
  );
}