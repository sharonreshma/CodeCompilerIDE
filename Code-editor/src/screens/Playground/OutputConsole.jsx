import React from 'react';
import styled from 'styled-components';
import { BiExport } from 'react-icons/bi';

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

  a {
    color: #fff; /* White */
    display: flex;
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
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

const OutputConsole = ({ currentOutput }) => {
  return (
    <Console>
      <Header>
        Output:
        <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(currentOutput)}`} download="output.txt">
          <BiExport /> Export Output
        </a>
      </Header>
      <TextArea
        value={currentOutput}
        disabled
      />
    </Console>
  );
};

export default OutputConsole;
