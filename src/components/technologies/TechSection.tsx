import CardsTech from "./CardsTech";
import CardsFront from "./CardsFront";
import CardsBack from "./CardsBack";

import { Box } from '@mui/material';

const TechSection = () => {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column', 
        alignItems: 'center', mt: 4
      }}
    >
      <CardsTech />
      <Box
        sx={{
          display: 'flex', mt: 4
        }}
      >
        <CardsFront />
        <CardsBack />
      </Box>
    </Box>
  )
}

export default TechSection;