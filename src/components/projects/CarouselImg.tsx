import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from '@mui/material';
interface Props {
  props: string[];
  responsive: number
};

const CarouselImg: React.FC<Props> = ( props: Props ) => {
  const arrayOfImages = props.props;
  
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Carousel 
        autoPlay interval={2800} transitionTime={1200} infiniteLoop showStatus={false} 
        width='100%' showArrows={ false } thumbWidth={ props.responsive < 800 ? 90 : 137 }
        
      >
        {
          arrayOfImages.map(( x, index ) => (
            <Box key={ index }>
              <img src={ x }/>
            </Box>
          ))
        }
      </Carousel>
    </Box>
  )
};

export default CarouselImg