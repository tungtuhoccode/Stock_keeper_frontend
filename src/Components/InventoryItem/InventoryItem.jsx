import "./InventoryItem.css"

import { Link } from "react-router-dom"
//Hàng hoá
function InventoryItem(props) {
    let imageSource = props.imageSource || "https://www.phutungotottc.com/app/webroot/upload//images/Toyota/Prado/2010-/Den-pha-Prado-2014-8118560J10-8114560J10(1).JPG"

    let name = props.name || ""
    let code = "SP"+props.code || ""+""
    let price = props.price || "0"
    let stock = props.stock || "0"
    const strPrice = ("" + price).replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let color = {
      backgroundColor: props.backgroundColor || "white"
    }

    return (
    
      <div style={color} className="w-full mb-1">
          <hr style={{width:"calc(100% - 15px)"}} className="my-1 mx-auto"></hr>

            <div className="flex flex-row px-2">
              <div className="w-[70px]">
                <img className="inventory-item-image" onClick={() => 
                {
                  console.log("clicked")
                  props.clickShowImage(imageSource)
                }
                  } src={imageSource}/>
              </div>
             
                <Link to={"/product/"+props.code} style={{maxWidth:"calc(100% - 90px)"}} className="w-full flex flex-row justify-between ml-2">
                  <div className="flex flex-col justify-between items-start">
                    <h1 className="text-[16px] font-[500] ">{name}</h1>
                    <h1 className="text-[14px]  font-[400] text-gray-500 ">{code}</h1>
                  </div>
                  <div className="flex flex-col items-end justify-between min-w-[80px] pt-[4px]">
                    <p className=" text-[14px] text-right break-normal text-gray-500">{strPrice}₫</p>
                    <p className="text-[16px] text-[#3e87ad]"><span className="text-[12px]">Còn:</span> {stock}</p>
                  </div>
                </Link>

            </div>
  
      </div>
 
    )
  }
  
export default InventoryItem