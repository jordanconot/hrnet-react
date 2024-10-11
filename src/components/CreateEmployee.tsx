import DatePicker from 'react-datepicker'
import Select from 'react-select/base'

export default function CreateEmployee() {
  return (
    <>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          className="form-control"
          id="first-name"
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="last-name"
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <div id="date-of-birth">
          <DatePicker
            dateFormat="MM/dd/yyyy"
            className="form-control"
          />
        </div>

        <label htmlFor="start-date">Start Date</label>
        <div id="start-date">
          <DatePicker
            dateFormat="MM/dd/yyyy"
            className="form-control"
          />
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            type="text"
            className="form-control"
            id="street"
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
          />

          <label htmlFor="state">State</label>
          <Select
            className="form-control"
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            type="number"
            className="form-control"
            id="zip-code"
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <Select
          className="form-control"
        />
      </form>
      <button>Save</button>
    </>
  )
}
