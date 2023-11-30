import {InputBase} from '@mui/material';

type InformationFieldProps = {
    name: string;
    value: string;
}

const InformationField = (props: InformationFieldProps) => {

    return (
        <div className='flex justify-center items-center mb-[10px]'>
            <p className='pl-2 text-[15px] w-[45%] max-w-[200px] text-[14px]  text-gray-600'>{props.name}</p>
            <InputBase
                className='border-b-gray-300 mr-[10px] min-h-[40px] border-b-solid border-b-[0.5px] caret-[#3e87ad]'
                // sx={{fontSize:"15px"}}
                type= 'text'
                required
                value = {props.value}
                readOnly
                inputProps={{
                    pattern:"[0-9]+",
                    inputMode:'numeric'
                }}
                placeholder={""}
                fullWidth
                multiline
            />
        </div>
    )
}

export default InformationField;