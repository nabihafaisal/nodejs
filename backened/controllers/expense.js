const ExpenseSchema = require("../models/expensemodel")

exports.addExpenese = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const income = ExpenseSchema({
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
        return res.status(200).json({ message: "ExpenseAdded" })
    }
    catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });

    }



}
exports.getExpense = async (req, res) => {
    try {
        const income = await ExpenseSchema.find().sort({ createAt: -1 })
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }

}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    
    ExpenseSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message:'Expensedeleted'})

        .catch((err)=>{
            res.status(500).json({message:'server error'}) 
        })
    })

}