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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXYvTmF2LmpzPzdlNjEiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJzdGF0ZSIsIm1lbnVfc3R5bGluZyIsIm1lbnVfd2lkZV9zdHlsaW5nIiwibWVudV9vcGVuIiwibmF2X2xvZ0luX2luYXV0aGVudGljYXRlZCIsIm5hdl9sb2dJbl9hdXRoZW50aWNhdGVkIiwidG9nZ2xlTWVudSIsImJpbmQiLCJjb25zb2xlIiwibG9nIiwibWVudSIsIm1lbnVfd2lkZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRXFCQSxHOzs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwyR0FDVkEsS0FEVTs7QUFFaEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLHFCQUFlLG9DQURKO0FBRVhDLDBCQUFvQixnQ0FGVDtBQUdYQyxrQkFBWSw4QkFIRDtBQUlYQyxrQ0FBNEIsZUFKakI7QUFLWEMsZ0NBQTBCO0FBTGYsTUFBYjs7QUFRQSxXQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBVmdCO0FBV2pCOzs7O2tDQUVXO0FBQ1ZDLGVBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsV0FBSUMsT0FBTyxLQUFLVixLQUFMLENBQVdDLFlBQXRCO0FBQ0EsV0FBSVUsWUFBWSxLQUFLWCxLQUFMLENBQVdFLGlCQUEzQjs7QUFFQSxXQUFHUSxTQUFTLG9DQUFaLEVBQWlEO0FBQy9DLGNBQUtFLFFBQUwsQ0FBYztBQUNaWCx5QkFBZSxxQ0FESDtBQUVaQyw4QkFBb0IsaUNBRlI7QUFHWkMsc0JBQVk7QUFIQSxVQUFkO0FBS0E7QUFDRCxRQVBELE1BT087QUFDTCxjQUFLUyxRQUFMLENBQWM7QUFDWlgseUJBQWUsb0NBREg7QUFFWkMsOEJBQW9CLGdDQUZSO0FBR1pDLHNCQUFZO0FBSEEsVUFBZDtBQUtBO0FBQ0Q7QUFDRjs7OzhCQUVPO0FBQ04sY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBLGVBQU0sSUFBRyxHQUFULEVBQWEsV0FBVSxXQUF2QjtBQUFBO0FBQUEsWUFERjtBQUVFLGtEQUFLLFdBQVcsS0FBS0gsS0FBTCxDQUFXRSxpQkFBM0IsRUFBOEMsZUFBWSxNQUExRCxFQUFpRSxTQUFTLEtBQUtJLFVBQS9FLEdBRkY7QUFHRTtBQUFBO0FBQUEsZUFBSyxXQUFVLGdCQUFmO0FBQ0Usc0RBQU8sV0FBVSxXQUFqQixFQUE2QixhQUFZLFFBQXpDLEdBREY7QUFFRTtBQUFBO0FBQUEsaUJBQVEsV0FBVSxnQkFBbEI7QUFBQTtBQUFBO0FBRkYsWUFIRjtBQU9FLGtEQUFLLFdBQVcsS0FBS04sS0FBTCxDQUFXQyxZQUEzQixFQUF5QyxlQUFZLE1BQXJELEVBQTRELFNBQVMsS0FBS0ssVUFBMUUsR0FQRjtBQVFFO0FBQUE7QUFBQSxlQUFLLFdBQVUsMEJBQWY7QUFDRTtBQUFBO0FBQUEsaUJBQUssV0FBVyxLQUFLTixLQUFMLENBQVdJLHlCQUEzQjtBQUNFO0FBQUE7QUFBQSxtQkFBTSxJQUFHLFFBQVQsRUFBa0IsV0FBVSwrQkFBNUI7QUFBQTtBQUFBLGdCQURGO0FBRUU7QUFBQTtBQUFBLG1CQUFNLElBQUcsU0FBVCxFQUFtQixXQUFVLGdCQUE3QjtBQUFBO0FBQUE7QUFGRixjQURGO0FBS0U7QUFBQTtBQUFBLGlCQUFLLFdBQVcsS0FBS0osS0FBTCxDQUFXSyx1QkFBM0I7QUFDRTtBQUFBO0FBQUEsbUJBQU0sSUFBRyxTQUFULEVBQW1CLFdBQVUsZ0JBQTdCO0FBQUE7QUFBQTtBQURGLGNBTEY7QUFRRTtBQUFBO0FBQUEsaUJBQU0sSUFBRyxRQUFULEVBQWtCLFdBQVUsZ0JBQTVCO0FBQUE7QUFBQSxjQVJGO0FBU0U7QUFBQTtBQUFBLGlCQUFNLElBQUcsVUFBVCxFQUFvQixXQUFVLGdCQUE5QjtBQUFBO0FBQUE7QUFURjtBQVJGLFVBREY7QUFxQkU7QUFBQTtBQUFBLGFBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxlQUFLLFdBQVUsNEJBQWY7QUFDRSxzREFBTyxXQUFVLFdBQWpCLEVBQTZCLGFBQVksUUFBekMsR0FERjtBQUVFO0FBQUE7QUFBQSxpQkFBUSxXQUFVLGdCQUFsQjtBQUFBO0FBQUE7QUFGRixZQURGO0FBS0U7QUFBQTtBQUFBLGVBQUssV0FBVyxLQUFLTCxLQUFMLENBQVdHLFNBQTNCO0FBQ0U7QUFBQTtBQUFBLGlCQUFNLElBQUcsUUFBVDtBQUFrQjtBQUFBO0FBQUEsbUJBQUssV0FBVSxXQUFmO0FBQUE7QUFBQTtBQUFsQixjQURGO0FBRUU7QUFBQTtBQUFBLGlCQUFNLElBQUcsU0FBVDtBQUFtQjtBQUFBO0FBQUEsbUJBQUssV0FBVSxXQUFmO0FBQUE7QUFBQTtBQUFuQixjQUZGO0FBR0U7QUFBQTtBQUFBLGlCQUFNLElBQUcsUUFBVDtBQUFrQjtBQUFBO0FBQUEsbUJBQUssV0FBVSxXQUFmO0FBQUE7QUFBQTtBQUFsQixjQUhGO0FBSUU7QUFBQTtBQUFBLGlCQUFNLElBQUcsVUFBVDtBQUFvQjtBQUFBO0FBQUEsbUJBQUssV0FBVSxXQUFmO0FBQUE7QUFBQTtBQUFwQjtBQUpGO0FBTEY7QUFyQkYsUUFERjtBQW9DRDs7OztHQTFFOEIsZ0JBQU1VLFM7O21CQUFsQmYsRyIsImZpbGUiOiIwLjVjZWE0M2Y5M2IzOWJmMDc5ODhkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbmF2LmNzcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gIGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51X3N0eWxpbmcgOiAnbmF2X3RvcF9oYW1idXJnZXIgZmEgZmEtYmFycyBmYS1sZycsXG4gICAgICBtZW51X3dpZGVfc3R5bGluZyA6ICduYXZfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnLFxuICAgICAgbWVudV9vcGVuIDogJ25hdl9saW5rX2JvdHRvbSBkaXNwbGF5X25vbmUnLFxuICAgICAgbmF2X2xvZ0luX2luYXV0aGVudGljYXRlZCA6ICdkaXNwbGF5X2Jsb2NrJyxcbiAgICAgIG5hdl9sb2dJbl9hdXRoZW50aWNhdGVkIDogJ2Rpc3BsYXlfbm9uZSdcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZU1lbnUgPSB0aGlzLnRvZ2dsZU1lbnUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKXtcbiAgICBjb25zb2xlLmxvZygnY2xpY2shJylcbiAgICBsZXQgbWVudSA9IHRoaXMuc3RhdGUubWVudV9zdHlsaW5nO1xuICAgIGxldCBtZW51X3dpZGUgPSB0aGlzLnN0YXRlLm1lbnVfd2lkZV9zdHlsaW5nO1xuXG4gICAgaWYobWVudSA9PT0gJ25hdl90b3BfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZW51X3N0eWxpbmcgOiAnbmF2X3RvcF9oYW1idXJnZXIgZmEgZmEtY2xvc2UgZmEtbGcnLFxuICAgICAgICBtZW51X3dpZGVfc3R5bGluZyA6ICduYXZfaGFtYnVyZ2VyIGZhIGZhLWNsb3NlIGZhLWxnJyxcbiAgICAgICAgbWVudV9vcGVuIDogJ25hdl9saW5rX2JvdHRvbSBkaXNwbGF5X2Jsb2NrJ1xuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVudV9zdHlsaW5nIDogJ25hdl90b3BfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnLFxuICAgICAgICBtZW51X3dpZGVfc3R5bGluZyA6ICduYXZfaGFtYnVyZ2VyIGZhIGZhLWJhcnMgZmEtbGcnLFxuICAgICAgICBtZW51X29wZW4gOiAnbmF2X2xpbmtfYm90dG9tIGRpc3BsYXlfbm9uZSdcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfdG9wX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cIm5hdl90aXRsZVwiPkJvb2tzdG9yZTwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5tZW51X3dpZGVfc3R5bGluZ30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy50b2dnbGVNZW51fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl90b3Bfc2VhcmNoXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmF2X2lucHV0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZfc2VhcmNoX2J0blwiPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm1lbnVfc3R5bGluZ30gYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17dGhpcy50b2dnbGVNZW51fT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl93aWRlX2xpbmtzX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubmF2X2xvZ0luX2luYXV0aGVudGljYXRlZH0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ0luXCIgY2xhc3NOYW1lPVwibmF2X3dpZGVfbGlua3MgbmF2X3dpZGVfbG9nSW5cIj5sb2cgaW48L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ25VcFwiIGNsYXNzTmFtZT1cIm5hdl93aWRlX2xpbmtzXCI+c2lnbiB1cDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubmF2X2xvZ0luX2F1dGhlbnRpY2F0ZWR9PlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWduVXBcIiBjbGFzc05hbWU9XCJuYXZfd2lkZV9saW5rc1wiPmxvZyBvdXQ8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCIgY2xhc3NOYW1lPVwibmF2X3dpZGVfbGlua3NcIj5hYm91dDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FjY291bnRcIiBjbGFzc05hbWU9XCJuYXZfd2lkZV9saW5rc1wiPmFjY291bnQ8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rc19jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rcyBuYXZfbGlua3Nfc2VhcmNoXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibmF2X2lucHV0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIiAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZfc2VhcmNoX2J0blwiPnN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm1lbnVfb3Blbn0+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9sb2dJblwiPjxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtzXCI+bG9nIGluPC9kaXY+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnblVwXCI+PGRpdiBjbGFzc05hbWU9XCJuYXZfbGlua3NcIj5zaWduIHVwPC9kaXY+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj48ZGl2IGNsYXNzTmFtZT1cIm5hdl9saW5rc1wiPmFib3V0PC9kaXY+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvYWNjb3VudFwiPjxkaXYgY2xhc3NOYW1lPVwibmF2X2xpbmtzXCI+YWNjb3VudDwvZGl2PjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTmF2L05hdi5qcyJdLCJzb3VyY2VSb290IjoiIn0=