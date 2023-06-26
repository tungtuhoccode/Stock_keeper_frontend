import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SelectInputOptions.css"

import replaceVietnameseChar from './ReplaceVietnameseChar.js';

const SelectInputOptions = (props) => {
    const thisPage = useRef(null)

    const closePage = () => {
        thisPage.current.classList.remove("select-input-go-in")
        thisPage.current.classList.add("select-input-go-out")
        console.log("closed page ran")
        setTimeout(()=> {
            props.closeSelectInput()
        },400)
    }

    const [search, setSearch] = useState("")

    const rawOptions = ["Đèn pha", "Thân vỏ", "Camera", "Đèn Led", "Điện công nghiệp","Gia dụng", "Máy giặt"]

    const options = (()=> {
        let newOptions = []
        for (let i=0;i<rawOptions.length;i++){
            newOptions.push({
                actualValue: rawOptions[i],
                searchValue: replaceVietnameseChar(rawOptions[i])
            })
        }
        return newOptions
    })()
    // const options = ["Điện công nghiệp"]
    // for (let i=0;i<rawOptions.length;i++){
    //     console.log(replaceVietnameseChar(options[i]))
    // }
    /*
    aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬ
    dDđĐ
    eEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆ
    iIìÌỉỈĩĨíÍịỊ
    oOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢ
    uUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰ
    yYỳỲỷỶỹỸýÝỵỴ
     */

    const optionsElement = () => {
        let elements = []
        for (let i=0;i<options.length;i++){
            if(options[i].searchValue.toLowerCase().includes(replaceVietnameseChar(search.toLowerCase()))){
                elements.push(
                    <div className='h-12 pl-4 pr-4 w-ful flex flex-col justify-center ' onClick={() => {
                        props.setStateFunction(options[i].actualValue)
                        closePage()
                    }}> 
                        <p className='pl-2 text-[15px]'>{options[i].actualValue}</p>
                     </div>
                )
                if(i<options.length-1) elements.push(<hr className='ml-4 mr-4'/>)
            }
           
        }
        return elements
    }

    return (
        <div ref={thisPage} className='absolute top-0 left-0 w-screen h-screen z-[3000] bg-slate-50 select-input-go-in' >
{/* Navigation */}
            <nav className='h-22 bg-white w-full'>
                <div className='flex flex-row justify-between items-center h-10 bg-white w-full p-4'>
                    <div className='flex flex-row gap-[10px]'>
                        <div>
                            <CloseIcon onClick={() => closePage()} className='scale-[120%] text-gray-500'/>
                        </div>
                        <p className='font-[500] text-base'>Chọn nhóm hàng</p>
                    </div>
                    <div>
                        <p className='text-[18px] text-gray-500'>
                            <AddIcon/>
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center h-12 w-full pl-4 pr-4 border-t-gray-100 border-t-[1px]' >
                    <div className='bg-gray-200 h-8 w-full rounded-lg p-2 flex justify-center items-center gap-[10px]'>
                        <SearchIcon className='text-gray-500'/>
                        <InputBase 
                        className='w-[90%]'
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                </div>
            </nav>
{/* Select elements */}
            <div className='mt-[10px] w-full rounded-t-xl bg-[white] flex-col items-center justify-center'>
                {/* <div className='h-12 pl-4 pr-4 w-ful flex flex-col justify-center' onClick={() => {
                    props.setStateFunction("Đèn pha")
                    closePage()
                    }}> 
                    <p className='pl-2 text-[15px]'>Đèn pha</p>
                 </div>
                 <hr className='ml-4 mr-4'/>
                 <div className='h-12 pl-4 pr-4 w-ful flex flex-col justify-center'> 
                    <p className='pl-2 text-[15px]'>Gia dụng</p>
                 </div>
                 <hr className='ml-4 mr-4'/>
                 <div className='h-12 pl-4 pr-4 w-ful flex flex-col justify-center'> 
                    <p className='pl-2 text-[15px]'>Nhà bếp</p>
                 </div>
                 <hr className='ml-4 mr-4'/>
                 <div className='h-12 pl-4 pr-4 w-ful flex flex-col justify-center'> 
                    <p className='pl-2 text-[15px]'>Rượu</p>
                 </div>
                 <hr className='ml-4 mr-4'/> */}
                 {optionsElement()}
            </div>
        </div>

    )
}

export default SelectInputOptions;