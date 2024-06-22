const IncomeSchema = require("../MODELS/incomemodel")

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: "Invalid amount" })
        }
        await income.save()
        res.status(200).json({ message: "Income Added" })
    }
    catch (error) {
         res.status(500).json({message :"server error"})

    }

    console.log(income)

}
exports.getIncome=async(req,resp)=>{
    try {
        const income=await IncomeSchema.find().sort({createAt: -1})
        resp.status(200).json(income)
    } catch (error) {
        resp.status(500).json({message:'server error'})
    }

}

exports.deleteIncome=async(req,resp)=>{
    const{id}=req.params;
    console.log(params)
    IncomeSchema.findByIdAndDelete(id)
        .then((income)=>{
        resp.status(200).json({message:'income deleted'})

        .catch((err)=>{
            resp.status(500).json({message:'server error'}) 
        })
    })

}