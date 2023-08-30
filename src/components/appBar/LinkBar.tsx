import { Box, AppBar, Toolbar, MenuItem, Typography, Avatar } from '@mui/material';

import Image from '../../img/imagenPerfil.jpeg';

const linkBar:string[] = [ 'About Me', 'Technologies', 'Experience', 'Projects' ];

const renderOptionBar = (
  linkBar.map( links => (
    <MenuItem
      key={links} 
    >
      <Typography>{links}</Typography>
    </MenuItem>
  ))
);

function LinkBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar 
          sx={{ 
            display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
            backgroundColor: '#171624',
          }}
        >
          <Avatar 
            sx={{
              position: 'absolute',
              width: '160px',
              height: '160px',
              border: '2px solid #171624',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
              mr: '86%', mt: '6%'
            }}
            alt="Imagen Perfil" 
            src={Image} 
          />
          { renderOptionBar }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default LinkBar;