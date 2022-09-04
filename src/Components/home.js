import Card from './card';
import { Link } from 'react-router-dom';
import { ToolTips } from './utils';

function Home() {

    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="BadBank"
            title="Welcome to BadBank"
            text="Your best choice to lose money"
            body={(<div><img src="./bank_logo.png" className="img-fluid" alt="Responsive Site"/>
            <span data-tip data-for="noAccountTip">
            <Link to="/login" className="btn btn-success disabled" >Login</Link>
            </span>
            <Link data-tip data-for="createAccTip" to="/createAccount" className="btn btn-warning">Sign up</Link>
            <ToolTips></ToolTips>
            </div>)}
         />
    );
}

export default Home;