"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1.1. “promise” is an object or function with a then method whose behavior conforms to the Promises/A+ specification.
var MyPromise =
/*#__PURE__*/
function () {
  function MyPromise() {// promise constructor

    var executor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, MyPromise);
  }

  _createClass(MyPromise, [{
    key: "then",
    value: function then(onFulfilled, onRejected) {
      throw new Error("Method not implemented.");
    }
  }]);

  return MyPromise;
}();

exports.default = MyPromise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NeVByb21pc2UudHMiXSwibmFtZXMiOlsiTXlQcm9taXNlIiwiZXhlY3V0b3IiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFJQTtJQUNxQkEsUzs7O0FBRW5CLHVCQUFtRCxDQUNqRDs7QUFEaUQsUUFBdkNDLFFBQXVDLHVFQUFOLElBQU07O0FBQUE7QUFFbEQ7Ozs7eUJBRVdDLFcsRUFBa0JDLFUsRUFBNEI7QUFDeEQsWUFBTSxJQUFJQyxLQUFKLENBQVUseUJBQVYsQ0FBTjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUaGVuYWJsZSBmcm9tIFwiLi9UaGVuYWJsZVwiO1xuXG4vLyAxLjEuIOKAnHByb21pc2XigJ0gaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSB0aGVuIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGUgUHJvbWlzZXMvQSsgc3BlY2lmaWNhdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UHJvbWlzZSBpbXBsZW1lbnRzIFRoZW5hYmxlIHtcblxuICBjb25zdHJ1Y3RvcihleGVjdXRvcjogQ2FsbGFibGVGdW5jdGlvbnxhbnkgPSBudWxsKSB7XG4gICAgLy8gcHJvbWlzZSBjb25zdHJ1Y3RvclxuICB9XG5cbiAgcHVibGljIHRoZW4ob25GdWxmaWxsZWQ6IGFueSwgb25SZWplY3RlZDogYW55KTogTXlQcm9taXNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuXG59XG4iXX0=