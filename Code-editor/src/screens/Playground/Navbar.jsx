import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.div`
  height: ${({ isFullScreen }) => (isFullScreen ? '0' : '4.5rem')};
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.16);
`;

const NavbarContent = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  color: #fff;
`;

const Logo = styled.img`
  width: 40px; /* Adjust size as needed */
`;

const MainHeading = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  span {
    font-weight: 700;
  }
`;

const Navbar = ({ isFullScreen }) => {
  const navigate = useNavigate();

  return (
    <NavbarContainer isFullScreen={isFullScreen}>
      <NavbarContent onClick={() => navigate('/')}>
        <Logo src={logo} alt="Logo" />
        <MainHeading>
          <span>Code</span>Forger
        </MainHeading>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
