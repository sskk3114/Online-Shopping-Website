import React, {useState} from 'react';

export default function Employee(props) {
    const [hidden, setHidden] = useState(true);
    const {cEmp, sendSelectedEmployee} = props;
    const selectedEmployee = () => {
        sendSelectedEmployee(cEmp);
    }
    return (
        <div className="text-left border-bottom border-danger my-2">
            <p>Id: <b>{cEmp.id}</b></p>
            <p>Name: <b>{cEmp.name}</b> </p>
            <p>Designation: <b>{cEmp.designation}</b></p>
            <p>Salary: <b>{cEmp.salary}</b> </p>
            <p>AboutUs: {hidden ? `${cEmp.about.substr(0, 30).trim()}...` : cEmp.about}
                {hidden ? (<a onClick={() => setHidden(false)} style={{color: 'red', cursor: 'pointer'}}>read more</a>) 
                : (<a onClick={() => setHidden(true)} style={{color: 'red', cursor: 'pointer'}}>read less</a>)}
            </p>
            <button className="btn btn-primary mb-3" onClick={selectedEmployee}>Select</button>
        </div>
    )
}