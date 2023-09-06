import Link from '@mui/material/Link/Link';

import { Box, Toolbar, MenuItem, Avatar } from '@mui/material';
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
      <Toolbar 
        sx={{ 
          display: 'flex', justifyContent: 'flex-end', alignItems: 'center',
          position: 'fixed', backgroundColor: '#171624', minWidth: '98vw', boxShadow: '0px 5px 35px rgba(0, 0, 0, 0.5)'
        }}
      >
        <Avatar 
          sx={{
            position: 'absolute',
            width: { xl: '160px', lg: '140px'},
            height: { xl: '160px', lg: '140px'},
            border: '2px solid #171624',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            mr: { lg: '85%' }, mt: '6%'
          }}
          alt="Imagen Perfil" 
          src={Image} 
        />
        { renderOptionBar }
      </Toolbar>
    </Box>
  )
}

export default LinkBar;