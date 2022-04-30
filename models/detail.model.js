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
  },
  username: {
    type: String,
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
});

const Detail = mongoose.model("Detail", detailSchema);
module.exports = Detail;
