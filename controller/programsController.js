const Admin = require("../Model/admin")
const Book = require("../Model/book")
const User = require("../Model/user")

// user part
const getAbout = (req, res)=>{
    res.render("about.ejs")
}

const getAdminR = (req, res)=>{
    res.render("indexAdmin.ejs")
}
const Home = async(req, res)=>{
    let users = (await User.fetch())
    let count = users.length    
    res.render("ProbityLMS.ejs",{count})
}

  


const getProgramme = (req, res)=>{
    res.render("programmes.ejs")
}
const getLoan= (req, res)=>{
    res.render("loan.ejs")
}
const getOpac= (req, res)=>{
    res.render("opac.ejs")
}
const getsign= (req, res)=>{
    res.render("signUp.ejs")
}
const addUser = async(req, res)=>{
    console.log("for me", req.body);
    try {
    let user = new User(req.body) 
     await user.save()
   res.redirect("/user/login")
        
    } catch (error) {
        throw error;
        redirect("back")
    }

}

const getsignin= (req, res)=>{
    res.render("index.ejs")
}

const getLecturer= (req, res)=>{
    res.render("trainers.ejs")
}

const getSearch = (req,res)=>{
    res.render("simplesearch")
}

const getSearchByYear = (req,res)=>{
    res.render("searchYear.ejs")
}

const getSearchByAuthor = (req,res)=>{
    res.render("searchAuthor.ejs")
}

const getSearchBySubject = (req,res)=>{
    res.render("searchSubject.ejs")
}


// courses 
const getAgric = async(req, res)=>{
    let agricCourses = await Book.FetchAllAgric()
    res.render("agric.ejs", {agricCourses})
}
const getArchitecture = async(req, res)=>{
    let architectureCourses = await Book.FetchAllArchi()
    res.render("architecture.ejs", {architectureCourses})
}

const getBiochemistry = async(req, res)=>{
    let biochemistryCourses = await Book.FetchAllBiochem()
    res.render("biochemistry.ejs",{biochemistryCourses})
}

const getBiomedical = async(req, res)=>{
    let biomedicalCourses = await Book.FetchAllBiomed()
    res.render("biomedical.ejs", {biomedicalCourses})
}
const getBiotechnology = async(req, res)=>{
    let biotechnologyCourses = await Book.FetchAllBiotech()
    res.render("biotechnology.ejs", {biotechnologyCourses})
}

const getBuildingTech = async(req, res)=>{
    let buildingTechCourses = await Book.FetchAllBuilding()
    res.render("buildingtech.ejs", {buildingTechCourses})
}
const getChemical = async(req, res)=>{
    let chemicalCourses = await Book.FetchAllChem()
    res.render("chemical.ejs", {chemicalCourses})
}

const getCivil = async(req, res)=>{
    let civilCourses = await Book.FetchAllCivil()
    res.render("civil.ejs", {civilCourses})
}

const getComputerEngr  = async(req, res)=>{
    let computerEngrCourses = await Book.FetchAllComputerEngr()
    res.render("computerEngr.ejs", {computerEngrCourses})
}

const getComputerScience  = async(req, res)=>{
    let computerCourses= await Book.FetchAllComputer()
    res.render("computerScience.ejs",{computerCourses})
}

const getCyber  = async(req, res)=>{
    let cyberCourses = await Book.FetchAllCyber()
    res.render("cyber.ejs", {cyberCourses})
}

const getElectrical  = async(req, res)=>{
    let electricalCourses = await Book.FetchAllElect()
    res.render("electrical.ejs", {electricalCourses})
}

const getEstateMgt  = async(req, res)=>{
    let estateMgtCourses = await Book.FetchAllEstate()
    res.render("estateMgt.ejs", {estateMgtCourses})
}

const getfoodScience  = async(req, res)=>{
    let foodScienceCourses = await Book.FetchAllFood()
    res.render("foodScience.ejs", {foodScienceCourses})
}

const getForensic  = async(req, res)=>{
    let forensicCourses = await Book.FetchAllForensic()
    res.render("forensic.ejs", {forensicCourses})
}

const getindustrial  = async(req, res)=>{
    let industrialCourses = await Book.FetchAllIndustrial()
    res.render("industrial.ejs", {industrialCourses})
}

const getIndustrialProduction  = async(req, res)=>{
    let industrialProductionCourses = await Book.FetchAllIndustrialPro()
    res.render("industrialproduction.ejs", {industrialProductionCourses})
}

const getmaths  = async(req, res)=>{
    let mathsCourses = await Book.FetchAllmaths()
    res.render("maths.ejs", {mathsCourses})
}

const getmechanical  = async(req, res)=>{
    let mechanicalCourses = await Book.FetchAllMechanical()
    res.render("mechanical.ejs", {mechanicalCourses})
}

const getmechatronics  = async(req, res)=>{
    let mechatronicsCourses = await Book.FetchAllMechatronics()
    res.render("mechatronics.ejs", {mechatronicsCourses})
}

const getmicrobiology  = async(req, res)=>{
    let microbiologyCourses = await Book.FetchAllMicro()
    res.render("microbiology.ejs", {microbiologyCourses})
}

const getpetroleum  = async(req, res)=>{
    let petroleumCourses = await Book.FetchAllPetrol()
    res.render("petroleum.ejs", {petroleumCourses})
}

const getphysics  = async(req, res)=>{
    let physicsCourses = await Book.FetchAllPhy()
    res.render("physics.ejs", {physicsCourses})
}

const getquantity  = async(req, res)=>{
    let quantityCourses = await Book.FetchAllQuantity()
    res.render("quantity.ejs", {quantityCourses})
}

const getslt  = async(req, res)=>{
    let sltCourses = await Book.FetchAllSlt()
    res.render("slt.ejs", {sltCourses})
}

const getsoftware  = async(req, res)=>{
    let softwareCourses = await Book.FetchAllSoft()
    res.render("software.ejs", {softwareCourses})
}

const getstatistics  = async(req, res)=>{
    let statisticsCourses = await Book.FetchAllStat()
    res.render("statistics.ejs", {statisticsCourses})
}

const getsurvey  = async(req, res)=>{
    let surveyCourses = await Book.FetchAllSurv()
    res.render("survey.ejs", {surveyCourses})
}

const geturban  = async(req, res)=>{
    let urbanCourses = await Book.FetchAllUrban()
    res.render("urban.ejs", {urbanCourses})
}



module.exports = { getAbout, getAdminR, getProgramme, getLoan, getOpac, getsign, getsignin, 
getLecturer, getSearch, getSearchByAuthor, getSearchBySubject, getSearchByYear,
 getAgric, getBiomedical,getBiotechnology, getArchitecture, getCivil, getBiochemistry,
getBuildingTech, getChemical, getComputerEngr,getComputerScience, getCyber, getElectrical,
getEstateMgt, getForensic, getIndustrialProduction, getfoodScience, getindustrial, 
getmaths, getmechanical, getmechatronics, getmicrobiology, getpetroleum, getphysics,
getquantity, getslt, getsoftware, getstatistics, getsurvey, geturban,addUser,Home}