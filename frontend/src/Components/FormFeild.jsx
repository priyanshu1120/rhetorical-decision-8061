import { Checkbox } from '@chakra-ui/checkbox'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { HStack, Stack } from '@chakra-ui/layout'
import { Radio, RadioGroup } from '@chakra-ui/radio'
import { Select } from '@chakra-ui/select'
import React from 'react'

export function FormFeild({  children, label }) {
    return (
        <>
            
                {/* {error && <FormErrorMessage>{error}</FormErrorMessage>} */}

        </>
    )
}



export function TitleSelect({ label }) {
    return (
        <>
            
        </>
    )

}


export function CheckboxType() {
    return (
        <>
            <Stack spacing={7} direction='row'>
                <Checkbox >Full Time</Checkbox>
                <Checkbox  >Part Time</Checkbox>
                <Checkbox  >Work From Home / Campus</Checkbox>
            </Stack>
        </>
    )
}

export function RadioDuration() {
    const [value, setValue] = React.useState('1');
    console.log(value);
    return (
        <>
        
        </>
    )
  }