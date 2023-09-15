import { getAllCars } from 'API/API';
import { createContext, useContext, useEffect, useState } from 'react';

const CarsContext = createContext({
  allCars: [],
  wishlist: [],
});

export const useCars = () => useContext(CarsContext);

const checkLocalStorage = key => {
  try {
    const item = localStorage.getItem(key);

    if (!item || !item.length) return [];

    return JSON.parse(item);
  } catch (error) {
    console.log(error);
  }
};

export const CarsProvider = ({ children }) => {
  const [allCars, setAllCars] = useState([]);
  const [wishlist, setWishlist] = useState(() => checkLocalStorage('wishlist'));
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const { data: cars } = await getAllCars();

        setAllCars(cars);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const reducer = (action, payload) => {
    switch (action) {
      case 'wishlist/add':
        const wishIndex = wishlist.findIndex(({ id }) => id === payload.id);
        if (wishIndex !== -1)
          return 'This item was already added to your wishlist';

        setWishlist(prevState => [...prevState, payload]);
        break;

      case 'wishlist/remove':
        setWishlist(prevState => prevState.filter(({ id }) => id !== payload));
        break;

      default:
        console.warn('Error, unknown action!');
        break;
    }
  };

  return (
    <CarsContext.Provider value={{ allCars, wishlist, reducer, isLoading }}>
      {children}
    </CarsContext.Provider>
  );
};
