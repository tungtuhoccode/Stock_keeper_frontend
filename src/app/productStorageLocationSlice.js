import { createSlice } from '@reduxjs/toolkit';

//nhóm hàng
export const productCategorySlice = createSlice({
    name: 'productLocationSlice',
    initialState: {
        location: ["Tầng 1", "Tầng 2", "Tầng 3", "Tầng 4", "Tầng 5"],
    },
    reducers:{
        addMoreLocation: (state, action) => {
            console.log("new location: "+action.payload)
            state.location = [...state.location, action.payload]
        }
    }
});

export const {addMoreLocation} = productCategorySlice.actions;//export reducer function
export default productCategorySlice.reducer;