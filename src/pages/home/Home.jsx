import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      
        <Sidebar />
        <div className="homeContainer">   
          <Navbar />
          <div className="widgets">
            <Widget  type="users"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          home  conatiner2

          </div>

    </div>
  )
}

export default Home
