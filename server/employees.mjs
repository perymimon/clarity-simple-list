import express from 'express'
const router = express.Router()

class Employees{
    name = 'Employees'
    id = -1
    constructor({name, id}){
        this.name = name
        this.id = id
    }
}

const employees = []

router.get('/{id}', (req, res) => {
    const id = req.params.id
    const employee = employees.find(employee => employee.id === id)
    res.send(employee)
})

router.delete('/{id}', (req, res) => {
    const id = req.params.id
    const employee = employees.find(employee => employee.id === id)
    employees.splice(employees.indexOf(employee), 1)
    res.send(employee)
})

router.post('/', (req, res) => {
    const employee = req.body
    // generat 4 digit id
    employee.id = Math.floor(Math.random() * 10000)
    employees.push(new Employees(employee))
    res.send(employee)
})

router.put('/{id}', (req, res) => {
    const id = req.params.id
    const employee = employees.find(employee => employee.id === id)
    const updatedEmployee = req.body
    employee.name = updatedEmployee.name
    res.send(employee)
})

export default router