const express = require('express');

const app =express();
const routes = require('./router');
app.use(routes);

app.listen(3000,(err) => {
    if(err){
        console.log("Server Error");
        process.exit(-1);node 
    }
    console.log("Server run at port 3000");
})