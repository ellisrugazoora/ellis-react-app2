
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import { Box, Center, HStack, Spacer, VStack, Wrap, Flex } from "@chakra-ui/layout";
import DataObject from '../Data/DataObject';
import DataFunction from '../Data/DataFunction';
import testobj from '../Data/DataObject';
import { Button } from '@chakra-ui/button';
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import NumberInp from './NumberInp';
import TestTab from './TaBle';
import TaBle from './TaBle';
import { NumberInput, NumberInputField } from '@chakra-ui/react';


function Graph3(props){
    
    var data = DataFunction;
    const [args, SetArgs] = useState(
        {
        bo1: 600, bo2: 600, bo3:200, bo4: 200, bo5: 200, bo6: 200, ad1:200, ad2:200, ad3:200, ad4:200, ad5: 200, ad6: 200, ad7: 200, ad8: 200, ad9:200, ad10: 200, ad11: 200, ad12: 200, //Starting inventory is a prop
        formulas: {
            _2T: {bo1:0.9050,bo2:0,bo3:0, bo4:0, bo5:0.08, bo6:1/18, bo7:0.002, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            _4T: {bo1:0.8370,bo2:0,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18, bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            atfIII: {bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            DuramaxHD:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18}, 
            FrontiaX:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            Geo80W90:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            Geo85W140:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            Hydrax32:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            HydraxZ46:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            HydraxZ68:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            PowerTransSP150:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            PowerTransSP220:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            PowerTransSP320:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            Sb22D210:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            SentryHDSae40:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18},
            TurbofleetSae15W:{bo1:1/18,bo2:1/18,bo3:1/18, bo4:1/18, bo5:1/18, bo6:1/18,bo7:0, ad1:1/18, ad2:1/18, ad3:1/18, ad4:1/18, ad5:1/18, ad6:1/18, ad7:1/18, ad8:1/18, ad9:1/18, ad10:1/18, ad11:1/18, ad12:1/18}
        },
        _2T:180, _4T:180,atfIII: 180,DuramaxHD:180, FrontiaX:180,Geo80W90:180,Geo85W140:180,Hydrax32:180,HydraxZ46:180,HydraxZ68:180,PowerTransSP150:180,PowerTransSP220:180,PowerTransSP320:180,Sb22D210:180,SentryHDSae40:180,TurbofleetSae15W:180
        }
    );

    var chartOptions = {
        // Data: Data to be displayed in the chart
    title: {
        text: `Mogas LOBP Production projection ${props.title}`,
    },
    data: [ //each object is a group (stacked or not)
        data(args).bo1, data(args).bo2, data(args).bo3, data(args).bo5, data(args).ad1,data(args).ad2,data(args).ad3, 
        data(args).ad4, data(args).ad5, data(args).ad6, data(args).ad7, data(args).ad8, data(args).ad9,
        data(args).ad10, data(args).ad11, data(args).ad12 //I should make this a fnx({args})
        //DataFunction({args}).baseoil, 
    ],
        // Series: Defines which chart type and data to use
    series: [ //This is pertinent to a single column
        data(args).series1,data(args).series2, data(args).series3,data(args).series4,data(args).series5, data(args).series6, data(args).series7,
        data(args).series8, data(args).series9, data(args).series10, data(args).series11, data(args).series12, data(args).series13, data(args).series14,
        data(args).series15, data(args).series16, data(args).series17
    ]
    }
    
    function limiting_reagent(name){
        console.log("limitingreagent = f(spare_inventory, product, product_ratios)")
        console.log("red_indication: the inventory such that the entirety of its remainder can be used in the production of the product in question")
        //let columns = ["baseoil1", "baseoil2", "baseoil3", "baseoil4", "baseoil5", "additive1", "additive2", "additive3", "additive4", "additive5", "additive6", "additive7", "additive8", "additive9", "additive10", "additive11", "additive12"]
        let columns = ["bo1", "bo2", "bo3", "bo4", "bo5", "ad1", "ad2", "ad3", "ad4", "ad5", "ad6", "ad7", "ad8", "ad9", "ad10", "ad11", "ad12"];

        //let prod = name;
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
            if(condition === 17){
                result = total + args[prod];
                console.log(`The limited reagent: ${columns[col]} and the total mass: ${total + args[prod]}`)
                break; //save the col. Thats the limiting reagent. and total is the total
            }
        }
        return result
    }
    function tick(number, id){
        let new_val = parseInt(number, 10);
        console.log(new_val, id);
        
        SetArgs((current) => {
            return {...current, [id]: new_val}
        });
        
    }
    function prodtable(number,id){
        let new_val = parseInt(number, 10);
        SetArgs((current) => {
            return {...current, [id]: new_val}
        });
    }
    function tablebutton(e){
        let id = e.target.id;
        let name = e.target.name;
        console.log(`Id: ${id}; Name: ${name}`)
        if(id === 'max'){
            let new_mass = Math.trunc(limiting_reagent(name));
            
            console.log(`Set max: new mass: ${new_mass}`)
            SetArgs((current) => {
                return {...current, [name]: new_mass}
            });
        }
    }
    function inv_table(number, id){
        let new_val = parseInt(number, 10);
        
        SetArgs((current) => {
            return {...current, [id]: new_val}
        });

    }
    function product_total(args){
        let productlist = ["_2T", "_4T", "atfIII", "DuramaxHD", "FrontiaX", "Geo80W90", "Geo85W140", "Hydrax32","HydraxZ46","HydraxZ68","PowerTransSP150","PowerTransSP220","PowerTransSP320","Sb22D210","SentryHDSae40","TurbofleetSae15W"]
        let sum = 0;
        for (const product of productlist) {
            sum = sum + args[product];
        }
        return sum;
    }
    var test_table1_columns = ["col1", "col2", "col3"];
    var test_table1_data = {
        row1: {col1: 1, col2: 2, col3: 3},
        row2: {col1: 4, col2: 5, col3: 6},
        row3: {col1: 7, col2: 8, col3: 9}
    };
    var test_table2_columns = ["col1", "col2", "col3"];
    var test_table2_data = {
        row1: {col1: 1, col2: 2, col3: 3},
        row2: {col1: 4, col2: 5, col3: 6},
        row3: {col1: 7, col2: 8, col3: 9},
        row4: {col1: 10, col2: 11, col3: 12},
        row5: {col1: 13, col2: 14, col3: 15}
    };
    var prod_table_columns = ["Products", "Quantity", "Maximize"]
    var prod_table_data = {
        prod1: {col1: "2T", col2: <NumberInp value={args._2T} prod="_2T" onChange={tick} init={args._2T} />, col4: <Button id='max' name='_2T' onClick={tablebutton}>Set Max</Button>},
        prod2: {col1: "4T", col2: <NumberInp value={args._4T} prod="_4T" onChange={tick} init={args._4T} />, col4: <Button id='max' name='_4T' onClick={tablebutton}>Set Max</Button>},
        prod3: {col1: "ATF III", col2: <NumberInp value={args.atfIII} prod="atfIII" onChange={prodtable} init={args.atfIII} />, col4: <Button id='max' name='atfIII' onClick={tablebutton}>Set Max</Button>},
        prod4: {col1: "Duramax HD", col2: <NumberInp value={args.DuramaxHD} prod="DuramaxHD" onChange={prodtable} init={args.DuramaxHD} />, col4: <Button id='max' name='DuramaxHD' onClick={tablebutton}>Set Max</Button>},
        prod5: {col1: "Frontia X", col2: <NumberInp value={args.FrontiaX} prod="FrontiaX" onChange={prodtable} init={args.FrontiaX} />, col4: <Button id='max' name='FrontiaX' onClick={tablebutton}>Set Max</Button>},
        prod6: {col1: "GEO 80W90", col2: <NumberInp value={args.Geo80W90} prod="Geo80W90" onChange={prodtable} init={args.Geo80W90} />, col4: <Button id='max' name='Geo80W90' onClick={tablebutton}>Set Max</Button>},
        prod7: {col1: "GEO 85W140", col2: <NumberInp value={args.Geo85W140} prod="Geo85W140" onChange={prodtable} init={args.Geo85W140} />, col4: <Button id='max' name='Geo85W140' onClick={tablebutton}>Set Max</Button>},
        prod8: {col1: "Hydrax 32", col2: <NumberInp value={args.Hydrax32} prod="Hydrax32" onChange={prodtable} init={args.Hydrax32} />, col4: <Button id='max' name='Hydrax32' onClick={tablebutton}>Set Max</Button>},
        prod9: {col1: "Hydrax Z 46", col2: <NumberInp value={args.HydraxZ46} prod="HydraxZ46" onChange={prodtable} init={args.HydraxZ46} />, col4: <Button id='max' name='HydraxZ46' onClick={tablebutton}>Set Max</Button>},
        prod10: {col1: "Hydrax Z 68", col2: <NumberInp value={args.HydraxZ68} prod="HydraxZ68" onChange={prodtable} init={args.HydraxZ68} />, col4: <Button id='max' name='HydraxZ68' onClick={tablebutton}>Set Max</Button>},
        prod11: {col1: "Power Trans SP 150", col2: <NumberInp value={args.PowerTransSP150} prod="PowerTransSP150" onChange={prodtable} init={args.PowerTransSP150} />, col4: <Button id='max' name='PowerTransSP150' onClick={tablebutton}>Set Max</Button>},
        prod12: {col1: "Power Trans SP 220", col2: <NumberInp value={args.PowerTransSP220} prod="PowerTransSP220" onChange={prodtable} init={args.PowerTransSP220} />, col4: <Button id='max' name='PowerTransSP220' onClick={tablebutton}>Set Max</Button>},
        prod13: {col1: "Power Trans SP 320", col2: <NumberInp value={args.PowerTransSP320} prod="PowerTransSP320" onChange={prodtable} init={args.PowerTransSP320} />, col4: <Button id='max' name='PowerTransSP320' onClick={tablebutton}>Set Max</Button>},
        prod14: {col1: "SB 22 D210", col2: <NumberInp value={args.Sb22D210} prod="Sb22D210" onChange={prodtable} init={args.Sb22D210} />, col4: <Button id='max' name='Sb22D210' onClick={tablebutton}>Set Max</Button>},
        prod15: {col1: "Sentry HD Sae 40", col2: <NumberInp value={args.SentryHDSae40} prod="SentryHDSae40" onChange={prodtable} init={args.SentryHDSae40} />, col4: <Button id='max' name='SentryHDSae40' onClick={tablebutton}>Set Max</Button>},
        prod16: {col1: "Turbofleet Sae 15W", col2: <NumberInp value={args.TurbofleetSae15W} prod="TurbofleetSae15W" onChange={prodtable} init={args.TurbofleetSae15W} />, col4: <Button id='max' name='TurbofleetSae15W' onClick={tablebutton}>Set Max</Button>},
        total: {col1: "Total", col2: product_total(args), col3: <Button isDisabled>Empty</Button> }
    }
    var inv_table_columns = ["Inventory", "Required", "Current", "Difference"];
    var inv_table_data = {
        inv1: {col1: "500SN/600N", col2: data(args).bo1.sum.toFixed(2), col3: <NumberInp prod="bo1" init={args.bo1} onChange={inv_table} value={args.bo1} />, col4: (args.bo1 - data(args).bo1.sum).toFixed(2)},
        inv2: {col1: "150SN", col2: data(args).bo2.sum.toFixed(2), col3: <NumberInp prod="bo2" init={args.bo2} onChange={inv_table} value={args.bo2} />, col4: (args.bo2 - data(args).bo2.sum).toFixed(2)},
        inv3: {col1: "BS150", col2: data(args).bo3.sum.toFixed(2), col3: <NumberInp prod="bo3" init={args.bo3} onChange={inv_table} value={args.bo3} />, col4: (args.bo3 - data(args).bo3.sum).toFixed(2)},
        inv4: {col1: "SN80/SN100", col2: data(args).bo4.sum.toFixed(2), col3: <NumberInp prod="bo4" init={args.bo4} onChange={inv_table} value={args.bo4} />, col4: (args.bo4 - data(args).bo4.sum).toFixed(2)},
        inv5: {col1: "DPK", col2: data(args).bo5.sum.toFixed(2), col3: <NumberInp prod="bo5" init={args.bo5} onChange={inv_table} value={args.bo5} />, col4: (args.bo5 - data(args).bo5.sum).toFixed(2)},
        
        inv6: {col1: "TBN+", col2: data(args).ad1.sum.toFixed(2), col3: <NumberInp prod="ad1" init={args.ad1} onChange={inv_table} value={args.ad1} />, col4: (args.ad1 - data(args).ad1.sum).toFixed(2)},
        inv7: {col1: "PPD", col2: data(args).ad2.sum.toFixed(2), col3: <NumberInp prod="ad2" init={args.ad2} onChange={inv_table} value={args.ad2} />, col4: (args.ad2 - data(args).ad2.sum).toFixed(2)},
        inv8: {col1: "CI-4", col2: data(args).ad3.sum.toFixed(2), col3: <NumberInp prod="ad3" init={args.ad3} onChange={inv_table} value={args.ad3} />, col4: (args.ad3 - data(args).ad3.sum).toFixed(2)},
        inv9: {col1: "BS200", col2: data(args).ad4.sum.toFixed(2), col3: <NumberInp prod="ad4" init={args.ad4} onChange={inv_table} value={args.ad4} />, col4: (args.ad4 - data(args).ad4.sum).toFixed(2)},
        inv10: {col1: "VII", col2: data(args).ad5.sum.toFixed(2), col3: <NumberInp prod="ad5" init={args.ad5} onChange={inv_table} value={args.ad5} />, col4: (args.ad5 - data(args).ad5.sum).toFixed(2)},
        inv11: {col1: "MONO PA EO", col2: data(args).ad6.sum.toFixed(2), col3: <NumberInp prod="ad6" init={args.ad6} onChange={inv_table} value={args.ad6} />, col4: (args.ad6 - data(args).ad6.sum).toFixed(2)},
        inv12: {col1: "4T PA PEO", col2: data(args).ad7.sum.toFixed(2), col3: <NumberInp prod="ad7" init={args.ad7} onChange={inv_table} value={args.ad7} />, col4: (args.ad7 - data(args).ad7.sum).toFixed(2)},
        inv13:{col1: "ATF PA", col2: data(args).ad8.sum.toFixed(2), col3: <NumberInp prod="ad8" init={args.ad8} onChange={inv_table} value={args.ad8} />, col4: (args.ad8 - data(args).ad8.sum).toFixed(2)},
        inv14:{col1: "2T PA", col2: data(args).ad9.sum.toFixed(2), col3: <NumberInp prod="ad9" init={args.ad9} onChange={inv_table} value={args.ad9} />, col4: (args.ad9 - data(args).ad9.sum).toFixed(2)},
        inv15:{col1: "HYA", col2: data(args).ad10.sum.toFixed(2), col3: <NumberInp prod="ad10" init={args.ad10} onChange={inv_table} value={args.ad10} />, col4: (args.ad10 - data(args).ad10.sum).toFixed(2)},
        inv16:{col1: "DYE", col2: data(args).ad11.sum.toFixed(2), col3: <NumberInp prod="ad11" init={args.ad11} onChange={inv_table} value={args.ad11} />, col4: (args.ad11 - data(args).ad11.sum).toFixed(2)},
        inv17:{col1: "TURB", col2: data(args).ad12.sum.toFixed(2), col3: <NumberInp prod="ad12" init={args.ad12} onChange={inv_table} value={args.ad12} />, col4: (args.ad12 - data(args).ad12.sum).toFixed(2)}
    };//MONO PA EO; 4T PA PEO; ATF PA; 2T PA; HYA; DYE; TURB; TM PA
    return (
        <div>
            {/* <Button id='_2T' onClick={limiting_reagent}>Limiting reagent test</Button> */}
            <br />
            <Center>
                <Box bg='white' padding={3} border={"1px"} borderRadius='15px' width='80%' height='500px' shadow={'lg'}>
                        <AgChartsReact options={chartOptions}/>
                </Box>
            </Center>
            
            <Center>
                <Flex width='80%'>
                    <TaBle title="Products" columns={prod_table_columns} data={prod_table_data} />
                    <Spacer />
                    <TaBle title="Inventory" columns={inv_table_columns} data={inv_table_data} />
                </Flex>
            </Center>
        </div>
    )
}

export default Graph3;