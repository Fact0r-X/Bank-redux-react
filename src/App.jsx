import './App.css'
import Operations from "./components/Operations.jsx";
import Balance from "./components/Balance";

function App() {

    return (
        <div className={'container'}>
            <Balance/>
            <Operations/>
        </div>
    )
}

export default App
