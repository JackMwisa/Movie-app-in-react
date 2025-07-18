// src/components/SerieList/SerieListStyles.js
import styled from 'styled-components';
import { Card } from '@mui/material';

export const StyledSerieCard = styled(Card)`
  text-decoration: none;
  color: inherit;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .MuiCardContent-root {
    padding: 8px;
    text-align: center;
  }
`;
