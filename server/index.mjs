import express from 'express'
import employees from './employees.mjs'

const app = express()

app.use(express.json())
app.use('/employees', employees)

app.get('/', (req, res) => {
    res.send('hello world')
})
const port = process.env.PORT || 3002
app.listen(port, () => {
       console.log(`listening on port ${port}`)
})