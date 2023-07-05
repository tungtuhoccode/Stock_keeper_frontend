import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from "../constants/routeConstants"
import ReplaceVietnameseChar from "../Pages/SelectInputOptions/ReplaceVietnameseChar"

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    console.log("fetching products")
    const response = await fetch(API_URL.FETCH_PRODUCTS)
    const data = await response.json()
    //for searching purposes
    for (let i=0;i<data.length;i++){
      data[i].searchValue = ReplaceVietnameseChar(data[i].product_name)
    }
    
    // console.log("result from server",data)
    return data

})

export const addProduct = createAsyncThunk('products/addProduct', async (productData) => {
    const payload = {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(productData)
    }
    console.log("fetch to api: ",API_URL.ADD_NEW_PRODUCT )
    const response = await fetch(API_URL.ADD_NEW_PRODUCT, payload)

    const resultData = await response.json()
    return resultData

})

const getStock = (arr) => {
    let result = 0
    for (let i=0;i<arr.length;i++){
        console.log(typeof arr[i].stock)
        result += arr[i].stock
    }
    return result
}

//nhóm hàng
export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        stock: 0,
        numbProduct: 0,
        products: [],
        status: 'idle',
        error: null
    },
    reducers:{
        addMoreCategory: (state, action) => {
            console.log("new category: "+action.payload)
            state.category = [...state.category, action.payload]
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchProducts.pending, (state, action) => {
            state.status = 'loading'
            
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            let productArray = action.payload
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.stock = getStock(productArray)
            state.numbProduct = productArray.length
            state.products = productArray
            console.log(action.payload)
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed'
          })

          .addCase(addProduct.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(addProduct.fulfilled, (state, action) => {
            state.status = 'succeeded'

            // Add any fetched posts to the array
          })
          .addCase(addProduct.rejected, (state, action) => {
            state.status = 'failed' 
          })
      },
});

export const {addMoreCategory} = productsSlice.actions;//export reducer function
export default productsSlice.reducer;