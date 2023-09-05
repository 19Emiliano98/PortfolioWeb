import AboutMe from './AboutMe';
import CloudDecoration from './CloudDecoration';

import { Box } from '@mui/material';

const HomeSection = () => {
  return (
    <>
      <Box sx={{ color: '#B7C0DA', ml: '28%', pt: 18 }}>
        <AboutMe />
      </Box>
      <CloudDecoration />
    </>
  )
}

export default HomeSection;