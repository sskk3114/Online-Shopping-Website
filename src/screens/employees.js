import React, {useState} from 'react';
import Employee from '../components/employee';

function Employees() {
    const employees = [
        {
            id: 1001,
            name: 'Dinesh',
            designation: 'Software Engineer',
            salary: 20000,
            about: `Focused, hard work is the real key
            to success. Keep your eyes on the goal, 
            and just keep taking the next step 
            towards completing it.`
        },
        {
            id: 1002,
            name: 'Karthik',
            designation: 'Software Engineer',
            salary: 40000,
            about: `Focused, hard work is the real key
            to success. Keep your eyes on the goal, 
            and just keep taking the next step 
            towards completing it.`
        },
        {
            id: 1003,
            name: 'Tharun',
            designation: 'Software Engineer',
            salary: 30000,
            about: `Focused, hard work is the real key
            to success. Keep your eyes on the goal, 
            and just keep taking the next step 
            towards completing it.`
        },
        {
            id: 1004,
            name: 'Manoj',
            designation: 'Software Engineer',
            salary: 20000,
            about: `Focused, hard work is the real key
            to success. Keep your eyes on the goal, 
            and just keep taking the next step 
            towards completing it.`
        }
    ];
    const [selectedEmp, setSelectedEmp] = useState({});
    const getSelectedEmployee = (data) => {
        setSelectedEmp(data);
    };
    return (
        <div className="container">
            <h3 className="my-2">Employee List</h3>
            {selectedEmp && selectedEmp.id ? (
                <div className="text-left border-bottom border-danger my-2">
                    <h6>Selected Employee:</h6>
                    <p>Id: <b>{selectedEmp.id}</b></p>
                    <p>Name: <b>{selectedEmp.name}</b> </p>
                    <p>Designation: <b>{selectedEmp.designation}</b></p>
                    <p>Salary: <b>{selectedEmp.salary}</b> </p>         
                </div>
            ) : (
                <React.Fragment></React.Fragment>
            )}
            {employees ? employees.map(emp => (
                <Employee key={emp.id} cEmp={emp} sendSelectedEmployee={getSelectedEmployee}/>
            )) : (
                <div>
                    No employees found
                </div>
            ) }

        </div>
    )
}

export default Employees;