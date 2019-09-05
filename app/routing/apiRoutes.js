var path = require('path');

var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	// console.log('___ENTER apiRoutes.js___');

	// Total list of friends
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend
	app.post('/api/friends', function(req, res) {
		var inputuser = req.body;

		var userRes = inputuser.scores;

		// Compute best friend match
		var otherName = '';
		var otherImage = '';
		var compareTotal = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userRes.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			

			// If lowest difference, record the friend match
			if (diff < compareTotal) {
				// console.log('Closest match found = ' + diff);
				// console.log('Friend name = ' + friends[i].name);
				// console.log('Friend image = ' + friends[i].photo);

				compareTotal = diff;
				otherName = friends[i].name;
				otherImage = friends[i].photo;
			}
		}

		// Add new friend
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', friendName: otherName, friendImage: otherImage});
	});
};