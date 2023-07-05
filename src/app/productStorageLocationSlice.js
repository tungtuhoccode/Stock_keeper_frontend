import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../constants/routeConstants';

export const fetchStorageLocations = createAsyncThunk('products/fetchAllStorageLocations', async () => {
    const response = await fetch(API_URL.FETCH_STORAGE_LOCATIONS)
    const data = await response.json()
    return data
})

export const addNewStorageLocation = createAsyncThunk('products/addStorageLocation', async (storageLocationData) => {
    const payload = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(storageLocationData)
    }

    const response = await fetch(API_URL.ADD_STORAGE_LOCATION, payload)
    const data = await response.json()
    return data
})
//nhóm hàng
export const storageLocationSlice = createSlice({
    name: 'productLocationSlice',
    initialState: {
        status: "idle",
        error: null,
        locations: [] //array of object: {id: Number, category_name: TEXT}
    },
    reducers:{
    },
    extraReducers(builder) {
        builder
            .addCase(fetchStorageLocations.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchStorageLocations.fulfilled, (state, action) => {
                state.status = "succeeded"
                //add fetched categories to array
                state.locations = action.payload
            })
            .addCase(fetchStorageLocations.rejected, (state, action) => {
                state.status = 'failed'
            })
            
            .addCase(addNewStorageLocation.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(addNewStorageLocation.fulfilled, (state, action) => {
                state.status = "succeeded"
                //add fetched categories to array
                state.locations = [...state.locations, action.payload]
            })
            .addCase(addNewStorageLocation.rejected, (state, action) => {
                state.status = 'failed'
            })
    }

});

export const {addMoreLocation} = storageLocationSlice.actions;//export reducer function
export default storageLocationSlice.reducer;