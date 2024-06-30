import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { ModalContext } from '../../context/ModalContext';

const StyledLeftComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #1e1e1e;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const MainHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease-in-out;

  span {
    font-weight: 700;
    color: #4caf50; /* Added a highlight color */
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.div`
  font-size: 1.5rem;
  color: #fff;
  opacity: 0.7;
  margin-bottom: 1.5rem;
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const AddNewButton = styled.button`
  padding: 0.5rem 2rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 50px;
  background-color: #4caf50; /* Button background color */
  color: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const LeftComponent = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <StyledLeftComponent>
      <ContentContainer>
        <Logo src={logo} alt="Code Deck Logo" />
        <MainHeading>
          <span>Code</span> Forger
        </MainHeading>
        <SubHeading>Code. Compile. Debug.</SubHeading>
        <AddNewButton
          onClick={() =>
            openModal({
              show: true,
              modalType: 3,
              identifiers: {
                folderId: '',
                cardId: '',
              },
            })
          }
        >
          <span>+</span> Create New Playground
        </AddNewButton>
      </ContentContainer>
    </StyledLeftComponent>
  );
};

export default LeftComponent;
