const express = require("express")
const ejs = require("ejs")
const app = express()
const fs =require("fs")
const path =require("path")

const userRout = require("./routes.js/user_route")
const port = 4000;
const session = require('express-session');                                     
const authenticateUser = require("./middleware/authenticate")
const { index } = require("./controller/courseController")
const login_routes = require("./routes.js/login_routes")
const admin = require("./routes.js/admin_route")
const authenticateAdmin = require("./middleware/authenticateAdmin")


// session handler
app.use(                                              
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
      cookie: {secure: false},

    })
);


app.use(function(req, res, next){
    res.locals.formBody = req.session.formBody;
    res.locals.formError = req.session.formErrors;
    delete req.session.formBody;
    delete req.session.formErrors;
    next()
})
// express body passer
app.use(express.urlencoded({extended:true}))

// static file handler
app.use(express.json())
app.use(express.static(path.join(__dirname,"/assets")));
// template engine
app.set("view engine", "ejs")
app.set("views", "pages/")
// middleware
app.use(login_routes)
app.use("/user",authenticateUser,userRout)
app.use("/admin",authenticateAdmin,admin)



app.listen(port, (error)=>{
try {
  console.log(`server is running on port http://localhost:${port}`)
  
} catch (error) {
  console.log(error.status);
}
})