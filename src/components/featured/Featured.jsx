import  './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";


const Featured = () => {
  return (
    <div className='featured'>
       <div className="top">
           <div className="title">
             <h1>Total Revenue</h1>
             <MoreVertIcon  className='icon' fontSize='small'/>
           </div>
       </div>
       <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70}  text ={"70%"} strokeWidth={5}/>
        </div>
        <div className="title">Total Sales mmade today</div>
         <div className="amount">$420</div>
         <div className="disc">
            Previous tranction processsing . Last paymentsmay not be included.
         </div>
         <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon  fontSize='small'/>
                      <div className="resultAmount">$12.4K</div>
                </div>

            </div>
            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult positive ">
                    <KeyboardArrowUpOutlinedIcon  fontSize='small'/>
                      <div className="resultAmount">$12.4K</div>
                </div>

            </div>
            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon  fontSize='small'/>
                      <div className="resultAmount">$12.4K</div>
                </div>

            </div>
         </div>
       </div>
    </div>
  )
}

export default Featured
