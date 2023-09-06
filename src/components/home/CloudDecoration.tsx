import { Box } from '@mui/material';

const CloudDecoration = () => {
  return (
    <>
      <Box 
        sx={{
          position: 'absolute',
          width: { xl: '600px', lg: '450px' }, height: { xl: '250px', lg: '250px' },
          background: '#7C8EC4', borderRadius: '50% 50% 0% 0% / 20% 50% 0% 0%',
          mt: { xl: 22.1, lg: 38.7 }
        }}
      />

      <Box 
        sx={{
          position: 'absolute',
          width: { xl: '800px', lg: '700px' }, height: { xl: '200px', lg: '180px' },
          background: '#7C8EC4', borderRadius: '0% 100% 100% 0% / 0% 0% 100% 0%',
          mt: { xl: 28.4, lg: 47.5 }, ml: { xl: 62, lg: 50 }, transform: 'rotate(180deg) scaleX(-1)'
        }}
      />
      
      <Box 
        sx={{
          position: 'absolute',
          width: { xl: '53.2%', lg: '640px' }, height: { xl: '200px', lg: '180px' },
          background: '#7C8EC4', borderRadius: '0% 100% 100% 0% / 0% 0% 100% 0%',
          mt: { xl: 28.4, lg: 47.5 }, ml: { xl: 109.9, lg: 100}, transform: 'rotate(180deg)'
        }}
      />
    </>
  )
}

export default CloudDecoration