
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RootContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
}));

export const MainContent = styled(Box)(({ theme }) => ({
  padding: '2em',
  flexGrow: 1,
  height: '100vh',
  overflowY: 'auto',
}));

export const ToolbarSpacer = styled(Box)(({ theme }) => ({
  height: '70px',
}));

