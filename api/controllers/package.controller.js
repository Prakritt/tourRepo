import Package from "../model/Package.model.js";
import errorHandler from "../utils/errorHandler.js";

export const createPackage = async (req,res,next)=>{

    try{
        
        const {name,country,description,duration,images,itenary,inclusions} = req.body;
        
        //Check if all the fields are provided
        if(!name || !country || !description || !duration || !images || !itenary || !inclusions){
            return next(errorHandler(401,'Please provide all the required fields....'))
        }

        const data = {name,country,description,duration,images,itenary,inclusions};

        const result = await Package.create(data);
        
    
        res.status(200).json({
            status : 'success',
            message : "New Package created",
            data : result
    
        })
    }catch(err){
        next(err)
    }

}

export const getAllPackages = async(req,res)=>{
    try{

        const result = await Package.find();
        res.status(200).json({
            status : "success",
            length : result.length,
            data : result,
        })

    }catch(err){
        next(err);
    }
}