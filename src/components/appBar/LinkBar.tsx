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
      <Link sx={{ textDecoration: 'none', color: 'white', fontSize: { md: '22px', sm: '15px', xs: '13px' }, ml: { md: 0, xs: -2.3} }} href={ `http://localhost:5173/${links.dominion}` }>{links.title}</Link>
    </MenuItem>
  ))
);

function LinkBar() {
  return (
    <Box>
      <Toolbar 
        sx={{ 
          display: 'flex', justifyContent: { sm: 'flex-end', xs: 'center' }, alignItems: 'center',
          position: 'fixed', backgroundColor: '#171624', minWidth: '98vw', boxShadow: '0px 5px 35px rgba(0, 0, 0, 0.5)', zIndex: 1
        }}
      >
        <Avatar 
          sx={{
            position: 'absolute',
            width: { xl: '160px', md: '130px', xs: '105px' },
            height: { xl: '160px', md: '130px', xs: '105px' },
            border: '2px solid #171624',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            mr: { lg: '85%', md: '83%', sm: '82%' }, mt: { lg: '6%', sm: '8%', xs: '39%' }
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