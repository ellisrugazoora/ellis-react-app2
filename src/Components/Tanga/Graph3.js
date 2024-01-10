
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import { Box, Center, Wrap } from "@chakra-ui/layout";
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/slider';
import DataObject from './DataObject';


function Graph3(){
    const [testState, SetTestState] = useState(50);
    const [mult, SetMult] = useState(0);
    var dataobj = DataObject;
    var chartOptions = {
        // Data: Data to be displayed in the chart
    title: {
        text: "Mogas LOBP Production projection",
    },
    data: [ //each object is a group (stacked or not)
    dataobj.baseoil1, //the sum of all should equal current inventory. If 
    dataobj.baseoil2,
    dataobj.baseoil3,
    dataobj.additive1,
    dataobj.additive2,
    dataobj.additive3,
    ],
        // Series: Defines which chart type and data to use
        series: [ //This is pertinent to a single column
          dataobj.series1,
          dataobj.series2,
          dataobj.series3,
          dataobj.series4,
          dataobj.series5
      ],
      }
    return (
        <div>
            <br />
            <Center>
                <Box>
                    Inputs: <br />
                    Inv: <input onChange={(e) => {console.log(e.target.value);SetTestState(parseInt(e.target.value,10))}} defaultValue={50} type='number'/><br />
                    prodA %change: <input onChange={(e) => {console.log(e.target.value);SetMult(parseInt(e.target.value,10))}} defaultValue={0} type='number'/><br />
                    prodB %change: <input onChange={(e) => {console.log(e.target.value);SetMult(parseInt(e.target.value,10))}} defaultValue={0} type='number'/><br />
                    prodA %change: <input onChange={(e) => {console.log(e.target.value);SetMult(parseInt(e.target.value,10))}} defaultValue={0} type='number'/><br />
                    prodA %change: <input onChange={(e) => {console.log(e.target.value);SetMult(parseInt(e.target.value,10))}} defaultValue={0} type='number'/>
                    Constraints: <br />
                </Box>
                <Box bg='white' padding={10} borderRadius='15px' width='fit-content'>
                    <Center>
                        <AgChartsReact options={chartOptions}/>
                    </Center>
                </Box>
                
            </Center>
        </div>
    )
}

export default Graph3;