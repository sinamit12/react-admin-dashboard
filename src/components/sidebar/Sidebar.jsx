import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="top"><span className="logo">
        DemoAdmin
        </span>    
        </div>
        <hr/>
       <div className="center">
       <ul>
         <p className="title">MAIN</p>
         <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span></li>
            <p className="title">LISTS</p>  
          <li>
            <PersonOutlineIcon className='icon'/>
            <span>Users</span></li>
          <li>
            <Inventory2Icon className='icon' />
            <span>Products</span></li>
          <li>
            <AddCardIcon className='icon'/>
            <span>Orders</span></li>
          <li>
            <LocalShippingIcon className='icon'/>
            <span>Dlivery</span></li>  
          <p className="title">USEFUL</p>  
          <li>
            <InsertChartIcon className='icon'/>
            <span>Stats</span></li>
          <li>
            <NotificationsNoneIcon className='icon'/>
            <span>Notification</span></li>
            <p className="title">SERVICE</p>  
          <li>
            <SettingsSystemDaydreamIcon className='icon'/>
            <span>System Health</span></li>
          <li>
            <ArticleIcon className='icon'/>
             <span>Logs</span></li>
          <li>
            <SettingsApplicationsIcon className='icon'/>
            <span>Setting</span></li>
         <p className="title">USER</p>
          <li>
            <PersonPinIcon className='icon'/>
            <span>Profile</span></li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span></li>
          
       </ul>
       </div>
       <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
       </div>
    </div>
  )
}

export default Sidebar
