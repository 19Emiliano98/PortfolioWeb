import htmlLogo from '../../img/lenguages/Frontend/htmlLogo.png';
import cssLogo from '../../img/lenguages/Frontend/cssLogo.png';
import reactLogo from '../../img/lenguages/Frontend/reactLogo.png';
import materialLogo from '../../img/lenguages/Frontend/materialLogo.png';
import bootstrapLogo from '../../img/lenguages/Frontend/bootstrapLogo.jpg';
import tailwindLogo from '../../img/lenguages/Frontend/tailwindLogo.jpg';

import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

interface lenguagesProps{
  alt: string;
  logo: string;
}

const lenguagesLogos:lenguagesProps[] = [ 
  { alt: 'HTML', logo: htmlLogo },
  { alt: 'CSS', logo: cssLogo },
  { alt: 'ReactJS', logo: reactLogo },
  { alt: 'Material UI', logo: materialLogo },
  { alt: 'Bootstrap', logo: bootstrapLogo },
  { alt: 'Tailwind', logo: tailwindLogo }
]

const renderLenguageImage = (
  lenguagesLogos.map( image => (
    <CardMedia
      key={ image.alt }
      component="img"
      image={ image.logo }
      alt={ image.alt }
      sx={{ width: '80px', height: '80px', borderRadius: '17px', m: '8px 10px' }}
    />
  ))
)

const CardsFront = () => {
  return (
    <Card 
      sx={{ 
        width: 300, height: 430, 
        backgroundColor: '#B7C0DA', borderRadius: '18px',
        mt: 3
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
          Front-End
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          { renderLenguageImage }
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardsFront