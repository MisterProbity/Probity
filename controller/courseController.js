const User = require("../Model/user");



const getAccess = ((req, res)=>{
    res.render("index.ejs")})

const Login = async(req, res)=>{
    console.log(req.body)
try {
    let  {email, password} = req.body
    let RegisterUser = await User.login(email, password)
    if(RegisterUser){
        req.session.user = RegisterUser;
        res.redirect("/user/home")
    }
    else{
        res.redirect("back")
    }

} catch (error) {
    console.log(error);
    
}

}
let index = async(req, res)=>{
    let users = (await User.fetch())
    let count = users.length  
    res.render("ProbityLMS.ejs",{count})
}



module.exports = {getAccess,Login,index}