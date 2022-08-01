import { Fragment } from 'react';
import { useSelector } from 'react-redux';
// import { CategoriesContext } from '../../../contexts/categories.contexts';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../../store/categories/categories.selector';
import CategoryPreview from '../../category-preview/category-preview.component';
import Spinner from '../../spinner/spinner.component';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
