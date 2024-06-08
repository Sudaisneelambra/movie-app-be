const cards = require('../models/card')

const getallCards = async (req, res) =>{
    try {
        const card = await cards.find({})
        if(card){
            res.json({
                success:true,
                message:'datagetted succesfully',
                data:card
            })
        } else {
            res.json({
                success:false,
                message:'no data found',
                data:null
                })
        }
    }
    catch (err){
        res.json({
            success:false,
            message:'something went wrong',
            data:null
            })
    }

}

const getsingleCard = async(req,res) =>{
    try{
        const {id} = req.body
        const card = await cards.findById(id)
        if(card){
            res.json({
                success:true,
                message:'datagetted succesfully',
                data:card
                })
            } else{
                res.json({
                    success:false,
                    message:'no data found',
                    data:null
                    })
            }
    }
    catch(err){
        res.json({
            success:false,
            message:'something went wrong',
            data:null
            })
    }
}



module.exports = {getallCards, getsingleCard}