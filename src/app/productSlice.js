import { createSlice } from '@reduxjs/toolkit';

//nhóm hàng
export const productCategorySlice = createSlice({
    name: 'productSlice',
    initialState: {
        category: ["Đèn pha", "Thân vỏ", "Camera", "Đèn Led", "Điện công nghiệp","Gia dụng", "Máy giặt"],
    },
    reducers:{
        addMoreCategory: (state, action) => {
            console.log("new category: "+action.payload)
            state.category = [...state.category, action.payload]
        }
    }
});

export const {addMoreCategory} = productCategorySlice.actions;//export reducer function
export default productCategorySlice.reducer;