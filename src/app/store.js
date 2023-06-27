import { configureStore} from '@reduxjs/toolkit';
import importedBrandReducer from './brandsSlice';
import importedProductCategoryReducer from './productCategorySlice';
import importedProductLocationReducer from './productStorageLocationSlice';

export const store = configureStore({
    reducer: {
        brand: importedBrandReducer,
        category: importedProductCategoryReducer,
        location: importedProductLocationReducer,
    },
  });

  