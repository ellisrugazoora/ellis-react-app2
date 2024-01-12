import { useEffect } from "react";
import Forward from "./Components/Forward";
import Output from "./Components/Output";
import Reverse from "./Components/Reverse";
import Savedata from "./Components/Savedata";
import "./Tanga.css"
import { Box, Center, Wrap } from "@chakra-ui/layout";
import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from '@chakra-ui/slider';
import Graph2 from "./Components/Graph2";
import Graph3 from "./Components/Graph3";


function Tanga(){
    var localstorage = parseInt(localStorage.getItem('number'));
    useEffect(() => {
        
    }, [Output])
    return (
        <div className="Tanga">
            <header className="Tanga-header">
                Tanga production planning app
            </header>
            
            <body className="Tanga-body">
                <input onChange={(e) => {console.log(e.target.value)}} name="user"/>
                {/*localstorage*/}
                {/*<Output input={"current inventory; real inventory; order[volumes]; formulas; prices"} map={"optimize for: revenue or volume; exhaust inventory"}/>*/}
                {/*<Graph2 />*/}
                <Graph3 />
            </body>
            
        </div>
    )
}

export default Tanga;