import LinkBar from './components/appBar/LinkBar.tsx';
import HomeSection from './components/home/HomeSection.tsx';
import Contact from './components/contact/Contact.tsx';

import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ backgroundColor: '#171624', height: '100vh', m: -1}}>
      <LinkBar />
      {/* //? Routes */}
      <HomeSection />
      {/* //? Routes */}
      <Contact />
    </Box>
  )
}

export default App;
