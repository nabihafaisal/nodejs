const IncomeSchema =require("../models/incomemodel")

exports.addIncome= async (req, res) => {
   const {title, amount, category, description, date}  = req.body

   const income=IncomeSchema({
    title,
    amount,
    category,
    description,
    date
   })
   try{
    if(!title || !category || !description || !date){
        return res.status(400).json({message:"Please fill all the fields" })
    }
    if(amount <=0 || !amount ==='number'){
        return res.status(400).json({message:"Invalid amount" })
    }
    await income.save()
    res.status(200).json({message :"Income Added"})
   }
   catch(error){
   
   }

   console.log(income)

}