import "./Product.css"
import InventoryItem from "../../Components/InventoryItem/InventoryItem"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import { Link } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

import { InputBase } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import InformationField from "./InformationField"
import 'swiper/css';
import API_URL from "../../constants/routeConstants";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
//Sản phẩm
function Product(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const productId = useParams().id

  const [images, setImages] = useState([])
  const [barcode, setBarcode] = useState("")
  const [productName, setProductName] = useState("")
  const [productCategory, setProductCategory] = useState("")
  const [brand, setBrand] = useState("")
  const [productLocation, setProductLocation] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [cost, setCost] = useState("")

  const formatNumber = (number) => {
    const strNumber = number.toString().replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return strNumber
  }

  const fetchProductData = async () => {
    const response = await fetch(API_URL.FETCH_SINGLE_PRODUCT+ productId)
    const data = await response.json()
    const thisProduct = data[0]
    console.log(thisProduct)
    
    setBarcode(thisProduct.barcode)
    setBrand(thisProduct.brand)
    setProductCategory(thisProduct.category)
    setImages(thisProduct.image_urls)
    setProductLocation(thisProduct.location)
    setProductName(thisProduct.product_name)

    setCost(formatNumber(thisProduct.import_price))
    setStock(formatNumber(thisProduct.stock))
    setPrice(formatNumber(thisProduct.price))
  }

  useEffect(()=>{
    fetchProductData()
    window.scrollTo(0,0)
  },[])

  const closePage = () => {
    navigate("/")
  }


  const ImagesElement = images?.map((url, index) => {
    console.log(url)
      return (  
          <SwiperSlide className='relative top-[10px]  pl-[10px]'>
              <div className='bg-[#bbb8b8] h-24 w-24 rounded-[13px] relative'>
                  <img src={url} alt="url" className='h-24 w-24 rounded-[13px] object-cover'/>
              </div>
          </SwiperSlide>

      )
  })
  
  return (
    <div>

    <div className='absolute top-0 right-0 w-screen h-screen add-new-product-go-up z-[1000] bg-slate-50 overflow-x-hidden'>
{/* Navigation */}
        <nav className='flex flex-row justify-between items-center h-10 bg-white w-full p-4'>
            <div className='flex flex-row gap-[10px]'>
                <div onClick={()=> closePage()}>
                    <CloseIcon className='scale-[120%] text-gray-500'/>
                </div>
                <p className='font-[500] text-base'>Trang sản phẩm</p>
            </div>
            <div className="flex gap-4">
                <EditOutlinedIcon sx={{color:"#3e87ad"}}/>
                <p className='text-[red] text-[18px]'>
                    Xoá
                </p>
            </div>

        </nav>
{/* PICTURES SLIDES*/}
        <section className='bg-slate-50 h-[120px]'>   
            <Swiper className='h-[125px]'
                spaceBetween={5}
                slidesPerView={window.innerWidth/110}
                onSlideChange={() => console.log('slide change')}
                direction="horizontal"
                onSwiper={(swiper) => console.log(swiper)}
                >
                  {ImagesElement}
                  {/* <SwiperSlide className=' relative top-[10px]'>
                      <CameraElement/>
                  </SwiperSlide> */}
            </Swiper>
        </section>
{/* MAIN FORM AREA */}
        <section className='bg-white rounded-t-xl px-2'>
            <InformationField name={"Mã vạch"} value={barcode}/>
            <InformationField name={"Tên hàng"} value={productName}/>
            <InformationField name={"Nhóm hàng"} type="category" value={productCategory}/>
            <InformationField name={"Thương hiệu"} type="brand" value = {brand}/>
            <InformationField name={"Giá bán"} value={price}/>
            <InformationField name={"Giá vốn"} value={cost}/>
            <InformationField name={"Tồn kho"} value={stock}/>
            <InformationField name={"Vị trí"} value={productLocation}/>
        </section>

{/* NOTES FORM AREA */}
        <section className='bg-white rounded-xl min-h-[50px] pl-4'>
        <InputBase
            className='min-h-[40px] caret-[#3e87ad] '
            sx={{fontSize:"16px", color:"gray"}}
            variant='standard'
            placeholder={"Mẫu ghi chú (hoá đơn, đặt hàng)"}
            fullWidth
            multiline
            id="email"
        />
        </section>
{/*END*/}
        </div>
    </div>
)
}

  
export default Product