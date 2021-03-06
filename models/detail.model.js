const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const detailSchema = new Schema({
  week: {
    type: String
  },
  deployed: {
    type: Number
  },
  active: {
    type: Number
  },
  inactive: {
    type: Number
  },
  totalTickets: {
    type: Number
  },
  avg: {
    type: Schema.Types.Decimal128
  },
  call: {
    type: String
  },
  visitation: {
    type: String
  },
  day1: {
    type: Number
  },
  day2: {
    type: Number
  },
  day3: {
    type: Number
  },
  day4: {
    type: Number
  },
  day5: {
    type: Number
  },
  day6: {
    type: Number
  },
  toal: {
    type: Number
  },
  retailers: { type: Array, default: [] },
  date: {
    type: Date,
    default: Date.now
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
