function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let firstStudent = new Student("Artem", "male", 19);
let secondStudent = new Student("Elena", "female", 22);
let thirdStudent = new Student("Anna", "female", 18);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if ('marks' in Student) {	
  this.marks.push(marks);
  };  
}

Student.prototype.getAverage = function () {
  if (!'marks' in Student || Student.marks === []) {
  	return 0;
  } else {
  	let average = Student.marks.reduce((acc, item, index, arr) => acc + item / arr.length, 0);
  	return average;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
