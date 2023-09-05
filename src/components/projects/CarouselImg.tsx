import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  props: string[]
}

const CarouselImg: React.FC<Props> = ( props: Props ) => {
  const arrayOfImages = props.props;
  
  return (
    <Carousel 
      autoPlay interval={2800} transitionTime={1200} infiniteLoop showStatus={false} 
      width='100%' thumbWidth={135}
    >
      {
        arrayOfImages.map(( x, index ) => (
          <div key={ index }>
            <img src={ x }/>
          </div>
        ))
      }
    </Carousel>
  )
};

export default CarouselImg