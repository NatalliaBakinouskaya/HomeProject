const express = require("express");
const path = require("path");
const {v4} = require('uuid')
const app = express();
const CONTACTS =  [{id: v4(), name: 'NATALLIA', value: 'Bakinouskaya', marked: false}
]

app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS)
    }, 1000)
    
})
app.post('/api/contacts', (req, res) => {
    // Terminal to use id:  npm i uuid 
    
})


app.use(express.static(path.resolve(__dirname, 'client')));


app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(44444, () => console.log("Server has been started on port..."))
