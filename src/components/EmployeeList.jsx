import EmployeeCard from "./EmployeeCard";
export default function EmployeeList({employees}){
    if (employees.lenght===0){
        return <p className="empty">No employee detected</p>;
    }

    return (
        <div className="list">
            {employees.map((bk)=>(
                <EmployeeCard key={bk.id} employee={bk}/>
            ))}
        </div>
    )
}
 