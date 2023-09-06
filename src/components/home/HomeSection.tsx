import AboutMe from './AboutMe';
import CloudDecoration from './CloudDecoration';

import { Box } from '@mui/material';

const HomeSection = () => {
  return (
    <>
      <Box 
        sx={{
          color: '#B7C0DA',
          ml: { xl: '29.4%', lg: '24%'}, 
          pt: 27, mb: -4
        }}
      >
        <AboutMe />
      </Box>
      <CloudDecoration />
    </>
  )
}

export default HomeSection;