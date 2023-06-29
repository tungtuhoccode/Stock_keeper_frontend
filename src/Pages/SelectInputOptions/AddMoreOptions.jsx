import { useEffect, useState } from "react";
import GrayBackground from "../../Components/GrayBackground/GrayBackground"
import { Input, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
    {
      palette: {
        primary: {
          main: '#3e87ad',
        },
      }
    }
);

const AddMoreOptions = (props) => {
    const [value, setValue] = useState("")
    const [isSubmitedEmpty, setSubmitEmpty] = useState(false)

    return (
        <div>
            <GrayBackground color="#000000" opacity="0.3"/>
            <div className="absolute top-[30%] right-[50%] translate-x-[50%] translate-y-[-50%] w-60 h-40 rounded-xl bg-white z-[1500] flex flex-col items-center justify-between pt-2">
                <h1 className="text-lg">
                    {props.description || "Description"}
                </h1> 
                <TextField
                    className='w-10/12 border-b-gray-300 max-h-[40px] border-b-solid border-b-[1px] caret-[#3e87ad] hover:border-b-[#3e87ad]'
                    sx={{fontSize:"14px"}}
                    type= 'text'
                    variant='standard'
                    required
                    color="primary"

                    inputProps={props.number && {
                        pattern:"[0-9]+",
                        inputMode:'numeric'
                    }}
                    value={value}
                    error={isSubmitedEmpty}
                    helperText={isSubmitedEmpty && props.placeholder+" đang trống"}

                    onChange={(event) => {
                        setSubmitEmpty(false)
                        setValue(event.target.value)
                    }}
                    placeholder={props.placeholder}
                />
                <section className="flex justify-evenly w-full  h-[36px]">
                    <button className="w-1/2 border-t-gray-300 border-t-solid border-t-[0.5px] text-base border-r-gray-300 border-r-solid border-r-[0.5px]" 
                        onClick = {() => props.closeAddMoreOptions()}
                    >
                        Huỷ bỏ
                    </button>                    
                    <button className="w-1/2 border-t-gray-300 border-t-solid border-t-[0.5px] text-[#3e87ad] text-lg" onClick={() => {
                        if (value === "") {
                            setSubmitEmpty(true)
                            return
                        }
                        props.clickAddMoreOption(value)
                        props.closeAddMoreOptions()
                    }
                    }>Thêm</button>
                </section>

            </div>
        </div>
    )
}
export default AddMoreOptions;