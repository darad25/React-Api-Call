import styled from 'styled-components';

export const PlayerAttributesContainer = styled.div`
height: 70px;
   width: 100%;    
background-color: #c71919;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
`;

export const PlayerAttributesContain = styled.div`
padding: 3.5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
`;

export const HeaderBlock = styled.div`
   display: flex;
   align-items: center;
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;