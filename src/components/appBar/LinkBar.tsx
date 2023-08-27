import { Box, AppBar, Toolbar, MenuItem, Typography } from '@mui/material';

const linkBar:string[] = [ 'About', 'Experience', 'Projects' ];

const renderOptionBar = (
  linkBar.map( links => (
    <MenuItem key={links} sx={{ flexGrow: 1 }}>
      <Typography textAlign="center">{links}</Typography>
    </MenuItem>
  ))
);

function LinkBar() {
  return (
    <Box sx={{ backgroundColor: '#171624', height: '100vh', m: -1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#171624' }}>
          { renderOptionBar }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default LinkBar;