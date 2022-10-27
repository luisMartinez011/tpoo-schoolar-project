import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppRoutes } from './routes/AppRoutes';
import { Context } from './UseContext/Context';
import { useEffect, useState } from 'react';

function App() {
  const [boughtThings, setBoughtThings] = useState();

  //Send the information to Favorites
  const [favorites, setFavorites] = useState('');
  const [data, setData] = useState([])
  useEffect(() => {
    if (favorites !== '') {
      let storageFav = JSON.parse(localStorage.getItem('favorites')) || [];
      storageFav.push(favorites);

      const hasMap = {};
      storageFav = storageFav.filter((item, _) => {
        let exists = hasMap.hasOwnProperty(item.id)

        return exists ? false : hasMap[item.id] = 1;
      });

      localStorage.setItem('favorites', JSON.stringify(storageFav));
    }
  }, [favorites]);

  //Send the information to Trolley
  const [trolley, setTrolley] = useState('');

  useEffect(() => {
    if (trolley !== '') {
      let storageTrolley = JSON.parse(localStorage.getItem('trolley')) || [];
      storageTrolley.push(trolley);

      const hasMap = {};
      storageTrolley = storageTrolley.filter((item, _) => {
        let exists = hasMap.hasOwnProperty(item.id)

        return exists ? false : hasMap[item.id] = 1;
      });

      localStorage.setItem('trolley', JSON.stringify(storageTrolley));
    }
  }, [trolley]);

  return (
    <Context.Provider
      value={{
        favorites,
        setFavorites,
        trolley,
        setTrolley,
        setBoughtThings,
        boughtThings,
        data,
        setData
      }}
    >
      <AppRoutes />

    </Context.Provider>
  );
}

export default App;
