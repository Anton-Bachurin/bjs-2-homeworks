function parseCount(numberToParse) {
  let parsedNumber = parseFloat(numberToParse);
  if (Number.isNaN(parsedNumber) === true) {
  	throw new Error("Невалидное значение");
  }
  return parsedNumber;
}

function validateCount(numberToParse) {
  try {
 	return parseCount(numberToParse);
  } catch (error) {
    return error;
  }
}

class Triangle {
	constructor(a, b, c) {
	  this.a = a;
	  this.b = b;
	  this.c = c;

	  if ((a + b < c) || (b + c < a) || (a + c < b)) {
	throw new Error("Треугольник с такими сторонами не существует");
      }
	}

	get perimeter() {
	  return this.a + this.b + this.c;
	}

	get area() {
	  const p = 0.5 * (this.perimeter);
	  const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
	  return Number(s.toFixed(3));
	}
}

function getTriangle(a, b, c) {
  try {
  	return new Triangle(a, b, c);
  } catch (error) {
  	let obj = {
      get perimeter() {
      	return "Ошибка! Треугольник не существует";
      },

      get area() {
      	return "Ошибка! Треугольник не существует";
      }
  	}
  	return obj;
  }
}