webpackHotUpdate(0,{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(177); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(277);
	
	var _react = __webpack_require__(177);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(279);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Nav = function (_React$Component) {
	  _inherits(Nav, _React$Component);
	
	  function Nav(props) {
	    _classCallCheck(this, Nav);
	
	    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
	
	    _this.state = {
	      menu_styling: 'nav_top_hamburger fa fa-bars fa-lg',
	      menu_wide_styling: 'nav_hamburger fa fa-bars fa-lg',
	      menu_open: 'nav_link_bottom display_none'
	    };
	
	    _this.toggleMenu = _this.toggleMenu.bind(_this);
	    return _this;
	  }
	
	  _createClass(Nav, [{
	    key: 'toggleMenu',
	    value: function toggleMenu() {
	      console.log('click!');
	      var menu = this.state.menu_styling;
	      var menu_wide = this.state.menu_wide_styling;
	
	      if (menu === 'nav_top_hamburger fa fa-bars fa-lg') {
	        this.setState({
	          menu_styling: 'nav_top_hamburger fa fa-close fa-lg',
	          menu_wide_styling: 'nav_hamburger fa fa-close fa-lg',
	          menu_open: 'nav_link_bottom display_block'
	        });
	        return;
	      } else {
	        this.setState({
	          menu_styling: 'nav_top_hamburger fa fa-bars fa-lg',
	          menu_wide_styling: 'nav_hamburger fa fa-bars fa-lg',
	          menu_open: 'nav_link_bottom display_none'
	        });
	        return;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'nav_container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'nav_top_container' },
	          _react2.default.createElement(
	            _reactRouterDom.Link,
	            { to: '/', className: 'nav_title' },
	            'Bookstore'
	          ),
	          _react2.default.createElement('div', { className: this.state.menu_wide_styling, 'aria-hidden': 'true', onClick: this.toggleMenu }),
	          _react2.default.createElement(
	            'div',
	            { className: 'nav_top_search' },
	            _react2.default.createElement('input', { className: 'nav_input', placeholder: 'search' }),
	            _react2.default.createElement(
	              'button',
	              { className: 'nav_search_btn' },
	              'submit'
	            )
	          ),
	          _react2.default.createElement('div', { className: this.state.menu_styling, 'aria-hidden': 'true', onClick: this.toggleMenu }),
	          _react2.default.createElement(
	            'div',
	            { className: 'nav_wide_links_container' },
	            _react2.default.createElement(
	              'div',
	              { className: 'nav_logIn_inauthenticated' },
	              _react2.default.createElement(
	                _reactRouterDom.Link,
	                { to: '/logIn', className: 'nav_wide_links nav_wide_logIn' },
	                'log in'
	              ),
	              _react2.default.createElement(
	                _reactRouterDom.Link,
	                { to: '/signUp', className: 'nav_wide_links' },
	                'sign up'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'nav_logIn_authenticated' },
	              _react2.default.createElement(
	                _reactRouterDom.Link,
	                { to: '/signUp', className: 'nav_wide_links' },
	                'log out'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouterDom.Link,
	              { to: '/about', className: 'nav_wide_links' },
	              'about'
	            ),
	            _react2.default.createElement(
	              _reactRouterDom.Link,
	              { to: '/account', className: 'nav_wide_links' },
	              'account'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'nav_links_container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'nav_links nav_links_search' },
	            _react2.default.createElement('input', { className: 'nav_input', placeholder: 'search' }),
	            _react2.default.createElement(
	              'button',
	              { className: 'nav_search_btn' },
	              'submit'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: this.state.menu_open },
	            _react2.default.createElement(
	              _reactRouterDom.Link,
	              { to: '/logIn' },
	              _react2.default.createElement(
	                'div',
	                { className: 'nav_links' },
	                'log in'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouterDom.Link,
	              { to: '/signUp' },
	              _react2.default.createElement(
	                'div',
	                { className: 'nav_links' },
	                'sign up'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouterDom.Link,
	              { to: '/about' },
	              _react2.default.createElement(
	                'div',
	                { className: 'nav_links' },
	                'about'
	              )
	            ),
	            _react2.default.createElement(
	              _reactRouterDom.Link,
	              { to: '/account' },
	              _react2.default.createElement(
	                'div',
	                { className: 'nav_links' },
	                'account'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Nav;
	}(_react2.default.Component);
	
	exports.default = Nav;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(319); if (makeExportsHot(module, __webpack_require__(177))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Nav.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzPzdlNjEiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJzdGF0ZSIsIm1lbnVfc3R5bGluZyIsIm1lbnVfd2lkZV9zdHlsaW5nIiwibWVudV9vcGVuIiwidG9nZ2xlTWVudSIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwibWVudSIsIm1lbnVfd2lkZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRXFCQSxHOzs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwyR0FDVkEsS0FEVTs7QUFFaEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlLG9DQURKO0FBRVhDLDBCQUFvQixnQ0FGVDtBQUdYQyxrQkFBWTtBQUhELE1BQWI7O0FBTUEsV0FBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQVJnQjtBQVNqQjs7OztrQ0FFVztBQUNWQyxlQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLFdBQUlDLE9BQU8sS0FBS1IsS0FBTCxDQUFXQyxZQUF0QjtBQUNBLFdBQUlRLFlBQVksS0FBS1QsS0FBTCxDQUFXRSxpQkFBM0I7O0FBRUEsV0FBR00sU0FBUyxvQ0FBWixFQUFpRDtBQUMvQyxjQUFLRSxRQUFMLENBQWM7QUFDWlQseUJBQWUscUNBREg7QUFFWkMsOEJBQW9CLGlDQUZSO0FBR1pDLHNCQUFZO0FBSEEsVUFBZDtBQUtBO0FBQ0QsUUFQRCxNQU9PO0FBQ0wsY0FBS08sUUFBTCxDQUFjO0FBQ1pULHlCQUFlLG9DQURIO0FBRVpDLDhCQUFvQixnQ0FGUjtBQUdaQyxzQkFBWTtBQUhBLFVBQWQ7QUFLQTtBQUNEO0FBQ0Y7Ozs4QkFFTztBQUNOLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQSxlQUFNLElBQUcsR0FBVCxFQUFhLFdBQVUsV0FBdkI7QUFBQTtBQUFBLFlBREY7QUFFRSxrREFBSyxXQUFXLEtBQUtILEtBQUwsQ0FBV0UsaUJBQTNCLEVBQThDLGVBQVksTUFBMUQsRUFBaUUsU0FBUyxLQUFLRSxVQUEvRSxHQUZGO0FBR0U7QUFBQTtBQUFBLGVBQUssV0FBVSxnQkFBZjtBQUNFLHNEQUFPLFdBQVUsV0FBakIsRUFBNkIsYUFBWSxRQUF6QyxHQURGO0FBRUU7QUFBQTtBQUFBLGlCQUFRLFdBQVUsZ0JBQWxCO0FBQUE7QUFBQTtBQUZGLFlBSEY7QUFPRSxrREFBSyxXQUFXLEtBQUtKLEtBQUwsQ0FBV0MsWUFBM0IsRUFBeUMsZUFBWSxNQUFyRCxFQUE0RCxTQUFTLEtBQUtHLFVBQTFFLEdBUEY7QUFRRTtBQUFBO0FBQUEsZUFBSyxXQUFVLDBCQUFmO0FBQ0U7QUFBQTtBQUFBLGlCQUFLLFdBQVUsMkJBQWY7QUFDRTtBQUFBO0FBQUEsbUJBQU0sSUFBRyxRQUFULEVBQWtCLFdBQVUsK0JBQTVCO0FBQUE7QUFBQSxnQkFERjtBQUVFO0FBQUE7QUFBQSxtQkFBTSxJQUFHLFNBQVQsRUFBbUIsV0FBVSxnQkFBN0I7QUFBQTtBQUFBO0FBRkYsY0FERjtBQUtFO0FBQUE7QUFBQSxpQkFBSyxXQUFVLHlCQUFmO0FBQ0U7QUFBQTtBQUFBLG1CQUFNLElBQUcsU0FBVCxFQUFtQixXQUFVLGdCQUE3QjtBQUFBO0FBQUE7QUFERixjQUxGO0FBUUU7QUFBQTtBQUFBLGlCQUFNLElBQUcsUUFBVCxFQUFrQixXQUFVLGdCQUE1QjtBQUFBO0FBQUEsY0FSRjtBQVNFO0FBQUE7QUFBQSxpQkFBTSxJQUFHLFVBQVQsRUFBb0IsV0FBVSxnQkFBOUI7QUFBQTtBQUFBO0FBVEY7QUFSRixVQURGO0FBcUJFO0FBQUE7QUFBQSxhQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsZUFBSyxXQUFVLDRCQUFmO0FBQ0Usc0RBQU8sV0FBVSxXQUFqQixFQUE2QixhQUFZLFFBQXpDLEdBREY7QUFFRTtBQUFBO0FBQUEsaUJBQVEsV0FBVSxnQkFBbEI7QUFBQTtBQUFBO0FBRkYsWUFERjtBQUtFO0FBQUE7QUFBQSxlQUFLLFdBQVcsS0FBS0osS0FBTCxDQUFXRyxTQUEzQjtBQUNFO0FBQUE7QUFBQSxpQkFBTSxJQUFHLFFBQVQ7QUFBa0I7QUFBQTtBQUFBLG1CQUFLLFdBQVUsV0FBZjtBQUFBO0FBQUE7QUFBbEIsY0FERjtBQUVFO0FBQUE7QUFBQSxpQkFBTSxJQUFHLFNBQVQ7QUFBbUI7QUFBQTtBQUFBLG1CQUFLLFdBQVUsV0FBZjtBQUFBO0FBQUE7QUFBbkIsY0FGRjtBQUdFO0FBQUE7QUFBQSxpQkFBTSxJQUFHLFFBQVQ7QUFBa0I7QUFBQTtBQUFBLG1CQUFLLFdBQVUsV0FBZjtBQUFBO0FBQUE7QUFBbEIsY0FIRjtBQUlFO0FBQUE7QUFBQSxpQkFBTSxJQUFHLFVBQVQ7QUFBb0I7QUFBQTtBQUFBLG1CQUFLLFdBQVUsV0FBZjtBQUFBO0FBQUE7QUFBcEI7QUFKRjtBQUxGO0FBckJGLFFBREY7QUFvQ0Q7Ozs7R0F4RThCLGdCQUFNUSxTOzttQkFBbEJiLEciLCJmaWxlIjoiMC5iYmVjYzZiMjVlZmU5ZTFhNjQ5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL25hdi5jc3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9ICBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVudV9zdHlsaW5nIDogJ25hdl90b3BfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnLFxuICAgICAgbWVudV93aWRlX3N0eWxpbmcgOiAnbmF2X2hhbWJ1cmdlciBmYSBmYS1iYXJzIGZhLWxnJyxcbiAgICAgIG1lbnVfb3BlbiA6ICduYXZfbGlua19ib3R0b20gZGlzcGxheV9ub25lJyxcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZU1lbnUgPSB0aGlzLnRvZ2dsZU1lbnUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKXtcbiAgICBjb25zb2xlLmxvZygnY2xpY2shJylcbiAgICBsZXQgbWVudSA9IHRoaXMuc3RhdGUubWVudV9zdHlsaW5nO1xuICAgIGxldCBtZW51X3dpZGUgPSB0aGlzLnN0YXRlLm1lbnVfd2lkZV9zdHlsaW5nO1xuXG4gICAgaWYobWVudSA9PT0gJ25hdl90b3BfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZW51X3N0eWxpbmcgOiAnbmF2X3RvcF9oYW1idXJnZXIgZmEgZmEtY2xvc2UgZmEtbGcnLFxuICAgICAgICBtZW51X3dpZGVfc3R5bGluZyA6ICduYXZfaGFtYnVyZ2VyIGZhIGZhLWNsb3NlIGZhLWxnJyxcbiAgICAgICAgbWVudV9vcGVuIDogJ25hdl9saW5rX2JvdHRvbSBkaXNwbGF5X2Jsb2NrJ1xuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVudV9zdHlsaW5nIDogJ25hdl90b3BfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnLFxuICAgICAgICBtZW51X3dpZGVfc3R5bGluZyA6ICduYXZfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnLFxuICAgICAgICBtZW51X29wZW4gOiAnbmF2X2xpbmtfYm90dG9tIGRpc3BsYXlfbm9uZSdcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfdG9wX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdl90aXRsZVwiPkJvb2tzdG9yZTwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5tZW51X3dpZGVfc3R5bGluZ30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy50b2dnbGVNZW51fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl90b3Bfc2VhcmNoXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmF2X2lucHV0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZfc2VhcmNoX2J0blwiPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm1lbnVfc3R5bGluZ30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy50b2dnbGVNZW51fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl93aWRlX2xpbmtzX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbG9nSW5faW5hdXRoZW50aWNhdGVkXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ0luXCIgY2xhc3NOYW1lPVwibmF2X3dpZGVfbGlua3MgbmF2X3dpZGVfbG9nSW5cIj5sb2cgaW48L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ25VcFwiIGNsYXNzTmFtZT1cIm5hdl93aWRlX2xpbmtzXCI+c2lnbiB1cDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbG9nSW5fYXV0aGVudGljYXRlZFwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWduVXBcIiBjbGFzc05hbWU9XCJuYXZfd2lkZV9saW5rc1wiPmxvZyBvdXQ8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibmF2X3dpZGVfbGlua3NcIj5hYm91dDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FjY291bnRcIiBjbGFzc05hbWU9XCJuYXZfd2lkZV9saW5rc1wiPmFjY291bnQ8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rc19jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rcyBuYXZfbGlua3Nfc2VhcmNoXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmF2X2lucHV0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZfc2VhcmNoX2J0blwiPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm1lbnVfb3Blbn0+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9sb2dJblwiPjxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtzXCI+bG9nIGluPC9kaXY+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnblVwXCI+PGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua3NcIj5zaWduIHVwPC9kaXY+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj48ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rc1wiPmFib3V0PC9kaXY+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvYWNjb3VudFwiPjxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtzXCI+YWNjb3VudDwvZGl2PjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTmF2L05hdi5qcyJdLCJzb3VyY2VSb290IjoiIn0=