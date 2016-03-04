/**
 * Created by indrabijaynarayan on 3/3/16.
 */
// Adds a new contractor, starting with a zero rating
require('./Database');


var addContractor = function (Database,name) {
        console.log('Adding contractor %s', name);

        console.log(Database);
        Database.store.insert({
            name: name,
            rating: 0,
            numberOfRatings: 0
        });
    };


module.exports.addContractor=addContractor;
