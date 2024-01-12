import { useEffect, useState } from "react";


function handleclick(){
    console.log("saved number")
}
function Savedata(){
    const [number, SetNumber] = useState(parseInt(localStorage.getItem('number')))

    useEffect(() => {//this is for storage
        localStorage.setItem('number', number.toString());
      }, [number]);
    
    function print_storage(){
    SetNumber(number + 1)
    console.log("the stored number: " + localStorage.getItem('number'))
    }
    function setToZero(){
        SetNumber(0)
        console.log("the stored number: " + localStorage.getItem('number'))
    }
    return (
        <div>
            <button onClick={print_storage}>Increment saved number</button>
            <button onClick={setToZero}>Set number to Zero</button>
            {localStorage.getItem('number')}
        </div>
    )
}

export default Savedata;
