// admin part

const Admin = require("../Model/admin")
const Book = require("../Model/book")

const getAboutAdmin = (req, res)=>{
    res.render("admin/about.ejs")
}

const getAdminRAdmin = (req, res)=>{
    res.render("admin/indexAdmin.ejs")
}
const HomeAdmin = async(req, res)=>{
    let users = (await Admin.fetch())
    let count = users.length    
    res.render("admin/ProbityLMS.ejs",{count})
}
  


const getProgrammeAdmin = (req, res)=>{
    res.render("admin/programmes.ejs")
}
const getLoanAdmin= (req, res)=>{
    res.render("admin/loan.ejs")
}
const getOpacAdmin= (req, res)=>{
    res.render("admin/opac.ejs")
}
const getsignAdmin= (req, res)=>{
    res.render("admin/signUp.ejs")
}
const addUserAdmin = async(req, res)=>{
    console.log("for me", req.body);
    try {
    let user = new Admin(req.body) 
     await user.save()
   res.redirect("admin/home")
        
    } catch (error) {
        throw error;
        redirect("/admin/home")
    }

}
let indexAdmin = async(req, res)=>{
    let users = (await Admin.fetch())
    let count = users.length  
    res.render("admin/probityLMS",{count})
}
const getsigninAdmin= (req, res)=>{
    res.render("admin/index.ejs")
}

const getLecturerAdmin= (req, res)=>{
    res.render("admin/trainers.ejs")
}

const getSearchAdmin = (req,res)=>{
    res.render("admin/simplesearch")
}

const getSearchByYearAdmin = (req,res)=>{
    res.render("admin/searchYear.ejs")
}

const getSearchByAuthorAdmin = (req,res)=>{
    res.render("admin/searchAuthor.ejs")
}

const getSearchBySubjectAdmin = (req,res)=>{
    res.render("admin/searchSubject.ejs")
}


// courses 
const getAgricAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let agricCourses = await Book.FetchAgric(id)
    res.render("admin/agric.ejs", {agricCourses})
}

const addAgric = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Agricultural book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Agricultural");
            res.redirect("back")
    }

    }



const getArchitectureAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let architectureCourses = await Book.FetchArchi(id)
    res.render("admin/architecture.ejs", {architectureCourses})
}

const addArchitecture = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Architecture book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Architecture");
            res.redirect("back")
    }

    }


const getBiochemistryAdmin = async (req, res)=>{
    let id = req?.session?.admin?.id
    let biochemistryCourses = await Book.FetchBiochem(id)
    res.render("admin/biochemistry.ejs",{biochemistryCourses})
}

const addBiochemistry = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("biochemistry book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add biochemistry");
            res.redirect("back")
    }

    }


const getBiomedicalAdmin = async (req, res)=>{
    let id = req?.session?.admin?.id
    let biomedicalCourses = await Book.FetchBiomed(id)
    res.render("admin/biomedical.ejs", {biomedicalCourses})
}

const addBiomedical = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("biomedical book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add biomedical");
            res.redirect("back")
    }

    }



const getBiotechnologyAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let biotechnologyCourses = await Book.FetchBiotech(id)
    res.render("admin/biotechnology.ejs", {biotechnologyCourses})
}

const addBioctechnology = async(req, res)=>{
    
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("biotechnology book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add biotechnology");
            res.redirect("back")
    }

    }


const getBuildingTechAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let buildingTechCourses = await Book.FetchBuilding(id)
    res.render("admin/buildingtech.ejs", {buildingTechCourses})
}

const addBuildingTech = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("buildind Tech book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add building Tech");
            res.redirect("back")
    }

    }


const getChemicalAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let chemicalCourses = await Book.FetchChem(id)
    res.render("admin/chemical.ejs", {chemicalCourses})
}

const addChemical = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("chemical book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add chemical");
            res.redirect("back")
    }

    }


