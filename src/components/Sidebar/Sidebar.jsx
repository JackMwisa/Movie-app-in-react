import React, {useEffect} from 'react';
import { Divider, List, ListItem, ListItemIcon, ListSubheader, Bo, CircularProgress } from '@mui/material';
import { Link } from 'react-router';
import { useTheme } from '@emotion/react';

const Sidebar = ({setMobileOpen}) => {
    const theme = useTheme();
  return (
    <> 
         <Link to={`/`} onClick={() => setMobileOpen(false)}>
         
         </Link>
        
    </>
  )
}

export default Sidebar;