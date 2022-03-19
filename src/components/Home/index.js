import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Home extends Component {
  onShowDetails = () => {
    const {history} = this.props
    history.replace('/display')
  }

  AddStudent = () => {
    const {history} = this.props
    history.replace('/create')
  }

  UpdateStudent = () => {
    const {history} = this.props
    history.replace('/update')
  }

  UpdateStudentLeaving = () => {
    const {history} = this.props
    history.replace('/UpdateLeaving')
  }

  LogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const data = Cookies.get('jwt_token')
    if (data !== 'Shankar Sir') {
      return <Redirect to="/login" />
    }
    return (
      <div className="background2">
        <div className="card2">
          <h1 className="mb-5 headMain">
            Welcome To Z.P.H.S Chilukuru High Schoool
          </h1>
          <button
            type="button"
            className="btn btn-outline-danger m-3 p-2"
            onClick={this.onShowDetails}
          >
            Show All Students Details
          </button>
          <button
            type="button"
            className="btn btn-outline-success m-3 p-2"
            onClick={this.AddStudent}
          >
            Add New Student
          </button>
          <button
            type="button"
            className="btn btn-outline-info m-3 p-2"
            onClick={this.UpdateStudent}
          >
            Update Student Details
          </button>
          <button
            type="button"
            className="btn btn-outline-danger m-3 p-2"
            onClick={this.UpdateStudentLeaving}
          >
            Update Student Leaving Details
          </button>
          <button
            type="button"
            className="btn btn-outline-success m-3 p-2"
            onClick={this.LogOut}
          >
            Log Out
          </button>
        </div>
      </div>
    )
  }
}
export default Home
