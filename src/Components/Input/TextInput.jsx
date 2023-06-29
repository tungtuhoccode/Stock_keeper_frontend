import { Input, InputBase, TextField} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import SelectInputOptions from '../../Pages/SelectInputOptions/SelectInputOptions';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SelectInput = (props) => {
    if (props.value === undefined) throw new Error('Missing value state!');
    if (props.setStateFunction === undefined) throw new Error('Missing setState function!');

    let value = props.value

    return (
        <div className='flex justify-center items-center mb-[10px]'>
            <p className='pl-2 text-[15px] w-[45%] max-w-[200px] text-[14px]  text-gray-600'>{props.name}</p>
            <InputBase
                className='border-b-gray-300 mr-[10px] min-h-[40px] border-b-solid border-b-[0.5px] caret-[#3e87ad]'
                sx={{fontSize:"15px"}}
                type= 'text'
                variant='standard'
                required
                value = {value}
                placeholder={props.description}
                fullWidth
                multiline
                onChange={(event) => {
                    props.setStateFunction(event.target.value)
                }}
            />
        </div>
    )
}

export default SelectInput;