import Modal from 'demo-module-test-hrnet';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { useEmployeeContext } from '../context/UseEmployeeContext';
import { departments } from '../utils/Departments';
import { states } from '../utils/States';

export default function CreateEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [department, setDepartment] = useState<{ label: string; value: string } | null>(null);
  const [state, setState] = useState<{ label: string; value: string } | null>(null);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addEmployee } = useEmployeeContext();

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    dateOfBirth: false,
    startDate: false,
    department: false,
    street: false,
    city: false,
    state: false,
    zipCode: false,
  });

  const validateFields = () => {
    const newErrors = {
      firstName: firstName.trim() === '',
      lastName: lastName.trim() === '',
      dateOfBirth: dateOfBirth === null,
      startDate: startDate === null,
      department: department === null,
      street: street.trim() === '',
      city: city.trim() === '',
      state: state === null,
      zipCode: zipCode.trim() === '',
    };
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const saveEmployee = () => {
    if (validateFields()) {
      const employee = {
        firstName,
        lastName,
        dateOfBirth: dateOfBirth?.toLocaleDateString() || '',
        startDate: startDate?.toLocaleDateString() || '',
        department: department?.value || '',
        street,
        city,
        state: state?.value || '',
        zipCode,
      };
      addEmployee(employee);
      setIsModalOpen(true);
    }
  };

  const handleFieldChange = (
    field: 'firstName' | 'lastName' | 'street' | 'city' | 'zipCode' | 'dateOfBirth' | 'startDate' | 'state' | 'department',
    value: string | Date | { label: string; value: string } | null
  ) => {
    setErrors((prev) => ({ ...prev, [field]: false }));

    switch (field) {
      case 'firstName':
        setFirstName(value as string);
        break;
      case 'lastName':
        setLastName(value as string);
        break;
      case 'street':
        setStreet(value as string);
        break;
      case 'city':
        setCity(value as string);
        break;
      case 'zipCode':
        setZipCode(value as string);
        break;
      case 'dateOfBirth':
        setDateOfBirth(value as Date | null);
        break;
      case 'startDate':
        setStartDate(value as Date | null);
        break;
      case 'state':
        setState(value as { label: string; value: string } | null);
        break;
      case 'department':
        setDepartment(value as { label: string; value: string } | null);
        break;
      default:
        break;
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          className={`form-control ${errors.firstName ? 'error' : ''}`}
          id="first-name"
          value={firstName}
          onChange={(e) => handleFieldChange('firstName', e.target.value)}
        />
        {errors.firstName && <div className="error-message">First Name is required</div>}

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          className={`form-control ${errors.lastName ? 'error' : ''}`}
          id="last-name"
          value={lastName}
          onChange={(e) => handleFieldChange('lastName', e.target.value)}
        />
        {errors.lastName && <div className="error-message">Last Name is required</div>}

        <label htmlFor="date-of-birth">Date of Birth</label>
        <div id="date-of-birth">
          <DatePicker
            dateFormat="MM/dd/yyyy"
            className={`form-control ${errors.dateOfBirth ? 'error' : ''}`}
            selected={dateOfBirth}
            onChange={(date) => handleFieldChange('dateOfBirth', date)}
          />
        </div>
        {errors.dateOfBirth && <div className="error-message">Date of birth is required</div>}

        <label htmlFor="start-date">Start Date</label>
        <div id="start-date">
          <DatePicker
            dateFormat="MM/dd/yyyy"
            className={`form-control ${errors.startDate ? 'error' : ''}`}
            selected={startDate}
            onChange={(date) => handleFieldChange('startDate', date)}
          />
        </div>
        {errors.startDate && <div className="error-message">Start date is required</div>}

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            type="text"
            className={`form-control ${errors.street ? 'error' : ''}`}
            id="street"
            value={street}
            onChange={(e) => handleFieldChange('street', e.target.value)}
          />
          {errors.street && <div className="error-message">Street is required</div>}

          <label htmlFor="city">City</label>
          <input
            type="text"
            className={`form-control ${errors.city ? 'error' : ''}`}
            id="city"
            value={city}
            onChange={(e) => handleFieldChange('city', e.target.value)}
          />
          {errors.city && <div className="error-message">City is required</div>}

          <label htmlFor="state">State</label>
          <Select
            options={states}
            value={state}
            onChange={(selectedOption) => handleFieldChange('state', selectedOption)}
            className={`form-control ${errors.state ? 'error' : ''}`}
          />
          {errors.state && <div className="error-message">State is required</div>}

          <label htmlFor="zip-code">Zip Code</label>
          <input
            type="number"
            className={`form-control ${errors.zipCode ? 'error' : ''}`}
            id="zip-code"
            value={zipCode}
            onChange={(e) => handleFieldChange('zipCode', e.target.value)}
          />
          {errors.zipCode && <div className="error-message">Zip code is required</div>}
        </fieldset>

        <label htmlFor="department">Department</label>
        <Select
          options={departments}
          value={department}
          id='department'
          onChange={(selectedOption) => handleFieldChange('department', selectedOption)}
          className={`form-control ${errors.department ? 'error' : ''}`}
        />
        {errors.department && <div className="error-message">Department is required</div>}
      </form>
      <button onClick={saveEmployee}>Save</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        text="Employee Created!"
        backgroundColor='#fff'
        buttonColor="#000"
      />
    </>
  )
};