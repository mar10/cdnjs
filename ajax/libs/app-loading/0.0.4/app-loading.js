/***********************************************
 *app-loading
 *(c) 2015
 *github.com/aprilorange/app-loading
***********************************************/

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {

  var definition = function definition(W, D) {
    var appLoading = (function () {
      function appLoading() {
        _classCallCheck(this, appLoading);

        this.opts = {
          className: 'app-loading',
          loadingBar: '.loading-bar',
          color: null
        };
      }

      _createClass(appLoading, [{
        key: 'start',
        value: function start(color) {
          console.log('start');
          this.showBar(color);
        }
      }, {
        key: 'stop',
        value: function stop() {
          console.log('stop');
          this.hideBar();
        }
      }, {
        key: 'showBar',
        value: function showBar(color) {
          var bar = this.getBar();
          if (this.opts.color) bar.style.backgroundColor = this.opts.color;
          if (color) bar.style.backgroundColor = color;
          D.querySelector('body').classList.add(this.opts.className);
        }
      }, {
        key: 'hideBar',
        value: function hideBar() {
          D.querySelector('body').classList.remove(this.opts.className);
          this.getBar().style.backgroundColor = null;
        }
      }, {
        key: 'getBar',
        value: function getBar() {
          var bar = D.querySelector(this.opts.loadingBar);
          if (!bar) this.initBar();
          return bar;
        }
      }, {
        key: 'initBar',
        value: function initBar() {
          var bar = D.createElement('div');
          bar.className = this.opts.loadingBar.substring(1);
          D.body.appendChild(bar);
        }
      }, {
        key: 'setColor',
        value: function setColor(color) {
          this.opts.color = color;
        }
      }]);

      return appLoading;
    })();

    return new appLoading();
  };(function (context, name, definition) {
    if (typeof module !== 'undefined') {
      module.exports = definition;
    } else if (typeof define === 'function' && define.amd) {
      define(definition);
    } else {
      context[name] = definition;
    }
  })(window, 'appLoading', definition(window, document));
})();