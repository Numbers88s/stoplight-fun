/* eslint-disable max-len */
// modules
import styled from 'styled-components';

export const Traffic = styled.div`
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  justify-content: center;
  grid-row-gap: 10px;
  width: 150px;
  margin: 0 auto;
  border: ${({theme}) => `5px solid ${theme.black}`};
  padding: 20px 10px;
  border-radius: 5px;
  background: ${({theme}) => theme.magenta};
`;

export const Light = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: ${({backgroundColor}) => backgroundColor};
  transition: background-color box-shadow 250ms ease-in;
  box-shadow: ${({backgroundColor}) =>
    backgroundColor === 'grey'
      ? 'none'
      : `rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, ${backgroundColor} -1px -2px 9px 3px, ${backgroundColor} 0 2px 12px`};
`;
