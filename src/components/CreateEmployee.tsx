import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { departments } from '../utils/Departments';
import { states } from '../utils/States';

export default function CreateEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [department, setDepartment] = useState<{label: string; value: string } | null>(null);
  const [state, setState] = useState<{label: string; value: string } | null>(null);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  return (
    <>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          className="form-control"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <div id="date-of-birth">
          <DatePicker
            dateFormat="MM/dd/yyyy"
            className="form-control"
            selected={dateOfBirth}
            onChange={(date: Date | null) => setDateOfBirth(date)}
          />
        </div>

        <label htmlFor="start-date">Start Date</label>
        <div id="start-date">
          <DatePicker
            dateFormat="MM/dd/yyyy"
            className="form-control"
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
          />
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            type="text"
            className="form-control"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="state">State</label>
          <Select
            options={states}
            value={state}
            onChange={setState}
            className="form-control"
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            type="number"
            className="form-control"
            id="zip-code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <Select
          options={departments}
          value={department}
          onChange={setDepartment}
          className="form-control"
        />
      </form>
      <button>Save</button>
    </>
  )
}
