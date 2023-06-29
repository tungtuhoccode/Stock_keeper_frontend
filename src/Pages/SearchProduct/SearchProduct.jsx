import { InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import replaceVietnameseChar from "../SelectInputOptions/ReplaceVietnameseChar";
import { useState } from "react";
import InventoryItem from "../../Components/InventoryItem/InventoryItem";

let data = [
    { 
      name: "Đèn pha Prado",
      price: 120000000,
      stock: 37,
      imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Prado/2010-/Den-pha-Prado-2018-8118560N20-8114560N20(1).JPG"
    },
    {
      name: "Đèn hậu ngoài Cross",
      price: 30000000,
      stock: 46,
      imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Cross/Den-hau-ngoai-Cross-2020-815510A060-815610A060(1).JPG"
    },
    {
      name: "Tubor County",
      price: 39000000,
      stock: 55,
      imageSource: "https://phutungotottc.com/app/webroot/upload/images/Hyundai/Tubor-County.JPG"
    },
    {
      name: "Túi khí trần vios",
      price: 48000000,
      stock: 32,
      imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Vios/Tui-khi-tran-xe-Vios-2018-621700D080-621800D080(1).JPG"
    },
    { 
      name: "Đèn pha Prado",
      price: 120000000,
      stock: 37,
      imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Prado/2010-/Den-pha-Prado-2018-8118560N20-8114560N20(1).JPG"
    },
    {
      name: "Đèn hậu ngoài Cross",
      price: 30000000,
      stock: 46,
      imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Cross/Den-hau-ngoai-Cross-2020-815510A060-815610A060(1).JPG"
    },
    {
      name: "Tubor County",
      price: 39000000,
      stock: 55,
      imageSource: "https://phutungotottc.com/app/webroot/upload/images/Hyundai/Tubor-County.JPG"
    },
    {
      name: "Túi khí trần vios",
      price: 48000000,
      stock: 32,
      imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Vios/Tui-khi-tran-xe-Vios-2018-621700D080-621800D080(1).JPG"
    }, { 
      name: "Đèn pha Prado",
      price: 120000000,
      stock: 37,
      imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Prado/2010-/Den-pha-Prado-2018-8118560N20-8114560N20(1).JPG"
    },
    {
      name: "Đèn hậu ngoài Cross",
      price: 30000000,
      stock: 46,
      imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Cross/Den-hau-ngoai-Cross-2020-815510A060-815610A060(1).JPG"
    },
    {
      name: "Tubor County",
      price: 39000000,
      stock: 55,
      imageSource: "https://phutungotottc.com/app/webroot/upload/images/Hyundai/Tubor-County.JPG"
    },
    {
      name: "Túi khí trần vios",
      price: 48000000,
      stock: 32,
      imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Vios/Tui-khi-tran-xe-Vios-2018-621700D080-621800D080(1).JPG"
    },
    {
      name: "Túi khí trần vios",
      price: 48000000,
      stock: 32,
      imageSource: "https://phutungotottc.com/app/webroot/upload//images/Toyota/Vios/Tui-khi-tran-xe-Vios-2018-621700D080-621800D080(1).JPG"
    },
  ]

const SearchProduct = () => {
    const [search, setSearch] = useState("")
    const ResultElements = data.map (element => {
         
        return <InventoryItem 
            backgroundColor="rgb(248,250,252)" 
            name = {element.name}
            price = {element.price}
            stock = {element.stock}
            imageSource={element.imageSource}
        ></InventoryItem>
    })

    return(
        <div className="w-screen h-screen p-1 ">
{/* SEARCH INPUT */}
            <section className="flex items-center gap-3 px-4 pt-2">
                <div className='bg-gray-200 h-8 w-[90%] rounded-lg p-2 flex justify-center items-center gap-[10px]'>
                    <SearchIcon className='text-gray-500'/>
                    <InputBase
                        className='w-[90%]'
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#868787" viewBox="0 0 16 16"> 
                        <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
                    </svg>        
                </div>
                <p className="text-[#3e87ad] font-[600]">Huỷ</p>
            </section>
{/* RESULT */}
            <section>
                <div>
                    {ResultElements}
                </div>
            </section>
        </div>
    )
}

export default SearchProduct;