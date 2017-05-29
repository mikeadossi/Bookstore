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
	      menu_open: 'nav_link_bottom display_none',
	      nav_logIn_inauthenticated: 'display_block',
	      nav_logIn_authenticated: 'display_none'
	    };
	
	    _this.toggleMenu = _this.toggleMenu.bind(_this);
	    _this.checkIfAuthenticated = _this.checkIfAuthenticated.bind(_this);
	    return _this;
	  }
	
	  _createClass(Nav, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //checkIfAuthenticated();
	    }
	  }, {
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
	    key: 'checkIfAuthenticated',
	    value: function checkIfAuthenticated() {
	      var displayA = void 0;
	      var displayB = void 0;
	      //!isAuthenticated ? displayA = "display_block" && displayB = "display_none" : displayA = "display_none" && displayB = "display_block";
	      this.setState({
	        nav_logIn_inauthenticated: displayA,
	        nav_logIn_authenticated: displayB
	      });
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
	              { className: this.state.nav_logIn_inauthenticated },
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
	              { className: this.state.nav_logIn_authenticated },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzPzdlNjEiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJzdGF0ZSIsIm1lbnVfc3R5bGluZyIsIm1lbnVfd2lkZV9zdHlsaW5nIiwibWVudV9vcGVuIiwibmF2X2xvZ0luX2luYXV0aGVudGljYXRlZCIsIm5hdl9sb2dJbl9hdXRoZW50aWNhdGVkIiwidG9nZ2xlTWVudSIsImJpbmQiLCJjaGVja0lmQXV0aGVudGljYXRlZCIsImNvbnNvbGUiLCJsb2ciLCJtZW51IiwibWVudV93aWRlIiwic2V0U3RhdGUiLCJkaXNwbGF5QSIsImRpc3BsYXlCIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRXFCQSxHOzs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwyR0FDVkEsS0FEVTs7QUFFaEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlLG9DQURKO0FBRVhDLDBCQUFvQixnQ0FGVDtBQUdYQyxrQkFBWSw4QkFIRDtBQUlYQyxrQ0FBNEIsZUFKakI7QUFLWEMsZ0NBQTBCO0FBTGYsTUFBYjs7QUFRQSxXQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBQ0EsV0FBS0Msb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJELElBQTFCLE9BQTVCO0FBWGdCO0FBWWpCOzs7O3lDQUVrQjtBQUNqQjtBQUNEOzs7a0NBRVc7QUFDVkUsZUFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxXQUFJQyxPQUFPLEtBQUtYLEtBQUwsQ0FBV0MsWUFBdEI7QUFDQSxXQUFJVyxZQUFZLEtBQUtaLEtBQUwsQ0FBV0UsaUJBQTNCOztBQUVBLFdBQUdTLFNBQVMsb0NBQVosRUFBaUQ7QUFDL0MsY0FBS0UsUUFBTCxDQUFjO0FBQ1paLHlCQUFlLHFDQURIO0FBRVpDLDhCQUFvQixpQ0FG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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9uYXYuY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSAgZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lbnVfc3R5bGluZyA6ICduYXZfdG9wX2hhbWJ1cmdlciBmYSBmYS1iYXJzIGZhLWxnJyxcbiAgICAgIG1lbnVfd2lkZV9zdHlsaW5nIDogJ25hdl9oYW1idXJnZXIgZmEgZmEtYmFycyBmYS1sZycsXG4gICAgICBtZW51X29wZW4gOiAnbmF2X2xpbmtfYm90dG9tIGRpc3BsYXlfbm9uZScsXG4gICAgICBuYXZfbG9nSW5faW5hdXRoZW50aWNhdGVkIDogJ2Rpc3BsYXlfYmxvY2snLFxuICAgICAgbmF2X2xvZ0luX2F1dGhlbnRpY2F0ZWQgOiAnZGlzcGxheV9ub25lJ1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tJZkF1dGhlbnRpY2F0ZWQgPSB0aGlzLmNoZWNrSWZBdXRoZW50aWNhdGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIC8vY2hlY2tJZkF1dGhlbnRpY2F0ZWQoKTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKXtcbiAgICBjb25zb2xlLmxvZygnY2xpY2shJylcbiAgICBsZXQgbWVudSA9IHRoaXMuc3RhdGUubWVudV9zdHlsaW5nO1xuICAgIGxldCBtZW51X3dpZGUgPSB0aGlzLnN0YXRlLm1lbnVfd2lkZV9zdHlsaW5nO1xuXG4gICAgaWYobWVudSA9PT0gJ25hdl90b3BfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZW51X3N0eWxpbmcgOiAnbmF2X3RvcF9oYW1idXJnZXIgZmEgZmEtY2xvc2UgZmEtbGcnLFxuICAgICAgICBtZW51X3dpZGVfc3R5bGluZyA6ICduYXZfaGFtYnVyZ2VyIGZhIGZhLWNsb3NlIGZhLWxnJyxcbiAgICAgICAgbWVudV9vcGVuIDogJ25hdl9saW5rX2JvdHRvbSBkaXNwbGF5X2Jsb2NrJ1xuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVudV9zdHlsaW5nIDogJ25hdl90b3BfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnLFxuICAgICAgICBtZW51X3dpZGVfc3R5bGluZyA6ICduYXZfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnLFxuICAgICAgICBtZW51X29wZW4gOiAnbmF2X2xpbmtfYm90dG9tIGRpc3BsYXlfbm9uZSdcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBjaGVja0lmQXV0aGVudGljYXRlZCgpe1xuICAgIGxldCBkaXNwbGF5QTtcbiAgICBsZXQgZGlzcGxheUI7XG4gICAgLy8haXNBdXRoZW50aWNhdGVkID8gZGlzcGxheUEgPSBcImRpc3BsYXlfYmxvY2tcIiAmJiBkaXNwbGF5QiA9IFwiZGlzcGxheV9ub25lXCIgOiBkaXNwbGF5QSA9IFwiZGlzcGxheV9ub25lXCIgJiYgZGlzcGxheUIgPSBcImRpc3BsYXlfYmxvY2tcIjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hdl9sb2dJbl9pbmF1dGhlbnRpY2F0ZWQgOiBkaXNwbGF5QSxcbiAgICAgIG5hdl9sb2dJbl9hdXRoZW50aWNhdGVkIDogZGlzcGxheUJcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X3RvcF9jb250YWluZXJcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXZfdGl0bGVcIj5Cb29rc3RvcmU8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubWVudV93aWRlX3N0eWxpbmd9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWVudX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfdG9wX3NlYXJjaFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5hdl9pbnB1dFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2X3NlYXJjaF9idG5cIj5zdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5tZW51X3N0eWxpbmd9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWVudX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfd2lkZV9saW5rc19jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5hdl9sb2dJbl9pbmF1dGhlbnRpY2F0ZWR9PlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dJblwiIGNsYXNzTmFtZT1cIm5hdl93aWRlX2xpbmtzIG5hdl93aWRlX2xvZ0luXCI+bG9nIGluPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWduVXBcIiBjbGFzc05hbWU9XCJuYXZfd2lkZV9saW5rc1wiPnNpZ24gdXA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5hdl9sb2dJbl9hdXRoZW50aWNhdGVkfT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnblVwXCIgY2xhc3NOYW1lPVwibmF2X3dpZGVfbGlua3NcIj5sb2cgb3V0PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cIm5hdl93aWRlX2xpbmtzXCI+YWJvdXQ8L0xpbms+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9hY2NvdW50XCIgY2xhc3NOYW1lPVwibmF2X3dpZGVfbGlua3NcIj5hY2NvdW50PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua3NfY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua3MgbmF2X2xpbmtzX3NlYXJjaFwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm5hdl9pbnB1dFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2X3NlYXJjaF9idG5cIj5zdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5tZW51X29wZW59PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9nSW5cIj48ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rc1wiPmxvZyBpbjwvZGl2PjwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ25VcFwiPjxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtzXCI+c2lnbiB1cDwvZGl2PjwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCI+PGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua3NcIj5hYm91dDwvZGl2PjwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FjY291bnRcIj48ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rc1wiPmFjY291bnQ8L2Rpdj48L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL05hdi9OYXYuanMiXSwic291cmNlUm9vdCI6IiJ9