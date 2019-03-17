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
      } else if (x && (_typeof(x) === "object" || typeof x === "function")) {
        // 2.3.3. Otherwise, if x is an object or function
        var isResolvePromiseOrRejectPromiseHaveBeenCalled = false;

        try {
          // 2.3.3.1. Let then be x.then
          var then = x.then;

          if (then && typeof then === "function") {
            // 2.3.3.3. If then is a function, call it with x as this,
            //   first argument resolvePromise, and second argument rejectPromise, where:
            // 2.3.3.3.1 If/when resolvePromise is called with a value y, run [[Resolve]](promise, y)
            then.call(x, // 2.3.3.3.1 If/when resolvePromise is called with a value y, run [[Resolve]](promise, y)
            function (y) {
              if (!isResolvePromiseOrRejectPromiseHaveBeenCalled) {
                PromiseResolutionProcedure.resolve(promise, y);
                isResolvePromiseOrRejectPromiseHaveBeenCalled = true;
              }
            }, // 2.3.3.3.2. If/when rejectPromise is called with a reason r, reject promise with r
            function (r) {
              if (!isResolvePromiseOrRejectPromiseHaveBeenCalled) {
                promise.reject(r);
                isResolvePromiseOrRejectPromiseHaveBeenCalled = true;
              }
            });
          } else {
            // 2.3.3.4. If then is not a function, fulfill promise with x.
            promise.fulfill(x);
            isResolvePromiseOrRejectPromiseHaveBeenCalled = true;
          }
        } catch (e) {
          // 2.3.3.2. If retrieving the property x.then results in a thrown exception e,
          //     reject promise with e as the reason.
          // 2.3.3.3.4. If calling then throws an exception e
          if (!isResolvePromiseOrRejectPromiseHaveBeenCalled) {
            promise.reject(e);
            isResolvePromiseOrRejectPromiseHaveBeenCalled = true;
          } // 2.3.3.3.4.1 If resolvePromise or rejectPromise have been called, ignore it.

        }
      } else {
        // 2.3.4. If x is not an object or function, fulfill promise with x.
        promise.fulfill(x);
      }
    }
  }]);

  return PromiseResolutionProcedure;
}();

