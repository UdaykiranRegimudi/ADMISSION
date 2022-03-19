import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {updateDoc, doc} from '@firebase/firestore'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import db from '../../firebase'
import './index.css'

class UpdateStudentLeaving extends Component {
  state = {
    message: '',
    status: false,
    classOfLeaving: '',
    reasonOfLeaving: '',
    dateOfLeaving: '',
    TCno: '',
    newSchoolOrCollage: '',
    loader: true,
  }

  goBack = () => {
    const {history} = this.props
    history.replace('/UpdateLeaving')
  }

  onSubmit = async event => {
    event.preventDefault()
    this.setState({loader: false})
    const {
      classOfLeaving,
      reasonOfLeaving,
      dateOfLeaving,
      TCno,
      newSchoolOrCollage,
    } = this.state

    const data = {
      classOfLeaving,
      reasonOfLeaving,
      dateOfLeaving,
      TCno,
      newSchoolOrCollage,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
    })
  }

  setClass = event => {
    this.setState({classOfLeaving: event.target.value})
  }

  setDate = event => {
    this.setState({dateOfLeaving: event.target.value})
  }

  setTc = event => {
    this.setState({TCno: event.target.value})
  }

  setCollage = event => {
    this.setState({newSchoolOrCollage: event.target.value})
  }

  setReason = event => {
    this.setState({reasonOfLeaving: event.target.value})
  }

  render() {
    const {message, status, loader} = this.state
    return (
      <div className="backgroundCreate">
        <form className="cardCreate" onSubmit={this.onSubmit}>
          {loader ? (
            <>
              <label htmlFor="Admission" className="label">
                Class Of Leaving School
              </label>
              <input
                type="text"
                placeholder="Class Of Leaving School"
                className="inputField"
                onChange={this.setClass}
              />
              <label htmlFor="Admission" className="label">
                Reason Of Leaving School
              </label>
              <input
                type="text"
                placeholder="Reason To Leave School"
                className="inputField"
                onChange={this.setReason}
              />
              <label htmlFor="Admission" className="label">
                Date Of Leaving School
              </label>
              <input
                type="date"
                className="inputField"
                onChange={this.setDate}
              />
              <label htmlFor="Admission" className="label">
                TC Number
              </label>
              <input
                type="text"
                placeholder="Tc number"
                className="inputField"
                onChange={this.setTc}
              />
              <label htmlFor="Admission" className="label">
                New School Or Collage Name
              </label>
              <input
                type="text"
                placeholder="New School Or Collage Name"
                className="inputField"
                onChange={this.setCollage}
              />
              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-outline-danger m-3 p-2"
                >
                  Update Student
                </button>
              </div>
              {status && <p className="message">{message}</p>}
            </>
          ) : (
            <Loader
              type="ThreeDots"
              color="red"
              height={80}
              width={80}
              className="mt-5 mb-5"
            />
          )}
        </form>

        <button
          type="submit"
          className="btn btn-danger m-3 p-2"
          onClick={this.goBack}
        >
          Back
        </button>
      </div>
    )
  }
}

export default UpdateStudentLeaving
