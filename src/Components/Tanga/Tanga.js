import { useEffect, useState } from "react";
import Forward from "./Components/Forward";
import Output from "./Components/Output";
import Reverse from "./Components/Reverse";
import Savedata from "./Components/Savedata";
import "./Tanga.css"
import { Box, Center, Wrap } from "@chakra-ui/layout";
import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from '@chakra-ui/slider';
import Graph2 from "./Components/Graph2";
import Graph3 from "./Components/Graph3";
import TableComp from "./Components/TableComp";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import TabsComp from "./Components/TabsComp";
import TestTab from "./Components/TaBle";
import TaBle from "./Components/TaBle";


function Tanga(){
    var localstorage = parseInt(localStorage.getItem('number'));
    var display = {graph: <Graph3 />, table: <TableComp />, tabs: <TabsComp />}
    var display_array = [];//You can use the map function to create a variable length display
    useEffect(() => {
        
    }, [Output])
    const [toggle, SetToggle] = useState("graph")
    function handletoggle(e){
        let change_from = {graph: "table", table: "tabs", tabs: "graph"}
        SetToggle(change_from[toggle])
    }   
    const data = {a: "2", b: "r"};
    return (
        <Box className="Tanga" width={"100%"}>
            <header className="Tanga-header">
                Tanga production planning app
            </header>
            <Box className="Tanga-body">
                <TabsComp one={{title: "January",content: <Graph3 title="Jan" />}} 
                    two={{title: "February",content: <Graph3 title="Feb" />}} 
                    three={{title: "March",content: <Graph3 title="Mar" />}}
                    four={{title: "test tab", 
                        content: <TaBle columns={["column1", "column2", "column3"]} 
                        data={{row1: {col1: 1, col2: 2,col3: 3}, row2: {col1: 4, col2: 5,col3: 6}, row3: {col1: 7, col2: 8, col3: 9}}} />}} />
            </Box>
        </Box>
    )
}

export default Tanga;