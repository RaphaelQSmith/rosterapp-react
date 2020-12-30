import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Login from './components/login'
import Search from './components/search'
import Table from './components/table'
import Newroster from './components/newroster'
import CreateUser from './components/register'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/createUser' component={CreateUser} />
            <Route path='/search' component={Search} />
            <Route path='/table' component={Table} />
            <Route path='/newroster' component={Newroster} />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
