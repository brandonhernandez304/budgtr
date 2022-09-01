//dependencies/ packages
const express = require("express");
const budget = require("./model/budget.js");
const bodyParser = require('body-parser')
const bankAcc = 0;

//INIT EXPRESS APP
const app = express();
const port = 3000;

//MIDWARE
// app.use((req, res, next) => {
//     console.log("Hi, I run for all routes")
//     next()
// })
//allows access to req.body
app.use(express.urlencoded({ extended: false }))
//allow access to public folder w express static
app.use(express.static('public'))
//MAIN ROUTE
app.get("/", (req, res) => {
    res.send("Budgtr")
})
/* I N D U C E S */
//INDEX
app.get("/budget/", (req, res) => {
    res.render("budget_index.ejs", {
        allBudget: budget,
        bankAcc: bankAcc,
    })
});
//NEW
app.get("/budget/new", (req, res) => {
    res.render("budget_new.ejs", {
        newBudget: budget
    })})
//D
//U
//CREATE
app.post("/budget/",(req,res)=>{
    budget.push(req.body)
    res.redirect("/budget")
    // res.send("data received")
})
//E
//SHOW
app.get("/budget/:id", (req, res) => {
    res.render("budget_show.ejs", {
        budgetItem: budget[req.params.id]
    })
});

//LISTEN 
app.listen(port, () => {
    console.log('budgtr listening on port', port)
});