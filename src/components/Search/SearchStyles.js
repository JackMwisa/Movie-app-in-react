// src/components/Search/SearchStyles.js
import styled from "styled-components";

export const StyledSearchBox = styled.div`
  width: 100%;
  max-width: 500px;
  margin: ${({ $visible }) => ($visible ? '0 auto' : '0')};
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(-10px)')};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  text-align: center;
  position: relative;
  z-index: 1200;

  .MuiInputBase-root {
    border-radius: 30px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    color: ${({ theme }) => theme.palette.text.primary};
    box-shadow: 0 2px 4px rgba(0,0,0,0.08);
    padding: 0.25rem 1rem;
  }

  .MuiInputBase-input {
    padding: 10px 14px;
    font-size: 0.95rem;
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;
                                