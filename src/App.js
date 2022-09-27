import { Form } from "./Components/Form";
import img from "./img/image1.png"
import car from "./img/Group.png"
import menu from "./img/menu.png"

function App() {

  return (
    <div className="wrapper" >
      <div className="menu-home" >
      <img className="sidebar-header" src={menu} alt="Sidbar"/>
      <img className="logo-header"src={img} alt="logo"/>
      <img className="car-header"src={car} alt="car"/>
      </div>
      <div className="form-and-todo-box">
        <Form/>
      </div>
    </div>
  );
}

export default App;
