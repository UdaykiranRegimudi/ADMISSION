import {Component} from 'react'
import {collection, getDocs, addDoc, doc} from '@firebase/firestore'
import Loader from 'react-loader-spinner'
import db from '../../firebase'
import './index.css'

const usersCollectionRef = collection(db, 'School')

class CreateNewStudent extends Component {
  state = {
    AdmissionNumber: '',
    NameOfStudent: '',
    MotherTongue: '',
    DateOfBirth: '',
    NationalityandState: '',
    Religion: '',
    Cast: '',
    FatherName: '',
    MotherName: '',
    FatherOccupation: '',
    MotherOccupation: '',
    AadhaarNumber: '',
    PreviousSchool: '',
    DataOfAdmission: '',
    ClassOfAdmission: '',
    MoleOne: '',
    MoleTwo: '',
    MobileNumber: '',
    message: '',
    status: false,
    loader: false,
  }

  onSubmit = async event => {
    event.preventDefault()
    this.setState({loader: true})
    const {
      AdmissionNumber,
      NameOfStudent,
      MotherTongue,
      DateOfBirth,
      NationalityandState,
      Religion,
      Cast,
      FatherName,
      MotherName,
      FatherOccupation,
      ClassOfAdmission,
      MotherOccupation,
      AadhaarNumber,
      PreviousSchool,
      DataOfAdmission,
      MobileNumber,
      MoleOne,
      MoleTwo,
    } = this.state
    if (AdmissionNumber !== '' && NameOfStudent !== '') {
      const data = {
        AdmissionNumber1: AdmissionNumber,
        NameOfStudent1: NameOfStudent,
        MotherTongue1: MotherTongue,
        DateOfBirth1: DateOfBirth,
        NationalityandState1: NationalityandState,
        Religion1: Religion,
        Cast1: Cast,
        FatherName1: FatherName,
        MotherName1: MotherName,
        AadhaarNumber1: AadhaarNumber,
        FatherOccupation1: FatherOccupation,
        MotherOccupation1: MotherOccupation,
        PreciousSchool1: PreviousSchool,
        DataOfAdmission1: DataOfAdmission,
        MoleOne1: MoleOne,
        MoleTwo1: MoleTwo,
        ClassOfAdmission1: ClassOfAdmission,
        MobileNumber1: MobileNumber,
        classOfLeaving: '',
        reasonOfLeaving: '',
        dateOfLeaving: '',
        TCno: '',
        newSchoolOrCollage: '',
      }
      await addDoc(usersCollectionRef, data)
      this.setState({
        message: 'Data Successfully Added',
        status: true,
        loader: false,
      })
    } else {
      this.setState({
        loader: false,
        message: 'Please Enter Correct Data',
        status: 'uday',
      })
    }
  }

  goBack = () => {
    const {history} = this.props
    history.replace('/')
  }

  setPreviousSchool = event => {
    this.setState({PreviousSchool: event.target.value})
  }

  setAadharNumber = event => {
    this.setState({AadhaarNumber: event.target.value})
  }

  setClassOfAdmission = event => {
    this.setState({ClassOfAdmission: event.target.value})
  }

  setName = event => {
    this.setState({NameOfStudent: event.target.value})
  }

  setDateOfAdmission = event => {
    this.setState({DataOfAdmission: event.target.value})
  }

  setDateOfBirth = event => {
    this.setState({DateOfBirth: event.target.value})
  }

  setCast = event => {
    this.setState({Cast: event.target.value})
  }

  setNationality = event => {
    this.setState({NationalityandState: event.target.value})
  }

  setFatherName = event => {
    this.setState({FatherName: event.target.value})
  }

  setMotherName = event => {
    this.setState({MotherName: event.target.value})
  }

  setFatherOccupation = event => {
    this.setState({FatherOccupation: event.target.value})
  }

  setMotherOccupation = event => {
    this.setState({MotherOccupation: event.target.value})
  }

  setLanguage = event => {
    this.setState({MotherTongue: event.target.value})
  }

  setMoleOne = event => {
    this.setState({MoleOne: event.target.value})
  }

  setMoleTwo = event => {
    this.setState({MoleTwo: event.target.value})
  }

  setAdmissionNumber = event => {
    this.setState({AdmissionNumber: event.target.value})
  }

