import Link from '@mui/material/Link/Link';

import { Box, AppBar, Toolbar, MenuItem, Avatar } from '@mui/material';
import Image from '../../img/imagenPerfil.jpeg';

interface linkBarProp {
  title: string;
  dominion: string;
}

const linkBar:linkBarProp[] = [ 
  { title:'About Me' , dominion: 'aboutme' }, 
  {title: 'Technologies' , dominion: 'technologies' }, 
  {title: 'Experience' , dominion: 'experience' }, 
  {title: 'Projects' , dominion: 'projects' } 
];

const renderOptionBar = (
  linkBar.map( links => (
    <MenuItem key={links.title}>
      <Link sx={{ textDecoration: 'none', color: 'white' }} href={ `http://localhost:5173/${links.dominion}` }>{links.title}</Link>
    </MenuItem>
  ))
);

function LinkBar() {
  return (
    <Box>
      <AppBar position="fixed">
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