import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button.component';

export const NavigationContainer = styled.div` 
   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
   margin: 0px;
   background-color: #c71919;

   @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
   }
`;

export const LogoContainer = styled.div`
     height: 100%;
     width: 10px;
     padding: 0px 30px;
     display: flex;
     align-items: center;
     display: block;
     svg{
        height: 80px;
     }


     @media screen and (max-width: 800px) {
      width: 50px;
      padding: 0;
     }
`;
 
export const  NavLinks = styled.span`
 width: 80%;
 height: 500%;
 display: flex;
 align-items: center;
 space-between; 50px;


  @media screen and (max-width: 800px) {
    width: 80%;
   }
`;

export const NavLink = styled(Link)`
  padding: 20px 20px;
  cursor: pointer;
  text-decoration: none;

`;

export const PlayerButton = styled(baseButton)`
   margin-left: auto;
   margin-top: 35px;
   border-radius: 100px;
   box-sizing: border-box;
   clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

}
`