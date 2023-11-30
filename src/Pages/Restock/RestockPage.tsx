import "./RestockPage.css"
import InventoryItem from "../../Components/InventoryItem/InventoryItem"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import { Link, useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from "@mui/material";

type RestockPageProps = {

}

//Sản phẩm
function RestockPage(props: RestockPageProps) {
  const navigate = useNavigate()
  
    return (
      <div className="product">
        <nav className='h-22 bg-white w-full'>
                <div className='flex flex-row justify-between items-center h-10 bg-white w-full p-4'>
                    <div className='flex flex-row gap-[10px]'>
                        <p className='font-[500] text-base'>Trang nhập hàng</p>
                    </div>
                    <div>
                        <p className='text-[18px] text-gray-500'>
                            <AddIcon className='cursor-pointer'/>
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center h-12 w-full pl-4 pr-4 border-t-gray-100 border-t-[1px]' >
                    <div className='bg-gray-200 h-8 w-full rounded-lg p-2 flex justify-center items-center gap-[10px]'>
                        <SearchIcon className='text-gray-500'/>
                        <InputBase 
                          className='w-[90%]'
                        />
                    </div>
                </div>
            </nav>
      </div>
    )
  }
  
export default RestockPage