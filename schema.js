  
let mongoose  = require("./config");
mongoose = mongoose.mongoose
const nstoreSchema = new mongoose.Schema({brand: String, product:String,price:String,unit:String,qty:String});
const nstore = mongoose.model('orders', nstoreSchema);
module.exports.nstore = nstore;