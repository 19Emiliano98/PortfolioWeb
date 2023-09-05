import CardsProjects from "./CardsProjects"

import { Box } from '@mui/material';

const ProjectsSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 6 }}>
      <CardsProjects />
    </Box>
  )
}

export default ProjectsSection