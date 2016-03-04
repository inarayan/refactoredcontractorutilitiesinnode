/**
 * Created by indrabijaynarayan on 3/3/16.
 */
var Datastore = require('nedb');


// Database layer
var Database = function(path) {
    this.store = new Datastore({
        filename: path,
        autoload: true
    });
    return this;

};

module.exports.Database=Database;