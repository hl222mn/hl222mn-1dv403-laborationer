"use strict";

var makePerson = function(persArr){
    
    var result = {};
    
    var ages = persArr.map(function(age) {
        return age.age;}); //s120
    
    var names = persArr.map(function(name) {
        return name.name;});
        names.sort(function(a, b){
            return a.localeCompare(b) }); //http://www.w3schools.com/jsref/jsref_sort.asp

    names = names.join(", "); //s111

/*var max = Math.max();
return(max);
var min = Math.min();
return min;*/

//var min = Math.min(persArr);


//Medelådern http://stackoverflow.com/questions/10359907/array-sum-and-average



var sum = 0;
for(var i = 0; i < ages.length; i++){
    sum += parseInt( ages[i], 10);
}
var averageAge = sum/ages.length; //http://stackoverflow.com/questions/10359907/array-sum-and-average

averageAge = Math.round(averageAge);

    /*Math.average = function(persArr) {     //http://javascriptexample.net/extobjects81.php
    var count, total, i;
    count = persArr.length;
    total = i = 0;
    
    while (i < count) total+= arguments[i++];
    return total / count;
    averageAge = Math.average(age);
    averageAge = Math.average.apply(Math, persArr);*/


var minAge = Math.min.apply(Math, ages); //s167
var maxAge = Math.max.apply(Math, ages);



    /*for (name in data) {
        return(name)
    }
    for (age in data) {
        return(age)
    }*/

result.minAge = minAge;
result.maxAge = maxAge;
result.names = names;
result.averageAge = averageAge;

return result;
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
var result = makePerson(data);
console.log(result);



