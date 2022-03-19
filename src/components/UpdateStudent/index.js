import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {collection, getDocs} from '@firebase/firestore'
import UpdateSingleStudent from '../UpdateSingleStudent'

import db from '../../firebase'
import './index.css'

const usersCollectionRef = collection(db, 'School')
class UpdateStudent extends Component {
  state = {list: [], search: '', loader: false, search1: '', search2: ''}

  componentDidMount() {
    this.getData()
  }

  setSearch = event => {
    this.setState({search: event.target.value})
  }

  setSearch1 = event => {
    this.setState({search1: event.target.value})
  }

  setSearch2 = event => {
    this.setState({search2: event.target.value})
  }

  getData = async () => {
    const data = await getDocs(usersCollectionRef)
    this.setState({
      list: data.docs.map(each => ({...each.data(), id: each.id})),
      loader: true,
    })
  }

  onUpdateStudent = id => {
    console.log(id)
    localStorage.setItem('id', id)
    const {history} = this.props
    history.replace('/updateStudent')
  }

  goBack = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {list, search, loader, search1, search2} = this.state
    let data
    if (search !== '') {
      data = list.filter(each =>
        each.NameOfStudent1.toLowerCase().includes(search.toLowerCase()),
      )
    } else if (search1 !== '') {
      data = list.filter(each =>
        each.AdmissionNumber1.toLowerCase().includes(search1.toLowerCase()),
      )
    } else if (search2 !== '') {
      data = list.filter(each =>
        each.dateOfLeaving.toLowerCase().includes(search2.toLowerCase()),
      )
    } else {
      data = list.filter(each =>
        each.NameOfStudent1.toLowerCase().includes(search.toLowerCase()),
      )
    }

    return (
      <div className="backgroundDisplay">
        <div className="display">
          <input
            type="text"
            placeholder="Search By Name"
            className="input ml-3"
            onChange={this.setSearch}
            onKeyPress={this.pressKey}
          />
          <input
            type="text"
            placeholder="Search By Admission Number"
            className="input ml-3"
            onChange={this.setSearch1}
            onKeyPress={this.pressKey}
          />
          <input
            type="text"
            placeholder="Search By Search By Year"
            className="input ml-3"
            onChange={this.setSearch2}
            onKeyPress={this.pressKey}
          />
        </div>
        {loader ? (
          data.map(each => (
            <UpdateSingleStudent
              key={each.id}
              details={each}
              onUpdateStudent={this.onUpdateStudent}
            />
          ))
        ) : (
          <Loader
            type="ThreeDots"
            color="red"
            height={80}
            width={80}
            className="mt-5 mb-5"
          />
        )}
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

export default UpdateStudent
