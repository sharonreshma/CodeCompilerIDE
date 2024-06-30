import React from 'react';
import styled from 'styled-components';
import { BiImport } from 'react-icons/bi';

const Console = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background: #3498db; /* Light Blue */
  height: 4rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.16);
  padding: 0 1rem;
  z-index: 2;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7rem;
`;

const TextArea = styled.textarea`
  flex-grow: 1;
  resize: none;
  border: 0;
  outline: 0;
  padding: 0.25rem;
  padding-top: 0.5rem;
  font-size: 1.1rem;
  min-height: 250px;
  background: #fff; /* White */
`;

const ImportButton = styled.label`
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #000; /* Black */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const InputConsole = ({ currentInput, setCurrentInput, getFile }) => {
  const handleFileChange = (e) => {
    getFile(e, setCurrentInput);
  };

  return (
    <Console>
      <Header>
        Input:
        <ImportButton htmlFor="inputfile">
          <input type="file" accept="." id="inputfile" onChange={handleFileChange} style={{ display: 'none' }} />
          <BiImport /> Import Input
        </ImportButton>
      </Header>
      <TextArea
        onChange={(e) => setCurrentInput(e.target.value)}
        value={currentInput}
      />
    </Console>
  );
};

export default InputConsole;
