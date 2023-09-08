import AboutMe from './AboutMe';
import CloudDecoration from './CloudDecoration';

import { Box } from '@mui/material';

const HomeSection = () => {
  return (
    <>
      <Box 
        sx={{
          color: '#B7C0DA',
          ml: { xl: '29.4%', lg: '24%', md: '13%', sm: '14.3%', xs: '17%' }, 
          pt: { lg: 27, md: 33, sm: 35.4, xs: 27 }, mb: { xl: -4, lg: -9, md: 0, sm: -4.7, xs: 9.2 }
        }}
      >
        <AboutMe />
      </Box>
      <CloudDecoration />
    </>
  )
}

export default HomeSection;