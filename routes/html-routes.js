// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const router = require("express").Router();




// Routes
// =============================================================
// module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  //localhost:3000/
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // add route loads the add.html page,
  // where users can enter new characters to the db
  //localhost:3000/exercise
  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  // all route loads the all.html page,
  // where all characters in the db are displayed
//   app.get("/all", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/all.html"));
//   });

// };
module.exports = router;