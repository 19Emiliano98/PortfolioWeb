import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column', color: '#B7C0DA',
        mt: -10, ml: 3
      }}
    >
      <GitHubIcon fontSize='large' sx={{ mb: 1 }}/>
      <LinkedInIcon fontSize='large' sx={{ mb: 1 }}/>
      <MailOutlineIcon fontSize='large'/>
    </Box>
  )
}

export default Contact