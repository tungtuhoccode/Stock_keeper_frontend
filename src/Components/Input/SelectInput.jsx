import { Input, InputBase, TextField} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import SelectInputOptions from '../../Pages/SelectInputOptions/SelectInputOptions';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SelectInput = (props) => {
    if (props.value === undefined) throw new Error('Missing value state!');
    if (props.setStateFunction === undefined) throw new Error('Missing setState function!');
    if (props.type === undefined) throw new Error('Missing type (eg: "category")!');
    if (props.description === undefined) throw new Error('Missing description (eg: "chọn sản phẩm")!');

    let value = props.value

    const [showOption, setShowOption] = useState(false)

    // console.log("show option:", showOption)

    return (
        <div className='flex justify-center items-center mb-[10px]' onClick={() => {if(!showOption){setShowOption(true)}}}>
            <p className='pl-2 text-[15px] w-[45%] max-w-[200px] text-[14px]  text-gray-600'>{props.name}</p>
            <InputBase
                className='border-b-gray-300 mr-[10px] min-h-[40px] border-b-solid border-b-[0.5px] caret-[#3e87ad]'
                sx={{fontSize:"15px"}}
                type= 'text'
                variant='standard'
                required
                value = {value}
                readOnly
                placeholder={props.description}
                fullWidth
                multiline
                onWheel={event => { event.preventDefault(); }}
            />

            <div className='absolute right-4'>
                <KeyboardArrowRightIcon sx={{color: "#565757"}}/>
            </div>
            {showOption && 
                <SelectInputOptions 
                    type={props.type} 
                    description={props.description}
                    closeSelectInput = { () => setShowOption(false)} 
                    setStateFunction={props.setStateFunction} 
                    showOption={showOption}
                />
            }
        </div>
    )
}

export default SelectInput;