import CarouselImg from "./CarouselImg";

import { 
  Card, CardContent, CardHeader, Typography
} from '@mui/material';

import { desusWebImages, dMartinaImages } from "./imagesLoader";
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
    imgCarousel: desusWebImages,
    linkTo: 'https://desusweb-19emiliano98.netlify.app/inicio'
  },
  {
    title: 'D-Martina',
    subheader: 'E-commerce - FrontEnd',
    imgCarousel: dMartinaImages,
    linkTo: 'https://d-martina-practice.netlify.app/inicio'
  }
]

const renderCard = (
  structure.map(x => (
  <Card
    sx={{
      backgroundColor: '#B7C0DA', borderRadius: '30px',
      width: 730, height: 700, m: '1.5% 7% 2% 0%'
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
);

const CardsProjects = () => {
  return (
    <>
      { renderCard }
    </>
  )
}

export default CardsProjects