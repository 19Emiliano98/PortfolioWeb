import jsLogo from '../../img/lenguages/jsLogo.png';
import tsLogo from '../../img/lenguages/tsLogo.png';

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface lenguagesProps{
  alt: string;
  logo: string;
}

const lenguagesLogos:lenguagesProps[] = [ 
  { alt: 'Javascript', logo: jsLogo },
  { alt: 'Typescript', logo: tsLogo }
]

const renderLenguageImage = (
  lenguagesLogos.map( image => (
    <CardMedia
      key={ image.alt }
      component="img"
      image={ image.logo }
      alt={ image.alt }
      sx={{ width: '80px', borderRadius: '17px', m: '0px 10px' }}
    />
  ))
)

export default function CardsTech() {
  return (
    <Card 
      sx={{ 
        width: 400, height: 210, 
        backgroundColor: '#B7C0DA', borderRadius: '18px',
        mt: 3 
      }}
    >
      <CardContent 
        sx={{ 
          display: 'flex', flexDirection: 'column', 
          alignItems: 'center', mt: 1
        }}
      >
        <Typography sx={{ textAlign: 'center', fontWeight: 700, fontSize: '35px', mb: 3 }} variant='h2'>
          Lenguages
        </Typography>
        
        <Box sx={{ display: 'flex', }}>
          { renderLenguageImage }
        </Box>
      </CardContent>
    </Card>
  );
}