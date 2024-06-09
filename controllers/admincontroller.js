const cards = require('../models/card')
const addcard = async (req, res) =>{
    try {
        const { title,cast } = req.body;
        const filePath = req?.file?.location;

        const existingCard = await cards.findOne({title})

        if (existingCard){
            res.json({
                success:false,
                message: "Card already exists"
            })
        } else {
            const newCard = new cards({
                title,
                cast,
                filePath
                })
                const saved = await newCard.save();

                if(saved) {
                    res.json({
                        success: true,
                        message: "Card added successfully"
                        })
                } else {
                    res.json({
                        success: false,
                        message: "Failed to add card"
                        })
                }
        }
    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "Failed to add card"
            })
    }
}

const deleteCard = async (req, res) =>{
    try{
        const id = req.params.id;
        const deletedItem = await cards.findByIdAndDelete(id);

        if(!deletedItem){
            res.json({
                success: false,
                message: "Card not found"
            })
        } 

        res.json({
            success: true,
            message: "Card deleted successfully"
        })
    }
    catch(err){
        console.log(err);
        res.json({
            success: false,
            message: "Failed to delete card"
        })
    }
}




module.exports={addcard,deleteCard}