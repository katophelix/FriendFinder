
var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        // This will be used to display a JSON of all possible friends.
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {




        //Empty best matched friend
        var bestMatch = {
            name: "",
            photo: "",
            scores: Infinity
        };

        var newUserData = req.body;
        var newUserScores = newUserData.scores;


        //Loop through friends gives me i
        for (var i = 0; i < friends.length; i++) {

            var diffInScores = 0;

            //Loop through the scores of each friend
            for (var j = 0; j < friends[i].scores.length; j++) {
                console.log(req.body);
                // add scores abs gives absolute num
                diffInScores += Math.abs(parseInt(newUserScores[j]) - parseInt(friends[i].scores[j]));

                //Find best friend match

            }

            if (diffInScores <= bestMatch.scores) {

                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.scores = diffInScores;

            }
        }

        friends.push(req.body);
        //  This will be used to handle incoming survey results. 
        // This route will also be used to handle the compatibility logic.
        res.json(bestMatch);

    })

};