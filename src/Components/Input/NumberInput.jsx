import {InputBase} from '@mui/material';

const NumberInput = (props) => {
    let value = props.value.displayValue

    const handleChange = (event) => {
        const strNumber = event.target.value.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        props.setStateFunction({
          displayValue: strNumber,
          actualNumberValue: Number(strNumber.replace(/,/g, ""))
        });
    };

    return (
        <div className='flex justify-center items-center mb-[10px]'>
            <p className='pl-2 w-[45%] max-w-[200px] text-[14px]  text-gray-600'>{props.name}</p>
            <InputBase
                className='border-b-gray-300 mr-[10px] min-h-[40px] border-b-solid border-b-[0.5px] caret-[#3e87ad]'
                sx={{fontSize:"15px"}}
                type= 'text'
                variant='standard'
                required
                value = {value}
                inputProps={{
                    pattern:"[0-9]+",
                    inputMode:'numeric'
                }}
                onChange = {(event)=> handleChange(event)}
                placeholder={0}
                fullWidth
                multiline
            />
        </div>
    )
}

export default NumberInput;