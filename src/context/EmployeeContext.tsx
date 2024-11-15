import React, { createContext, ReactNode, useEffect, useState } from 'react';

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
  const [employees, setEmployees] = useState<Employee[]>(() => {
    const storedEmployees = localStorage.getItem('employees');
    return storedEmployees ? JSON.parse(storedEmployees) : [];
  });


  const addEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
      localStorage.setItem('employees', JSON.stringify(updatedEmployees));
      return updatedEmployees;
    });
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedEmployees = localStorage.getItem('employees');
      if (!storedEmployees) {
        localStorage.setItem('employees', JSON.stringify(employees));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [employees]);

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  )
}
