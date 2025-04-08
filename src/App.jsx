import './App.css'
import Operations from "./components/Operations.jsx";
import Balance from "./components/Balance";
import {Provider} from 'react-redux';
import {store} from './app/store';

function App() {
    return (
        <Provider store={store}>
            <div className={'container'}>
                <Balance/>
                <Operations/>
            </div>
        </Provider>
    )
}

export default App