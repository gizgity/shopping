import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../routes/categories-preview/categories-preview.component';
import Category from '../routes/category/category.component';

import { fetchCategoriesAsync } from '../../store/categories/categories.action';

import './shop.style.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCategoriesAsync());
    }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
