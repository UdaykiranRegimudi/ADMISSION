import './index.css'

const SingleStudent = props => {
  const {details, ShowDetails} = props
  const {id, NameOfStudent1, AdmissionNumber1, FatherName1} = details
  const Show = () => {
    ShowDetails(id)
  }

  return (
    <div className="backgroundCardDisplay mt-5">
      <h3 className="addNo">{AdmissionNumber1}</h3>
      <h3 className="name">{NameOfStudent1}</h3>
      <h3 className="father">{FatherName1}</h3>
      <button
        type="button"
        className="btn btn-outline-danger m-3 p-2"
        onClick={Show}
      >
        Show
      </button>
    </div>
  )
}

export default SingleStudent
