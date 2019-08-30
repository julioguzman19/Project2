// Pull in the characters
const profiles = require("../data/setprofiles.js");
// Export routes
module.exports = function(app) {
  app.get("/api/setprofiles", function(req, res) {
    res.json(profiles);
  });
  app.post("/api/setprofiles", function(req, res) {
    //userProfile will give you 4 attributes in newProfile on ready.html page
    //4 values we decided to get from user
    let userProfile = req.body;
    console.log("from apiRoute.js : "userProfile);
    res.json("test");

  });
};


