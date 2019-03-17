"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MyPromise = _interopRequireDefault(require("./MyPromise"));

var _PromiseState = require("./PromiseState");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PromiseResolutionProcedure =
/*#__PURE__*/
function () {
  function PromiseResolutionProcedure() {
    _classCallCheck(this, PromiseResolutionProcedure);
  }

  _createClass(PromiseResolutionProcedure, null, [{
    key: "resolve",
    // promise resolution process as per specification
    value: function resolve(promise, x) {
      if (promise === x) {
        // 2.3.1. If promise and x refer to the same object,
        //   reject promise with a TypeError as the reason.
        promise.reject(new TypeError("promise and x refer to the same object"));
      } else if (x instanceof _MyPromise.default) {
        // 2.3.2 If x is a promise
        if (x.state === _PromiseState.PromiseState.PENDING) {
          // 2.3.2.1 If x is pending, promise must remain pending until x is fulfilled or rejected.
          x.then(function (val) {
            // 2.3.2.2 If/when x is fulfilled, fulfill promise with the same value.
            PromiseResolutionProcedure.resolve(promise, val);
          }, function (reason) {
            // 2.3.2.3 If/when x is rejected, reject promise with the same reason
            promise.reject(reason);
          });
        } else {
          // adopt it's state
          promise.adoptStateOf(x);
        }
      } else if (x && (_typeof(x) === "object" || typeof x === "function")) {// 2.3.3. Otherwise, if x is an object or function

        /** @todo */
      } else {
        // 2.3.4. If x is not an object or function, fulfill promise with x.
        promise.fulfill(x);
      }
    }
  }]);

  return PromiseResolutionProcedure;
}();

