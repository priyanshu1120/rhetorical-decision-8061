const mongoose = require("mongoose")
require("dotenv").config()
mongoose.set("strictQuery",false)
const connect = mongoose.connect(process.env.MONGO_URL);
module.exports = {connect}
