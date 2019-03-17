"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PromiseState = require("./PromiseState");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 1.1. “promise” is an object or function with a then method whose behavior conforms to the Promises/A+ specification.
var MyPromise =
/*#__PURE__*/
function () {
  function MyPromise() {
    var executor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, MyPromise);

    _defineProperty(this, "value", void 0);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "onFulfilledHandler", void 0);

    _defineProperty(this, "onRejectedHandler", void 0);

    this.value = null; // default promise value as null

    this.state = _PromiseState.PromiseState.PENDING; // default promise state as pending
    // register default handlers for promise on fulfillment and rejection

    this.onFulfilledHandler = function (value) {
      return value;
    };

    this.onRejectedHandler = function (reason) {
      throw reason;
    }; // bind executor resolve reject callbacks


    if (executor) {
      executor(function (value) {
        /** @todo Promise Resolution Procedure */
      }, function (reason) {
        /** @todo Promise Rejection Procedure */
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NeVByb21pc2UudHMiXSwibmFtZXMiOlsiTXlQcm9taXNlIiwiZXhlY3V0b3IiLCJ2YWx1ZSIsInN0YXRlIiwiUHJvbWlzZVN0YXRlIiwiUEVORElORyIsIm9uRnVsZmlsbGVkSGFuZGxlciIsIm9uUmVqZWN0ZWRIYW5kbGVyIiwicmVhc29uIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7QUFHQTtJQUNxQkEsUzs7O0FBUW5CLHVCQUFtRDtBQUFBLFFBQXZDQyxRQUF1Qyx1RUFBTixJQUFNOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNqRCxTQUFLQyxLQUFMLEdBQWEsSUFBYixDQURpRCxDQUM5Qjs7QUFDbkIsU0FBS0MsS0FBTCxHQUFhQywyQkFBYUMsT0FBMUIsQ0FGaUQsQ0FFZDtBQUVuQzs7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixVQUFDSixLQUFEO0FBQUEsYUFBZ0JBLEtBQWhCO0FBQUEsS0FBMUI7O0FBQ0EsU0FBS0ssaUJBQUwsR0FBeUIsVUFBQ0MsTUFBRCxFQUF1QjtBQUFFLFlBQU1BLE1BQU47QUFBZSxLQUFqRSxDQU5pRCxDQVFqRDs7O0FBQ0EsUUFBSVAsUUFBSixFQUFjO0FBQ1pBLE1BQUFBLFFBQVEsQ0FBQyxVQUFDQyxLQUFELEVBQWdCO0FBQ3ZCO0FBQ0QsT0FGTyxFQUVMLFVBQUNNLE1BQUQsRUFBaUI7QUFDbEI7QUFDRCxPQUpPLENBQVI7QUFLRDtBQUNGOzs7O3lCQUVXQyxXLEVBQWtCQyxVLEVBQTRCO0FBQ3hELFlBQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQU47QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQcm9taXNlU3RhdGUgfSBmcm9tIFwiLi9Qcm9taXNlU3RhdGVcIjtcbmltcG9ydCBUaGVuYWJsZSBmcm9tIFwiLi9UaGVuYWJsZVwiO1xuXG4vLyAxLjEuIOKAnHByb21pc2XigJ0gaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSB0aGVuIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGUgUHJvbWlzZXMvQSsgc3BlY2lmaWNhdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15UHJvbWlzZSBpbXBsZW1lbnRzIFRoZW5hYmxlIHtcblxuICBwcml2YXRlIHZhbHVlOiBhbnk7XG4gIHByaXZhdGUgc3RhdGU6IFByb21pc2VTdGF0ZTtcblxuICBwcml2YXRlIG9uRnVsZmlsbGVkSGFuZGxlcjogQ2FsbGFibGVGdW5jdGlvbjtcbiAgcHJpdmF0ZSBvblJlamVjdGVkSGFuZGxlcjogQ2FsbGFibGVGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3RvcihleGVjdXRvcjogQ2FsbGFibGVGdW5jdGlvbnxhbnkgPSBudWxsKSB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7IC8vIGRlZmF1bHQgcHJvbWlzZSB2YWx1ZSBhcyBudWxsXG4gICAgdGhpcy5zdGF0ZSA9IFByb21pc2VTdGF0ZS5QRU5ESU5HOyAvLyBkZWZhdWx0IHByb21pc2Ugc3RhdGUgYXMgcGVuZGluZ1xuXG4gICAgLy8gcmVnaXN0ZXIgZGVmYXVsdCBoYW5kbGVycyBmb3IgcHJvbWlzZSBvbiBmdWxmaWxsbWVudCBhbmQgcmVqZWN0aW9uXG4gICAgdGhpcy5vbkZ1bGZpbGxlZEhhbmRsZXIgPSAodmFsdWU6IGFueSkgPT4gdmFsdWU7XG4gICAgdGhpcy5vblJlamVjdGVkSGFuZGxlciA9IChyZWFzb246IEVycm9yfGFueSkgPT4geyB0aHJvdyByZWFzb247IH07XG5cbiAgICAvLyBiaW5kIGV4ZWN1dG9yIHJlc29sdmUgcmVqZWN0IGNhbGxiYWNrc1xuICAgIGlmIChleGVjdXRvcikge1xuICAgICAgZXhlY3V0b3IoKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgLyoqIEB0b2RvIFByb21pc2UgUmVzb2x1dGlvbiBQcm9jZWR1cmUgKi9cbiAgICAgIH0sIChyZWFzb246IGFueSkgPT4ge1xuICAgICAgICAvKiogQHRvZG8gUHJvbWlzZSBSZWplY3Rpb24gUHJvY2VkdXJlICovXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdGhlbihvbkZ1bGZpbGxlZDogYW55LCBvblJlamVjdGVkOiBhbnkpOiBNeVByb21pc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbn1cbiJdfQ==