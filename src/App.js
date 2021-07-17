import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './modules/Home';
import Header from './modules/partials/Header'
import View from './modules/books/View'
import Add from './modules/books/Add'
import Login from './modules/auth/Login'
import Register from './modules/auth/Register'
import PageNotFound from './modules/helper/PageNotFound'

export default class App extends React.Component {
  // constructor(props){
  // super(props);
  // this.state = {}
  // }

  render (){
    return (
      
        <Router>
          <div className="App">
            <Header/>
          </div>
                   
              <Route path="/" exact component={Home}/>
              <Route path="/add" component={Add}/>
              <Route path="/books" component={View}/>
              <Route path="/loginForm" component={Login}/>
              <Route path="/registerForm" component={Register}/>
              {/* <Route path="*" exact component={PageNotFound}/> */}
        </Router>
        
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//        <Home/>
//     </div>
//   );
// }

// export default App;
