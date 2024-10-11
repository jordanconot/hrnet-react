import React, { createContext, ReactNode, useState } from 'react';

interface Employee {
  firstName: string,
  lastName: string,
  startDate: string,
  department: string,
  dateOfBirth: string,
  street: string,
  city: string,
  state: string,
  zipCode: string
}

interface EmployeeContextType {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
}

export const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

export const EmployeeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };
  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}