const getCivilAdmin = async(req, res)=>{
    let id = req?.session?.admin?.id
    let civilCourses = await Book.FetchCivil(id)
    res.render("admin/civil.ejs", {civilCourses})
}

const addCivil = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Civil book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Civil");
            res.redirect("back")
    }

    }


const getComputerEngrAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let computerEngrCourses = await Book.FetchComputerEngr(id)
    res.render("admin/computerEngr.ejs", {computerEngrCourses})
}

const addComputerEngnr = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Computer Engineering book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add computer Engineering");
            res.redirect("back")
    }

    }


const getComputerScienceAdmin  = async (req, res)=>{
    let id = req?.session?.admin?.id
    let computerCourses = await Book.FetchComputer(id)
    res.render("admin/ComputerScience.ejs",{computerCourses})
}

const addComputerScience = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Computer Science book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Computer Science");
            res.redirect("back")
    }

    }


const getCyberAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let cyberCourses = await Book.FetchCyber(id)
    res.render("admin/cyber.ejs", {cyberCourses})
}

const addCyber = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Cyber Security book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Cyber Security");
            res.redirect("back")
    }

    }


const getElectricalAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let electricalCourses = await Book.FetchElectrical(id)
    res.render("admin/electrical.ejs", {electricalCourses})
}

const addElectrical = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Electrical Engineering book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add ELectrical Engineering");
            res.redirect("back")
    }

    }


const getEstateMgtAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let estateMgtCourses = await Book.FetchEstate(id)
    res.render("admin/estateMgt.ejs",{estateMgtCourses})
}

const addEstateMgt = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Estate management book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Estate Management");
            res.redirect("back")
    }

    }


const getfoodScienceAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let foodScienceCourses = await Book.FetchFood(id)
    res.render("admin/foodScience.ejs", {foodScienceCourses})
}

const addfoodScience = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Food Science book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Food Science");
            res.redirect("back")
    }

    }

const getForensicAdmin  =async(req, res)=>{
    let id = req?.session?.admin?.id
    let forensicCourses = await Book.FetchForensic(id)
    res.render("admin/forensic.ejs", {forensicCourses})
}

const addForensic = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Forensic Science book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Forensic Science");
            res.redirect("back")
    }

    }


const getindustrialAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let industrialCourses = await Book.FetchIndustrial(id)
    res.render("admin/industrial.ejs", {industrialCourses})
}

const addindustrial = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Industrial Chemistry book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Industrial Chemistry");
            res.redirect("back")
    }

    }



const getIndustrialProductionAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let industrialProductionCourses = await Book.FetchIndustrialPro(id)
    res.render("admin/industrialproduction.ejs", {industrialProductionCourses})
}

const addIndustrialProduction = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Industrial Production book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Industrial Production");
            res.redirect("back")
    }

    }



const getmathsAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let mathsCourses = await Book.FetchMaths(id)
    res.render("admin/maths.ejs", {mathsCourses})
}

const addmaths = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Maths book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Maths");
            res.redirect("back")
    }

    }


const getmechanicalAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let mechanicalCourses = await Book.FetchMechanical(id)
    res.render("admin/mechanical.ejs", {mechanicalCourses})
}

const addmechanical = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Mechanical Engineering book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Mechanical Engineering");
            res.redirect("back")
    }

    }


const getmechatronicsAdmin  =async (req, res)=>{
    let id = req?.session?.admin?.id
    let mechatronicsCourses = await Book.FetchMechatronics(id)
    res.render("admin/mechatronics.ejs", {mechatronicsCourses})
}

const addmechatronics = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("bMechatronics Engineering book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Mechatronics Engineering");
            res.redirect("back")
    }

    }


const getmicrobiologyAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let microbiologyCourses = await Book.FetchMicro(id)
    res.render("admin/microbiology.ejs", {microbiologyCourses})
}

const addmicrobiology = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Microbiology book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Microbiology");
            res.redirect("back")
    }

    }


const getpetroleumAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let petroleumCourses = await Book.FetchPetrol(id)
    res.render("admin/petroleum.ejs", {petroleumCourses})
}

