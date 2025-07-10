import React from 'react';
import { useTheme } from '@emotion/react';
import { SidebarContainer, ImageLink, LogoImage } from './SidebarStyles';
import { Link } from 'react-router-dom';
import lightLogo from '../../assets/WHITE.png';
import darkLogo from '../../assets/RED.png';
import { Divider, List, ListSubheader,   ListItem,} from '@mui/material';


const demoCategories = [
  { name: 'Action', path: '/category/action' },
  { name: 'Comedy', path: '/category/comedy' },
  { name: 'Drama', path: '/category/drama' },
  { name: 'Horror', path: '/category/horror' },
  { name: 'Sci-Fi', path: '/category/sci-fi' },
  { name: 'Romance', path: '/category/romance' },
  { name: 'Thriller', path: '/category/thriller' },
  { name: 'Documentary', path: '/category/documentary' },
  { name: 'Animation', path: '/category/animation' },
  { name: 'Fantasy', path: '/category/fantasy' },
  { name: 'Adventure', path: '/category/adventure' },
  { name: 'Mystery', path: '/category/mystery' },
 
];


const categories = [
  {label: 'Popular', value: 'popular'},
  {label: 'Top Rated', value: 'top_rated'},
  {label: 'Upcoming', value: 'upcoming'},
 
]

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const logo = theme.palette.mode === 'light' ? lightLogo : darkLogo;

  console.log("Current theme mode:", theme.palette.mode);

  return (
    <SidebarContainer>
      <ImageLink to="/" onClick={() => setMobileOpen(false)}>
        <LogoImage src={logo} alt="Filmsaga logo" />
      </ImageLink>

      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map((category) => (
          <ListItem button component={Link} to={category.path} key={category.name} onClick={() => setMobileOpen(false)}>
            {category.name}
          </ListItem>
        ))}
      </List>

    </SidebarContainer>
  );
};

export default Sidebar;
