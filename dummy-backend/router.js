const express = require("express");
const employeeList = require('./mock-employee')

const employeeRouter =express.Router();
employeeRouter.get('/',(req,res)=>{
    res.send("Server Hit");
})

employeeRouter.get('/api/employees',(req,res) =>{
    res.send(employeeList);
});

module.exports = employeeRouter;