const test = require("node:test");
const assert = require("node:assert/strict");

const { add } = require("../index");

test("adds two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("adds negative numbers", () => {
  assert.equal(add(-4, 10), 6);
});
