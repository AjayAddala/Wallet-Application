import logo from './logo.svg';
import Home from './components/home';
import NavBar from './components/navbar';
import Login from './components/login';
import CreateAccount from './components/createaccount';
import Register from './components/Register';
import Customer from './components/customer';
import AddCustomer from './components/addcustomer';
import UpdateCustomer from './components/updatecustomer';
import getCustomerbymobileNo from './components/getCustomerbymobileNo';
import Logout from './components/logout';
import CusById from './components/customerById'
import Deposite from './components/deposite';
import FundTransfer from './components/fundtransfer';
import Withdraw from './components/withdraw';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Switch>



        <Route path="/login" component={Login} />

        <Route path="/logout" component={Logout} />

        <Route path="/Register" component={Register} />

        <Route path="/Customer" component={Customer}/>

        <Route path="/createaccount" component={CreateAccount}/>

        <Route path="/addCustomer" component={AddCustomer}/>

        <Route path="/updatecustomer" component={UpdateCustomer}/>

        <Route path="/getCustomerbyId/:cid" component={CusById}/>

        <Route path="/makeDeposit/:mobileNo/:amount" component={Deposite}/>

        <Route path="/withdrawMoney/:mobileNo/:amount" component={Withdraw}/>

    <Route path="/transferMoney/:sourcemobileNo/:targetMobileNo/:amount" component={FundTransfer}/>

        <Route path="/getCustomerbymobileNo" component={getCustomerbymobileNo}/>

        <Route exact path="/" component={Home} />

        <Redirect from="/home" to="/" />

        

      </Switch>
    
     
    </div>
  );
}

export default App;
