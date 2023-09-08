import { Box } from '@mui/material';

const CloudDecoration = () => {
  return (
    <>
      <Box 
        sx={{
          position: 'absolute',
          width: { xl: '600px', lg: '450px', md: '400px', sm: '300px', xs: '200px' }, height: { xl: '250px', lg: '250px', md: '200px', sm: '230px', xs: '200px' },
          background: '#7C8EC4', borderRadius: '50% 50% 0% 0% / 20% 50% 0% 0%',
          mt: { xl: 22.1, lg: 38.7, md: 30, sm: 33, xs: 22 }
        }}
      />

      <Box 
        sx={{
          position: 'absolute',
          width: { xl: '800px', lg: '700px', md: '600px', sm: '350px', xs: '200px' }, height: { xl: '200px', lg: '180px', md: '150px', sm: '190px', xs: '180px' },
          background: '#7C8EC4', borderRadius: '0% 100% 100% 0% / 0% 0% 100% 0%',
          mt: { xl: 28.4, lg: 47.5, md: 36.2, sm: 38, xs: 24.5 }, ml: { xl: 62, lg: 50, md: 25, sm: 30, xs: 16 }, transform: 'rotate(180deg) scaleX(-1)'
        }}
      />
      
      <Box 
        sx={{
          position: 'absolute',
          width: { xl: '53.2%', lg: '640px', md: '400px', sm: '363px', xs: '160px' }, height: { xl: '200px', lg: '180px', md: '180px', sm: '230px', xs: '200px' },
          background: '#7C8EC4', borderRadius: '0% 100% 100% 0% / 0% 0% 100% 0%',
          mt: { xl: 28.4, lg: 47.5, md: 32.5, sm: 33, xs: 22 }, ml: { xl: 109.9, lg: 100, md: 78, sm: 50.5, xs: 26.7 }, transform: 'rotate(180deg)'
        }}
      />
    </>
  )
}

export default CloudDecoration