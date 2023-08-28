import { Box, Typography } from '@mui/material';

const HomeSection = () => {
  return (
    <>
      <Box
        sx={{
          mt: '6%', ml: '22.5%'
        }}
        >
        <Typography sx={{ color: 'white', mt: 2.5 }} variant='body1'>Hi, my name is</Typography>

        <Typography sx={{ color: 'white', mt: 2.5 }} variant='h1'>Emiliano Caballero</Typography>

        <Typography sx={{ color: 'white', mt: 2.5 }} variant='h1'>I'm a FullStack Developer</Typography>
      </Box>
    </>
  )
}

export default HomeSection;