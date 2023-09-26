import CarouselImg from "./CarouselImg";

import { 
  Card, CardContent, CardHeader, Typography, Link
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

let anchoPantalla = window.innerWidth;

const renderCard = (
  structure.map(( x, index ) => (
  <Card
    key={index}
    sx={{
      backgroundColor: '#B7C0DA', borderRadius: '30px',
      width: {md: 730, sm: 550, xs: 300 }, height: { md: 660, sm: 564, xs: 429 }, m: { sm: '1.5% 7% 2% 0%', xs: '1.5% 20% 8% 0%'}
    }}
  >
    <CardHeader
      title= { x.title}
      subheader= { x.subheader }
      sx={{ m: { sm: '10px 0px 0px 30px', xs: '3px 0px 0px 0px' } }}
    />
    <CardContent sx={{ m: '-10px 0px 0px 0px' }}>
      <CarouselImg props={x.imgCarousel} responsive={anchoPantalla}/>
      <Typography 
        sx={{ 
          fontFamily: "Segoe UI", fontSize: { md: '20px', xs: '17px'}, fontWeight: 600 , textAlign: 'center'
        }} 
        variant='body1'
      >
        Link to Page: <Link href={ x.linkTo } underline="hover"> { x.linkTo } </Link>
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