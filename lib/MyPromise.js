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
    /**
     * 2.1.1. When pending, a promise:
     *   2.1.1.1. may transition to either the fulfilled or rejected state.
     * 2.1.2. When fulfilled, a promise:
     *   2.1.2.1. must not transition to any other state.
     *   2.1.2.2. must have a value, which must not change.
     * 2.1.3. When rejected, a promise:
     *   2.1.3.1. must not transition to any other state.
     *   2.1.3.2. must have a reason, which must not change.
     *
     * @param state state to transition to
     * @param value value passed with the transition for
     */

  }, {
    key: "transitionState",
    value: function transitionState(state, value) {
      if (this.state === state || this.state !== _PromiseState.PromiseState.PENDING) {
        // if the current state is same as the state being transitioned to
        // or the promise is not currently in pending state
        // do nothing
        return;
      }

      this.value = value;
      this.state = state;
      /** @todo ripple state transition effect */
    }
  }]);

  return MyPromise;
}();

exports.default = MyPromise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NeVByb21pc2UudHMiXSwibmFtZXMiOlsiTXlQcm9taXNlIiwiZXhlY3V0b3IiLCJ2YWx1ZSIsInN0YXRlIiwiUHJvbWlzZVN0YXRlIiwiUEVORElORyIsIm9uRnVsZmlsbGVkSGFuZGxlciIsIm9uUmVqZWN0ZWRIYW5kbGVyIiwicmVhc29uIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7QUFHQTtJQUNxQkEsUzs7O0FBUW5CLHVCQUFtRDtBQUFBLFFBQXZDQyxRQUF1Qyx1RUFBTixJQUFNOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNqRCxTQUFLQyxLQUFMLEdBQWEsSUFBYixDQURpRCxDQUM5Qjs7QUFDbkIsU0FBS0MsS0FBTCxHQUFhQywyQkFBYUMsT0FBMUIsQ0FGaUQsQ0FFZDtBQUVuQzs7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixVQUFDSixLQUFEO0FBQUEsYUFBZ0JBLEtBQWhCO0FBQUEsS0FBMUI7O0FBQ0EsU0FBS0ssaUJBQUwsR0FBeUIsVUFBQ0MsTUFBRCxFQUF1QjtBQUFFLFlBQU1BLE1BQU47QUFBZSxLQUFqRSxDQU5pRCxDQVFqRDs7O0FBQ0EsUUFBSVAsUUFBSixFQUFjO0FBQ1pBLE1BQUFBLFFBQVEsQ0FBQyxVQUFDQyxLQUFELEVBQWdCO0FBQ3ZCO0FBQ0QsT0FGTyxFQUVMLFVBQUNNLE1BQUQsRUFBaUI7QUFDbEI7QUFDRCxPQUpPLENBQVI7QUFLRDtBQUNGOzs7O3lCQUVXQyxXLEVBQWtCQyxVLEVBQTRCO0FBQ3hELFlBQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQU47QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O29DQWF1QlIsSyxFQUFxQkQsSyxFQUFrQjtBQUU1RCxVQUFJLEtBQUtDLEtBQUwsS0FBZUEsS0FBZixJQUF3QixLQUFLQSxLQUFMLEtBQWVDLDJCQUFhQyxPQUF4RCxFQUFpRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVELFdBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUVBO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUHJvbWlzZVN0YXRlIH0gZnJvbSBcIi4vUHJvbWlzZVN0YXRlXCI7XG5pbXBvcnQgVGhlbmFibGUgZnJvbSBcIi4vVGhlbmFibGVcIjtcblxuLy8gMS4xLiDigJxwcm9taXNl4oCdIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgdGhlbiBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhlIFByb21pc2VzL0ErIHNwZWNpZmljYXRpb24uXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVByb21pc2UgaW1wbGVtZW50cyBUaGVuYWJsZSB7XG5cbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xuICBwcml2YXRlIHN0YXRlOiBQcm9taXNlU3RhdGU7XG5cbiAgcHJpdmF0ZSBvbkZ1bGZpbGxlZEhhbmRsZXI6IENhbGxhYmxlRnVuY3Rpb247XG4gIHByaXZhdGUgb25SZWplY3RlZEhhbmRsZXI6IENhbGxhYmxlRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoZXhlY3V0b3I6IENhbGxhYmxlRnVuY3Rpb258YW55ID0gbnVsbCkge1xuICAgIHRoaXMudmFsdWUgPSBudWxsOyAvLyBkZWZhdWx0IHByb21pc2UgdmFsdWUgYXMgbnVsbFxuICAgIHRoaXMuc3RhdGUgPSBQcm9taXNlU3RhdGUuUEVORElORzsgLy8gZGVmYXVsdCBwcm9taXNlIHN0YXRlIGFzIHBlbmRpbmdcblxuICAgIC8vIHJlZ2lzdGVyIGRlZmF1bHQgaGFuZGxlcnMgZm9yIHByb21pc2Ugb24gZnVsZmlsbG1lbnQgYW5kIHJlamVjdGlvblxuICAgIHRoaXMub25GdWxmaWxsZWRIYW5kbGVyID0gKHZhbHVlOiBhbnkpID0+IHZhbHVlO1xuICAgIHRoaXMub25SZWplY3RlZEhhbmRsZXIgPSAocmVhc29uOiBFcnJvcnxhbnkpID0+IHsgdGhyb3cgcmVhc29uOyB9O1xuXG4gICAgLy8gYmluZCBleGVjdXRvciByZXNvbHZlIHJlamVjdCBjYWxsYmFja3NcbiAgICBpZiAoZXhlY3V0b3IpIHtcbiAgICAgIGV4ZWN1dG9yKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgIC8qKiBAdG9kbyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlICovXG4gICAgICB9LCAocmVhc29uOiBhbnkpID0+IHtcbiAgICAgICAgLyoqIEB0b2RvIFByb21pc2UgUmVqZWN0aW9uIFByb2NlZHVyZSAqL1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRoZW4ob25GdWxmaWxsZWQ6IGFueSwgb25SZWplY3RlZDogYW55KTogTXlQcm9taXNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAyLjEuMS4gV2hlbiBwZW5kaW5nLCBhIHByb21pc2U6XG4gICAqICAgMi4xLjEuMS4gbWF5IHRyYW5zaXRpb24gdG8gZWl0aGVyIHRoZSBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQgc3RhdGUuXG4gICAqIDIuMS4yLiBXaGVuIGZ1bGZpbGxlZCwgYSBwcm9taXNlOlxuICAgKiAgIDIuMS4yLjEuIG11c3Qgbm90IHRyYW5zaXRpb24gdG8gYW55IG90aGVyIHN0YXRlLlxuICAgKiAgIDIuMS4yLjIuIG11c3QgaGF2ZSBhIHZhbHVlLCB3aGljaCBtdXN0IG5vdCBjaGFuZ2UuXG4gICAqIDIuMS4zLiBXaGVuIHJlamVjdGVkLCBhIHByb21pc2U6XG4gICAqICAgMi4xLjMuMS4gbXVzdCBub3QgdHJhbnNpdGlvbiB0byBhbnkgb3RoZXIgc3RhdGUuXG4gICAqICAgMi4xLjMuMi4gbXVzdCBoYXZlIGEgcmVhc29uLCB3aGljaCBtdXN0IG5vdCBjaGFuZ2UuXG4gICAqXG4gICAqIEBwYXJhbSBzdGF0ZSBzdGF0ZSB0byB0cmFuc2l0aW9uIHRvXG4gICAqIEBwYXJhbSB2YWx1ZSB2YWx1ZSBwYXNzZWQgd2l0aCB0aGUgdHJhbnNpdGlvbiBmb3JcbiAgICovXG4gIHB1YmxpYyB0cmFuc2l0aW9uU3RhdGUoc3RhdGU6IFByb21pc2VTdGF0ZSwgdmFsdWU6IGFueSk6IHZvaWQge1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IHN0YXRlIHx8IHRoaXMuc3RhdGUgIT09IFByb21pc2VTdGF0ZS5QRU5ESU5HKSB7XG4gICAgICAvLyBpZiB0aGUgY3VycmVudCBzdGF0ZSBpcyBzYW1lIGFzIHRoZSBzdGF0ZSBiZWluZyB0cmFuc2l0aW9uZWQgdG9cbiAgICAgIC8vIG9yIHRoZSBwcm9taXNlIGlzIG5vdCBjdXJyZW50bHkgaW4gcGVuZGluZyBzdGF0ZVxuICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICAvKiogQHRvZG8gcmlwcGxlIHN0YXRlIHRyYW5zaXRpb24gZWZmZWN0ICovXG4gIH1cblxufVxuIl19