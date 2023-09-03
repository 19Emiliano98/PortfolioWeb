import { Box, Card, CardContent, CardHeader, Typography, Avatar } from '@mui/material';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import linconInternet from '../../img/companies/linconInternet.png';
import desusWeb from '../../img/companies/desus.svg';

interface listProps{
  title: string;
  subTitle: string;
  position: string;
  src: string;
  items: string[];
}

const linconItems:string[] = [ 
    'Red services support',
    'Network management',
    'Fiber optic network control'
  ];
const desusItems:string[] = [
    'development of E-commerce',
    'development of Landing Pages',
    'Corrections and optimization of code'
  ];

const listContent:listProps[] = [ 
  { 
    title: 'Lincon internet',
    subTitle: "June 15, 2022 - June 30, 2023 ( 1 year )",
    position: 'Technical support',
    src: linconInternet,
    items: linconItems
  },
  { 
    title: 'Desusweb',
    subTitle: "July 01, 2023 - Actually ( less than a year ) ",
    position: 'Front-End Dev',
    src: desusWeb,
    items: desusItems
  }
];

const renderList = (
  listContent.map( x => (
    <Card 
      key={x.title}
      sx={{
        backgroundColor: '#B7C0DA', borderRadius: '30px',
        width: 500, height: 256, mt: 4
      }}
    >
      <CardHeader
        avatar={ <Avatar src={ x.src } aria-label="recipe" /> }
        title= { x.title }
        subheader= { x.subTitle }
        sx={{ m: '10px 0px 0px 30px' }}
      />
      
      <CardContent sx={{ m: '-10px 0px 0px 30px' }}>
        <Typography sx={{ fontFamily: "Segoe UI", fontSize: '20px',fontWeight: 600 }} variant='body1'>
          Position: { x.position }
        </Typography>

        <List dense sx={{ m: '0px 0px 0px 1px' }}>
          
          <ListItem disableGutters>
            <ListItemIcon sx={{ mr: -3 }}>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
              primaryTypographyProps={{ fontFamily: "Segoe UI", fontSize: '15px', fontWeight: 500 }} 
              primary={ x.items[0] }
            />
          </ListItem>
          
          <ListItem disableGutters>
            <ListItemIcon sx={{ mr: -3 }}>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
              primaryTypographyProps={{ fontFamily: "Segoe UI", fontSize: '15px', fontWeight: 500 }} 
              primary={ x.items[1] }
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemIcon sx={{ mr: -3 }}>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
              primaryTypographyProps={{ fontFamily: "Segoe UI", fontSize: '15px', fontWeight: 500 }} 
              primary={ x.items[2] }
            />
          </ListItem>

        </List>
      </CardContent>
    </Card>
  ))
  
)

const ExperienceSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
      { renderList }
    </Box>
  )
}

export default ExperienceSection