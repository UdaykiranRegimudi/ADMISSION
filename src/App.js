import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/LoginForm'
import Home from './components/Home'

import UpdateStudent from './components/UpdateStudent'
import CreateNewStudent from './components/CreateNewStudent'
import DisplayStudents from './components/DisplayStudents'
import UpdateStudentData from './components/UpdateStudentData'
import UpdateLeaving from './components/UpdateLeaving'
import UpdateStudentLeaving from './components/updateStudentLeaving'
import ShowInfo from './components/ShowInfo'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/display" component={DisplayStudents} />
    <ProtectedRoute exact path="/create" component={CreateNewStudent} />
    <ProtectedRoute exact path="/update" component={UpdateStudent} />
    <ProtectedRoute exact path="/updateStudent" component={UpdateStudentData} />
    <ProtectedRoute exact path="/UpdateLeaving" component={UpdateLeaving} />
    <ProtectedRoute exact path="/showInfo" component={ShowInfo} />
    <ProtectedRoute
      exact
      path="/UpdateStudentLeaving"
      component={UpdateStudentLeaving}
    />
  </Switch>
)

export default App
