//dependencies/ packages
const express = require("express");
const budget = require("./model/budget.js");


//INIT EXPRESS APP
const app = express();
const port = 3000;

//MIDWARE
app.use((req, res, next) => {
    console.log("Hi, I run for all routes")
    next()
})
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
        allBudget: budget
    })
});
//NEW
app.get("/budget/new", (req, res) => {
    res.render("budget_new.ejs")
})
//D
//U
//CREATE

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