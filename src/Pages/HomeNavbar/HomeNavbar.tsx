import './HomeNavbar.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useState } from 'react';
import { InputBase } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type HomeNavProps = {
  search: String;
  setSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function Navbar(props:HomeNavProps) {
    const [isSearching, setIsSearching] = useState(false)
    return (
      <div className="navbar bg-gray-200">
        {
          !isSearching &&
          <nav className='nav-section1'>
            <h1 className='text-[26px] font-[700]'>Hàng Hoá</h1>
            
              <div className="nav-icon">
                <SearchIcon onClick={() => 
                  { console.log("search clicked")
                    setIsSearching(true)
                  }
                  }/>
                <FilterAltOutlinedIcon/>
                <SortOutlinedIcon/>
              </div>
            
          </nav>
        }
         {
          isSearching &&
          <nav className='nav-section1'>
                <ArrowBackIcon sx={{color:"white"}} className='bg-[#3e87ad] rounded-full scale-125' onClick={()=>setIsSearching(false)}/>
                <InputBase 
                  fullWidth 
                  className='border-b-gray-300 mx-[10px] border-b-solid border-b-[1px] caret-[#3e87ad]'
                  placeholder='Nhập tên sản phẩm để tìm kiếm'
                  value={props.search}
                  onChange={(event) => props.setSearch(event as React.ChangeEvent<HTMLInputElement>)}
                />
                <div className="nav-icon">
                <SearchIcon onClick={() => 
                  { 
                    console.log("search clicked")
                    setIsSearching(true)
                  }
                  }/>
                </div>
          </nav>
        }
      </div>
    )
  }
  
export default Navbar;