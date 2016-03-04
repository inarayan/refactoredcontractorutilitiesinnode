/**
 * Created by indrabijaynarayan on 3/3/16.
 */
// Add a new rating for a contractor
// Overall calculated using a cumulative moving average

require('./Database');
require('./addContractor');



var RateContractor = function (Database,name, rating) {
    Database.store.findOne({name: name}, function (err, contractor) {
            if (err) {
                console.error('Could not find contractor');
                return;
            }
            var oldRating = contractor.rating;
            var numberOfRatings = contractor.numberOfRatings;
            var newRating = oldRating + (rating - oldRating) /
                (numberOfRatings + 1);
            console.log('New rating for', name, 'is', newRating);

        Database.store.update({
                _id: contractor._id
            }, {
                name: name,
                rating: newRating,
                numberOfRatings: numberOfRatings + 1
            });
        }.bind(this));
    };

module.exports.rateContractor=RateContractor;
