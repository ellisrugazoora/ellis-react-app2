import Graph from "./Graph";


function Output(props){
    return (
        <div>
            <header>
                Bidirectional output
            </header>
            <body>
                The value of the input: {props.input} <br />
                Map: {props.map} <br />
                Interactive graph: <br />
                <Graph />
            </body>
        </div>
    )
}

export default Output;