const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    drug_code: Number,
    class_name: String,
    drug_identification_number: String,
    brand_name: String,
    descriptor: String,
    number_of_ais: String,
    ai_group_no: String,
    company_name: String,
    last_update_date: Date,
});

const medicineRecord = new mongoose.model('medicineRecord', medicineSchema);

module.exports = medicineRecord;