import { configureStore} from '@reduxjs/toolkit';
import importedBrandReducer from './brandsSlice';
import importedProductCategoryReducer from './productCategorySlice';
import importedProductLocationReducer from './productStorageLocationSlice';
import productSlice from './productSlice';

export const store = configureStore({
    reducer: {
        brands: importedBrandReducer,
        categories: importedProductCategoryReducer,
        locations: importedProductLocationReducer,
        products: productSlice
    },
  });

export type RootState = ReturnType<typeof store.getState>

  