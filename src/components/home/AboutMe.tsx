import { Typography } from '@mui/material';

const AboutMe = () => {
  return (
    <>
      <Typography sx={{ ml: 0.8 }} variant='body1'>Hi, my name is</Typography>

      <Typography sx={{ mt: 0.9 }} variant='h1'>Emiliano Caballero</Typography>

      <Typography sx={{ mt: 1, ml: 0.2 }} variant='h2'>I'm a FullStack Developer</Typography>

      <Typography sx={{ fontSize: '17px', mt: 3, ml: 0.7 }} variant='body2'>
        I'm a FullStack Developer specializing in develop of diferent web pages in the FrontEnd <br />
        with React.js and I builded API rest whit Node.js / Express.js.<br /> Currently, I always
        focused on the side Frontend from my experience but i love Backend side
      </Typography>
    </>
  )
}

export default AboutMe;