const Material = require('../models/material')
const _ = require('lodash')

exports.createMaterial = (req, res) =>{
    User.create(req.body, (error, user) => {
        console.log(user)
        
    })

}
exports.updateMaterial=(req,res,next)=>{
    let user =req.profile;
    user =_.extend(user,req.body);
    user.updated = Date.now();
    user.save((err)=>{
        if(err){
            return res.status(400).json({
                error:"You are not authorized to perform this action"
            
            })
        }
    
    
    res.json({user});    
    
})
}
exports.deleteMaterial=(req,res,next)=>{
    let user =req.profile;
    user.remove = Date.now();
    
    
    
    res.json({message:'Material deleted succesfully'});    
    

}
