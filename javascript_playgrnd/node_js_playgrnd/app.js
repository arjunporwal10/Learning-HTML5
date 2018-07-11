var events = require('events');
var util = require('util');
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent','the event was emitted');
var Person = function(name){
    this.name = name;
};

util.inherits(Person,events.EventEmitter);

var James = new Person('James');
var Jaden = new Person('Jaden');
var John = new Person('John');
var people = [James,Jaden,John];

people.forEach(function(Person){
    Person.on('speak',function(msg){
        console.log(Person.name + ' said: ' + msg);
    });
});

James.emit('speak','hey dude');
John.emit('speak','yo');