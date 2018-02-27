


var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        // This will be used to display a JSON of all possible friends.
        res.json(friends);
    });

   

    app.post("/api/friends", function(req, res) {

        friends.push(req.body)
        //  This will be used to handle incoming survey results. 
        // This route will also be used to handle the compatibility logic.
        res.json(friends);
    })



// app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friends = [];
    

//     console.log(friends);
//   });

};