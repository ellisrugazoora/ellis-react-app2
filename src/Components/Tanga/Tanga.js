import Forward from "./Forward";
import Output from "./Output";
import Reverse from "./Reverse";

function Tanga(){
    return (
        <div className="Tanga">
            <header className="Tanga-header">
                Tanga production planning app
            </header>
            <body className="Tanga-body">
                <input onChange={(e) => {console.log(e.target.value)}} name="user"/>
                <Output input={"current inventory; real inventory; order[volumes]; formulas; prices"} map={"optimize for: revenue or volume; exhaust inventory"}/>
                <Forward input={"inventory; orders; prices"} map={"Maximize profit; exhaust inventory"}/>
                <Reverse input={"inventory; orders; prices"} map={"Maximize profit; exhaust inventory"}/>
            </body>
        </div>
    )
}

export default Tanga;