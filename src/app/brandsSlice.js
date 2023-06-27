import { createSlice } from '@reduxjs/toolkit';

//nhóm hàng
export const productCategorySlice = createSlice({
    name: 'brandSlice',
    initialState: {
        value: "brand",
        brand: ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"],
    },
    reducers:{
        addMoreBrand: (state, action) => {
            console.log("Brand name: "+action.payload)
            state.brand = [...state.brand, action.payload]
        }
    }
});

export const {addMoreBrand} = productCategorySlice.actions;//export reducer function
export default productCategorySlice.reducer;