exports.default = PromiseResolutionProcedure;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qcm9taXNlUmVzb2x1dGlvblByb2NlZHVyZS50cyJdLCJuYW1lcyI6WyJQcm9taXNlUmVzb2x1dGlvblByb2NlZHVyZSIsInByb21pc2UiLCJ4IiwicmVqZWN0IiwiVHlwZUVycm9yIiwiTXlQcm9taXNlIiwic3RhdGUiLCJQcm9taXNlU3RhdGUiLCJQRU5ESU5HIiwidGhlbiIsInZhbCIsInJlc29sdmUiLCJyZWFzb24iLCJhZG9wdFN0YXRlT2YiLCJmdWxmaWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLDBCOzs7Ozs7Ozs7QUFFbkI7NEJBQ3NCQyxPLEVBQW9CQyxDLEVBQVE7QUFFaEQsVUFBSUQsT0FBTyxLQUFLQyxDQUFoQixFQUFtQjtBQUNqQjtBQUNBO0FBQ0FELFFBQUFBLE9BQU8sQ0FBQ0UsTUFBUixDQUFlLElBQUlDLFNBQUosQ0FBYyx3Q0FBZCxDQUFmO0FBQ0QsT0FKRCxNQUlPLElBQUlGLENBQUMsWUFBWUcsa0JBQWpCLEVBQTRCO0FBQ2pDO0FBQ0EsWUFBSUgsQ0FBQyxDQUFDSSxLQUFGLEtBQVlDLDJCQUFhQyxPQUE3QixFQUFzQztBQUNwQztBQUNBTixVQUFBQSxDQUFDLENBQUNPLElBQUYsQ0FBTyxVQUFDQyxHQUFELEVBQWM7QUFDbkI7QUFDQVYsWUFBQUEsMEJBQTBCLENBQUNXLE9BQTNCLENBQW1DVixPQUFuQyxFQUE0Q1MsR0FBNUM7QUFDRCxXQUhELEVBR0csVUFBQ0UsTUFBRCxFQUFpQjtBQUNsQjtBQUNBWCxZQUFBQSxPQUFPLENBQUNFLE1BQVIsQ0FBZVMsTUFBZjtBQUNELFdBTkQ7QUFPRCxTQVRELE1BU087QUFDTDtBQUNBWCxVQUFBQSxPQUFPLENBQUNZLFlBQVIsQ0FBcUJYLENBQXJCO0FBQ0Q7QUFDRixPQWZNLE1BZUEsSUFBSUEsQ0FBQyxLQUFLLFFBQU9BLENBQVAsTUFBYSxRQUFiLElBQXlCLE9BQU9BLENBQVAsS0FBYSxVQUEzQyxDQUFMLEVBQTZELENBQ2xFOztBQUNBO0FBQ0QsT0FITSxNQUdBO0FBQ0w7QUFDQUQsUUFBQUEsT0FBTyxDQUFDYSxPQUFSLENBQWdCWixDQUFoQjtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE15UHJvbWlzZSBmcm9tIFwiLi9NeVByb21pc2VcIjtcbmltcG9ydCB7IFByb21pc2VTdGF0ZSB9IGZyb20gXCIuL1Byb21pc2VTdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9taXNlUmVzb2x1dGlvblByb2NlZHVyZSB7XG5cbiAgLy8gcHJvbWlzZSByZXNvbHV0aW9uIHByb2Nlc3MgYXMgcGVyIHNwZWNpZmljYXRpb25cbiAgcHVibGljIHN0YXRpYyByZXNvbHZlKHByb21pc2U6IE15UHJvbWlzZSwgeDogYW55KSB7XG5cbiAgICBpZiAocHJvbWlzZSA9PT0geCkge1xuICAgICAgLy8gMi4zLjEuIElmIHByb21pc2UgYW5kIHggcmVmZXIgdG8gdGhlIHNhbWUgb2JqZWN0LFxuICAgICAgLy8gICByZWplY3QgcHJvbWlzZSB3aXRoIGEgVHlwZUVycm9yIGFzIHRoZSByZWFzb24uXG4gICAgICBwcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFwicHJvbWlzZSBhbmQgeCByZWZlciB0byB0aGUgc2FtZSBvYmplY3RcIikpO1xuICAgIH0gZWxzZSBpZiAoeCBpbnN0YW5jZW9mIE15UHJvbWlzZSkge1xuICAgICAgLy8gMi4zLjIgSWYgeCBpcyBhIHByb21pc2VcbiAgICAgIGlmICh4LnN0YXRlID09PSBQcm9taXNlU3RhdGUuUEVORElORykge1xuICAgICAgICAvLyAyLjMuMi4xIElmIHggaXMgcGVuZGluZywgcHJvbWlzZSBtdXN0IHJlbWFpbiBwZW5kaW5nIHVudGlsIHggaXMgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuICAgICAgICB4LnRoZW4oKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgLy8gMi4zLjIuMiBJZi93aGVuIHggaXMgZnVsZmlsbGVkLCBmdWxmaWxsIHByb21pc2Ugd2l0aCB0aGUgc2FtZSB2YWx1ZS5cbiAgICAgICAgICBQcm9taXNlUmVzb2x1dGlvblByb2NlZHVyZS5yZXNvbHZlKHByb21pc2UsIHZhbCk7XG4gICAgICAgIH0sIChyZWFzb246IGFueSkgPT4ge1xuICAgICAgICAgIC8vIDIuMy4yLjMgSWYvd2hlbiB4IGlzIHJlamVjdGVkLCByZWplY3QgcHJvbWlzZSB3aXRoIHRoZSBzYW1lIHJlYXNvblxuICAgICAgICAgIHByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWRvcHQgaXQncyBzdGF0ZVxuICAgICAgICBwcm9taXNlLmFkb3B0U3RhdGVPZih4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHggJiYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgICAvLyAyLjMuMy4gT3RoZXJ3aXNlLCBpZiB4IGlzIGFuIG9iamVjdCBvciBmdW5jdGlvblxuICAgICAgLyoqIEB0b2RvICovXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIDIuMy40LiBJZiB4IGlzIG5vdCBhbiBvYmplY3Qgb3IgZnVuY3Rpb24sIGZ1bGZpbGwgcHJvbWlzZSB3aXRoIHguXG4gICAgICBwcm9taXNlLmZ1bGZpbGwoeCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==