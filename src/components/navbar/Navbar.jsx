import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className='navbar'>
   <div className="wrapper">
      <div className="search">
      <input type="text" placeholder="Search..." />
       <SearchIcon />
       </div>

       <div className="items">
            <div className="item">
                <LanguageIcon className='icon' />
                English
            </div>
            <div className="item">
                <DarkModeIcon className='icon'/>
            </div>
            <div className="item">
                 <FullscreenExitIcon className='icon'/>
            </div>
            <div className="item">
                 <NotificationsNoneIcon className='icon'/>
                 <div className='counter'>1</div>

            </div>
            <div className="item">
                 <ChatBubbleOutlineIcon className='icon'/>
                 <div className='counter'>3</div>
            </div>
            <div className="item">
                <ListIcon  className='icon'/>
            </div>
            <div className="item">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb" 
                alt="" 
                className='avatar'/>
            </div>

       </div>
   </div>
    </div>
  )
}

export default Navbar
