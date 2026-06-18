const test = require("node:test");
const assert = require("node:assert/strict");

const { add, subtract, multiply } = require("../index");

test("adds two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("adds negative numbers", () => {
  assert.equal(add(-4, 10), 6);
});

test("subtracts two numbers", () => {
  assert.equal(subtract(10, 3), 7);
});

test("multiplies two numbers", () => {
  assert.equal(multiply(4, 5), 20);
});
