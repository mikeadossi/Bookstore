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
	      account_addBook_div: 'app_displayNone',
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
	  }, {
	    key: 'toggleAddBook',
	    value: function toggleAddBook() {
	      var display = void 0;
	      this.state.account_addBook_div === 'app_displayNone' ? display = 'app_displayBlock' : display = 'app_displayNone';
	      this.setState({
	        account_addBook_div: display
	      });
	    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnQuanM/NDg5YyJdLCJuYW1lcyI6WyJBY2NvdW50IiwicHJvcHMiLCJzdGF0ZSIsInF1ZXJ5Iiwic2VhcmNoUmVzdWx0IiwiYWNjb3VudF9hZGRCb29rX2RpdiIsImFjY291bnRfYWRkX3RpdGxlIiwiYWNjb3VudF9hZGRfYXV0aG9yX25hbWUiLCJhY2NvdW50X2FkZF9pbWFnZV91cmwiLCJhY2NvdW50X2FkZF9kZXNjcmlwdGlvbiIsImFjY291bnRfYWRkX2lzYm4iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwic2VhcmNoRGIiLCJhZGROZXdCb29rIiwic2F2ZURhdGEiLCJ0b2dnbGVBZGRCb29rIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmV0Y2giLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZSIsIm5hbWUiLCJkaXNwbGF5IiwicG9zdCIsInRpdGxlIiwiYXV0aG9yX25hbWUiLCJhY2NvdW50X2F1dGhvcl9uYW1lIiwicmVzcG9uc2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZW5kZXJSZXN1bHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCQSxPOzs7QUFDbkIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQU8sSUFESTtBQUVYQyxxQkFBYyxJQUZIO0FBR1hDLDRCQUFxQixpQkFIVjtBQUlYQywwQkFBbUIsRUFKUjtBQUtYQyxnQ0FBeUIsRUFMZDtBQU1YQyw4QkFBdUIsRUFOWjtBQU9YQyxnQ0FBMEIsRUFQZjtBQVFYQyx5QkFBa0I7QUFSUCxNQUFiO0FBVUEsV0FBS0MsWUFBTCxHQUFv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LGVBQWY7QUFBQTtBQUFBLGtCQUF0QztBQUFpRjtBQUFqRixnQkFSRjtBQVNBO0FBQUE7QUFBQSxtQkFBSyxXQUFVLDBCQUFmO0FBQTBDO0FBQUE7QUFBQSxxQkFBSyxXQUFVLHdCQUFmO0FBQUE7QUFBQSxrQkFBMUM7QUFBcUcsNkRBQVUsV0FBVSwwQkFBcEI7QUFBckcsZ0JBVEE7QUFVRTtBQUFBO0FBQUEsbUJBQVEsU0FBUyxLQUFLRCxVQUF0QjtBQUFBO0FBQUE7QUFWRjtBQVJGO0FBREYsVUFGSjtBQXlCRTtBQXpCRixRQURGO0FBNkJEOzs7O0dBOUdrQyxnQkFBTTBCLFM7O21CQUF0QnhDLE8iLCJmaWxlIjoiMC4zNzdkNzA2ZGQ1MTNmZDZiNDMwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2FjY291bnQuY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXYgZnJvbSAnY29tcG9uZW50cy9OYXYvTmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBJbmRpdmlkdWFsQm9vayBmcm9tICdjb21wb25lbnRzL0luZGl2aWR1YWxCb29rL0luZGl2aWR1YWxCb29rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdWVyeTogbnVsbCxcbiAgICAgIHNlYXJjaFJlc3VsdDogbnVsbCxcbiAgICAgIGFjY291bnRfYWRkQm9va19kaXY6ICdhcHBfZGlzcGxheU5vbmUnLFxuICAgICAgYWNjb3VudF9hZGRfdGl0bGU6ICcnLFxuICAgICAgYWNjb3VudF9hZGRfYXV0aG9yX25hbWU6ICcnLFxuICAgICAgYWNjb3VudF9hZGRfaW1hZ2VfdXJsOiAnJyxcbiAgICAgIGFjY291bnRfYWRkX2Rlc2NyaXB0aW9uIDogJycsXG4gICAgICBhY2NvdW50X2FkZF9pc2JuOiAnJ1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWFyY2hEYiA9IHRoaXMuc2VhcmNoRGIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZE5ld0Jvb2sgPSB0aGlzLmFkZE5ld0Jvb2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnNhdmVEYXRhID0gdGhpcy5zYXZlRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlQWRkQm9vayA9IHRoaXMudG9nZ2xlQWRkQm9vay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnk6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gIH1cblxuICBzZWFyY2hEYigpIHtcbiAgICBmZXRjaCggJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYm9va3N0b3JlX2RiP3F1ZXJ5PScgKyB0aGlzLnN0YXRlLnF1ZXJ5IClcbiAgICAgIC50aGVuKCByZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSApXG4gICAgICAudGhlbigganNvbiA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hSZXN1bHQ6IGpzb24uZGF0YSB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgc2F2ZURhdGEoZSl7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBzdGF0ZVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgdG9nZ2xlQWRkQm9vaygpe1xuICAgIGxldCBkaXNwbGF5O1xuICAgIHRoaXMuc3RhdGUuYWNjb3VudF9hZGRCb29rX2RpdiA9PT0gJ2FwcF9kaXNwbGF5Tm9uZScgPyAoIGRpc3BsYXkgPSAnYXBwX2Rpc3BsYXlCbG9jaycgKSA6ICggZGlzcGxheSA9ICdhcHBfZGlzcGxheU5vbmUnIClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjY291bnRfYWRkQm9va19kaXY6IGRpc3BsYXlcbiAgICB9KVxuICB9XG5cbiAgYWRkTmV3Qm9vaygpe1xuXG4gICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ib29rc3RvcmVfZGInLCB7XG4gICAgICB0aXRsZSA6IHRoaXMuc3RhdGUuYWNjb3VudF9hZGRfdGl0bGUsXG4gICAgICBhdXRob3JfbmFtZSA6IHRoaXMuc3RhdGUuYWNjb3VudF9hdXRob3JfbmFtZVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudF9hZGRfdGl0bGU6ICcnLFxuICAgICAgICBhY2NvdW50X2FkZF9hdXRob3JfbmFtZTogJycsXG4gICAgICAgIGFjY291bnRfYWRkX2ltYWdlX3VybDogJycsXG4gICAgICAgIGFjY291bnRfYWRkX2Rlc2NyaXB0aW9uIDogJycsXG4gICAgICAgIGFjY291bnRfYWRkX2lzYm46ICcnXG4gICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXG4gICAgfSk7XG4gIH1cblxuXG4gIHJlbmRlclJlc3VsdCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0KSB7IHJldHVybjsgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdC5tYXAoIChpdGVtLCBpbmRleCkgPT5cbiAgICAgIDxJbmRpdmlkdWFsQm9vayBrZXk9e2Bib29rLSR7aW5kZXh9YH1cbiAgICAgICAgey4uLml0ZW19IC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9jb21wX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfdGl0bGVcIj5BY2NvdW50PC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhY2NvdW50X3NlYXJjaF9pbnB1dFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoIGRhdGFiYXNlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2hEYn0+c2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVBZGRCb29rfT5hZGQgbmV3IGJvb2s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRCb29rX3JlbmRlclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJlc3VsdCgpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWNjb3VudF9hZGRCb29rX2Rpdn0gaWQ9XCJhY2NvdW50X2FkZEJvb2tfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgzPkFkZCBCb29rPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+Qm9vayB0aXRsZTogPC9kaXY+PGlucHV0IG5hbWU9XCJhY2NvdW50X2FkZF90aXRsZVwiIG9uQ2hhbmdlPXt0aGlzLnNhdmVEYXRhfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5JbWFnZSBVcmw6IDwvZGl2PjxpbnB1dCBuYW1lPVwiYWNjb3VudF9pbWFnZV91cmxcIi8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPkF1dGhvciBuYW1lOiA8L2Rpdj48aW5wdXQgbmFtZT1cImFjY291bnRfYXV0aG9yX25hbWVcIiBvbkNoYW5nZT17dGhpcy5zYXZlRGF0YX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5QcmljZTogPC9kaXY+PGlucHV0IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPkdlbnJlOiA8L2Rpdj48aW5wdXQgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+UHVibGlzaGVyOiA8L2Rpdj48aW5wdXQgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+SXNibjogPC9kaXY+PGlucHV0IC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX3RleHRhcmVhXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X3RleHRhcmVhX2xhYmVsXCI+RGVzY3JpcHRpb246IDwvZGl2Pjx0ZXh0YXJlYSBjbGFzc05hbWU9XCJhY2NvdW50X2FkZEJvb2tfdGV4dGFyZWFcIi8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZE5ld0Jvb2t9PkFkZCBCb29rPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnQuanMiXSwic291cmNlUm9vdCI6IiJ9