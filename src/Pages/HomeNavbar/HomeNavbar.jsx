import './HomeNavbar.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';



function Navbar() {
    return (
      <div className="navbar bg-gray-200">
        <nav className='nav-section1'>
          <h1 className='text-[26px] font-[700]'>Hàng Hoá</h1>
          <div className="nav-icon">
              <SearchIcon />
              <FilterAltOutlinedIcon/>
              <SortOutlinedIcon/>
          </div>
        </nav>
         
      </div>
    )
  }
  
export default Navbar;