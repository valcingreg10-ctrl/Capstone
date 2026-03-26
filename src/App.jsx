import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList';
import './App.css'
import { useState } from 'react';

const initialEmployees = [
  { id: 1, name: "Laurent St Aime", position:"Frontend Developer", department: "Computer Science", status:"active"},
  { id: 2, name: "Bomboclat Lucien", position:"Backend Developer", department: "Computer Science", status:"active"},
  { id: 3, name: "Richford Jeremiah", position:"Data Analysis", department: "Data", status:"active"},
  { id: 4, name: "Bartowsky kaisly", position:"CEO", department: "Management", status:"inactive"},
  { id: 5, name: "Kurosaky Jay", position:"Agent", department: "Control", status:"inactive"}
]

function App() {
 const [employees, setEmployees] = useState(initialEmployees);

  function handleAdd(newEmployee) {
    setEmployees([...employees, newEmployee]);
  }

  return (
    <>
    <div className="app">
      <div className='header'>
        <div className='h-label'>RH Department</div>
        <h1>
          Employee Management
          <span className='nb'>{employees.length}</span>
        </h1>
        <p>Go check and add employee</p>
      </div>
      <div className='lay'>
        <EmployeeForm  onAdd={handleAdd}/>
        <EmployeeList employees={employees}/>
      </div>
      </div>

    

      
    </>
  )
}

export default App
