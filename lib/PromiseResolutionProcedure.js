"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MyPromise = _interopRequireDefault(require("./MyPromise"));

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
      } else if (x instanceof _MyPromise.default) {// 2.3.2 If x is a promise

        /** @todo */
      } else if (x && (_typeof(x) === "object" || typeof x === "function")) {// 2.3.3. Otherwise, if x is an object or function

        /** @todo */
      } else {// 2.3.4. If x is not an object or function, fulfill promise with x.

          /** @todo */
        }
    }
  }]);

  return PromiseResolutionProcedure;
}();

exports.default = PromiseResolutionProcedure;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qcm9taXNlUmVzb2x1dGlvblByb2NlZHVyZS50cyJdLCJuYW1lcyI6WyJQcm9taXNlUmVzb2x1dGlvblByb2NlZHVyZSIsInByb21pc2UiLCJ4IiwicmVqZWN0IiwiVHlwZUVycm9yIiwiTXlQcm9taXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJBLDBCOzs7Ozs7Ozs7QUFFbkI7NEJBQ3NCQyxPLEVBQW9CQyxDLEVBQVE7QUFFaEQsVUFBSUQsT0FBTyxLQUFLQyxDQUFoQixFQUFtQjtBQUNqQjtBQUNBO0FBQ0FELFFBQUFBLE9BQU8sQ0FBQ0UsTUFBUixDQUFlLElBQUlDLFNBQUosQ0FBYyx3Q0FBZCxDQUFmO0FBQ0QsT0FKRCxNQUlPLElBQUlGLENBQUMsWUFBWUcsa0JBQWpCLEVBQTRCLENBQ2pDOztBQUNBO0FBQ0QsT0FITSxNQUdBLElBQUlILENBQUMsS0FBSyxRQUFPQSxDQUFQLE1BQWEsUUFBYixJQUF5QixPQUFPQSxDQUFQLEtBQWEsVUFBM0MsQ0FBTCxFQUE2RCxDQUNsRTs7QUFDQTtBQUNELE9BSE0sTUFHQSxDQUNMOztBQUNBO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTXlQcm9taXNlIGZyb20gXCIuL015UHJvbWlzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9taXNlUmVzb2x1dGlvblByb2NlZHVyZSB7XG5cbiAgLy8gcHJvbWlzZSByZXNvbHV0aW9uIHByb2Nlc3MgYXMgcGVyIHNwZWNpZmljYXRpb25cbiAgcHVibGljIHN0YXRpYyByZXNvbHZlKHByb21pc2U6IE15UHJvbWlzZSwgeDogYW55KSB7XG5cbiAgICBpZiAocHJvbWlzZSA9PT0geCkge1xuICAgICAgLy8gMi4zLjEuIElmIHByb21pc2UgYW5kIHggcmVmZXIgdG8gdGhlIHNhbWUgb2JqZWN0LFxuICAgICAgLy8gICByZWplY3QgcHJvbWlzZSB3aXRoIGEgVHlwZUVycm9yIGFzIHRoZSByZWFzb24uXG4gICAgICBwcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKFwicHJvbWlzZSBhbmQgeCByZWZlciB0byB0aGUgc2FtZSBvYmplY3RcIikpO1xuICAgIH0gZWxzZSBpZiAoeCBpbnN0YW5jZW9mIE15UHJvbWlzZSkge1xuICAgICAgLy8gMi4zLjIgSWYgeCBpcyBhIHByb21pc2VcbiAgICAgIC8qKiBAdG9kbyAqL1xuICAgIH0gZWxzZSBpZiAoeCAmJiAodHlwZW9mIHggPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgIC8vIDIuMy4zLiBPdGhlcndpc2UsIGlmIHggaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uXG4gICAgICAvKiogQHRvZG8gKi9cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gMi4zLjQuIElmIHggaXMgbm90IGFuIG9iamVjdCBvciBmdW5jdGlvbiwgZnVsZmlsbCBwcm9taXNlIHdpdGggeC5cbiAgICAgIC8qKiBAdG9kbyAqL1xuICAgIH1cbiAgfVxuXG59XG4iXX0=