import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/Login/Login';
import NavCom from './Component/Nav/NavCom';
import Signup from './Component/Signup/Signup';
import { BrowserRouter } from "react-router-dom"
import { Route, Switch } from 'react-router-dom'
import Home from './Component/Home';
import { useState, useEffect } from 'react'
import { auth } from './fiebase/firebase';

function App() {
  const [user, setuser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setuser(user);

      }
      else {
        setuser(null);
      }
    })
  }, [])
  return (
    <BrowserRouter>
      <NavCom user={user} />
      <Switch >
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
      {/* <Login /> */}
    </BrowserRouter>
  );
}

export default App;
