"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolved = resolved;
exports.rejected = rejected;
exports.deferred = deferred;

var _MyPromise = _interopRequireDefault(require("./MyPromise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// as per requirement for Promises/A+ Compliance Test Suite
// export minimal adapter interface
// resolved(value): creates a promise that is resolved with value.
function resolved(value) {
  return new _MyPromise.default(function (resolve, reject) {
    return resolve(value);
  });
} // rejected(reason): creates a promise that is already rejected with reason.


function rejected(reason) {
  return new _MyPromise.default(function (resolve, reject) {
    return reject(reason);
  });
} // deferred(): creates an object consisting of { promise, resolve, reject }:


function deferred() {
  // resolve(value) resolves the promise with value.
  var resolve; // reject(reason) moves the promise from the pending state to the rejected state, with rejection reason reason.

  var reject; // promise is a promise that is currently in the pending state.

  var promise = new _MyPromise.default(function (rslv, rjct) {
    resolve = rslv; // mapped to return in the object

    reject = rjct; // mapped to return in the object
  });
  return {
    promise: promise,
    resolve: resolve,
    reject: reject
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BZGFwdGVyLnRzIl0sIm5hbWVzIjpbInJlc29sdmVkIiwidmFsdWUiLCJNeVByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVqZWN0ZWQiLCJyZWFzb24iLCJkZWZlcnJlZCIsInByb21pc2UiLCJyc2x2IiwicmpjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQUVBOzs7O0FBRUE7QUFDQTtBQUVBO0FBQ08sU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBOEI7QUFDbkMsU0FBTyxJQUFJQyxrQkFBSixDQUFjLFVBQUNDLE9BQUQsRUFBNEJDLE1BQTVCO0FBQUEsV0FBd0VELE9BQU8sQ0FBQ0YsS0FBRCxDQUEvRTtBQUFBLEdBQWQsQ0FBUDtBQUNELEMsQ0FFRDs7O0FBQ08sU0FBU0ksUUFBVCxDQUFrQkMsTUFBbEIsRUFBcUM7QUFDMUMsU0FBTyxJQUFJSixrQkFBSixDQUFjLFVBQUNDLE9BQUQsRUFBMkNDLE1BQTNDO0FBQUEsV0FBd0VBLE1BQU0sQ0FBQ0UsTUFBRCxDQUE5RTtBQUFBLEdBQWQsQ0FBUDtBQUNELEMsQ0FFRDs7O0FBQ08sU0FBU0MsUUFBVCxHQUFvQjtBQUN6QjtBQUNBLE1BQUlKLE9BQUosQ0FGeUIsQ0FJekI7O0FBQ0EsTUFBSUMsTUFBSixDQUx5QixDQU96Qjs7QUFDQSxNQUFNSSxPQUFrQixHQUFHLElBQUlOLGtCQUFKLENBQ3pCLFVBQUNPLElBQUQsRUFBd0NDLElBQXhDLEVBQWtGO0FBQ2hGUCxJQUFBQSxPQUFPLEdBQUdNLElBQVYsQ0FEZ0YsQ0FDaEU7O0FBQ2hCTCxJQUFBQSxNQUFNLEdBQUdNLElBQVQsQ0FGZ0YsQ0FFakU7QUFDaEIsR0FKd0IsQ0FBM0I7QUFPQSxTQUFPO0FBQUVGLElBQUFBLE9BQU8sRUFBUEEsT0FBRjtBQUFXTCxJQUFBQSxPQUFPLEVBQVBBLE9BQVg7QUFBb0JDLElBQUFBLE1BQU0sRUFBTkE7QUFBcEIsR0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNeVByb21pc2UgZnJvbSBcIi4vTXlQcm9taXNlXCI7XG5cbi8vIGFzIHBlciByZXF1aXJlbWVudCBmb3IgUHJvbWlzZXMvQSsgQ29tcGxpYW5jZSBUZXN0IFN1aXRlXG4vLyBleHBvcnQgbWluaW1hbCBhZGFwdGVyIGludGVyZmFjZVxuXG4vLyByZXNvbHZlZCh2YWx1ZSk6IGNyZWF0ZXMgYSBwcm9taXNlIHRoYXQgaXMgcmVzb2x2ZWQgd2l0aCB2YWx1ZS5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlZCh2YWx1ZTogYW55KSB7XG4gIHJldHVybiBuZXcgTXlQcm9taXNlKChyZXNvbHZlOiBDYWxsYWJsZUZ1bmN0aW9uLCByZWplY3Q6IENhbGxhYmxlRnVuY3Rpb258bnVsbHx1bmRlZmluZWQpID0+IHJlc29sdmUodmFsdWUpKTtcbn1cblxuLy8gcmVqZWN0ZWQocmVhc29uKTogY3JlYXRlcyBhIHByb21pc2UgdGhhdCBpcyBhbHJlYWR5IHJlamVjdGVkIHdpdGggcmVhc29uLlxuZXhwb3J0IGZ1bmN0aW9uIHJlamVjdGVkKHJlYXNvbjogRXJyb3J8YW55KSB7XG4gIHJldHVybiBuZXcgTXlQcm9taXNlKChyZXNvbHZlOiBDYWxsYWJsZUZ1bmN0aW9ufG51bGx8dW5kZWZpbmVkLCByZWplY3Q6IENhbGxhYmxlRnVuY3Rpb24pID0+IHJlamVjdChyZWFzb24pKTtcbn1cblxuLy8gZGVmZXJyZWQoKTogY3JlYXRlcyBhbiBvYmplY3QgY29uc2lzdGluZyBvZiB7IHByb21pc2UsIHJlc29sdmUsIHJlamVjdCB9OlxuZXhwb3J0IGZ1bmN0aW9uIGRlZmVycmVkKCkge1xuICAvLyByZXNvbHZlKHZhbHVlKSByZXNvbHZlcyB0aGUgcHJvbWlzZSB3aXRoIHZhbHVlLlxuICBsZXQgcmVzb2x2ZTogQ2FsbGFibGVGdW5jdGlvbnxudWxsfHVuZGVmaW5lZDtcblxuICAvLyByZWplY3QocmVhc29uKSBtb3ZlcyB0aGUgcHJvbWlzZSBmcm9tIHRoZSBwZW5kaW5nIHN0YXRlIHRvIHRoZSByZWplY3RlZCBzdGF0ZSwgd2l0aCByZWplY3Rpb24gcmVhc29uIHJlYXNvbi5cbiAgbGV0IHJlamVjdDogQ2FsbGFibGVGdW5jdGlvbnxudWxsfHVuZGVmaW5lZDtcblxuICAvLyBwcm9taXNlIGlzIGEgcHJvbWlzZSB0aGF0IGlzIGN1cnJlbnRseSBpbiB0aGUgcGVuZGluZyBzdGF0ZS5cbiAgY29uc3QgcHJvbWlzZTogTXlQcm9taXNlID0gbmV3IE15UHJvbWlzZShcbiAgICAocnNsdjogQ2FsbGFibGVGdW5jdGlvbnxudWxsfHVuZGVmaW5lZCwgcmpjdDogQ2FsbGFibGVGdW5jdGlvbnxudWxsfHVuZGVmaW5lZCkgPT4ge1xuICAgICAgcmVzb2x2ZSA9IHJzbHY7IC8vIG1hcHBlZCB0byByZXR1cm4gaW4gdGhlIG9iamVjdFxuICAgICAgcmVqZWN0ID0gcmpjdDsgLy8gbWFwcGVkIHRvIHJldHVybiBpbiB0aGUgb2JqZWN0XG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4geyBwcm9taXNlLCByZXNvbHZlLCByZWplY3QgfTtcbn1cbiJdfQ==