// Pull in the characters
//const profiles = require("../data/setprofiles.js");

// Export routes
module.exports = function(app, db) {
  app.get("/api/setprofiles", function(req, res) {
    res.json(profiles);
  });

  //app.post("/api/setprofiles.js", function(req, res) {
  //  //userProfile will give you 4 attributes in newProfile on ready.html page
  //  //4 values we decided to get from user
  //  let userProfile = req.body;
  //  console.log("from apiRoute.js : " + userProfile);
  //  res.json("test");
  //});

  // Add new match
  app.post("/api/setprofiles", function(req, res) {
    let requestMapping = {
      Developers: "Developer",
      "Visual Artists": "Visual Artist",
      Musicians: "Musician",
      Photographers: "Photographer",
      "Piña Colada Enthusiasts": "Piña Colada Enthusiast"
    };

    db.Users.findAll({
      where: { medium: requestMapping[req.body.medium] }
    }).then(function(matches) {
      if (matches.length === 0) {
        res.status(404).send("No match found");
        return;
      }

      res.json({
        status: "OK",
        name: matches[0].name
      });
    });

    // Send response
  });
};
