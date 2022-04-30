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
  const { deployed, active, inactive, total, avg } = req.body;
  const { id } = req.params;
  const user = await User.findById(id);
  const newDetail = new Detail({
    deployed,
    active,
    inactive,
    total,
    avg,
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

module.exports = router;
