const router = require("express").Router();
 const Workout = require("../models/workout.js");

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .limit(7)
      .then(dbObj => {
        res.json(dbObj);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });



module.exports = router;