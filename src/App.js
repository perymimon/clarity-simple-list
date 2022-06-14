import logo from './logo.svg';
import './App.scss';
import List from './components/list.jsx';
import Employee from './components/employee.jsx';
import { useEmployees } from './data/emploees.js';
import Dialog from './components/dialog.jsx';
import {useRef, useState} from "react";

function App() {
    const [employees, deleteEmployee, setEmployee] = useEmployees();
    const dialog = useRef();
    const form = useRef();

    const [employee, setCurrentEmployee] = useState(null);

    function handleClickEdit(employee) {
        setCurrentEmployee({...employee});
        dialog.current.showModal();
    }

    function handleClickDialogSave() {
        let employee = Object.fromEntries(new FormData(form.current).entries())
        return setEmployee(employee);
    }

    async function handleClickAddEmployee() {
        // demo purpose only
        dialog.current.showModal();
        const result = await fetch('https://randomuser.me/api?inc=name,picture,dob,email,login').then(res => res.json())
        const employee = result.results[0];
        const {name: {first,last}, picture:{large}, email,login:{uuid}, dob:{age}} = employee;
        setCurrentEmployee({
            id: uuid, name: `${first}`, avatar: large, email, age,
            role: 'chef', dealMode: 'full time', salary: '12k NIS',
            status: 'test period', statusPeriod: '2 months'
        });


    }

    return (
        <div className="app">
            <toolbar>
                <button className="fancy-button" onClick={handleClickAddEmployee}>add employee</button>
            </toolbar>
            <List data={employees} component={Employee} sortedKeys=""
                  onClickEdit={handleClickEdit}
                  onClickDelete={deleteEmployee}
            />

            <Dialog ref={dialog} onClickSave={handleClickDialogSave}>
                <form ref={form} name="employee-edit">
                    <label htmlFor="name">name</label>
                    <input name="name" id="name" defaultValue={employee?.name} />
                    <label htmlFor="age" >age</label>
                    <input name="age" id="age" defaultValue={employee?.age}/>
                    <label htmlFor="avatar">avatar</label>
                    <input name="avatar" id="avatar" defaultValue={employee?.avatar}/>
                    <label htmlFor="role">role</label>
                    <input name="role" id="role" defaultValue={employee?.role}/>
                    <label htmlFor="email">email</label>
                    <input name="email" id="email" defaultValue={employee?.email}/>
                    <label htmlFor="dealMode">deal mode</label>
                    <input name="dealMode" id="dealMode" defaultValue={employee?.dealMode}/>
                    <label htmlFor="salary">salary</label>
                    <input name="salary" id="salary" defaultValue={employee?.salary}/>
                    <label htmlFor="status">status</label>
                    <input name="status" id="status" defaultValue={employee?.status}/>
                    <label htmlFor="statusPeriod">status period</label>
                    <input name="statusPeriod" id="statusPeriod" defaultValue={employee?.statusPeriod}/>
                </form>
            </Dialog>
        </div>
    );
}

export default App;
