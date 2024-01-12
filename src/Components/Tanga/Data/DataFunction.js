function DataFunction(mult){
    let mlt_smple = {iphone: ((100 + mult.iphone) / 100), mac: ((100 + mult.mac) / 100), ipad:((100 + mult.ipad) / 100),wearables:((100 + mult.wearables) / 100)}
    return {baseoil1: {
        quarter: "Base Oil 1",
        //quarterz: "pseudo1", only 1 xkey per group
        iphone: 140 * (100 + mult.iphone) / 100,
        mac: 16 * (100 + mult.mac) / 100,
        ipad: 14 * (100 + mult.ipad) / 100,
        wearables: 12 * (100 + mult.wearables) / 100,
        spare: mult.bo1// - (140 * mlt_smple.iphone) - (16 * mlt_smple.mac) - (14 * mlt_smple.mac) - (12 * mlt_smple.wearables),
    }, //the sum of all should equal current inventory. If 
    baseoil2: {
        quarter: "Base Oil 2",
        //quarterz: "pseudo2",
        iphone: 124 * (100 + mult.iphone) / 100,
        mac: 20 * (100 + mult.mac) / 100,
        ipad: 14 * (100 + mult.ipad) / 100,
        wearables: 12 * (100 + mult.wearables) / 100,
        spare: mult.bo2
    },
    baseoil3: {
        quarter: "Base Oil 3",
        //quarterz: "pseudo3",
        iphone: 112 * (100 + mult.iphone) / 100,
        mac: 20 * (100 + mult.mac) / 100,
        ipad: 18 * (100 + mult.ipad) / 100,
        wearables: 14 * (100 + mult.wearables) / 100,
        spare: mult.bo3,
    },
    additive1: {
        quarter: "Additive 1",
        //quarterz: "pseudo4",
        iphone: 118 * (100 + mult.iphone) / 100,
        mac: 24 * (100 + mult.mac) / 100,
        ipad: 14 * (100 + mult.ipad) / 100,
        wearables: 14 * (100 + mult.wearables) / 100,
        spare: mult.ad1,
    },
    additive2: {
        quarter: "Additive 2",
        //quarterz: "pseudo5",
        iphone: 124 * (100 + mult.iphone) / 100,
        mac: 18 * (100 + mult.mac) / 100,
        ipad: 16 * (100 + mult.ipad) / 100,
        wearables: 18 * (100 + mult.wearables) / 100,
        spare: mult.ad2,
    },
    additive3: {
        quarter: "Additive 3",
        //quarterz: "pseudo8",
        iphone: 108 * (100 + mult.iphone) / 100,
        mac: 22 * (100 + mult.mac) / 100,
        ipad: 14 * (100 + mult.ipad) / 100,
        wearables: 20 * (100 + mult.wearables) / 100,
        spare: mult.ad3,
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