import logo from './images/Logo.png';
import './App.css';
import './header.css';

function App() {
    return ( 
            <div className="container">
        <div className="header">
            <div className="logo"><img src={logo} alt="logo" className="pic" />LOGO</div>
            <div className="dash">Dashboard</div>
        </div>
        <div className="sec-header">
        <div className="menu">
            <div className="menus">Dashboard</div>
            <div className="menus">our services</div>
            <div className="menus">products</div>
            <div className="menus">newsletter</div>
            <div className="menus">offers</div>
            <div className="menus">contact us</div>
            <div className="menus">log out</div>
            <div className="dummy"></div>
        </div>
        <div className="content">
        <div className="con">
            <div className="heading-1">Heading 1 - <br/> Point of View</div>
            <div className="data">  
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,<br/>
molestiae quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum<br/>
numquam blanditiis harum quisquam eius sed<br/> odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem.
                optio, eaque rerum! Provident similique accusantium nemo autem.
            </div>
        </div>
        </div>
        </div>
            </div>
    );
}

export default App;