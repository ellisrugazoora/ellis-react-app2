import logo from './logo.svg';
import './App.css';

function StockApp() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  function sendMessage(e){
    console.log(e.target)
    let res = "Response to: " + input;
    setResponse(res)
    console.log("Send message")
  }
  return (
    <div className="StockApp">
      <header className="StockApp-header">
        <img src={logo} className="StockApp-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
        <div>
          <p>{response}</p>
        </div>
        <a
          className="StockApp-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default StockApp;