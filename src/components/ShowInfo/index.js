import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {getDoc, doc} from '@firebase/firestore'
import db from '../../firebase'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class ShowInfo extends Component {
  state = {list: [], loader: false}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const id = localStorage.getItem('Show')
    const single = await doc(db, 'School', id)
    const data = await getDoc(single)
    this.setState({list: data.data(), loader: true})
  }

  goBack = () => {
    const {history} = this.props
    history.replace('/display')
  }

  render() {
    const {list, loader} = this.state
    console.log(list)
    return (
      <div className="displayItemsBackground">
        <div className="displayItemsCard container">
          {loader ? (
            <div>
              <h1 className="m-5 addHead">
                ADMISSION DETAILS OF {list.NameOfStudent1}
              </h1>
              <h2 className="name colour">
                Admission Number:<span>{list.AdmissionNumber1}</span>
              </h2>
              <h2 className="name colour">
                Name:<span>{list.NameOfStudent1}</span>
              </h2>
              <h2 className="name colour">
                Mother Tongue:<span>{list.MotherTongue1}</span>
              </h2>
              <h2 className="name colour">
                Date Of Birth:<span>{list.DateOfBirth1}</span>
              </h2>
              <h2 className="name colour">
                Nationality / State:<span>{list.NationalityandState1}</span>
              </h2>
              <h2 className="name colour">
                Religion:<span>{list.Religion1}</span>
              </h2>
              <h2 className="name colour">
                Cast:<span>{list.Cast1}</span>
              </h2>
              <h2 className="name colour">
                Father Name:<span>{list.FatherName1}</span>
              </h2>
              <h2 className="name colour">
                Mother Name:<span>{list.MotherName1}</span>
              </h2>
              <h2 className="name colour">
                Father Occupation:<span>{list.FatherOccupation1}</span>
              </h2>
              <h2 className="name colour">
                Mother Occupation:<span>{list.MotherOccupation1}</span>
              </h2>
              <h2 className="name colour">
                Aadhaar Number:<span>{list.AadhaarNumber1}</span>
              </h2>
              <h2 className="name colour">
                Previous School:<span>{list.PreciousSchool1}</span>
              </h2>
              <h2 className="name colour">
                Data Of Admission:<span> {list.DataOfAdmission1}</span>
              </h2>
              <h2 className="name colour">
                Mole One:<span>{list.MoleOne1}</span>
              </h2>
              <h2 className="name colour">
                Mole Two:<span>{list.MoleTwo1}</span>
              </h2>
              <h2 className="name colour">
                Admitted Class:<span>{list.ClassOfAdmission1}</span>
              </h2>
              <h2 className="name colour">
                TC Number:<span>{list.TCno}</span>
              </h2>
              <h2 className="name colour">
                Class Of Leaving:<span>{list.classOfLeaving}</span>
              </h2>
              <h2 className="name colour">
                Date Of Leaving :<span>{list.dateOfLeaving}</span>
              </h2>
              <h2 className="name colour">
                New School/New Collage:<span>{list.newSchoolOrCollage}</span>
              </h2>
              <h2 className="name colour">
                Reason Of Leaving School:<span>{list.reasonOfLeaving}</span>
              </h2>
              <h2 className="name colour">
                Mobile Number:<span>{list.MobileNumber1}</span>
              </h2>
            </div>
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
      </div>
    )
  }
}

export default ShowInfo
