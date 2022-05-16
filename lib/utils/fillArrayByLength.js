"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fillArray;

function fillArray(arr, length) {
  for (var i = 0; i < length; ++i) {
    if (arr[i] === undefined) {
      arr[i] = arr[i - 1 || 0];
    }
  }

  return arr;
}