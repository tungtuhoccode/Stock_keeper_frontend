import './ShowImage.css'
import InventoryItem from "../../Components/InventoryItem/InventoryItem"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CloseIcon from '@mui/icons-material/Close';

function ShowImage(props) {
    let imageSource = props.imageSource || "https://www.phutungotottc.com/app/webroot/upload//images/Toyota/Prado/2010-/Den-pha-Prado-2014-8118560J10-8114560J10(1).JPG"

    return (
     
      <div className="show-image">
          <div onClick={()=>props.closeImage()} className='background'></div>
          <div className='image-to-show'>
          <img className='the-image-to-show' src= {imageSource}/>
             <div onClick={()=>props.closeImage()} className='text-[50px] w-full text-center cursor-pointer'>
                <CloseIcon className='bg-gray-300 w-16 h-16'/>
             </div>
          </div>
      </div>
       
    )
  }
  
export default ShowImage