  setReligion = event => {
    this.setState({Religion: event.target.value})
  }

  setMobileNumber = event => {
    this.setState({MobileNumber: event.target.value})
  }

  render() {
    const {status, message, loader} = this.state
    return (
      <div className="backgroundCreate">
        <form className="cardCreate" onSubmit={this.onSubmit}>
          {loader ? (
            <Loader
              type="ThreeDots"
              color="red"
              height={80}
              width={80}
              className="mt-5 mb-5"
            />
          ) : (
            <>
              <label htmlFor="Admission" className="label">
                Admission Number
              </label>
              <input
                type="text"
                placeholder="Admission Number"
                className="inputField"
                onChange={this.setAdmissionNumber}
              />
              <label htmlFor="Admission" className="label">
                Name Of Student
              </label>
              <input
                type="text"
                placeholder="Name Of Student"
                className="inputField"
                onChange={this.setName}
              />
              <label htmlFor="Admission" className="label">
                Mother Tongue
              </label>
              <input
                type="text"
                placeholder="Mother Tongue"
                className="inputField"
                onChange={this.setLanguage}
              />
              <label htmlFor="Admission" className="label">
                Date Of Birth
              </label>
              <input
                type="date"
                className="inputField"
                onChange={this.setDateOfBirth}
              />
              <label htmlFor="Admission" className="label">
                Nationality / State
              </label>
              <input
                type="text"
                placeholder="Nationality / State"
                className="inputField"
                onChange={this.setNationality}
              />
              <label htmlFor="Admission" className="label">
                Religion
              </label>
              <input
                type="text"
                placeholder="Religion"
                className="inputField"
                onChange={this.setReligion}
              />
              <label htmlFor="Admission" className="label">
                Cast
              </label>
              <input
                type="text"
                placeholder=" cast"
                className="inputField"
                onChange={this.setCast}
              />
              <label htmlFor="Admission" className="label">
                Father Name
              </label>
              <input
                type="text"
                placeholder="Father Name"
                className="inputField"
                onChange={this.setFatherName}
              />
              <label htmlFor="Mother Name" className="label">
                Mother Name
              </label>
              <input
                type="text"
                placeholder="Mother Name"
                className="inputField"
                onChange={this.setMotherName}
              />
              <label htmlFor="Admission" className="label">
                Father Occupation
              </label>
              <input
                type="text"
                placeholder="Father Occupation"
                className="inputField"
                onChange={this.setFatherOccupation}
              />
              <label htmlFor="Admission" className="label">
                Mother Occupation
              </label>
              <input
                type="text"
                placeholder="Mother Occupation"
                className="inputField"
                onChange={this.setMotherOccupation}
              />
              <label htmlFor="Admission" className="label">
                Aadhaar Number
              </label>
              <input
                type="text"
                placeholder="Aadhaar Number"
                className="inputField"
                onChange={this.setAadharNumber}
              />
              <label htmlFor="Admission" className="label">
                Previous School
              </label>
              <input
                type="text"
                placeholder="Previous School"
                className="inputField"
                onChange={this.setPreviousSchool}
              />
              <label htmlFor="Admission" className="label">
                Data Of Admission
              </label>
              <input
                type="date"
                className="inputField"
                onChange={this.setDateOfAdmission}
              />
              <label htmlFor="Admission" className="label">
                Mole One
              </label>
              <input
                type="text"
                placeholder="Enter The Mole"
                className="inputField"
                onChange={this.setMoleOne}
              />
              <label htmlFor="Admission" className="label">
                Mole Two
              </label>
              <input
                type="text"
                placeholder="Enter The Mole"
                className="inputField"
                onChange={this.setMoleTwo}
              />
              <label htmlFor="Admission" className="label">
                Admitted Class
              </label>
              <input
                type="text"
                placeholder="Class Of Admission"
                className="inputField"
                onChange={this.setClassOfAdmission}
              />
              <label htmlFor="Admission" className="label">
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="Mobile Number"
                className="inputField"
                onChange={this.setMobileNumber}
              />
              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-outline-danger m-3 p-2"
                >
                  ADD Student
                </button>
              </div>
            </>
          )}
          {status === true && <p className="message">{message}</p>}
          {status === 'uday' && <p className="message1">{message}</p>}
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

export default CreateNewStudent
