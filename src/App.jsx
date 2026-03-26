import EmployeeForm from './components/EmployeeForm'
import EmployeeCard from './components/EmployeeCard'
import './App.css'

const initialEmployees = [
  { id: 1, name: "Laurent St Aime", position:"Frontend Developer", department: "Computer Science", status:"active"},
  { id: 2, name: "Bomboclat Lucien", position:"Backend Developer", department: "Computer Science", status:"active"},
  { id: 3, name: "Richford Jeremiah", position:"Data Analysis", department: "Data", status:"active"},
  { id: 4, name: "Trevor Lauralie", position:"UX Designer", department: "Design", status:"inactive"}
]

function App() {
//  const [employees, setEmployees] = useState(initialEmployees);

//   function handleAdd(newEmployee) {
//     setEmployees([...employees, newEmployee]);
//   }

  return (
    <>
    <EmployeeForm  />
    <EmployeeCard/>

      
    </>
  )
}

export default App
