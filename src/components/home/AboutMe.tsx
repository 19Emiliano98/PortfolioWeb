import { Typography } from '@mui/material';

const AboutMe = () => {
  return (
    <>
      <Typography sx={{ ml: 0.8 }} variant='body1'>Hi, my name is</Typography>

      <Typography sx={{ mt: 0.9, fontSize: { md: '95px', sm: '68px'} }} variant='h1'>Emiliano Caballero</Typography>

      <Typography sx={{ mt: 1, ml: 0.2, fontSize: { md: '60px', sm: '37px'}}} variant='h2'>I'm a FullStack Developer</Typography>

      <Typography sx={{ fontSize: { md: '17px', sm: '14px' }, mt: 3, ml: 0.7, width: { md: 700, sm: 540 } }} variant='body2'>
          Specializing in develop of diferent web pages in the FrontEnd
        with React.js and I builded API rest whit Node.js / Express.js. Currently, I always
        focused on the side Frontend from my experience but i love Backend side
      </Typography>
    </>
  )
}

export default AboutMe;