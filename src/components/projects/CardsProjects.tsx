import CarouselImg from "./CarouselImg";

import { 
  Card, CardContent, CardHeader, Typography
} from '@mui/material';

import desus1 from '../../img/projects/Desusweb/desus1.png';
import desus2 from '../../img/projects/Desusweb/desus2.png';
import desus3 from '../../img/projects/Desusweb/desus3.png';
import desus4 from '../../img/projects/Desusweb/desus4.png';

const images = [ desus1, desus2, desus3, desus4 ];

interface structureProps{
  title: string;
  subheader: string;
  imgCarousel: string[];
  linkTo: string;
}

const structure:structureProps[] = [
  {
    title: 'Desusweb',
    subheader: 'Landing Page - FrontEnd',
    imgCarousel: images,
    linkTo: 'link'
  },
  {
    title: 'Desusweb',
    subheader: 'Landing Page - FrontEnd',
    imgCarousel: images,
    linkTo: 'link'
  }
]

const CardsProjects = () => {
  return (
    <>
      {
        structure.map(x => (
        <Card
          sx={{
            backgroundColor: '#B7C0DA', borderRadius: '30px',
            width: 730, height: 700, mt: 4
          }}
        >
          <CardHeader
            title= { x.title}
            subheader= { x.subheader }
            sx={{ m: '10px 0px 0px 30px' }}
          />
          <CardContent sx={{ m: '-10px 0px 0px 0px' }}>
            <CarouselImg props={x.imgCarousel}/>
            <Typography 
              sx={{ 
                fontFamily: "Segoe UI", fontSize: '20px', fontWeight: 600 
              }} 
              variant='body1'
            >
              Link to Page: { x.linkTo }
            </Typography>
          </CardContent>
        </Card>
        ))
      }
    </>
  )
}

export default CardsProjects