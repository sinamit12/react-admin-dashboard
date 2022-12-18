//import Chart from '../../components/chart-old/Chart'
import Chart from "../../components/chart/Chart";
import Featured from '../../components/featured/Featured'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
import { userData } from '../../dummyData'
import './home.scss'
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

const Home = () => {
const [userStats , setUserStats] = useState([]);

const MONTHS = useMemo(
  () => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  []

);

useEffect(()=>{

  const getStats =async ()=>{
    try{
     const res = await userRequest.get("/users/stats");
     res.data.map((item)=> 
     setUserStats((prev)=>[
      ...prev,
      {name : MONTHS[item._id -1],
       "Active User" : item.total
      }
     ]));
    }catch{}
  };
  getStats();
},[MONTHS])



  return (
    // <div className='home'>
      
    //     <Sidebar />
    //     <div className="homeContainer">   
    //       <Navbar />
    //       <FeaturedInfo />
    //       <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
    //       {/* <div className="widgets">
    //         <Widget  type="users"/>
    //         <Widget type="order"/>
    //         <Widget type="earning"/>
    //         <Widget type="balance"/>
    //       </div> */}
    //       {/* <div className="charts">
    //            <Featured />
    //            <Chart title= "Last 6 Month [income]" aspect={3/1}/>
    //       </div> */}

    //       {/* <div className="listContainer">
    //           <div className="listTitle">Latest Transaction</div>
    //           <List />
    //       </div> */}



    //       </div>

    // </div>

    <div className="home">
    <FeaturedInfo />
    <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
    <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
