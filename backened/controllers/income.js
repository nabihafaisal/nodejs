const IncomeSchema = require("../models/incomemodel")

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
        return res.status(200).json({ message: "Income Added" })
    }
    catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });

    }



}
exports.getIncome = async (req, res) => {
    try {
        const income = await IncomeSchema.find().sort({ createAt: -1 })
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json({ message: 'server error' })
    }

}
exports.deleteIncome = async (req, res) => {
    const { id } = req.params;

    try {
        const income = await IncomeSchema.findByIdAndDelete(id);
        if (income) {
            res.status(200).json({ message: 'Income deleted' });
        } else {
            res.status(404).json({ message: 'Income not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


// exports.deleteIncome = async (req, res) => {
//     const { id } = req.params;
    
//     IncomeSchema.findByIdAndDelete(id)
//         .then((income)=>{
//             res.status(200).json({message:'income deleted'})

//         .catch((err)=>{
//             res.status(500).json({message:'server error'}) 
//         })
//     })

// }