var Person = function(fname, lname, yob) {
    this.fName = fname;
    this.lName = lname;
    this.yearOfBirth = yob;
    this.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
    }
}

// when a new keyword is used, an object will be created,
// and 'this' keyword will be pointed to that new empty object.
// That means, this.fName is same as new Empty object.fName.
var madhu = new Person('madhu', 'rao', 1979);
var puppu = new Person('puppu', 'fellow', 2013);
var tinku = new Person('Tinky', 'fellow', 2018);

madhu.calculateAge();
puppu.calculateAge();
tinku.calculateAge();
