
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import { Box, Center, Wrap } from "@chakra-ui/layout";
import DataObject from '../Data/DataObject';
import DataFunction from '../Data/DataFunction';
import testobj from '../Data/DataObject';
import { Button } from '@chakra-ui/button';
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import NumberInp from './NumberInp';
import TestTab from './TaBle';
import TaBle from './TaBle';

function Graph3(props){
    
    var data = DataFunction;
    const [args, SetArgs] = useState(
        {iphone:0, mac:0, ipad:0, wearables:0,
        iphone_mass: 150, mac_mass: 50, ipad_mass: 50, wearables_mass: 50, //starting mass = f(starting inventory, init ratio)
        bo1: 150, bo2: 140, bo3:130, ad1:140, ad2:150, ad3:145, //Starting inventory is a prop
        init_ratio: {iphone:1,mac:2,ipad:4,wearables:5},
        mode: "inventory",
        rel_abs: "absolute",
        formulas: {
            iphone: {baseoil1: 1/6,baseoil2: 1/6,baseoil3: 1/6,additive1: 1/6,additive2: 1/6,additive3: 1/6},
            mac: {baseoil1: 1/6,baseoil2: 1/6,baseoil3: 1/6,additive1: 1/6,additive2: 1/6,additive3: 1/6},
            ipad: {baseoil1: 1/6,baseoil2: 1/6,baseoil3: 1/6,additive1: 1/6,additive2: 1/6,additive3: 1/6},
            wearables: {baseoil1: 1/6,baseoil2: 1/6,baseoil3: 1/6,additive1: 1/6,additive2: 1/6,additive3: 1/6},
        }
        }
    );
    const [lowerbound, SetLowerbound] = useState({bo1: 0, bo2: 0, bo3: 0, ad1: 0, ad2: 0, ad3: 0})
    var chartOptions = {
        // Data: Data to be displayed in the chart
    title: {
        text: `Mogas LOBP Production projection ${props.title}`,
    },
    data: [ //each object is a group (stacked or not)
        data(args).baseoil1, data(args).baseoil2, data(args).baseoil3,data(args).additive1,data(args).additive2,data(args).additive3 //I should make this a fnx({args})
        //DataFunction({args}).baseoil, 
    ],
        // Series: Defines which chart type and data to use
    series: [ //This is pertinent to a single column
        data(args).series1,data(args).series2,data(args).series3,data(args).series4,data(args).series5
    ]
    }
    
    function universal(e){
        let new_val = parseInt(e.target.value, 10);
        console.log(new_val);
        let id = e.target.id;
        console.log(id)
        SetArgs((current) => {
            return {...current, [id]: new_val}
        });       
        //update bounds
        SetLowerbound((current) => {
            return {...current, bo1: args.bo2}
        })
        console.log("The total for bo1: " + data(args).baseoil1.sum)
    }
    
    function upperbound(x){
        //the value that would yheidl in the limiting reagent being maximixed
    }
    function total(args){
        return data(args).baseoil1.sum;
    }
    function handle_toggle_mode(){
        console.log("toggle inv/prod mode")
        let toggler = {product: "inventory", inventory: "product"}
        SetArgs((prev) => {
            return {...prev, mode: toggler[prev.mode]}
        })
        console.log(args.mode)
    };
    
    function handle_toggle_rel_abs(){
        console.log("toggle rel/abs")
        let toggler = {relative: "absolute", absolute: "relative"}
        SetArgs((prev) => {
            return {...prev, rel_abs: toggler[prev.rel_abs]}
        })
        console.log(args.rel_abs)
    };
    function limiting_reagent(e){
        console.log("limitingreagent = f(spare_inventory, product, product_ratios)")
        console.log("red_indication: the inventory such that the entirety of its remainder can be used in the production of the product in question")
        let columns = ["baseoil1", "baseoil2", "baseoil3", "additive1", "additive2", "additive3"]
        let prod = e.target.id;
        for(let col = 0; col < columns.length; col++){
            //determine remainder
            let spare_inv = data(args)[columns[col]].spare; 
            console.log(spare_inv);
            let total = (spare_inv / args.formulas[prod][columns[col]]);
            console.log(total)
            let condition = 0;
            for(let check = 0; check < columns.length; check++){
                if((total * args.formulas[prod][columns[check]]) <= data(args)[columns[check]].spare){
                    condition++;//add one to the total if there is enough
                }
            }
            if(condition === 6){
                console.log(`The limited reagent: ${columns[col]} and the total mass: ${total + args.iphone_mass}`)
                break; //save the col. Thats the limiting reagent. and total is the total
            }
        }
    }
    function tick(number, id){
        let new_val = parseInt(number, 10);
        console.log(new_val, id);
        
        console.log("iphone")
        if(args.rel_abs === "absolute"){
            SetArgs((current) => {
                return {...current, [id + "_mass"]: new_val}
            });
        }
        else {
            SetArgs((current) => {
                return {...current, [id]: new_val}
            });
        }
        console.log(data(args).baseoil1.iphone)
    }
    function tablebutton(e){
        let id = e.target.id;
        let name = e.target.name;
        console.log(`Id: ${id}; Name: ${name}`)
    }

    var table_columns = ["Products", "Quantity", "Fix", "Maximize"]
    var table_data = {
        proda: {col1: "Prod1", col2: <NumberInp prod="iphone" onChange={tick} init={args.iphone_mass} />, col3: <Button id='fix' name="iphone" onClick={tablebutton}>Fix</Button>, col4: <Button id='max' name='iphone' onClick={tablebutton}>Set Max</Button>},
        prodb: {col1: "Prod1", col2: <NumberInp prod="mac" onChange={tick} init={args.mac_mass} />, col3: <Button id='fix' name='mac' onClick={tablebutton}>Fix</Button>, col4: <Button id='max' name='mac' onClick={tablebutton}>Set Max</Button>},
        prodc: {col1: "Prod1", col2: <NumberInp prod="ipad" onChange={tick} init={args.ipad_mass} />, col3: <Button id='fix' name='ipad' onClick={tablebutton}>Fix</Button>, col4: <Button id='max' name='ipad' onClick={tablebutton}>Set Max</Button>},
        prodd: {col1: "Prod1", col2: <NumberInp prod="wearables" onChange={tick} init={args.wearables_mass} />, col3: <Button id='fix' name='wearables' onClick={tablebutton}>Fix</Button>, col4: <Button id='max' name='wearables' onClick={tablebutton}>Set Max</Button>}
    }
    return (
        <div>
            <Button onClick={handle_toggle_mode}>Inventory or prod mode</Button>
            <Button onClick={handle_toggle_rel_abs}>Relative/absolute</Button> Current mode: {args.rel_abs}
            <Button id='iphone' onClick={limiting_reagent}>Limiting Reagent</Button>
            <br />
            <Center>
                <Box bg='white' padding={3} border={"1px"} borderRadius='15px' width='-moz-min-content' height='fit-content'>
                    <Center width={"100%"}>
                        <AgChartsReact options={chartOptions}/>
                    </Center>
                </Box>
            </Center>
            <Center>
                <TaBle columns={table_columns} data={table_data} />
            </Center>
            
            Call for action: <br />
            - How much additive and inventory to order = f(target output) <br />

            Projection: <br />
            - constrain each product output: fix; cap; range; lower bound
            - Display of live total output
            - Total output / target output
        </div>
    )
}

export default Graph3;