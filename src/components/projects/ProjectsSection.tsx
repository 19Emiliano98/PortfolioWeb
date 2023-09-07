import CardsProjects from "./CardsProjects"

import { Box } from '@mui/material';

const ProjectsSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: { sm: 8, xs: 22 }, ml: 12 }}>
      <CardsProjects />
    </Box>
  )
}

export default ProjectsSection