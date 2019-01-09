// Importing Node packages required for schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//= ===============================
// Visitor Schema
//= ===============================
const VisitorSchema = new Schema({
  ip_address: {
    type: String,
    required: true
  },
  local_ip_address: {
    type: String
  },
  countryData:{
    type: Object
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Visitor', VisitorSchema);
