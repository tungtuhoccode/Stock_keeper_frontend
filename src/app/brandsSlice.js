import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API_URL from '../constants/routeConstants';

export const fetchAllBrands = createAsyncThunk('products/fetchAllBrands', async () => {
    const response = await fetch(API_URL.FETCH_BRANDS)
    const data = await response.json()
    return data
})

export const addNewBrand = createAsyncThunk('products/addNewBrand', async (brandData) => {
    const payload = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(brandData)
    }
    
    const response = await fetch(API_URL.ADD_BRAND, payload)
    const data = await response.json()
    return data
})

//nhóm hàng
export const brandsSlice = createSlice({
    name: 'brandsSlice',
    initialState: {
        status: "idle",
        error: null,
        brands: [],
    },
    reducers:{

    },
    extraReducers(builder){
        builder 
            .addCase(fetchAllBrands.pending, (state, action)=> {
                state.state = 'loading'
            })
            .addCase(fetchAllBrands.fulfilled, (state, action)=> {
                state.status = 'succeeded'
                state.brands = action.payload
            })
            .addCase(fetchAllBrands.rejected, (state, action)=> {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(addNewBrand.pending, (state, action)=> {
                state.state = 'loading'
            })
            .addCase(addNewBrand.fulfilled, (state, action)=> {
                state.status = 'succeeded'
                state.brands = [...state.brands, action.payload]
            })
            .addCase(addNewBrand.rejected, (state, action)=> {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

export const {addMoreBrand} = brandsSlice.actions;//export reducer function
export default brandsSlice.reducer;