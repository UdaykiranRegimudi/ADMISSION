import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', error: '', errorStatus: false}

  setUsername = event => {
    this.setState({username: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username === '') {
      this.setState({error: 'Enter Your Username', errorStatus: true})
    } else if (password !== 'School123') {
      this.setState({error: 'Enter Correct Password', errorStatus: true})
    } else {
      this.setState({username: '', password: '', errorStatus: false})
      Cookies.set('jwt_token', 'Shankar Sir', {
        expires: 30,
        path: '/',
      })
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {username, password, error, errorStatus} = this.state
    const data = Cookies.get('jwt_token')
    if (data === 'Shankar Sir') {
      return <Redirect to="/" />
    }
    return (
      <div className="background">
        <div className="Attendance">
          <h1>Attendance Management System</h1>
        </div>
        <div className="flexCard mt-4">
          <div>
            <img
              src="https://www.telangana.gov.in/Style%20Library/GoT/Content/img/logo.png"
              alt="img"
              className="img"
            />
          </div>
          <h2 className="school mt-3 ml-4">Z.P.H.S CHILUKURU HIGH SCHOOL</h2>
        </div>
        <div className="card3">
          <img
            src="https://res.cloudinary.com/dfraghm1g/image/upload/v1607215728/IMG20201125122612_b3xhup.jpg"
            alt="school"
            className="school1"
          />
          <div className="background5 mt-5">
            <form className="formBackground" onSubmit={this.onSubmit}>
              <img
                src="https://img.icons8.com/bubbles/100/000000/administrator-male.png"
                className="icon"
                alt="img"
              />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input mt-4"
                onChange={this.setUsername}
                value={username}
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input mt-4"
                onChange={this.setPassword}
                value={password}
              />
              <button className="button mt-4" type="submit">
                Login
              </button>
              {errorStatus && <p>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
