import { Book, Monitor, Settings } from '@mui/icons-material';
import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from '@mui/material';
import { useNavigate } from 'react-router';

const SidebarMenu = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 200, paddingTop: 1 }}>
      <MenuList>
        <MenuItem onClick={() => navigate('/')} sx={{ position: 'relative' }}>
          <ListItemIcon>
            <Monitor fontSize="small" />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => navigate('/projects')}>
          <ListItemIcon>
            <Book fontSize="small" />
          </ListItemIcon>
          <ListItemText>Daftar Proyek</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => navigate('/settings')}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Pengaturan</ListItemText>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default SidebarMenu;
