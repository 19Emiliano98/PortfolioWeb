import CardsTech from "./CardsTech";
import CardsFront from "./CardsFront";
import CardsBack from "./CardsBack";

import { Box } from '@mui/material';

const TechSection = () => {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center'
      }}
    >
      <CardsTech />
      <Box
        sx={{
          display: 'flex'
        }}
      >
        <CardsFront />
        <CardsBack />
      </Box>
    </Box>
  )
}

export default TechSection;