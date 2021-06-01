import './Front.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

// import {createBrowserHistory as history} from 'history'
const Front = ()=>{
    const history = useHistory();

    return (
        <>
        <div className="main">
          
            <button id="button" onClick={() => history.push('/page')}>enter</button>
            
           <div id="page" >Press enter to continue!</div>
           {/*  */}
        </div>
        {/* <h2 className="heading">Press enter to continue</h2> */}
        </>
    )
}
export default Front