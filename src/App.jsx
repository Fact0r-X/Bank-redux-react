import {useState} from 'react'
import './App.css'
import Operations from "./components/Operations.jsx";
import Balance from "./components/Balance";

function App() {
    const [balance, setBalance] = useState(0)

    const deposit = sum => setBalance(prevBalance => prevBalance + sum);
    const withdraw = sum => setBalance(prevBalance => prevBalance < sum ? prevBalance : prevBalance - sum);

    return (
        <div>
            <Balance balance={balance}/>
            <Operations deposit={deposit} withdraw={withdraw}/>
        </div>
    )
}

export default App
