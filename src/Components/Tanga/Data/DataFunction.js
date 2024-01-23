function DataFunction(mult){ 
    let rslt = (prod, inventory) => {
        return mult[prod + "_mass"] * mult.formulas[prod][inventory];
    }
    let rslt_test = (prod, inventory, rel_abs) => {
        if(rel_abs === "absolute"){
            return mult[prod + "_mass"] * mult.formulas[prod][inventory];
        }
        else {
            return mult[prod + "_mass"] * (100 + mult[prod]) / 100;
        }
    }
    let spare_rslt = (index) => {
        let action = {}//depending on inventory/product mode
        return action(index)
    }

    //find the limiting reagent
    return {baseoil1: {
        quarter: "Base Oil 1",
        //quarterz: "pseudo1", only 1 xkey per group
        iphone: rslt_test("iphone", "baseoil1", mult.rel_abs),
        mac: rslt("mac", "baseoil1"),
        ipad: rslt("ipad", "baseoil1"),
        wearables: rslt("wearables", "baseoil1"),
        spare: mult.bo1 - rslt("iphone", "baseoil1") - rslt("mac", "baseoil1") - rslt("ipad", "baseoil1") - rslt("wearables", "baseoil1"),
        sum: (rslt("iphone","baseoil1") + rslt("mac","baseoil1") + rslt("ipad","baseoil1") + rslt("wearables","baseoil1"))
    }, //the sum of all should equal current inventory. If 
    baseoil2: {
        quarter: "Base Oil 2",
        //quarterz: "pseudo2",
        iphone: rslt_test("iphone", "baseoil2", mult.rel_abs),
        mac: rslt("mac", "baseoil2"),
        ipad: rslt("ipad", "baseoil2"),
        wearables: rslt("wearables", "baseoil2"),
        spare: mult.bo2 - rslt("iphone", "baseoil2") - rslt("mac", "baseoil2") - rslt("ipad", "baseoil2") - rslt("wearables", "baseoil2"),
        sum: rslt("iphone","baseoil2") + rslt("mac","baseoil2") + rslt("ipad","baseoil2") + rslt("wearables","baseoil2")
    },
    baseoil3: {
        quarter: "Base Oil 3",
        //quarterz: "pseudo3",
        iphone: rslt_test("iphone", "baseoil3", mult.rel_abs),
        mac: rslt("mac", "baseoil3"),
        ipad: rslt("ipad", "baseoil3"),
        wearables: rslt("wearables", "baseoil3"),
        spare: mult.bo3 - rslt("iphone", "baseoil3") - rslt("mac", "baseoil3") - rslt("ipad", "baseoil3") - rslt("wearables", "baseoil3"),
        sum: rslt("iphone","baseoil3") + rslt("mac","baseoil3") + rslt("ipad","baseoil3") + rslt("wearables","baseoil3")
    },
    additive1: {
        quarter: "Additive 1",
        //quarterz: "pseudo4",
        iphone: rslt_test("iphone", "additive1", mult.rel_abs),
        mac: rslt("mac", "additive1"),
        ipad: rslt("ipad", "additive1"),
        wearables: rslt("wearables", "additive1"),
        spare: mult.ad1 - rslt("iphone", "additive1") - rslt("mac", "additive1") - rslt("ipad", "additive1") - rslt("wearables", "additive1"),
        sum: rslt("iphone","additive1") + rslt("mac","additive1") + rslt("ipad","additive1") + rslt("wearables","additive1")
    },
    additive2: {
        quarter: "Additive 2",
        //quarterz: "pseudo5",
        iphone: rslt_test("iphone", "additive2", mult.rel_abs),
        mac: rslt("mac", "additive2"),
        ipad: rslt("ipad", "additive2"),
        wearables: rslt("wearables", "additive2"),
        spare: mult.ad2 - rslt("iphone", "additive2") - rslt("mac", "additive2") - rslt("ipad", "additive2") - rslt("wearables", "additive2"),
        sum: rslt("iphone","additive2") + rslt("mac","additive2") + rslt("ipad","additive2") + rslt("wearables","adadditive22")
    },
    additive3: {
        quarter: "Additive 3",
        //quarterz: "pseudo8",
        iphone: rslt_test("iphone", "additive3", mult.rel_abs),
        mac: rslt("mac", "additive3"),
        ipad: rslt("ipad", "additive3"),
        wearables: rslt("wearables", "additive3"),
        spare: mult.ad3 - rslt("iphone", "additive3") - rslt("mac", "additive3") - rslt("ipad", "additive3") - rslt("wearables", "additive3"),
        sum: rslt("iphone","additive3") + rslt("mac","additive3") + rslt("ipad","additive3") + rslt("wearables","additive3")
    },
    series1: {
        type: 'bar',
        xKey: 'quarter',
        yKey: 'iphone',
        yName: '4T',
        stacked: true},
    series2: {
        type: 'bar',
        xKey: 'quarter',
        yKey: 'mac',
        yName: '2T',
        stacked: true
    },
    series3: {
        type: 'bar',
        xKey: 'quarter',
        yKey: 'ipad',
        yName: 'Sentry',
        stacked: true
    },
    series4: {
        type: 'bar',
        xKey: 'quarter',
        yKey: 'wearables',
        yName: 'Duramax HD',
        stacked: true
    },
    series5: {
        type: 'bar',
        xKey: 'quarter',
        yKey: 'spare',
        yName: 'Spare',
        stacked: true,
    }
    
    };
}
export default DataFunction;