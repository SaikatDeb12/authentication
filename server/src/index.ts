import express from "express";
const app = express();
console.log("hello");
const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(2, 3));
