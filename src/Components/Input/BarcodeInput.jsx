import {InputBase} from '@mui/material';

const BarcodeInput = (props) => {
    // console.log("value: "+props.value)
    if (props.value === undefined) throw new Error('Missing value state!');
    if (props.setStateFunction === undefined) throw new Error('Missing setState function!');

    let value = props.value
    
    const handleChange = (event) => {
        const barcodeNumber = event.target.value.replace(/[^0-9]/g, "");
        props.setStateFunction(barcodeNumber);
      };

    return (
        <div className='flex justify-center items-center mb-[10px]'>
            <p className='pl-2 text-[15px] w-[45%] max-w-[200px] text-[14px]  text-gray-600'>{props.name}</p>
            <InputBase
                className='border-b-gray-300 mr-[10px] min-h-[40px] border-b-solid border-b-[0.5px] caret-[#3e87ad]'
                // sx={{fontSize:"15px"}}
                type= 'text'
                variant='standard'
                required
                value = {value}
                onChange = {(event)=> handleChange(event)}
                inputProps={{
                    pattern:"[0-9]+",
                    inputMode:'numeric'
                }}
                placeholder={""}
                fullWidth
                multiline
            />
            <div className='absolute right-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#868787" viewBox="0 0 16 16"> 
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
                </svg>
            </div>
        </div>
    )
}

export default BarcodeInput;