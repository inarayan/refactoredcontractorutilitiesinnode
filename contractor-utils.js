//// Contractor utilities
//// Usage examples:
//// Adding a new contractor
//// node contractor-utils.js contractor.db add joe
////
//// Rating a contractor
//// node contractor-utils.js contractor.db rate joe 5
////
//// Requirements: NeDB (https://github.com/louischatriot/nedb)
//
//var Datastore = require('nedb');
//
//// Database layer
//var Database = function(path) {
//    this.store = new Datastore({
//        filename: path,
//        autoload: true
//    });
//};
//
//// Adds a new contractor, starting with a zero rating
//Database.prototype.addContractor = function(name) {
//    console.log('Adding contractor %s', name);
//    this.store.insert({
//        name: name,
//        rating: 0,
//        numberOfRatings: 0
//    });
//};
//
//// Add a new rating for a contractor
//// Overall calculated using a cumulative moving average
//Database.prototype.rateContractor = function(name, rating) {
//    this.store.findOne({name: name}, function(err, contractor) {
//        if (err) {
//            console.error('Could not find contractor');
//            return;
//        }
//        var oldRating = contractor.rating;
//        var numberOfRatings = contractor.numberOfRatings;
//        var newRating = oldRating + (rating - oldRating) /
//                        (numberOfRatings + 1);
//        console.log('New rating for', name, 'is', newRating);
//
//        this.store.update({
//            _id: contractor._id
//        }, {
//            name:name,
//            rating: newRating,
//            numberOfRatings: numberOfRatings + 1
//        });
//    }.bind(this));
//};

// Utilities

var Databasecreate=require('./Database');
var AddContractor= require('./addContractor');
var RateContractor=require('./rateContractor');

var database = new Databasecreate.Database(process.argv[2]);
//The above statement returns a datastore object
if (process.argv[3] == 'add') {
    console.log('begin the Add Contract Method');
    new AddContractor.addContractor(database,process.argv[4]);
    console.log('After the Add Contract Method');
}
else if (process.argv[3] == 'rate') {
    new RateContractor.rateContractor(database,process.argv[4], process.argv[5]);
}

