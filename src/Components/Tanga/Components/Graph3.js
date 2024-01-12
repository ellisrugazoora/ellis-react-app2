
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import { Box, Center, Wrap } from "@chakra-ui/layout";
import DataObject from '../Data/DataObject';
import DataFunction from '../Data/DataFunction';
import testobj from '../Data/DataObject';

function Graph3(){
    //const [di, SetDi] = useState(DataFunction(1)); //I shol
    var data = DataFunction;
    const [args, SetArgs] = useState({iphone:1, mac:1, ipad:1, wearables:1, bo1: 50, bo2: 40, bo3:30, ad1:40, ad2:50, ad3:45});
    //const [datas, SetDatas] = useState({bo1: di.baseoil1,bo2: di.baseoil2,bo3: di.baseoil3,ad1: di.additive1,ad2: di.additive2,ad3: di.additive3});
    var chartOptions = {
        // Data: Data to be displayed in the chart
    title: {
        text: "Mogas LOBP Production projection Graph3",
    },
    data: [ //each object is a group (stacked or not)
        data(args).baseoil1, data(args).baseoil2, data(args).baseoil3,data(args).additive1,data(args).additive2,data(args).additive3 //I should make this a fnx({args})
        //DataFunction({args}).baseoil, 
    ],
        // Series: Defines which chart type and data to use
    series: [ //This is pertinent to a single column
        data(args).series1,data(args).series2,data(args).series3,data(args).series4,data(args).series5
    ],
    }
    
    function universal(e){
        let new_val = parseInt(e.target.value, 10);
        console.log(new_val);
        let id = e.target.id;
        console.log(id)
        SetArgs((current) => {return {...current, [id]: new_val}});
    }

    return (
        <div>
            <br />
            <Center>
                <Box bg='white' padding={10} borderRadius='15px' width='fit-content'>
                    <Center>
                        <AgChartsReact options={chartOptions}/>
                    </Center>
                </Box>
            </Center>
            <Center>
                <Box>
                        Inputs: <br />
                        prodA %change: <input id='iphone' onChange={universal} defaultValue={0} type='number'/><br />
                        prodB %change: <input id='mac' onChange={universal} defaultValue={0} type='number'/><br />
                        prodC %change: <input id='ipad' onChange={universal} defaultValue={0} type='number'/><br />
                        prodD %change: <input id='wearables' onChange={universal} defaultValue={0} type='number'/>
                        
                </Box>
                <Box>
                    Inventory: <br />
                    Baseoil1: <input defaultValue={50} id='bo1' onChange={universal} type='number'/> <br />
                    Baseoil2: <input defaultValue={40} id='bo2' onChange={universal} type='number' /> <br />
                    Baseoil3: <input defaultValue={30} id='bo3' onChange={universal} type='number' /> <br />
                    Additive1: <input defaultValue={40} id='ad1' onChange={universal} type='number' /> <br />
                    Additive2: <input defaultValue={50} id='ad2' onChange={universal} type='number' /> <br />
                    Additive3: <input defaultValue={45} id='ad3' onChange={universal} type='number' /> <br />
                </Box>
                <Box>
                    Constraints: <br />
                </Box>
            </Center>
            
            {DataFunction(args).baseoil1.mac} <br />
            
        </div>
    )
}

export default Graph3;