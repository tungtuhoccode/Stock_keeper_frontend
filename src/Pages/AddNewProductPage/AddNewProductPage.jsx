import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import "./AddNewProductPage.css"
import { useRef, useState , useEffect} from 'react';

import { InputBase} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

const InputFieldElement = (props) => {
    const getInputAdorment = () => {
        if(props.barcode) {
            return (
                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#868787" viewBox="0 0 16 16"> 
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
                </svg>
            )
        }
        if (props.select){
            return (
                <KeyboardArrowRightIcon sx={{color: "#565757"}}/>
            )
        }
        return ""
    }
    return (
        <div className='flex justify-center items-center mb-[10px]'>
            <p className='pl-2 text-[15px] w-[45%]'>{props.name}</p>
            <InputBase
                className='border-b-gray-300 mr-[10px] min-h-[40px] border-b-solid border-b-[0.5px] caret-[#3e87ad]'
                sx={{fontSize:"15px"}}
                type="number"
                variant='standard'
                placeholder={props.description}
                fullWidth
                multiline
            />
            <div className='absolute right-4'>
                {getInputAdorment()}
            </div>
            
        </div>
    )
}
let imageFiles = []
const AddNewProductPage = () => {
    const [temp, setTemp] = useState(true)
    const navigate = useNavigate()
    const thisPageElement = useRef(null)
    const [images,setImages] = useState([])



    const closePage = () => {
        thisPageElement.current.classList.remove("add-new-product-go-up")
        thisPageElement.current.classList.add("add-new-product-go-down")
        setTemp(true)

        setTimeout(() => {
            navigate("/")
        },200)
    }

    useEffect(()=>{
        window.scrollTo(0,0)
        setTimeout(()=>{setTemp(false)},200)
    },[])

    const ImagesElement = images?.map(url => {
        console.log(url)
        return (  
            <SwiperSlide className='relative top-[10px]'>
                <div className='bg-[#bbb8b8] h-24 w-24 rounded-[13px]'>
                    <img src={url} alt="url" className=' h-24 w-24 rounded-[13px]'/>
                </div>
            </SwiperSlide>

        )
    })

    const addToImagesElement = (newUrl) => {

        console.log("added to image element")
        console.log(newUrl)
        setImages([...images, newUrl])
    }

    const addToImageFiles = (newFile) => {
        console.log("added to image files")
        imageFiles.push(newFile)
    }

    console.log(imageFiles)
  
    useEffect(()=> {
        return () => {
            for (let i=0;i < images.length;i++){
                URL.revokeObjectURL(images[i])
            }
        }
    },[])


    const CameraElement = () => {
        const [selectedFile, setSelectedFile] = useState()

        // create a preview as a side effect, whenever selected file is changed
        useEffect(() => {
            if (!selectedFile) {
                return
            }

            const objectUrl = URL.createObjectURL(selectedFile)
            console.log(objectUrl)
            addToImagesElement(objectUrl)

        }, [selectedFile])

        const onSelectFile = e => {
            if (!e.target.files || e.target.files.length === 0) {
                setSelectedFile(undefined)
                return
            }

            // I've kept this example simple by using the first image instead of multiple
            addToImageFiles(e.target.files[0])
            setSelectedFile(e.target.files[0])
        }
        return (
            <div>
                <input type="file" id="upload-photo" accept="image/*" className='z-[-1] opacity-0 absolute cursor-pointer' onChange={onSelectFile}/>
                <label htmlFor="upload-photo" className='flex items-center justify-center bg-[#bbb8b8] opacity-30 h-24 w-24 rounded-[13px]'>
                    <CameraAltOutlinedIcon className='text-white scale-150'/>
                </label>
            </div>
           
        )
    }

//THE PAGE
    return (
        <div>
       {
        temp &&
        <div>
            <Home classList="absolute z-[1]"/>
            <Footer classList="absolute z-[1]"/>
        </div>
       }
        
        <div ref={thisPageElement} className='absolute top-0 right-0 w-screen h-screen add-new-product-go-up z-[5000] bg-slate-50'>
{/* Navigation */}
            <nav className='flex flex-row justify-between items-center h-10 bg-white w-full p-4'>
                <div className='flex flex-row gap-[10px]'>
                    <div onClick={()=> closePage()}>
                        <CloseIcon className='scale-[120%] text-gray-500'/>
                    </div>
                    <p className='font-[500] text-base'>Thêm hàng hoá</p>
                </div>
                <div>
                    <p className='text-[#3e87ad] text-[18px]'>Lưu</p>
                </div>
            </nav>
{/* PICTURES SLIDES*/}
            <section className='bg-slate-50 h-[120px]'>   
                <Swiper className='h-[125px]'
                    spaceBetween={5}
                    slidesPerView={window.innerWidth/110}
                    onSlideChange={() => console.log('slide change')}
                    direction="horizontal"
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className='ml-[15px] relative top-[10px]'>
                            <CameraElement/>
                        </SwiperSlide>
                        {ImagesElement}
                        {/* <SwiperSlide className=' relative top-[10px]'>
                            <CameraElement/>
                        </SwiperSlide> */}
                </Swiper>
            </section>
{/* MAIN FORM AREA */}
            <section className='bg-white rounded-t-xl px-2'>
                <InputFieldElement name={"Mã hàng"} description={"Mã hàng tự động"} barcode={true}/>
                <InputFieldElement name={"Mã vạch"} description={""} barcode={true}/>
                <InputFieldElement name={"Tên hàng"} description={"Tên hàng"} />
                <InputFieldElement name={"Nhóm hàng"} description={"Chọn nhóm hàng"} select={true}/>
                <InputFieldElement name={"Thương hiệu"} description={"Chọn thương hiệu"} select={true}/>
                <InputFieldElement name={"Giá bán"} description={"0"}/>
                <InputFieldElement name={"Giá vốn"} description={""}/>
                <InputFieldElement name={"Tồn kho"} description={""}/>
                <InputFieldElement name={"Vị trí"} description={"Chọn nơi để sản phẩm"} select={true}/>
            </section>

{/* NOTES FORM AREA */}
            <section className='bg-white rounded-xl min-h-[50px] pl-4'>
            <InputBase
                className='min-h-[40px] caret-[#3e87ad] '
                sx={{fontSize:"16px", color:"gray"}}
                variant='standard'
                placeholder={"Mẫu ghi chú (hoá đơn, đặt hàng)"}
                fullWidth
                multiline
                id="email"
            />
            </section>
{/*END*/}
            </div>
        </div>
    )
}

export default AddNewProductPage;