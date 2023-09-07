import CardsTech from "./CardsTech";
import CardsFront from "./CardsFront";
import CardsBack from "./CardsBack";

import { Box } from '@mui/material';

const TechSection = () => {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column', 
        alignItems: 'center', pt: 19, ml: { lg: 2, md: 6, sm: 8, xs: 5 }
      }}
    >
      <CardsTech />
      <Box
        sx={{
          display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, mt: { sm: 5, xs: 2 }
        }}
      >
        <CardsFront />
        <CardsBack />
      </Box>
    </Box>
  )
}

export default TechSection;