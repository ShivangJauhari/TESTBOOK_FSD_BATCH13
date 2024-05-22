const express = require('express');
const app = express();

app.use('cors');

const PORT = 3000;
const medicineRecord = require('../models/medicine');
require('../db/conn');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Medicine Record API');
});

app.get('/medicinedata', async (req, res) => {
    try {
        const medicineData = await medicineRecord.find({});
        res.status(201).json(medicineData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

app.post('/medicine', async (req, res) => {
    try {
         const newMedicine = await medicineRecord.create(req.body);
         res.status(201).json(newMedicine);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});

app.delete('/medicine/:drug_code', async (req, res) => {
    try {
        const deleteMedicine = await medicineRecord.findByIdAndDelete(req.params.drug_code);
        res.status(201).json(deleteMedicine);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
    }
});

app.put('/medicine/:drug_code', async (req, res) => {
    try {
        const updateMedicine = await medicineRecord.findByIdAndUpdate(req.params.drug_code, req.body, { new: true });
        res.status(201).json(updateMedicine);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
    }
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});