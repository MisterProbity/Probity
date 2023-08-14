const authenticateAdmin = (req, res, next)=>{
    if(req.session.admin){
        next()
        // console.log("authentiacte");
    }else{
        req.session.intent ="/admin" + req.path
        res.redirect("/admin/login")
        // console.log("email or password is not correct");
    }
}
module.exports = authenticateAdmin