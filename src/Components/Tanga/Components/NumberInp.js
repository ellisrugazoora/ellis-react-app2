import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/number-input";

function NumberInp(props){
    function handlechange(number){
        props.onChange(number, props.prod);
    }
    return (
        <NumberInput defaultValue={props.init} onChange={handlechange}>
            <NumberInputField bg={"white"} />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>
    )
}

export default NumberInp;