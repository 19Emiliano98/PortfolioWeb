import { Box } from '@mui/material';

const CloudDecoration = () => {
  return (
    <>
      <Box 
        sx={{
          position: 'absolute',
          width: '600px', height: '250px',
          background: '#7C8EC4', borderRadius: '50% 50% 0% 0% / 20% 50% 0% 0%',
          mt: 23
        }}
      />

      <Box 
        sx={{
          position: 'absolute',
          width: '1000px', height: '200px',
          background: '#7C8EC4', borderRadius: '0% 100% 100% 0% / 0% 0% 100% 0%',
          mt: 29.3, ml: 109.9, transform: 'rotate(180deg)'
        }}
      />
      
      <Box 
        sx={{
          position: 'absolute',
          width: '800px', height: '200px',
          background: '#7C8EC4', borderRadius: '0% 100% 100% 0% / 0% 0% 100% 0%',
          mt: 29.3, ml: 62, transform: 'rotate(180deg) scaleX(-1)'
        }}
      />
    </>
  )
}

export default CloudDecoration