exports.default = PromiseResolutionProcedure;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qcm9taXNlUmVzb2x1dGlvblByb2NlZHVyZS50cyJdLCJuYW1lcyI6WyJQcm9taXNlUmVzb2x1dGlvblByb2NlZHVyZSIsInByb21pc2UiLCJ4IiwicmVqZWN0IiwiVHlwZUVycm9yIiwiTXlQcm9taXNlIiwic3RhdGUiLCJQcm9taXNlU3RhdGUiLCJQRU5ESU5HIiwidGhlbiIsInZhbCIsInJlc29sdmUiLCJyZWFzb24iLCJhZG9wdFN0YXRlT2YiLCJpc1Jlc29sdmVQcm9taXNlT3JSZWplY3RQcm9taXNlSGF2ZUJlZW5DYWxsZWQiLCJjYWxsIiwieSIsInIiLCJmdWxmaWxsIiwiZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSwwQjs7Ozs7Ozs7O0FBRW5COzRCQUNzQkMsTyxFQUFvQkMsQyxFQUFRO0FBRWhELFVBQUlELE9BQU8sS0FBS0MsQ0FBaEIsRUFBbUI7QUFDakI7QUFDQTtBQUNBRCxRQUFBQSxPQUFPLENBQUNFLE1BQVIsQ0FBZSxJQUFJQyxTQUFKLENBQWMsd0NBQWQsQ0FBZjtBQUNELE9BSkQsTUFJTyxJQUFJRixDQUFDLFlBQVlHLGtCQUFqQixFQUE0QjtBQUNqQztBQUNBLFlBQUlILENBQUMsQ0FBQ0ksS0FBRixLQUFZQywyQkFBYUMsT0FBN0IsRUFBc0M7QUFDcEM7QUFDQU4sVUFBQUEsQ0FBQyxDQUFDTyxJQUFGLENBQU8sVUFBQ0MsR0FBRCxFQUFjO0FBQ25CO0FBQ0FWLFlBQUFBLDBCQUEwQixDQUFDVyxPQUEzQixDQUFtQ1YsT0FBbkMsRUFBNENTLEdBQTVDO0FBQ0QsV0FIRCxFQUdHLFVBQUNFLE1BQUQsRUFBaUI7QUFDbEI7QUFDQVgsWUFBQUEsT0FBTyxDQUFDRSxNQUFSLENBQWVTLE1BQWY7QUFDRCxXQU5EO0FBT0QsU0FURCxNQVNPO0FBQ0w7QUFDQVgsVUFBQUEsT0FBTyxDQUFDWSxZQUFSLENBQXFCWCxDQUFyQjtBQUNEO0FBQ0YsT0FmTSxNQWVBLElBQUlBLENBQUMsS0FBSyxRQUFPQSxDQUFQLE1BQWEsUUFBYixJQUF5QixPQUFPQSxDQUFQLEtBQWEsVUFBM0MsQ0FBTCxFQUE2RDtBQUNsRTtBQUNBLFlBQUlZLDZDQUE2QyxHQUFHLEtBQXBEOztBQUNBLFlBQUk7QUFDRjtBQUNBLGNBQU1MLElBQUksR0FBR1AsQ0FBQyxDQUFDTyxJQUFmOztBQUNBLGNBQUlBLElBQUksSUFBSSxPQUFPQSxJQUFQLEtBQWdCLFVBQTVCLEVBQXdDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBQSxZQUFBQSxJQUFJLENBQUNNLElBQUwsQ0FBVWIsQ0FBVixFQUNFO0FBQ0Esc0JBQUNjLENBQUQsRUFBWTtBQUNWLGtCQUFJLENBQUNGLDZDQUFMLEVBQW9EO0FBQ2xEZCxnQkFBQUEsMEJBQTBCLENBQUNXLE9BQTNCLENBQW1DVixPQUFuQyxFQUE0Q2UsQ0FBNUM7QUFDQUYsZ0JBQUFBLDZDQUE2QyxHQUFHLElBQWhEO0FBQ0Q7QUFDRixhQVBILEVBUUU7QUFDQSxzQkFBQ0csQ0FBRCxFQUFZO0FBQ1Ysa0JBQUksQ0FBQ0gsNkNBQUwsRUFBb0Q7QUFDbERiLGdCQUFBQSxPQUFPLENBQUNFLE1BQVIsQ0FBZWMsQ0FBZjtBQUNBSCxnQkFBQUEsNkNBQTZDLEdBQUcsSUFBaEQ7QUFDRDtBQUNGLGFBZEg7QUFlRCxXQW5CRCxNQW1CTztBQUNMO0FBQ0FiLFlBQUFBLE9BQU8sQ0FBQ2lCLE9BQVIsQ0FBZ0JoQixDQUFoQjtBQUNBWSxZQUFBQSw2Q0FBNkMsR0FBRyxJQUFoRDtBQUNEO0FBQ0YsU0EzQkQsQ0EyQkUsT0FBT0ssQ0FBUCxFQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsY0FBSSxDQUFDTCw2Q0FBTCxFQUFvRDtBQUNsRGIsWUFBQUEsT0FBTyxDQUFDRSxNQUFSLENBQWVnQixDQUFmO0FBQ0FMLFlBQUFBLDZDQUE2QyxHQUFHLElBQWhEO0FBQ0QsV0FQUyxDQVFWOztBQUNEO0FBQ0YsT0F4Q00sTUF3Q0E7QUFDTDtBQUNBYixRQUFBQSxPQUFPLENBQUNpQixPQUFSLENBQWdCaEIsQ0FBaEI7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNeVByb21pc2UgZnJvbSBcIi4vTXlQcm9taXNlXCI7XG5pbXBvcnQgeyBQcm9taXNlU3RhdGUgfSBmcm9tIFwiLi9Qcm9taXNlU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbWlzZVJlc29sdXRpb25Qcm9jZWR1cmUge1xuXG4gIC8vIHByb21pc2UgcmVzb2x1dGlvbiBwcm9jZXNzIGFzIHBlciBzcGVjaWZpY2F0aW9uXG4gIHB1YmxpYyBzdGF0aWMgcmVzb2x2ZShwcm9taXNlOiBNeVByb21pc2UsIHg6IGFueSkge1xuXG4gICAgaWYgKHByb21pc2UgPT09IHgpIHtcbiAgICAgIC8vIDIuMy4xLiBJZiBwcm9taXNlIGFuZCB4IHJlZmVyIHRvIHRoZSBzYW1lIG9iamVjdCxcbiAgICAgIC8vICAgcmVqZWN0IHByb21pc2Ugd2l0aCBhIFR5cGVFcnJvciBhcyB0aGUgcmVhc29uLlxuICAgICAgcHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcInByb21pc2UgYW5kIHggcmVmZXIgdG8gdGhlIHNhbWUgb2JqZWN0XCIpKTtcbiAgICB9IGVsc2UgaWYgKHggaW5zdGFuY2VvZiBNeVByb21pc2UpIHtcbiAgICAgIC8vIDIuMy4yIElmIHggaXMgYSBwcm9taXNlXG4gICAgICBpZiAoeC5zdGF0ZSA9PT0gUHJvbWlzZVN0YXRlLlBFTkRJTkcpIHtcbiAgICAgICAgLy8gMi4zLjIuMSBJZiB4IGlzIHBlbmRpbmcsIHByb21pc2UgbXVzdCByZW1haW4gcGVuZGluZyB1bnRpbCB4IGlzIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cbiAgICAgICAgeC50aGVuKCh2YWw6IGFueSkgPT4ge1xuICAgICAgICAgIC8vIDIuMy4yLjIgSWYvd2hlbiB4IGlzIGZ1bGZpbGxlZCwgZnVsZmlsbCBwcm9taXNlIHdpdGggdGhlIHNhbWUgdmFsdWUuXG4gICAgICAgICAgUHJvbWlzZVJlc29sdXRpb25Qcm9jZWR1cmUucmVzb2x2ZShwcm9taXNlLCB2YWwpO1xuICAgICAgICB9LCAocmVhc29uOiBhbnkpID0+IHtcbiAgICAgICAgICAvLyAyLjMuMi4zIElmL3doZW4geCBpcyByZWplY3RlZCwgcmVqZWN0IHByb21pc2Ugd2l0aCB0aGUgc2FtZSByZWFzb25cbiAgICAgICAgICBwcm9taXNlLnJlamVjdChyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFkb3B0IGl0J3Mgc3RhdGVcbiAgICAgICAgcHJvbWlzZS5hZG9wdFN0YXRlT2YoeCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh4ICYmICh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgLy8gMi4zLjMuIE90aGVyd2lzZSwgaWYgeCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb25cbiAgICAgIGxldCBpc1Jlc29sdmVQcm9taXNlT3JSZWplY3RQcm9taXNlSGF2ZUJlZW5DYWxsZWQgPSBmYWxzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIDIuMy4zLjEuIExldCB0aGVuIGJlIHgudGhlblxuICAgICAgICBjb25zdCB0aGVuID0geC50aGVuO1xuICAgICAgICBpZiAodGhlbiAmJiB0eXBlb2YgdGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gMi4zLjMuMy4gSWYgdGhlbiBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0IHdpdGggeCBhcyB0aGlzLFxuICAgICAgICAgIC8vICAgZmlyc3QgYXJndW1lbnQgcmVzb2x2ZVByb21pc2UsIGFuZCBzZWNvbmQgYXJndW1lbnQgcmVqZWN0UHJvbWlzZSwgd2hlcmU6XG4gICAgICAgICAgLy8gMi4zLjMuMy4xIElmL3doZW4gcmVzb2x2ZVByb21pc2UgaXMgY2FsbGVkIHdpdGggYSB2YWx1ZSB5LCBydW4gW1tSZXNvbHZlXV0ocHJvbWlzZSwgeSlcbiAgICAgICAgICB0aGVuLmNhbGwoeCxcbiAgICAgICAgICAgIC8vIDIuMy4zLjMuMSBJZi93aGVuIHJlc29sdmVQcm9taXNlIGlzIGNhbGxlZCB3aXRoIGEgdmFsdWUgeSwgcnVuIFtbUmVzb2x2ZV1dKHByb21pc2UsIHkpXG4gICAgICAgICAgICAoeTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghaXNSZXNvbHZlUHJvbWlzZU9yUmVqZWN0UHJvbWlzZUhhdmVCZWVuQ2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZVJlc29sdXRpb25Qcm9jZWR1cmUucmVzb2x2ZShwcm9taXNlLCB5KTtcbiAgICAgICAgICAgICAgICBpc1Jlc29sdmVQcm9taXNlT3JSZWplY3RQcm9taXNlSGF2ZUJlZW5DYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gMi4zLjMuMy4yLiBJZi93aGVuIHJlamVjdFByb21pc2UgaXMgY2FsbGVkIHdpdGggYSByZWFzb24gciwgcmVqZWN0IHByb21pc2Ugd2l0aCByXG4gICAgICAgICAgICAocjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghaXNSZXNvbHZlUHJvbWlzZU9yUmVqZWN0UHJvbWlzZUhhdmVCZWVuQ2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3Qocik7XG4gICAgICAgICAgICAgICAgaXNSZXNvbHZlUHJvbWlzZU9yUmVqZWN0UHJvbWlzZUhhdmVCZWVuQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gMi4zLjMuNC4gSWYgdGhlbiBpcyBub3QgYSBmdW5jdGlvbiwgZnVsZmlsbCBwcm9taXNlIHdpdGggeC5cbiAgICAgICAgICBwcm9taXNlLmZ1bGZpbGwoeCk7XG4gICAgICAgICAgaXNSZXNvbHZlUHJvbWlzZU9yUmVqZWN0UHJvbWlzZUhhdmVCZWVuQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyAyLjMuMy4yLiBJZiByZXRyaWV2aW5nIHRoZSBwcm9wZXJ0eSB4LnRoZW4gcmVzdWx0cyBpbiBhIHRocm93biBleGNlcHRpb24gZSxcbiAgICAgICAgLy8gICAgIHJlamVjdCBwcm9taXNlIHdpdGggZSBhcyB0aGUgcmVhc29uLlxuICAgICAgICAvLyAyLjMuMy4zLjQuIElmIGNhbGxpbmcgdGhlbiB0aHJvd3MgYW4gZXhjZXB0aW9uIGVcbiAgICAgICAgaWYgKCFpc1Jlc29sdmVQcm9taXNlT3JSZWplY3RQcm9taXNlSGF2ZUJlZW5DYWxsZWQpIHtcbiAgICAgICAgICBwcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgICBpc1Jlc29sdmVQcm9taXNlT3JSZWplY3RQcm9taXNlSGF2ZUJlZW5DYWxsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIDIuMy4zLjMuNC4xIElmIHJlc29sdmVQcm9taXNlIG9yIHJlamVjdFByb21pc2UgaGF2ZSBiZWVuIGNhbGxlZCwgaWdub3JlIGl0LlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyAyLjMuNC4gSWYgeCBpcyBub3QgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uLCBmdWxmaWxsIHByb21pc2Ugd2l0aCB4LlxuICAgICAgcHJvbWlzZS5mdWxmaWxsKHgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=