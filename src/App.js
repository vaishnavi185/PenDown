import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Userpanel from './Components/Userpanel';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="App">
 {/* <Login></Login>  */}
 {/* <Signup></Signup> */}
<Userpanel></Userpanel>
    </div>
  );
}

export default App;
