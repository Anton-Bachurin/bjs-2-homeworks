"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (
  	d === 0) {
  	arr.push (- b / (2 * a));
  } else if (
  	d > 0) {
  	arr.push((- b + Math.sqrt(d)) / (2 * a));
  	arr.push((- b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = percent / 100 / 12; 
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
  let fullPayment = monthlyPayment * countMonths;
  let roundedFullPayment = (Math.round(fullPayment * 100) / 100);
  console.log(roundedFullPayment);
}