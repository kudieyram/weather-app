import './App.css';
import LogInComponent from './component/LogIn';
import SignUpComponent from './component/SignUp';
import HomeComponent from './component/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div>
     <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login"><LogInComponent/></Route>

          <Route path="/signup">< SignUpComponent/></Route>

          <Route path="/dashboard">< HomeComponent/></Route>

          <Route exact path="/"><LogInComponent/></Route>

                
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
