import { useState } from 'react';

const Operations = ({ withdraw, deposit }) => {
    const [sum, setSum] = useState(0);

    return (
        <div>
            <button onClick={() => withdraw(sum)}>Withdraw</button>
            <input
                type="number"
                onChange={e => setSum(+e.target.value)}
                value={sum}
            />
            <button onClick={() => deposit(sum)}>Deposit</button>
        </div>
    );
};

export default Operations;