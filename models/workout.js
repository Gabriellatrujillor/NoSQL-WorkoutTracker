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
  },
  totalDuration: {
    type: Number,
  },
});

// ++++++ FIX SETTOTALDURATION FUCTION TO ADD ALL DURATION VALUES - FORLOOP - LINE 52 ++++++ 
// 

//1. create server
//2. add html routes (route/html-routes.js)
//3. created model, looked at seed file to see how it is suppose to be created
//4. seed file, used package.json script "npm run seed"
//5. add apiroutes
//6. debug it all (found out we need totalDuration so did that)

  
  workoutSchema.methods.setTotalDuration = function() {
    this.totalDuration =0; //`${this.firstName} ${this.lastName}`;

    return this.totalDuration;
  };

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;