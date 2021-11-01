import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import Details from './Details'
import {AppContext} from "./context"

function App() {



  return (
      <div className = "Wrapper">
        <AppContext>
          <Router>
            <Switch>
                
                <Route path = "/details/:name" >  
                    < Details />          
                </Route>
                <Route exact path = "/">

                 < Home  />

                </Route>            
            </Switch>

          </Router>
        </AppContext>
         


    
      </div>
  );
}

export default App;
