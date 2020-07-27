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

  router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbObj => {
        res.json(dbObj);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/workouts/:id", (req, res) => {
   
    
    Workout.findByIdAndUpdate(
        req.params.id, 

        { $push: {exercises: req.body}}
        )
        .then(function(dbObj){
           
            res.json(dbObj);
        })

});

router.post("/api/workouts", (req, res) => {
    const user = new Workout(req.body);
    user.setTotalDuration();


  Workout.create(user)
    .then(dbObj => {
      res.json(dbObj);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;