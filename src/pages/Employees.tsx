import EmployeesList from "../components/EmployeesList";
import TitleH1 from "../components/TitleH1";

export default function Employees() {
  return (
    <>
      <TitleH1 text="Current Employees" />
      <EmployeesList />
    </>
  )
}
