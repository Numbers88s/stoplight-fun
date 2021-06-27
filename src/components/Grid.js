// modules
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(25px, 1fr));
  max-width: 270px;
  grid-column-gap: 10px;
  margin: 0 auto;
  > * {
    grid-column: 1 / -1;
  }

  @media (min-width: ${({theme}) => theme.breakpoint.mobile}px) {
    grid-template-columns: repeat(7, minmax(35px, 1fr));
    grid-column-gap: 15px;
    max-width: 335px;
  }

  @media (min-width: ${({theme}) => theme.breakpoint.tablet}px) {
    grid-template-columns: repeat(8, minmax(70px, 1fr));
    grid-column-gap: 20px;
    max-width: 700px;
  }

  @media (min-width: ${({theme}) => theme.breakpoint.desktop13}px) {
    grid-template-columns: repeat(12, minmax(60px, 1fr));
    grid-column-gap: 20px;
    max-width: 940px;
    > * {
      grid-column: 2 / -2;
    }
  }

  @media (min-width: ${({theme}) => theme.breakpoint.desktop15}px) {
    grid-template-columns: repeat(12, minmax(95px, 1fr));
    grid-column-gap: 20px;
    max-width: 1360px;
  }
`;

export default Grid;
