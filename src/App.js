import Home from "./pages/home/Home";
import './App.css';
import {BrowserRouter as Router , Routes,Route, Navigate} from 'react-router-dom'
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import UserList from "./pages/userList/UserList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useEffect } from "react";


function App() {

const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;

// const admin= false;

// const admin = ()=>{if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin===null){
//   return false;
// }else{
//   return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
// }}


//  return (
  
//     <Router> 

//         <Navbar/>
//         <div className="container">
//         <Sidebar/>
//         <Routes>
//         <Route path="/login" element={<Login />} />
        
      
//       { admin && (

            
            
           
//             <Route path="/" >
//             <Route index element={<Home />} />
            
//             <Route path="users">
//               {/* <Route index element={<List />} /> */}
//               <Route index element={<UserList />} />
//             </Route>
         
//                <Route path="user/:userId" element={<User />} />
//                <Route path="newUser" element={<NewUser />} />
         
//             <Route path="products">
//               <Route index element={<ProductList/>} />              
//             </Route>     
//             <Route path="product/:productId" element={<Product />} />
//                <Route path="newProduct" element={<NewProduct />} />     
//             </Route>  
//             )      
//       }
//        </Routes> 
//        </div>    
//     </Router>
//     // <Router>

//     //   <Routes>

//     //   <Route path="/login"  element={ <Login />}/>
         
//     //   {admin && (
//     //   <Route   path="/" element={<Home />} />
//     //   )
//     //   }        
          
//     //   </Routes>
//     // </Router>
//   );
  


  // return (
        
  //   <Router>
  //     <Routes>
  //     <Route path="/login" element={<Login />} />
  //     </Routes>
  //     {admin && (
  //       <>
  //       <Navbar/>
  //       <div className="container">
  //         <Sidebar/>
  //         <Routes>
  //         <Route  path="/" >
  //           <Route index element={<Home />} />
  //           </Route>
  //           <Route path="/users" element={<UserList />} />
  //           <Route path="/user/:userId" element={<User />} />
  //           <Route path="/newUser" element={<NewUser />} />
  //           <Route path="/products" element={<ProductList />} />
  //           <Route path="/product/:productId" element={<Product />} />
  //           <Route path="/newProduct" element={<NewProduct />} />
            
  //         </Routes> 
  //       </div>
  //       </>
  //     )}


  //   </Router>

  // );


  return (
        
    <Router>
      <Routes>
   
      <Route path="/login" element={admin ?  (  <Navigate replace to={"/"} />    )  : <Login/>} />
      </Routes>
      {!admin && (<Navigate replace to={"/login"} />)};
      {admin && (
        <>
        <Navbar/>
        <div className="container">
          <Sidebar/>
          <Routes>
          <Route  path="/" >
            <Route index element={<Home />} />
            </Route>
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
            
          </Routes> 

     
        </div>
        </>
      )};


    </Router>

  );
  
}

export default App;
