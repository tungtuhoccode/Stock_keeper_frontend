import './Footer.css'

import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Footer() {
    const location = useLocation();
    const [lastClickIndex, setLastClickIndex] = useState<Number>(0)

    useEffect(()=>{
      setLastClickIndex(function (){
        const currentURL = location.pathname
        if(currentURL === "/") return 3
        
        if(currentURL === "/restock") return 2

        return 0
      }())
    },[location.pathname])

    const click = (id: Number) => {
      setLastClickIndex(id)
    }
    
    const isClicked = (thisIndex : Number) => {
      return thisIndex === lastClickIndex
    }

    return (
      <div className="footer">

            <Link 
            to="#" 
            onClick={() => click(1)} 
            className = {`footer-icon "+ ${isClicked(1)&& "text-[#3e87ad]"}`} >
              <InsertChartOutlinedSharpIcon/>
              <p className = {"footer-icon-title "}>Tổng quan</p>
            </Link>
        

          <Link to="/restock" 
          onClick={() => click(2)} 
          className = {`footer-icon "+ ${isClicked(2) && "text-[#3e87ad]"}`} >
              <SystemUpdateAltIcon/>
              <p className ="footer-icon-title">Nhập Hàng</p>
          </Link>

          <Link to="/"
           onClick={() => click(3)} 
           className = {`footer-icon "+ ${isClicked(3) && "text-[#3e87ad]"}`} 
          >
            {isClicked(3) ?
            <InventoryIcon/>:
            <Inventory2OutlinedIcon/> 
            }
            <p className ="footer-icon-title">Hàng Hoá</p>
          </Link>

          <Link to="#"
           onClick={() => click(4)} 
           className = {`footer-icon "+ ${isClicked(4) && "text-[#3e87ad]"}`} 
          >
            <NotificationsNoneIcon/>
            <p className ="footer-icon-title">Thông báo</p>
          </Link>

          <Link to="#"
           onClick={() => click(5)} 
           className = {`footer-icon "+ ${isClicked(5) && "text-[#3e87ad]"}`} 
          >
            <DensityMediumIcon/>
            <p className ="footer-icon-title">Nhiều hơn</p>
            </Link>
      </div>
    )
}
  
export default Footer