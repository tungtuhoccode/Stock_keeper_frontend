import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API_URL from '../constants/routeConstants';


export const fetchCategories = createAsyncThunk('products/fetchAllCategories', async () => {
    const response = await fetch(API_URL.FETCH_CATEGORIES)
    const data = await response.json()
    return data
})

export const addNewCategory = createAsyncThunk('products/addNewCategory', async (categoryData) => {
    const payload = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(categoryData)
    }

    const response = await fetch(API_URL.ADD_CATEGOGY, payload)
    const data = await response.json()
    return data
})


//nhóm hàng
export const productCategorySlice = createSlice({
    name: 'categorySlice',
    initialState: {
        status: "idle",
        error: null,
        categories: [] //array of object: {id: Number, category_name: TEXT}
    },
    reducers:{
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded"
                //add fetched categories to array
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed'
            })

            .addCase(addNewCategory.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(addNewCategory.fulfilled, (state, action) => {
                state.status = "succeeded"
                //add fetched categories to array
                state.categories = [...state.categories, action.payload]
                
            })
            .addCase(addNewCategory.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
});

export const {addMoreCategory} = productCategorySlice.actions;//export reducer function
export default productCategorySlice.reducer;