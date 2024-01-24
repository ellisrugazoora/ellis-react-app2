
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import { Box, Center, HStack, Spacer, Wrap } from "@chakra-ui/layout";
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
        bo1: 160, bo2: 140, bo3:130, ad1:100, ad2:150, ad3:145, //Starting inventory is a prop
        init_ratio: {iphone:1,mac:2,ipad:4,wearables:5},
        mode: "inventory",
        rel_abs: "absolute",
        formulas: {
            iphone: formula({baseoil1: 5, baseoil2: 4, baseoil3: 1, additive1: 2, additive2: 1, additive3: 0.5}),
            mac: {baseoil1: 2/6,baseoil2: 3/6,baseoil3: 1/6,additive1: 2/6,additive2: 3/6,additive3: 1/6},
            ipad: {baseoil1: 3/6,baseoil2: 2/6,baseoil3: 1/6,additive1: 1/6,additive2: 1/6,additive3: 1/6},
            wearables: {baseoil1: 3/6,baseoil2: 2/6,baseoil3: 1/6,additive1: 1/6,additive2: 2/6,additive3: 1/6},
        },
        current_inv: {bo1: 0, bo2: 0, bo3: 0, ad1: 0, ad2: 0, ad3: 0}
        }
    );
    function formula(object){
        let sum = 0;
        Object.entries(object).map((value, index) => {
            sum = sum + value[1];
        })
        return {baseoil1: object.baseoil1/sum,baseoil2: object.baseoil2/sum,baseoil3: object.baseoil3/sum,additive1: object.additive1/sum,additive2: object.additive2/sum,additive3: object.additive3/sum}
    }
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
    function limiting_reagent(name){
        console.log("limitingreagent = f(spare_inventory, product, product_ratios)")
        console.log("red_indication: the inventory such that the entirety of its remainder can be used in the production of the product in question")
        let columns = ["baseoil1", "baseoil2", "baseoil3", "additive1", "additive2", "additive3"]
        let prod = name;
        let result;
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
                result = total + args[prod + "_mass"];
                console.log(`The limited reagent: ${columns[col]} and the total mass: ${total + args[prod + "_mass"]}`)
                break; //save the col. Thats the limiting reagent. and total is the total
            }
        }
        return result
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
        if(id === 'max'){
            let new_mass = Math.trunc(limiting_reagent(name));
            
            console.log(`Set max: new mass: ${new_mass}`)
            SetArgs((current) => {
                return {...current, [name + "_mass"]: new_mass}
            });
        }
    }
    function inv_table(number, id){
        let new_val = parseInt(number, 10);
        SetArgs((old) => {
            return {...old, current_inv: {...old.current_inv, [id]: new_val}}
        })
    }
    var prod_table_columns = ["Products", "Quantity", "Maximize"]
    var prod_table_data = {
        proda: {col1: "4T", col2: <NumberInp value={args.iphone_mass} prod="iphone" onChange={tick} init={args.iphone_mass} />, col4: <Button id='max' name='iphone' onClick={tablebutton}>Set Max</Button>},
        prodb: {col1: "2T", col2: <NumberInp value={args.mac_mass} prod="mac" onChange={tick} init={args.mac_mass} />, col4: <Button id='max' name='mac' onClick={tablebutton}>Set Max</Button>},
        prodc: {col1: "Sentry", col2: <NumberInp value={args.ipad_mass} prod="ipad" onChange={tick} init={args.ipad_mass} />, col4: <Button id='max' name='ipad' onClick={tablebutton}>Set Max</Button>},
        prodd: {col1: "Duramax HD", col2: <NumberInp value={args.wearables_mass} prod="wearables" onChange={tick} init={args.wearables_mass} />, col4: <Button id='max' name='wearables' onClick={tablebutton}>Set Max</Button>}
    }
    var inv_table_columns = ["Inventory", "Required", "Current", "Difference"];
    var inv_table_data = {
        inv1: {col1: "500SN/600N", col2: data(args).baseoil1.sum.toFixed(2), col3: <NumberInp prod="bo1" init={0} onChange={inv_table} />, col4: args.current_inv.bo1 - args.bo1},
        inv2: {col1: "150SN", col2: data(args).baseoil2.sum.toFixed(2), col3: <NumberInp prod="bo2" init={0} onChange={inv_table} />, col4: args.current_inv.bo2 - args.bo2},
        inv3: {col1: "BS150", col2: data(args).baseoil3.sum.toFixed(2), col3: <NumberInp prod="bo3" init={0} onChange={inv_table} />, col4: args.current_inv.bo3 - args.bo3},
        inv4: {col1: "PPD", col2: data(args).additive1.sum.toFixed(2), col3: <NumberInp prod="ad1" init={0} onChange={inv_table} />, col4: args.current_inv.ad2 - args.ad1},
        inv5: {col1: "GOA", col2: data(args).additive2.sum.toFixed(2), col3: <NumberInp prod="ad2" init={0} onChange={inv_table} />, col4: args.current_inv.ad2 - args.ad2},
        inv6: {col1: "VII", col2: data(args).additive3.sum.toFixed(2), col3: <NumberInp prod="ad3" init={0} onChange={inv_table} />, col4: args.current_inv.ad3 - args.ad3},
    };
    return (
        <div>
            {/* <Button onClick={(e) => {console.log("change ")}}>Test tab creation</Button>
            <Button onClick={handle_toggle_mode}>Inventory or prod mode</Button>
            <Button onClick={handle_toggle_rel_abs}>Relative/absolute</Button> Current mode: {args.rel_abs} */}
            <br />
            <Center>
                <Box bg='white' padding={3} border={"1px"} borderRadius='15px' width='-moz-min-content' height='fit-content'>
                    <Center width={"100%"}>
                        <AgChartsReact options={chartOptions}/>
                    </Center>
                </Box>
            </Center>
            <Center>
                <HStack spacing='10px'>
                    <TaBle title="Products" columns={prod_table_columns} data={prod_table_data} />
                    <TaBle title="Inventory" columns={inv_table_columns} data={inv_table_data} />
                </HStack>
            </Center>
            
        </div>
    )
}

export default Graph3;