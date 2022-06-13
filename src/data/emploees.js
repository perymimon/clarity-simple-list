import {useState} from "react";

export const _employees = [
    {
        id: 1,
        name: 'John', age: 30,
        avatar: 'https://randomuser.me/api/portraits/men/14.jpg', role: 'cooker',
        email: "p.mormon@example.com", dealMode: 'full time',
        salary: '12k NIS',
        status: 'test period',
        statusPeriod: '2 months'

    },
    {
        id: 2,
        name: 'Peter',
        age: 25,
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        role: 'chef',
        email: "tony.gauthier@example.com",
        dealMode: 'hours',
        salary: '12k NIS',
        status: 'test period',
        statusPeriod: '2 months',
    }]

export function useEmployees() {
    const [employees, setEmployees] = useState(_employees);

    function deleteEmployee({id}) {
        employees.splice(employees.findIndex(employee => employee.id === id), 1);
        setEmployees([...employees]);
    }
    function setEmployee(employee) {
        if (employee.id) {
            const index = employees.findIndex(employee => employee.id === employee.id);
            employees[index] = employee;
        } else{
            employee.id = `temp-`+employees.length + 1;
            employees.push(employee);
        }
        setEmployees([...employees]);
    }
    return [employees, deleteEmployee, setEmployee];
}