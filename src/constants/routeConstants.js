//***DEPLOYMENT***
// const MAIN_API_URL = "https://"+process.env.REACT_APP_API_URL

//development only
const MAIN_API_URL = `http://${window.location.hostname}:${4000}`
// const MAIN_API_URL = `http://${window.location.hostname}`

const API_URL = {
    MAIN: MAIN_API_URL,
    ADD_NEW_PRODUCT: `${MAIN_API_URL}/product/add`,
    FETCH_PRODUCTS: `${MAIN_API_URL}/testfind`,
    FETCH_SINGLE_PRODUCT: `${MAIN_API_URL}/product?id=`,

    FETCH_CATEGORIES: `${MAIN_API_URL}/product/get-all-categories`,
    ADD_CATEGOGY: `${MAIN_API_URL}/product/add-category`,

    FETCH_BRANDS: `${MAIN_API_URL}/product/get-all-brands`,
    ADD_BRAND: `${MAIN_API_URL}/product/add-brand`,

    FETCH_STORAGE_LOCATIONS: `${MAIN_API_URL}/product/get-all-storage-locations`,
    ADD_STORAGE_LOCATION: `${MAIN_API_URL}/product/add-storage-location`
}

export default API_URL;