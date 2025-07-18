// src/pages/Series/SeriesStyle.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export const SeriesContainer = styled(Box)`
  padding: 1.5rem;
`;

export const SeriesCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const SeriesImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

export const SeriesTitle = styled(Typography).attrs({ variant: 'body2' })`
  margin-top: 0.5rem;
  font-weight: 500;
  text-align: center;
`;
