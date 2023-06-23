import './Home.css'
import InventoryItem from "../../Components/InventoryItem/InventoryItem"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import ShowImage from '../../Components/ShowImage/ShowImage';
import HomeNavbar from '../HomeNavbar/HomeNavbar'

import { useEffect, useState, useRef, forwardRef } from 'react';

import GrayBackground from '../../Components/GrayBackground/GrayBackground';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

let data = [
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Prado/2010-/Den-pha-Prado-2018-8118560N20-8114560N20(1).JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Cross/Den-hau-ngoai-Cross-2020-815510A060-815610A060(1).JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload/images/Hyundai/Tubor-County.JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Vios/Tui-khi-tran-xe-Vios-2018-621700D080-621800D080(1).JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Prado/2010-/Den-pha-Prado-2018-8118560N20-8114560N20(1).JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Cross/Den-hau-ngoai-Cross-2020-815510A060-815610A060(1).JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload/images/Hyundai/Tubor-County.JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Vios/Tui-khi-tran-xe-Vios-2018-621700D080-621800D080(1).JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Prado/2010-/Den-pha-Prado-2018-8118560N20-8114560N20(1).JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Cross/Den-hau-ngoai-Cross-2020-815510A060-815610A060(1).JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload/images/Hyundai/Tubor-County.JPG"
  },
  {
    imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Vios/Tui-khi-tran-xe-Vios-2018-621700D080-621800D080(1).JPG"
  },
]
const AddMore = (props) => {
  const [isShow, setIsShow] = useState(false)
  const plusSignButton = useRef(null)
  const addProductElement = useRef(null)

  const toggleShow = () => {
    props.closeOtherElement()
    toggleItemShownAnimation()
    setIsShow(!isShow)
  }

  const toggleItemShownAnimation = () => {
    if(!isShow) goIn()
    else goOut()
  }

  //animation
  function goIn(){
    // plus sign 
    if(plusSignButton.current.classList.contains("rotate-plus-sign-back")){
      plusSignButton.current.classList.remove("rotate-plus-sign-back")
    }
    
    plusSignButton.current.classList.add("rotate-plus-sign")

    //thêm hàng hoá
    if(addProductElement.current.classList.contains("go-out")){
      addProductElement.current.classList.remove("go-out")
    }
    addProductElement.current.classList.add("go-in")

    // addProductElement.current.classList.add("go-in")
    //thêm hàng hoá
    document.documentElement.style.setProperty('--translate-X-add-product', "0px");
    setTimeout(()=>{
      document.documentElement.style.setProperty('--translate-X-add-product', "-300px");
      setTimeout(()=>{
      document.documentElement.style.setProperty('--translate-X-add-product', "-250px");
      },10)
    },10)
  }
  //animation
  function goOut(){    
    //plus sign 
    plusSignButton.current.classList.remove("rotate-plus-sign")
    plusSignButton.current.classList.add("rotate-plus-sign-back")

    addProductElement.current.classList.remove("go-in")
    addProductElement.current.classList.add("go-out")

    //thêm hàng hoá
    document.documentElement.style.setProperty('--translate-X-add-product', "-250px");
    document.documentElement.style.setProperty('--opacity-value-add-product', "1");
    setTimeout(()=>{
      document.documentElement.style.setProperty('--translate-X-add-product', "0px");
      document.documentElement.style.setProperty('--opacity-value-add-product', "0");
    },1)
  }

  const AddNewProductIcon = (props) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width= "20px" height="20px" viewBox="0 0 16 16" className={props.styling} fill={"#3e87ad"}>
        <path d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"/>
      </svg>
    )
  }

    const stylingClass = isShow? 'bg-white add-icon-shadow w-14 h-14 rounded-full shadow-md':'bg-[#3e87ad] add-icon-shadow w-14 h-14 rounded-full shadow-md'
  
    return (
    <div>
      {isShow && <GrayBackground/>}
      <div className='z-[1201] fixed bottom-[80px] right-5 flex flex-col items-end'>

      <section id="">
        {/* <Box ref={addProductElement} isShow={isShow}/> */}
        <div ref={addProductElement} className={'relative flex flex-row items-center gap-[15px] mr-1 mb-2 right-[-250px]'}>
          <div className='add-icon-shadow bg-white h-10 p-3 flex justify-center items-center rounded-lg'>Thêm hàng hoá</div>
          <button className='circle-shadow w-12 h-12 rounded-full bg-[white] flex justify-center items-center'>
            <Link to="/add-new-product">
              <AddNewProductIcon />
            </Link>
          </button>
        </div>
      </section>
      
   
      <button onClick={(state) => {toggleShow()}} 
        className= {stylingClass}>
          <AddIcon ref={plusSignButton} className="scale-[120%] text-white"/>
      </button>
    </div>
    </div>
    
  )
}

//Hàng hoá
function Home() {
    const [isShow, setShow] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const showImage = (url) => {
      setImageUrl(url)
      setShow(true)
    }

    const closeImage = () => {
      setShow(false)
    }
    
    const InventoryItemElements = data.map(element => {
      return  <InventoryItem imageSource={element.imageSource} clickShowImage = {(url) =>{showImage(url)} }/>
    });
    
    return (
      <div className="home-page">
        <HomeNavbar/>
        {isShow && <ShowImage imageSource={imageUrl} closeImage={() => {closeImage()}}/>}
        <AddMore closeOtherElement = {() => closeImage()}/>
        {/* {isShow && <div>hello</div>} */}
        <div className='nav-section2-background bg-gray-200'>
          <nav className='nav-section2'>
            <div className="flex flex-row justify-between w-full p-2">
              <p>
                <span style={{color:"#3e87ad"}}>26 </span>
                 hàng hoá - Tổng tồn 
                 <span style={{color:"#3e87ad"}}> 204</span>

              </p>
              <div className="flex flex-row jusitfy-center aligns-center">
                <span>Giá bán</span>
                <ArrowDropDownOutlinedIcon/>
              </div>
            </div>
          </nav>
        </div>
        
        <div className='relative top-[-5px] bg-white pb-[10px]'>
       {InventoryItemElements}
        {/* <InventoryItem clickShowImage = {(url) =>{showImage(url)} }/>
        <InventoryItem clickShowImage = {(url) =>{showImage(url)} }/>
        <InventoryItem clickShowImage = {(url) =>{showImage(url)} }/>
        <InventoryItem clickShowImage = {(url) =>{showImage(url)} }/>
        <InventoryItem clickShowImage = {(url) =>{showImage(url)} }/>
        <InventoryItem clickShowImage = {(url) =>{showImage(url)} }/>
        <InventoryItem clickShowImage = {(url) =>{showImage(url)} }/> */}
        </div>
        <div className='h-12 bg-gray-200 m-auto'>
          
        </div>
      </div>
    )
  }
  
export default Home