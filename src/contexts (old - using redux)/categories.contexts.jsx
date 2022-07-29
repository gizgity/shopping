// eslint-disable-next-line no-unused-vars
import { createContext, useState, useEffect } from 'react';
// import { addCollectionAndDocuments } from '../utils/firebase.utils.js';
import { getCategoriesAndDocuments } from '../utils/firebase.utils.js';
// import data
// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
      const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap);
      };
      getCategoriesMap();
  }, []);
  //use for upload data to firebase
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
