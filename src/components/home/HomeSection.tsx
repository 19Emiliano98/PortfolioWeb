import AboutMe from './AboutMe';
import CloudDecoration from './CloudDecoration';

import { Box } from '@mui/material';

const HomeSection = () => {
  return (
    <>
      <Box sx={{ color: '#B7C0DA', mt: '6%', ml: '28%' }}>
        <AboutMe />
      </Box>
      <CloudDecoration />
    </>
  )
}

export default HomeSection;