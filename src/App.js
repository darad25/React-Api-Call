import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import PlayerAttributes from './routes/PlayerAttributes/PlayerAttributes.component';
import PlayerStats from './routes/PlayerStats/PlayerStats.component';

const App = () => {

  return (
    <div>
    <Routes>
      <Route > 
       <Route path='playerstats' element={<PlayerStats />} />
       <Route path='playerattributes' element={<PlayerAttributes />} />
      </Route>
    </Routes>
    </div>
  );
}; 

export default App; 