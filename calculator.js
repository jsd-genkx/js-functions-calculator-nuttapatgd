"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  return num1 / num2;
}
// Step 02: Create a Validation Function for Inputs

function validateInputs(num1, num2) {
  if (!isNumber(num1) || !isNumber(num2)) {
    return "Both inputs must be numbers";
  }
  return null;
}
// helper function
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
// Step 03: Create a Calculator Function to Combine the Above Functions

function calculator(num1, num2, operation) {
  const validationError = validateInputs(num1, num2);
  if (validationError) {
    return validationError;
  }
  switch (operation) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
      return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
  }
}