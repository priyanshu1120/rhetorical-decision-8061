import { Checkbox } from '@chakra-ui/checkbox'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { HStack, Stack } from '@chakra-ui/layout'
import { Radio, RadioGroup } from '@chakra-ui/radio'
import { Select } from '@chakra-ui/select'
import React from 'react'

export function FormFeild({ error, children, label }) {
    return (
        <>
            <FormControl isInvalid={error}>
                <FormLabel color={"gray"} >{label}</FormLabel>
                {children}
                {error && <FormErrorMessage>{error}</FormErrorMessage>}
            </FormControl>

        </>
    )
}



export function TitleSelect({ label }) {
    return (
        <>
            <Select variant='flushed'  >
                <option hidden>{label}</option>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
                <option value='option4'>Option 4</option>
                <option value='option5'>Option 5</option>
                <option value='option6'>Option 6</option>
            </Select>
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
        <HStack width={"60%"}  >
            
        <Input marginLeft={"0rem 1rem 0rem 1rem"} placeholder="Enter Number" variant={"flushed"}  />
      <RadioGroup marginLeft={"2rem"} onChange={setValue} value={value}>
        <Stack direction='row'>
          <Radio value='1'>Months</Radio>
          <Radio value='2'>Weeks</Radio>
          <Radio value='3'>Days</Radio>
        </Stack>
      </RadioGroup>
        </HStack>
        </>
    )
  }