import './employeeCard.css'
export default function EmployeeCard({employee}){
       const { name, position, department, status}= employee;
       return(
        <div className="card1">
          <div className="c-info">
            <h3 className="c-name">{name}</h3>
            <p className="c-position">{position}</p>
            <p className="c-depart">{department}</p>
          </div>
          <span className={`badge ${status=== "active" ? "badge-active" :"badge-inactive"}`}>
            {status ==="active" ? " Active" : "Inactive"}</span>
        </div>
       )
}
