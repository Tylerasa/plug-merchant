const router = require("express").Router();
const auth = require("../middleware/auth");
let Detail = require("../models/detail.model");
let User = require("../models/user.model");

// get all details
router.get("/", auth, (req, res) => {
  Detail.find()
    .sort({ date: -1 })
    .then(detail => res.json(detail))
    .catch(err => res.status(400).json("error: " + err));
});

router.route("/add/:id").post(auth, async (req, res) => {
  const {
    week,
    deployed,
    active,
    inactive,
    totalTickets,
    avg,
    call,
    visitation,
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    total,
    retailers
  } = req.body;
  const { id } = req.params;
  const user = await User.findById(id);
  const newDetail = new Detail({
    week,
    deployed,
    active,
    inactive,
    totalTickets,
    avg,
    call,
    visitation,
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    total,
    retailers,
    username: user.username
  });
  newDetail
    .save()
    .then(() =>
      res.json({
        message: "Detail Added",
        detail: newDetail
      })
    )
    .catch(err => res.status(400).json(err));
});

// get detail
router.route("/:id").get(auth, (req, res) => {
  Detail.findById(req.params.id, (err, detail) => {
    if (err) res.status(400).json("error: " + err);
    else res.status(200).json(detail);
  });
});

//get all details by a user
router.route("/:user/user").get(auth, (req, res) => {
  const { user } = req.params;
  console.log(user);
  Detail.find({ username: user }, (err, details) => {
    if (err) res.status(400).json("error: " + err);
    else res.status(200).json(details);
  });
});

//prev data
router.route("/:user/user/prev").get(auth, (req, res) => {
  const { user } = req.params;
  Detail.findOne({ username: user }).sort({ date: -1 })
  .then(detail => res.json(detail))
  .catch(err => res.status(400).json("error: " + err));
});

module.exports = router;
