const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [{
    type:{
        type: String,
        trim: true,
        required: "Enter correct workout type"
    },
    name:{
        type: String,
        trim: true,
        required: "Enter correct workout name"
    },
    duration:{
        type: Number,
        trim: true,
        required: "Enter correct duration time"
    },
    weight:{
        type: Number,
        trim: true,
    },
    reps:{
        type: Number,
        trim: true,
    },
    sets:{
        type: Number,
        trim: true,
    },
    distance:{
        type: Number,
        trim: true,
    },
  }],

  day: {
    type: Date,
    default: Date.now
  }
});

//create custom fx called totalDuration, totalWeight, totalSets, totalReps, totalDistance
// UserSchema.methods.setFullName = function() {
//     this.fullName = `${this.firstName} ${this.lastName}`;
  
//     return this.fullName;
//   };
  
  workoutSchema.methods.totalDuration = function() {
    //this.lastUpdated = Date.now();
  console.log("inside total duration")
    return 0;
  };

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;