const addpetroleum = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Petroleum Engineering book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Petroleum Engineering");
            res.redirect("back")
    }

    }

const getphysicsAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let physicsCourses = await Book.FetchPhy(id)
    res.render("admin/physics.ejs", {physicsCourses})
}

const addphysics = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Physics book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Physics");
            res.redirect("back")
    }

    }



const getquantityAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let quantityCourses = await Book.FetchQuantity(id)
    res.render("admin/quantity.ejs", {quantityCourses})
}

const addquantity = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Quantity Surveying book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Quantity Surveying");
            res.redirect("back")
    }

    }



const getsltAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let sltCourses = await Book.FetchSlt(id)
    res.render("admin/slt.ejs", {sltCourses})
}

const addslt = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("SLT book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add SLT");
            res.redirect("back")
    }

    }



const getsoftwareAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let softwareCourses = await Book.FetchSoft(id)
    res.render("admin/software.ejs", {softwareCourses})
}

const addsoftware = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Software engineering book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Software engineering");
            res.redirect("back")
    }

    }



const getstatisticsAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let statisticsCourses = await Book.FetchStat(id)
    res.render("admin/statistics.ejs", {statisticsCourses})
}

const addstatistics = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Statistics book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Statistics");
            res.redirect("back")
    }

    }


const getsurveyAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let surveyCourses = await Book.FetchSurv(id)
    res.render("admin/survey.ejs", {surveyCourses})
}

const addsurvey = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Surveying and Geoinformatics book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Surveying and Geoinformatics");
            res.redirect("back")
    }

    }

const geturbanAdmin  = async(req, res)=>{
    let id = req?.session?.admin?.id
    let urbanCourses = await Book.FetchUrban(id)
    res.render("admin/urban.ejs", {urbanCourses})
}

const addurban = async(req, res)=>{
    try {
        let admin = req?.session?.admin?.id
            let book = new Book(req.body)
            console.log(req.body);
            book.admin_id = admin
            await book.save()
            res.redirect("back")
                console.log("Urban and Regional Planning book added to the system successfully.");
        }
  catch (error) {
            
            console.log("failed to add Urban and Regional Planning");
            res.redirect("back")
    }

    }



module.exports = {
    getAboutAdmin,getAdminRAdmin,getAgricAdmin,getArchitectureAdmin,getBiochemistryAdmin,
    getBiomedicalAdmin,getBiotechnologyAdmin,getBuildingTechAdmin,
    getChemicalAdmin,getCivilAdmin,getComputerEngrAdmin,getComputerScienceAdmin,getCyberAdmin,
    getElectricalAdmin,getEstateMgtAdmin,getForensicAdmin,getIndustrialProductionAdmin,
    getLecturerAdmin,getLoanAdmin, getOpacAdmin,getProgrammeAdmin,getSearchAdmin,getSearchByAuthorAdmin,
    getSearchBySubjectAdmin,getindustrialAdmin,getmathsAdmin,getmechanicalAdmin,getmechatronicsAdmin,getmicrobiologyAdmin,
    getpetroleumAdmin,getquantityAdmin,getsurveyAdmin,getsoftwareAdmin,geturbanAdmin,getsltAdmin,getstatisticsAdmin,getsignAdmin,
    getSearchByYearAdmin,getfoodScienceAdmin,getphysicsAdmin,HomeAdmin,addUserAdmin,indexAdmin,
    addBiochemistry, addAgric,addArchitecture,addBioctechnology,
    addBiomedical,addBuildingTech,addChemical,addCivil,addComputerEngnr,addComputerScience,addCyber,
    addElectrical,addEstateMgt,addForensic,addIndustrialProduction,addfoodScience,addindustrial,
    addmaths,addmechanical,addmechatronics,addmicrobiology,addpetroleum, addphysics,addquantity,
    addslt,addsoftware,addstatistics,addsurvey,addurban}