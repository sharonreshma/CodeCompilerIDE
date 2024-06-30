import React, { useContext } from 'react';
import styled from 'styled-components';
import { IoTrashOutline } from 'react-icons/io5';
import { BiEditAlt } from 'react-icons/bi';
import { FcOpenedFolder } from 'react-icons/fc';
import logo from '../../assets/logo-small.png';
import { ModalContext } from '../../context/ModalContext';
import { PlaygroundContext } from '../../context/PlaygroundContext';
import { useNavigate } from 'react-router-dom';

const StyledRightComponent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  padding: 2rem;
  background-color: #f4f4f4;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    padding: 1rem 0.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #989898;
  margin-bottom: 1rem;
`;

const Heading = styled.h3`
  font-size: ${props => (props.size === 'small' ? '1.25rem' : '1.75rem')};
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-weight: 700;
    color: #4caf50;
  }
`;

const AddButton = styled.div`
  font-size: 1rem;
  border-radius: 30px;
  background-color: #4caf50;
  color: #fff;
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;

  span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const FolderCard = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const FolderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const PlayGroundCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 428px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardContent = styled.div`
  p {
    margin: 0;
  }
`;

const Logo = styled.img`
  width: 70px;
  margin-right: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 425px) {
    width: 50px;
    margin-right: 0.5rem;
  }
`;

const RightComponent = () => {
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);
  const { folders, deleteFolder, deleteCard } = useContext(PlaygroundContext);

  return (
    <StyledRightComponent>
      <Header>
        <Heading size="large">
          My <span>Compilers</span>
        </Heading>
        <AddButton
          onClick={() =>
            openModal({
              show: true,
              modalType: 1,
              identifiers: {
                folderId: '',
                cardId: '',
              },
            })
          }
        >
          <span>+</span> New Folder
        </AddButton>
      </Header>

      {Object.entries(folders).map(([folderId, folder]) => (
        <FolderCard key={folderId}>
          <Header>
            <Heading size="small">
              <FcOpenedFolder /> {folder.title}
            </Heading>
            <FolderIcons>
              <IoTrashOutline onClick={() => deleteFolder(folderId)} />
              <BiEditAlt
                onClick={() =>
                  openModal({
                    show: true,
                    modalType: 4,
                    identifiers: {
                      folderId: folderId,
                      cardId: '',
                    },
                  })
                }
              />
              <AddButton
                onClick={() =>
                  openModal({
                    show: true,
                    modalType: 2,
                    identifiers: {
                      folderId: folderId,
                      cardId: '',
                    },
                  })
                }
              >
                <span>+</span> New Code Compiler
              </AddButton>
            </FolderIcons>
          </Header>

          <PlayGroundCards>
            {Object.entries(folder.playgrounds).map(([playgroundId, playground]) => (
              <Card
                key={playgroundId}
                onClick={() => {
                  navigate(`/playground/${folderId}/${playgroundId}`);
                }}
              >
                <CardContainer>
                  <Logo src={logo} />
                  <CardContent>
                    <p>{playground.title}</p>
                    <p>Language: {playground.language}</p>
                  </CardContent>
                </CardContainer>
                <FolderIcons
                  onClick={e => {
                    e.stopPropagation(); //stop click propagation from child to parent
                  }}
                >
                  <IoTrashOutline onClick={() => deleteCard(folderId, playgroundId)} />
                  <BiEditAlt
                    onClick={() =>
                      openModal({
                        show: true,
                        modalType: 5,
                        identifiers: {
                          folderId: folderId,
                          cardId: playgroundId,
                        },
                      })
                    }
                  />
                </FolderIcons>
              </Card>
            ))}
          </PlayGroundCards>
        </FolderCard>
      ))}
    </StyledRightComponent>
  );
};

export default RightComponent;
