function parseCount(numberToParse) {
  if (parseFloat(numberToParse) === NaN) {
  	const error = new Error("Невалидное значение");
	throw error;
  }
  return parseFloat(numberToParse);
}

function validateCount(numberToParse) {
  parseCount(numberToParse);
  if (parseCount !== NaN) {
  	return parseCount(numberToParse);
  }

  try {
 	parseCount(numberToParse);
  } catch (error) {
    return error;
  }
}