const blogsmodel = require("../Models/blogsModel")


const createblogs = async function (req,res){
try {
    let data = req.body 
    let title = req.body.title
    if (!title){
        res.status(400).send({status:false ,msg:"tittle is required"})
    }
    let blog = await blogsmodel.create(data)

    return res.status(201).send ({msg: blog})

} catch (error) {
    res.status(500).send({msg:error.message})
}
}

const getblogs = async function (req,res){
    try {

        let data = req.query
        data.isdeleted = false
        data.isPublished=true

        let filtered = await blogsmodel.find(data).populate("authorid")

        if (filtered){
        return res.status(200).send ({msg: filtered})

        }else res.status(404).send ("data not found") 
        
    
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}

module.exports.createblogs = createblogs
module.exports.getblogs = getblogs