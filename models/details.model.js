const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const detailSchema = new Schema({
  deployed: {
    type: String
  },
  active: {
    type: String
  },
  inactive: {
    type: String
  },
  total: {
    type: Number
  },
  avg: {
    type: Schema.Types.Decimal128
  }
});

const Detail = mongoose.model("Post", detailSchema);
module.exports = Detail;
