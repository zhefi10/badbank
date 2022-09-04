import React from 'react';
import Card from './card';
import { useCtx } from './context';
import { formatBalance, ToolTips } from './utils';


function Withdraw() {
    const users = useCtx();
    const [balance, setBalance] = React.useState(users.at(-1).history.at(-1).balance);
    const [btndisabled, setBtnDisabled] = React.useState(true);
    const [withdrawValue, setWithdrawValue] = React.useState("");
    const [withdrawal, setWithdrawal] = React.useState(null);
 
    const onChangeHandler = (e)=>{
        e.preventDefault();
        setWithdrawValue(e.target.value);
        if (parseInt(e.target.value) > 0) {
            let rem = balance - parseInt(e.target.value);
            if (rem >= 0 ) {
                setBtnDisabled(false);
                setWithdrawal(parseInt(e.target.value));    
            } else {
                alert('Not enough money to withdraw', null, 2);
                setBtnDisabled(true);
            }
        } else {
            setBtnDisabled(true);
        }
      }

    const onClickHandler = () => {
        let now = new Date();
        users.at(-1).history.push({
            deposit: '',
            withdraw: withdrawal,
            balance: balance - withdrawal,
            date: now.toLocaleDateString('en-GB'),
            time: now.toTimeString()
        });
        setBalance(users.at(-1).history.at(-1).balance);
        setWithdrawal(null);
        setWithdrawValue("");
        setBtnDisabled(true);
    }

      return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="BadBank"
            title="WITHDRAWAL"
            text={<>Welcome{(users.at(-1).name === '') ? <>! </>: <>, {users.at(-1).name}! </>}In this window you can withdraw funds from your account</>}
            body = {(
                <div>
                    <label className="form-label mt-4">CURRENT BALANCE</label>
                    <div className="input-group mb-3" >
                        <span className="form-control badge bg-light" disabled>{formatBalance(balance)}</span>
                    </div>
                    <label className="form-label mt-4">WITHDRAW AMOUNT</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input data-tip data-for="withdrawAmountTip" type="number" className="form-control" id="withdrawField" aria-label="Amount (to the nearest dollar)" value={withdrawValue} onChange={onChangeHandler}/>
                        <button data-tip data-for="withdrawClickTip" type="button" className="btn btn-success" id="withdrawClick" disabled={btndisabled}
                        onClick={onClickHandler}>WITHDRAW</button>
                    </div>
                    <ToolTips></ToolTips>
                </div>
            )}
         />
    );
}

export default Withdraw;