const express = require('express');
const router = express.Router();
const db = require('../database/firesbase_service');

const CORRECT = {
    message: "Successful",
    code: 200
}

const ERROR = {
    message: "Error, operation failed",
    code: 500
}

router.post('/createStudent', async function (req, res) {
    const student = req.body;

    if (student.id)
        await db.createStudent(student) ? res.send(CORRECT) : res.send(ERROR)
    else
        res.send(ERROR)

})

router.put('/updateStudent', async function (req, res) {
    const student = req.body;

    if (student.id)
        await db.updateStudent(student) ? res.send(CORRECT) : res.send(ERROR)
    else
        res.send(ERROR)
})

router.delete('/deleteStudent', async function (req, res) {
    const student = req.body;

    if (student.id)
        await db.deleteStudent(student) ? res.send(CORRECT) : res.send(ERROR)
    else
        res.send(ERROR)
})

router.get('/getStudent/:id', async function (req, res) {
    const id = req.params.id;
    console.log(id)
    const response = await db.getStudentById(id)

    response != false ? res.send(response) : res.send(ERROR)
})

module.exports = router;