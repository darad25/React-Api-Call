import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as ELogo } from '../../assets/espn.svg';

import { NavigationContainer, PlayerButton, NavLinks, NavLink, LogoContainer } from './navigation.styles';

const Navigation = () => {     
     
      return (
       <Fragment> 
         <NavigationContainer>
            <LogoContainer>
              <ELogo className='logo'/>
            </LogoContainer>
           <NavLinks>
              <NavLink to='/PlayerStats'>
              <PlayerButton>
                PLAYER STATS    
                </PlayerButton>     
              </NavLink> 
                <NavLink to='/playerattributes'> 
                <PlayerButton>   
                PLAYER ATTRIBUTES      
                </PlayerButton>       
              </NavLink>    
           </NavLinks>
         </NavigationContainer>
         <Outlet />
       </Fragment>
      );
    };
   
    export default Navigation;  