import "./RestockPage.css"
import InventoryItem from "../../Components/InventoryItem/InventoryItem"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import { Link } from "react-router-dom";

//Sản phẩm
function RestockPage() {
    

    return (
      <div className="product">
        <Link to="/">
          <button className="bg-gray-200">Go back</button>
        </Link>
        <h1>Page nhập hàng</h1>
      </div>
    )
  }
  
export default RestockPage