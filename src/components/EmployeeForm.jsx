import './employeeform.css'
import { useState } from 'react';
export default function EmployeeForm ({ onAdd  }){  
    const emptyForm = { name: "", position: "", department: "" };
    const [form, setForm] = useState(emptyForm);
    const [error, setError] = useState("");

    function handleChange(event) {
     setForm({ ...form, [event.target.name]: event.target.value });
    }

function handleSubmit(event) {
 event.preventDefault();
    if (!form.name.trim() || !form.position.trim() || !form.department.trim()) {
      setError("Please fill the missing parts.");
      return;
    }
    onAdd({ ...form, status: "active" });
    setForm(emptyForm);
    setError("");
}

return (
    <div className="f-wap">
      <h2 className="f-title">Add Employee</h2>
      
      {error && <p className="f-error">{error}</p>}
      <form onSubmit={handleSubmit} className="form">
        <div className="f-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="ex: Jean Durand"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="f-group">
          <label htmlFor="position">Position</label>
          <input
            id="position"
            name="position"
            type="text"
            placeholder="ex: Backend Developer"
            value={form.position}
            onChange={handleChange}
          />
        </div>
        <div className="f-group">
          <label htmlFor="department">Department</label>
          <input
            id="department"
            name="department"
            type="text"
            placeholder="ex: Engineering"
            value={form.department}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="sub">
          + Add Employee
        </button>
      </form>
    </div>
  );
}
