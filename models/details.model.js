const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const detailSchema = new Schema({
  deployed: {
    type: Number
  },
  active: {
    type: Number
  },
  inactive: {
    type: Number
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
