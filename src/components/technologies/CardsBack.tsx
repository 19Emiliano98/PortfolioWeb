import nodejsLogo from '../../img/lenguages/Backend/nodejsLogo.jpg';
import postgreLogo from '../../img/lenguages/Backend/postgreLogo.jpg';
import mongoLogo from '../../img/lenguages/Backend/mongoLogo.png';

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
interface lenguagesProps{
  alt: string;
  logo: string;
}

const lenguagesLogos:lenguagesProps[] = [ 
  { alt: 'NodeJS', logo: nodejsLogo },
  { alt: 'PostgreSQL', logo: postgreLogo },
  { alt: 'MongoDB', logo: mongoLogo }
]

const renderLenguageImage = (
  lenguagesLogos.map( image => (
    <CardMedia
      key={ image.alt }
      component="img"
      image={ image.logo }
      alt={ image.alt }
      sx={{ width: '95px', height: '95px', borderRadius: '17px', m: '8px 10px' }}
    />
  ))
)

const CardsBack = () => {
  return (
    <Card 
      sx={{ 
        width: 300, height: 430, 
        backgroundColor: '#B7C0DA', borderRadius: '18px',
        mt: 3, ml: 7
      }}
    >
      <CardContent 
        sx={{ 
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          mt: 1
        }}
      >
        <Typography 
          variant='h2'
          sx={{ 
            textAlign: 'center', fontWeight: 700, 
            fontSize: '35px', mb: 3 
          }} 
        >
          Back-End
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          { renderLenguageImage }
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardsBack