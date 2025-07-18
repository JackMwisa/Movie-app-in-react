// src/components/Search/SearchStyles.js
import styled from 'styled-components';

export const StyledSearchBox = styled.div`
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  width: 100%;
  max-width: 500px;
  padding: 0.5rem 1rem;
  margin-left: auto;
  margin-right: auto;

  .MuiInputBase-root {
    border-radius: 20px;
    background-color: ${({ theme }) =>
      theme.palette.mode === 'dark' ? '#2c2c2c' : '#f5f5f5'};
    padding: 0.25rem 1rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    width: 100%;
  }

  .MuiInputBase-input {
    padding: 10px 14px;
    font-size: 1rem;
    color: ${({ theme }) =>
      theme.palette.mode === 'dark' ? '#fff' : '#000'};
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) =>
      theme.palette.mode === 'dark' ? '#bbb' : '#666'};
  }
`;
