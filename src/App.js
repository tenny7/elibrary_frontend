import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './modules/Home';
import Header from './modules/partials/Header'
import View from './modules/books/View'
import Add from './modules/books/Add'
import Login from './modules/auth/Login'
import Register from './modules/auth/Register'
import Logout from './modules/auth/Logout'
import Edit from './modules/books/Edit'
import Dashboard from './modules/Dashboard';
import axios from 'axios'
import ProtectedRouter from './modules/auth/ProtectedRouter'
import PageNotFound from './modules/helper/PageNotFound'


export default class App extends React.Component {

  state = {
    // user : {}'
    loggedIn: localStorage.getItem('token') ? true : false
  }
  componentDidMount = () => {
      axios.get('http://localhost:5000/user').then(
          res => {
              this.setUser(res.data)
          }, 
          err => {
              console.log(err)
          }
      )
  }

  setUser = (user) => {
      this.setState({ user : user })
  }
  

  render (){
    return (
      
        <Router>
          <div className="App">
            <Header user={this.state.user} setUser={this.setUser}/>
          </div>
          {/* loggedIn={this.state.loggedIn} */}
          {/* loggedIn={this.state.loggedIn}
loggedIn={this.state.loggedIn} */}
              <Route path="/" exact component={Home}/>
              <Route path="/add" component={Add}/>
              <Route path="/books" component={() => <View user={this.state.user} loggedIn={this.state.loggedIn}/>}/>
              <Route path="/loginForm" component={() => <Login setUser={this.setUser} />}/>
              <Route path="/registerForm" component={Register}/>
              <Route path="/dashboard" component={() => <Dashboard user={this.state.user}/>}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/edit/:id" component={Edit} />
              {/* <ProtectedRouter path="/dashboard" component={Dashboard} /> */}
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
