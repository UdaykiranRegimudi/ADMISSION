import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {updateDoc, doc, getDoc} from '@firebase/firestore'
import db from '../../firebase'
import './index.css'

class UpdateStudentData extends Component {
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
    MobileNumber: '',
    MoleOne: '',
    MoleTwo: '',
    TCno: '',
    classOfLeaving: '',
    dateOfLeaving: '',
    newSchoolOrCollage: '',
    reasonOfLeaving: '',
    message: '',
    status: false,
    loader: false,
    list: [],
    AdmissionNumber1: false,
    NameOfStudent1: false,
    MotherTongue1: false,
    DateOfBirth1: false,
    NationalityandState1: false,
    Religion1: false,
    Cast1: false,
    FatherName1: false,
    MotherName1: false,
    FatherOccupation1: false,
    MotherOccupation1: false,
    AadhaarNumber1: false,
    PreviousSchool1: false,
    DataOfAdmission1: false,
    ClassOfAdmission1: false,
    MobileNumber1: false,
    MoleOne1: false,
    MoleTwo1: false,
    TCNumber1: false,
    ClassOfLeaving1: false,
    DateOfLeaving1: false,
    NewSchool1: false,
    ReasonOfLeavingSchool1: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    const data = await getDoc(single)
    this.setState({list: data.data(), loader: true})
  }

  updateAdmission = async () => {
    this.setState({loader: false})
    const {AdmissionNumber} = this.state
    console.log(AdmissionNumber)
    const data = {
      AdmissionNumber1: AdmissionNumber,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      AdmissionNumber1: false,
    })
  }

  updateName = async () => {
    this.setState({loader: false})
    const {NameOfStudent} = this.state
    console.log(NameOfStudent)
    const data = {
      NameOfStudent1: NameOfStudent,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      NameOfStudent1: false,
    })
  }

  updateMotherTongue = async () => {
    this.setState({loader: false})
    const {MotherTongue} = this.state
    const data = {
      MotherTongue1: MotherTongue,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      MotherTongue1: false,
    })
  }

  updateDateOfBirth = async () => {
    this.setState({loader: false})
    const {DateOfBirth} = this.state
    const data = {
      DateOfBirth1: DateOfBirth,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      DateOfBirth1: false,
    })
  }

  updateNationality = async () => {
    this.setState({loader: false})
    const {NationalityandState} = this.state
    const data = {
      NationalityandState1: NationalityandState,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      NationalityandState1: false,
    })
  }

  updateReligion = async () => {
    this.setState({loader: false})
    const {Religion} = this.state
    const data = {
      Religion1: Religion,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      Religion1: false,
    })
  }

  updateCast = async () => {
    this.setState({loader: false})
    const {Cast} = this.state
    const data = {
      Cast1: Cast,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      Cast1: false,
    })
  }

  updateFather = async () => {
    this.setState({loader: false})
    const {FatherName} = this.state
    const data = {
      FatherName1: FatherName,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      FatherName1: false,
    })
  }

  updateMother = async () => {
    this.setState({loader: false})
    const {MotherName} = this.state
    const data = {
      MotherName1: MotherName,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      MotherName1: false,
    })
  }

  updateFatherOcu = async () => {
    this.setState({loader: false})
    const {FatherOccupation} = this.state
    const data = {
      FatherOccupation1: FatherOccupation,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      FatherOccupation1: false,
    })
  }

  updateMotherOcu = async () => {
    this.setState({loader: false})
    const {MotherOccupation} = this.state
    const data = {
      MotherOccupation1: MotherOccupation,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      MotherOccupation1: false,
    })
  }

  updateAadhaar = async () => {
    this.setState({loader: false})
    const {AadhaarNumber} = this.state
    const data = {
      AadhaarNumber1: AadhaarNumber,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      AadhaarNumber1: false,
    })
  }

  updatePreviousSchool = async () => {
    this.setState({loader: false})
    const {PreviousSchool} = this.state
    const data = {
      PreciousSchool1: PreviousSchool,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      PreviousSchool1: false,
    })
  }

  updateDateOfAdmission = async () => {
    this.setState({loader: false})
    const {DataOfAdmission} = this.state
    const data = {
      DataOfAdmission1: DataOfAdmission,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      DataOfAdmission1: false,
    })
  }

  updateClassOfLeaving = async () => {
    this.setState({loader: false})
    const {classOfLeaving} = this.state
    const data = {
      classOfLeaving,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      ClassOfLeaving1: false,
    })
  }

  updateAdmittedClass = async () => {
    this.setState({loader: false})
    const {ClassOfAdmission} = this.state
    const data = {
      ClassOfAdmission1: ClassOfAdmission,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      ClassOfAdmission1: false,
    })
  }

  updateMobileNumber = async () => {
    this.setState({loader: false})
    const {MobileNumber} = this.state
    const data = {
      MobileNumber1: MobileNumber,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      MobileNumber1: false,
    })
  }

  updateMoleOne = async () => {
    this.setState({loader: false})
    const {MoleOne} = this.state
    const data = {
      MoleOne1: MoleOne,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      MoleOne1: false,
    })
  }

  updateMoleTwo = async () => {
    this.setState({loader: false})
    const {MoleTwo} = this.state
    const data = {
      MoleTwo1: MoleTwo,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      MoleTwo1: false,
    })
  }

  updateTcNumber = async () => {
    this.setState({loader: false})
    const {TCno} = this.state
    const data = {
      TCno,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      TCNumber1: false,
    })
  }

  updateDateOfLeaving = async () => {
    this.setState({loader: false})
    const {dateOfLeaving} = this.state
    const data = {
      dateOfLeaving,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      DateOfLeaving1: false,
    })
  }

  updateReasonOfLeavingSchool = async () => {
    this.setState({loader: false})
    const {reasonOfLeaving} = this.state
    const data = {
      reasonOfLeaving,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      ReasonOfLeavingSchool1: false,
    })
  }

  updateNewSchool = async () => {
    this.setState({loader: false})
    const {newSchoolOrCollage} = this.state
    const data = {
      newSchoolOrCollage,
    }
    const id = localStorage.getItem('id')
    const single = await doc(db, 'School', id)
    await updateDoc(single, data)
    this.getDetails()
    this.setState({
      message: 'Data Successfully Updated',
      status: true,
      loader: true,
      NewSchool1: false,
    })
  }

  goBack = () => {
    const {history} = this.props
    history.replace('/update')
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

  setTcNumber = event => {
    this.setState({TCno: event.target.value})
  }

  setClassOfLeaving = event => {
    this.setState({classOfLeaving: event.target.value})
  }

  setDateOfLeaving = event => {
    this.setState({dateOfLeaving: event.target.value})
  }

  setNewSchool = event => {
    this.setState({newSchoolOrCollage: event.target.value})
  }

  setReasonOfLeaving = event => {
    this.setState({reasonOfLeaving: event.target.value})
  }

  setMobileNumber = event => {
    this.setState({MobileNumber: event.target.value})
  }

  ClickAdmission = () => {
    this.setState(prevState => ({
      AdmissionNumber1: !prevState.AdmissionNumber1,
    }))
  }

  ClickAadhaar = () => {
    this.setState(prevState => ({
      AadhaarNumber1: !prevState.AadhaarNumber1,
    }))
  }

  ClickAdmittedClass = () => {
    this.setState(prevState => ({
      ClassOfAdmission1: !prevState.ClassOfAdmission1,
    }))
  }

  ClickCast = () => {
    this.setState(prevState => ({
      Cast1: !prevState.Cast1,
    }))
  }

  ClickClassOfLeaving = () => {
    this.setState(prevState => ({
      classOfLeaving1: !prevState.classOfLeaving1,
    }))
  }

  ClickSchool = () => {
    this.setState(prevState => ({
      PreviousSchool1: !prevState.PreviousSchool1,
    }))
  }

  ClickDateAdmission = () => {
    this.setState(prevState => ({
      DataOfAdmission1: !prevState.DataOfAdmission1,
    }))
  }

  ClickDateOfBirth = () => {
    this.setState(prevState => ({
      DateOfBirth1: !prevState.DateOfBirth1,
    }))
  }

  ClickFather = () => {
    this.setState(prevState => ({
      FatherName1: !prevState.FatherName1,
    }))
  }

  ClickMother = () => {
    this.setState(prevState => ({
      MotherName1: !prevState.MotherName1,
    }))
  }

  ClickFatherOcu = () => {
    this.setState(prevState => ({
      FatherOccupation1: !prevState.FatherOccupation1,
    }))
  }

  ClickMotherOcu = () => {
    this.setState(prevState => ({
      MotherOccupation1: !prevState.MotherOccupation1,
    }))
  }

  ClickName = () => {
    this.setState(prevState => ({
      NameOfStudent1: !prevState.NameOfStudent1,
    }))
  }

  ClickMotherTongue = () => {
    this.setState(prevState => ({
      MotherTongue1: !prevState.MotherTongue1,
    }))
  }

  ClickNationality = () => {
    this.setState(prevState => ({
      NationalityandState1: !prevState.NationalityandState1,
    }))
  }

  ClickReligion = () => {
    this.setState(prevState => ({
      Religion1: !prevState.Religion1,
    }))
  }

  ClickMobile = () => {
    this.setState(prevState => ({
      MobileNumber1: !prevState.MobileNumber1,
    }))
  }

  ClickMoleOne = () => {
    this.setState(prevState => ({
      MoleOne1: !prevState.MoleOne1,
    }))
  }

  ClickMoleTwo = () => {
    this.setState(prevState => ({
      MoleTwo1: !prevState.MoleTwo1,
    }))
  }

  ClickTc = () => {
    this.setState(prevState => ({
      TCNumber1: !prevState.TCNumber1,
    }))
  }

  ClickClassOfLeaving = () => {
    this.setState(prevState => ({
      ClassOfLeaving1: !prevState.ClassOfLeaving1,
    }))
  }

  ClickDateOfLeaving = () => {
    this.setState(prevState => ({
      DateOfLeaving1: !prevState.DateOfLeaving1,
    }))
  }

  ClickNewSchool = () => {
    this.setState(prevState => ({
      NewSchool1: !prevState.NewSchool1,
    }))
  }

  ClickReason = () => {
    this.setState(prevState => ({
      ReasonOfLeavingSchool1: !prevState.ReasonOfLeavingSchool1,
    }))
  }

  render() {
    const {
      message,
      status,
      loader,
      list,
      AdmissionNumber1,
      NameOfStudent1,
      MotherTongue1,
      DateOfBirth1,
      NationalityandState1,
      Religion1,
      Cast1,
      FatherName1,
      MotherName1,
      FatherOccupation1,
      MotherOccupation1,
      AadhaarNumber1,
      PreviousSchool1,
      DataOfAdmission1,
      ClassOfAdmission1,
      MobileNumber1,
      MoleOne1,
      MoleTwo1,
      TCNumber1,
      ClassOfLeaving1,
      DateOfLeaving1,
      NewSchool1,
      ReasonOfLeavingSchool1,
    } = this.state
    return (
      <>
        <div className="displayItemsBackground">
          <div className="displayItemsCard container">
            <form>
              {loader ? (
                <div>
                  <h1 className="m-5 addHead">
                    ADMISSION DETAILS OF {list.NameOfStudent1}
                  </h1>
                  <div className="displayUday name colour">
                    <h2>
                      Admission Number:<span>{list.AdmissionNumber1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickAdmission}
                      >
                        {AdmissionNumber1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {AdmissionNumber1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Admission Number
                      </label>
                      <input
                        type="text"
                        placeholder="Admission Number"
                        className="inputField"
                        onChange={this.setAdmissionNumber}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateAdmission}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Name:<span>{list.NameOfStudent1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickName}
                      >
                        {NameOfStudent1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {NameOfStudent1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="inputField"
                        onChange={this.setName}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateName}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Mother Tongue:<span>{list.MotherTongue1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickMotherTongue}
                      >
                        {MotherTongue1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {MotherTongue1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Mother Tongue
                      </label>
                      <input
                        type="text"
                        placeholder="Mother Tongue"
                        className="inputField"
                        onChange={this.setLanguage}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateMotherTongue}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Date Of Birth:<span>{list.DateOfBirth1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickDateOfBirth}
                      >
                        {DateOfBirth1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {DateOfBirth1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Date Of Birth
                      </label>
                      <input
                        type="date"
                        placeholder="Admission Number"
                        className="inputField"
                        onChange={this.setDateOfBirth}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateDateOfBirth}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Nationality / State:
                      <span>{list.NationalityandState1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickNationality}
                      >
                        {NationalityandState1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {NationalityandState1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Nationality / State
                      </label>
                      <input
                        type="text"
                        placeholder="Nationality / State"
                        className="inputField"
                        onChange={this.setNationality}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateNationality}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Religion:<span>{list.Religion1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickReligion}
                      >
                        {Religion1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {Religion1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Religion
                      </label>
                      <input
                        type="text"
                        placeholder="Religion"
                        className="inputField"
                        onChange={this.setReligion}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateReligion}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Cast:<span>{list.Cast1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickCast}
                      >
                        {Cast1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {Cast1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Cast
                      </label>
                      <input
                        type="text"
                        placeholder="Cast"
                        className="inputField"
                        onChange={this.setCast}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateCast}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Father Name:<span>{list.FatherName1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickFather}
                      >
                        {FatherName1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {FatherName1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Father Name
                      </label>
                      <input
                        type="text"
                        placeholder="Father Name"
                        className="inputField"
                        onChange={this.setFatherName}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateFather}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Mother Name:<span>{list.MotherName1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickMother}
                      >
                        {MotherName1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {MotherName1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Mother Name
                      </label>
                      <input
                        type="text"
                        placeholder="Mother Name"
                        className="inputField"
                        onChange={this.setMotherName}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateMother}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Father Occupation:<span>{list.FatherOccupation1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickFatherOcu}
                      >
                        {FatherOccupation1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {FatherOccupation1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Father Occupation
                      </label>
                      <input
                        type="text"
                        placeholder="Father Occupation"
                        className="inputField"
                        onChange={this.setFatherOccupation}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateFatherOcu}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Mother Occupation:<span>{list.MotherOccupation1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickMotherOcu}
                      >
                        {MotherOccupation1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {MotherOccupation1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Mother Occupation
                      </label>
                      <input
                        type="text"
                        placeholder="Mother Occupation"
                        className="inputField"
                        onChange={this.setMotherOccupation}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateMotherOcu}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Aadhaar Number:<span>{list.AadhaarNumber1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickAadhaar}
                      >
                        {AadhaarNumber1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {AadhaarNumber1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Aadhaar Number
                      </label>
                      <input
                        type="text"
                        placeholder="Aadhaar Number"
                        className="inputField"
                        onChange={this.setAadharNumber}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateAadhaar}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Previous School:<span>{list.PreciousSchool1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickSchool}
                      >
                        {PreviousSchool1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {PreviousSchool1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Previous School
                      </label>
                      <input
                        type="text"
                        placeholder="Previous School"
                        className="inputField"
                        onChange={this.setPreviousSchool}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updatePreviousSchool}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Date Of Admission:<span>{list.DataOfAdmission1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickDateAdmission}
                      >
                        {DataOfAdmission1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {DataOfAdmission1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Date Of Admission
                      </label>
                      <input
                        type="date"
                        placeholder="Admission Number"
                        className="inputField"
                        onChange={this.setDateOfAdmission}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateDateOfAdmission}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Mole One:<span>{list.MoleOne1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickMoleOne}
                      >
                        {MoleOne1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {MoleOne1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Mole One
                      </label>
                      <input
                        type="text"
                        placeholder="Mole One"
                        className="inputField"
                        onChange={this.setMoleOne}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-5"
                        onClick={this.updateMoleOne}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Mole Two:<span>{list.MoleTwo1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickMoleTwo}
                      >
                        {MoleTwo1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {MoleTwo1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Mole Two
                      </label>
                      <input
                        type="text"
                        placeholder="Mole Two"
                        className="inputField"
                        onChange={this.setMoleTwo}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateMoleTwo}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Admitted Class:<span>{list.ClassOfAdmission1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickAdmittedClass}
                      >
                        {ClassOfAdmission1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {ClassOfAdmission1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Admitted Class
                      </label>
                      <input
                        type="text"
                        placeholder="Admitted Class"
                        className="inputField"
                        onChange={this.setClassOfAdmission}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateAdmittedClass}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      TC Number:<span>{list.TCno}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickTc}
                      >
                        {TCNumber1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {TCNumber1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        TC Number
                      </label>
                      <input
                        type="text"
                        placeholder="TC Number"
                        className="inputField"
                        onChange={this.setTcNumber}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateTcNumber}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Class Of Leaving:<span>{list.classOfLeaving}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickClassOfLeaving}
                      >
                        {ClassOfLeaving1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {ClassOfLeaving1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Class Of Leaving
                      </label>
                      <input
                        type="text"
                        placeholder="Class Of Leaving"
                        className="inputField"
                        onChange={this.setClassOfLeaving}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateClassOfLeaving}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Date Of Leaving:<span>{list.dateOfLeaving}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickDateOfLeaving}
                      >
                        {DateOfLeaving1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {DateOfLeaving1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Date Of Leaving
                      </label>
                      <input
                        type="date"
                        placeholder="Admission Number"
                        className="inputField"
                        onChange={this.setDateOfLeaving}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateDateOfLeaving}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      New School / New College:
                      <span>{list.newSchoolOrCollage}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickNewSchool}
                      >
                        {NewSchool1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {NewSchool1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        New School / New Collage
                      </label>
                      <input
                        type="text"
                        placeholder="New School / New College"
                        className="inputField"
                        onChange={this.setNewSchool}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateNewSchool}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Reason Of Leaving School:
                      <span>{list.reasonOfLeaving}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickReason}
                      >
                        {ReasonOfLeavingSchool1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {ReasonOfLeavingSchool1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Reason Of Leaving School
                      </label>
                      <input
                        type="text"
                        placeholder="Reason Of Leaving School"
                        className="inputField"
                        onChange={this.setReasonOfLeaving}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateReasonOfLeavingSchool}
                      >
                        Add
                      </button>
                    </>
                  )}
                  <div className="displayUday name colour">
                    <h2>
                      Mobile Number:<span>{list.MobileNumber1}</span>
                    </h2>
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={this.ClickMobile}
                      >
                        {MobileNumber1 ? 'Close' : 'Update'}
                      </button>
                    </div>
                  </div>
                  {MobileNumber1 && (
                    <>
                      <label htmlFor="Admission" className="label mr-3 mt-0">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        className="inputField"
                        onChange={this.setMobileNumber}
                      />
                      <button
                        type="button"
                        className="btn btn-success ml-3"
                        onClick={this.updateMobileNumber}
                      >
                        Add
                      </button>
                    </>
                  )}
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
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default UpdateStudentData
