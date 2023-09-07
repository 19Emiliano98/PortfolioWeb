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
    subTitle: "June 15, 2022 - June 30, 2023",
    position: 'Technical support',
    src: linconInternet,
    items: linconItems
  },
  { 
    title: 'Desusweb',
    subTitle: "July 01, 2023 - Actually",
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
        backgroundColor: '#B7C0DA', borderRadius: { sm: '30px', xs: '15px' },
        width: { sm: 500, xs: 300 }, height: 256, mt: { sm: 4, xs: 2}, ml: { sm: 0, xs: 6 }
      }}
    >
      <CardHeader
        avatar={ <Avatar src={ x.src } aria-label="recipe" /> }
        title= { x.title }
        subheader= { x.subTitle }
        sx={{ m: { sm: '10px 0px 0px 30px', xs: '0px 0px 0px 0px'} }}
      />
      
      <CardContent sx={{ m: '-10px 0px 0px 30px' }}>
        <Typography sx={{ fontFamily: "Segoe UI", fontSize: { sm: '20px', xs: '15px' }, fontWeight: 600, ml: { sm: 0, xs: -3.5 } }} variant='body1'>
          Position: { x.position }
        </Typography>

        <List dense sx={{ ml: { sm: 1, xs: -5 } }}>
          
          <ListItem disableGutters>
            <ListItemIcon sx={{ mt: 0.5, mr: -4 }}>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
              primaryTypographyProps={{ fontFamily: "Segoe UI", fontSize: { sm: '15px', xs: '14px'}, fontWeight: 500 }} 
              primary={ x.items[0] }
            />
          </ListItem>
          
          <ListItem disableGutters>
            <ListItemIcon sx={{ mt: 0.5, mr: -4 }}>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
              primaryTypographyProps={{ fontFamily: "Segoe UI", fontSize: { sm: '15px', xs: '14px'}, fontWeight: 500 }} 
              primary={ x.items[1] }
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemIcon sx={{ mt: 0.5, mr: -4 }}>
              <KeyboardArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
              primaryTypographyProps={{ fontFamily: "Segoe UI", fontSize: { sm: '15px', xs: '14px'}, fontWeight: 500 }} 
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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 24, ml: { md: 0, sm: 4 } }}>
      { renderList }
    </Box>
  )
}

export default ExperienceSection