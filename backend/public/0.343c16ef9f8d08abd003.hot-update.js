webpackHotUpdate(0,{

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(177); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(372);
	
	var _react = __webpack_require__(177);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Nav = __webpack_require__(276);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var _Footer = __webpack_require__(322);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _IndividualBook = __webpack_require__(330);
	
	var _IndividualBook2 = _interopRequireDefault(_IndividualBook);
	
	var _axios = __webpack_require__(333);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Account = function (_React$Component) {
	  _inherits(Account, _React$Component);
	
	  function Account(props) {
	    _classCallCheck(this, Account);
	
	    var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));
	
	    _this.state = {
	      query: null,
	      searchResult: null,
	      // account_addBook_div: 'app_displayNone',
	      account_add_title: '',
	      account_add_author_name: '',
	      account_add_image_url: '',
	      account_add_description: '',
	      account_add_isbn: ''
	    };
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.searchDb = _this.searchDb.bind(_this);
	    _this.addNewBook = _this.addNewBook.bind(_this);
	    _this.saveData = _this.saveData.bind(_this);
	    _this.toggleAddBook = _this.toggleAddBook.bind(_this);
	    return _this;
	  }
	
	  _createClass(Account, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.setState({ query: event.target.value });
	    }
	  }, {
	    key: 'searchDb',
	    value: function searchDb() {
	      var _this2 = this;
	
	      fetch('http://localhost:8080/api/bookstore_db?query=' + this.state.query).then(function (result) {
	        return result.json();
	      }).then(function (json) {
	        _this2.setState({ searchResult: json.data });
	      }).catch(function (error) {
	        _this2.setState({
	          error: error
	        });
	      });
	    }
	  }, {
	    key: 'saveData',
	    value: function saveData(e) {
	      var state = this.state;
	      state[e.target.name] = e.target.value;
	      this.setState(state);
	    }
	
	    // toggleAddBook(){
	    //   let display;
	    //   this.state.account_addBook_div === 'app_displayNone' ? ( display = 'app_displayBlock' ) : ( display = 'app_displayNone' )
	    //   this.setState({
	    //     account_addBook_div: display
	    //   })
	    //   console.log('toggled!')
	    // }
	
	  }, {
	    key: 'addNewBook',
	    value: function addNewBook() {
	
	      _axios2.default.post('http://localhost:8080/api/bookstore_db', {
	        title: this.state.account_add_title,
	        author_name: this.state.account_author_name
	      }).then(function (response) {
	        this.setState({
	          account_add_title: '',
	          account_add_author_name: '',
	          account_add_image_url: '',
	          account_add_description: '',
	          account_add_isbn: ''
	        });
	      }).catch(function (error) {});
	    }
	  }, {
	    key: 'renderResult',
	    value: function renderResult() {
	      if (!this.state.searchResult) {
	        return;
	      }
	      return this.state.searchResult.map(function (item, index) {
	        return _react2.default.createElement(_IndividualBook2.default, _extends({ key: 'book-' + index
	        }, item));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Nav2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'account_comp_container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'account_container' },
	            _react2.default.createElement(
	              'div',
	              { className: 'account_title' },
	              'Account'
	            ),
	            _react2.default.createElement('input', { className: 'account_search_input', placeholder: 'search database', onChange: this.handleChange }),
	            _react2.default.createElement(
	              'button',
	              { onClick: this.searchDb },
	              'search'
	            ),
	            _react2.default.createElement(
	              'button',
	              { onClick: this.toggleAddBook },
	              'add new book'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'account_addBook_render' },
	              this.renderResult()
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: this.state.account_addBook_div, id: 'account_addBook_container' },
	              _react2.default.createElement(
	                'h3',
	                null,
	                'Add Book'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'account_addbook_divs' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'account_label' },
	                  'Book title: '
	                ),
	                _react2.default.createElement('input', { name: 'account_add_title', onChange: this.saveData })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'account_addbook_divs' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'account_label' },
	                  'Image Url: '
	                ),
	                _react2.default.createElement('input', { name: 'account_image_url' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'account_addbook_divs' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'account_label' },
	                  'Author name: '
	                ),
	                _react2.default.createElement('input', { name: 'account_author_name', onChange: this.saveData })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'account_addbook_divs' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'account_label' },
	                  'Price: '
	                ),
	                _react2.default.createElement('input', null)
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'account_addbook_divs' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'account_label' },
	                  'Genre: '
	                ),
	                _react2.default.createElement('input', null)
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'account_addbook_divs' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'account_label' },
	                  'Publisher: '
	                ),
	                _react2.default.createElement('input', null)
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'account_addbook_divs' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'account_label' },
	                  'Isbn: '
	                ),
	                _react2.default.createElement('input', null)
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'account_addbook_textarea' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'account_textarea_label' },
	                  'Description: '
	                ),
	                _react2.default.createElement('textarea', { className: 'account_addBook_textarea' })
	              ),
	              _react2.default.createElement(
	                'button',
	                { onClick: this.addNewBook },
	                'Add Book'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_Footer2.default, null)
	      );
	    }
	  }]);
	
	  return Account;
	}(_react2.default.Component);
	
	exports.default = Account;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(319); if (makeExportsHot(module, __webpack_require__(177))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Account.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnQuanM/NDg5YyJdLCJuYW1lcyI6WyJBY2NvdW50IiwicHJvcHMiLCJzdGF0ZSIsInF1ZXJ5Iiwic2VhcmNoUmVzdWx0IiwiYWNjb3VudF9hZGRfdGl0bGUiLCJhY2NvdW50X2FkZF9hdXRob3JfbmFtZSIsImFjY291bnRfYWRkX2ltYWdlX3VybCIsImFjY291bnRfYWRkX2Rlc2NyaXB0aW9uIiwiYWNjb3VudF9hZGRfaXNibiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJzZWFyY2hEYiIsImFkZE5ld0Jvb2siLCJzYXZlRGF0YSIsInRvZ2dsZUFkZEJvb2siLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJlIiwibmFtZSIsInBvc3QiLCJ0aXRsZSIsImF1dGhvcl9uYW1lIiwiYWNjb3VudF9hdXRob3JfbmFtZSIsInJlc3BvbnNlIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVuZGVyUmVzdWx0IiwiYWNjb3VudF9hZGRCb29rX2RpdiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFcUJBLE87OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBTyxJQURJO0FBRVhDLHFCQUFjLElBRkg7QUFHWDtBQUNBQywwQkFBbUIsRUFKUjtBQUtYQyxnQ0FBeUIsRUFMZDtBQU1YQyw4QkFBdUIsRUFOWjtBQU9YQyxnQ0FBMEIsRUFQZjtBQVFYQyx5QkFBa0I7QUFSUCxNQUFiO0FBVUEsV0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFs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VSwwQkFBcEI7QUFBckcsZ0JBVEY7QUFVRTtBQUFBO0FBQUEsbUJBQVEsU0FBUyxLQUFLRCxVQUF0QjtBQUFBO0FBQUE7QUFWRjtBQVJGO0FBREYsVUFGSjtBQXlCRTtBQXpCRixRQURGO0FBNkJEOzs7O0dBL0drQyxnQkFBTTBCLFM7O21CQUF0QnZDLE8iLCJmaWxlIjoiMC4zNDNjMTZlZjlmOGQwOGFiZDAwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2FjY291bnQuY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXYgZnJvbSAnY29tcG9uZW50cy9OYXYvTmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBJbmRpdmlkdWFsQm9vayBmcm9tICdjb21wb25lbnRzL0luZGl2aWR1YWxCb29rL0luZGl2aWR1YWxCb29rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdWVyeTogbnVsbCxcbiAgICAgIHNlYXJjaFJlc3VsdDogbnVsbCxcbiAgICAgIC8vIGFjY291bnRfYWRkQm9va19kaXY6ICdhcHBfZGlzcGxheU5vbmUnLFxuICAgICAgYWNjb3VudF9hZGRfdGl0bGU6ICcnLFxuICAgICAgYWNjb3VudF9hZGRfYXV0aG9yX25hbWU6ICcnLFxuICAgICAgYWNjb3VudF9hZGRfaW1hZ2VfdXJsOiAnJyxcbiAgICAgIGFjY291bnRfYWRkX2Rlc2NyaXB0aW9uIDogJycsXG4gICAgICBhY2NvdW50X2FkZF9pc2JuOiAnJ1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWFyY2hEYiA9IHRoaXMuc2VhcmNoRGIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZE5ld0Jvb2sgPSB0aGlzLmFkZE5ld0Jvb2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnNhdmVEYXRhID0gdGhpcy5zYXZlRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlQWRkQm9vayA9IHRoaXMudG9nZ2xlQWRkQm9vay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnk6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gIH1cblxuICBzZWFyY2hEYigpIHtcbiAgICBmZXRjaCggJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYm9va3N0b3JlX2RiP3F1ZXJ5PScgKyB0aGlzLnN0YXRlLnF1ZXJ5IClcbiAgICAgIC50aGVuKCByZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSApXG4gICAgICAudGhlbigganNvbiA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hSZXN1bHQ6IGpzb24uZGF0YSB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgc2F2ZURhdGEoZSl7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBzdGF0ZVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgLy8gdG9nZ2xlQWRkQm9vaygpe1xuICAvLyAgIGxldCBkaXNwbGF5O1xuICAvLyAgIHRoaXMuc3RhdGUuYWNjb3VudF9hZGRCb29rX2RpdiA9PT0gJ2FwcF9kaXNwbGF5Tm9uZScgPyAoIGRpc3BsYXkgPSAnYXBwX2Rpc3BsYXlCbG9jaycgKSA6ICggZGlzcGxheSA9ICdhcHBfZGlzcGxheU5vbmUnIClcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgIGFjY291bnRfYWRkQm9va19kaXY6IGRpc3BsYXlcbiAgLy8gICB9KVxuICAvLyAgIGNvbnNvbGUubG9nKCd0b2dnbGVkIScpXG4gIC8vIH1cblxuICBhZGROZXdCb29rKCl7XG5cbiAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2Jvb2tzdG9yZV9kYicsIHtcbiAgICAgIHRpdGxlIDogdGhpcy5zdGF0ZS5hY2NvdW50X2FkZF90aXRsZSxcbiAgICAgIGF1dGhvcl9uYW1lIDogdGhpcy5zdGF0ZS5hY2NvdW50X2F1dGhvcl9uYW1lXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY2NvdW50X2FkZF90aXRsZTogJycsXG4gICAgICAgIGFjY291bnRfYWRkX2F1dGhvcl9uYW1lOiAnJyxcbiAgICAgICAgYWNjb3VudF9hZGRfaW1hZ2VfdXJsOiAnJyxcbiAgICAgICAgYWNjb3VudF9hZGRfZGVzY3JpcHRpb24gOiAnJyxcbiAgICAgICAgYWNjb3VudF9hZGRfaXNibjogJydcbiAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cbiAgICB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyUmVzdWx0KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHQpIHsgcmV0dXJuOyB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0Lm1hcCggKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgPEluZGl2aWR1YWxCb29rIGtleT17YGJvb2stJHtpbmRleH1gfVxuICAgICAgICB7Li4uaXRlbX0gLz5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2NvbXBfY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF90aXRsZVwiPkFjY291bnQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFjY291bnRfc2VhcmNoX2lucHV0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZGF0YWJhc2VcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaERifT5zZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFkZEJvb2t9PmFkZCBuZXcgYm9vazwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkQm9va19yZW5kZXJcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSZXN1bHQoKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjY291bnRfYWRkQm9va19kaXZ9IGlkPVwiYWNjb3VudF9hZGRCb29rX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMz5BZGQgQm9vazwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPkJvb2sgdGl0bGU6IDwvZGl2PjxpbnB1dCBuYW1lPVwiYWNjb3VudF9hZGRfdGl0bGVcIiBvbkNoYW5nZT17dGhpcy5zYXZlRGF0YX0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+SW1hZ2UgVXJsOiA8L2Rpdj48aW5wdXQgbmFtZT1cImFjY291bnRfaW1hZ2VfdXJsXCIvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5BdXRob3IgbmFtZTogPC9kaXY+PGlucHV0IG5hbWU9XCJhY2NvdW50X2F1dGhvcl9uYW1lXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZURhdGF9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+UHJpY2U6IDwvZGl2PjxpbnB1dCAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5HZW5yZTogPC9kaXY+PGlucHV0IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPlB1Ymxpc2hlcjogPC9kaXY+PGlucHV0IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPklzYm46IDwvZGl2PjxpbnB1dCAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX3RleHRhcmVhXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X3RleHRhcmVhX2xhYmVsXCI+RGVzY3JpcHRpb246IDwvZGl2Pjx0ZXh0YXJlYSBjbGFzc05hbWU9XCJhY2NvdW50X2FkZEJvb2tfdGV4dGFyZWFcIi8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZE5ld0Jvb2t9PkFkZCBCb29rPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnQuanMiXSwic291cmNlUm9vdCI6IiJ9