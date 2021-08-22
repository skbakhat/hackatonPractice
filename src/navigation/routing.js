import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




// import Header from "../commonComponents/header/index";
// import NavbarOne from "../commonComponents/navbar/navbarOne";
// import NavBarTwo from "../commonComponents/navbar/navbarTwo";
import Footer from "../commonComponents/footer/Footer"
import Slider from "../commonComponents/slider/Slider"
import Home from "../commonComponents/home/Home"
import AdminLogin from "../users/admin/AdminLogin"
import CustomerLogin from "../users/customer/CustomerLogin"
import CustomerSignup from "../users/customer/CustomerSignup"



function Roucting() {
  return (
    <Router>
    <Slider />
    {/* <Home /> */}
    
      {/* <Header /> */}
      {/* <NavbarOne />
      <NavBarTwo /> */}
      <Switch>
        <Route exact path="/">
          <Home />
          
        </Route>
        <Route path="/AdminLogin">
          <AdminLogin />
        </Route>
        <Route path="/CustomerLogin">
          <CustomerLogin />
        </Route>
        <Route path="/CustomerSignup">
          <CustomerSignup />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Roucting;





// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Footer from "../commonComponents/footer/Footer"
// import Home from "../commonComponents/home/Home";
// import Slider from "../commonComponents/slider/Slider";
// import AdminLogin from "../users/admin/AdminLogin";
// import CustomerLogin from '../users/customer/CustomerLogin';

// function Routing() {
//     return (
//       <Router>
      
        
//         <Slider />
//         <Switch>
//         <Route exact path="/">
//           <Home />
//           </Route>
//           <Route  path="/AdminLogin">
//           <AdminLogin />
//           </Route>
//           <Route  path="/CustomerLogin">
//           <CustomerLogin />
//           </Route>

        
//         </Switch>
  
//         <Footer />
//       </Router>
//     );
//   }
  

// export default Routing;