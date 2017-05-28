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
	              { className: 'account_addBook_container' },
	              this.renderResult()
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: this.state.account_addBook_div, id: 'account_addBook_container' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnQuanM/NDg5YyJdLCJuYW1lcyI6WyJBY2NvdW50IiwicHJvcHMiLCJzdGF0ZSIsInF1ZXJ5Iiwic2VhcmNoUmVzdWx0IiwiYWNjb3VudF9hZGRCb29rX2RpdiIsImFjY291bnRfYWRkX3RpdGxlIiwiYWNjb3VudF9hZGRfYXV0aG9yX25hbWUiLCJhY2NvdW50X2FkZF9pbWFnZV91cmwiLCJhY2NvdW50X2FkZF9kZXNjcmlwdGlvbiIsImFjY291bnRfYWRkX2lzYm4iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwic2VhcmNoRGIiLCJhZGROZXdCb29rIiwic2F2ZURhdGEiLCJ0b2dnbGVBZGRCb29rIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmV0Y2giLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZSIsIm5hbWUiLCJkaXNwbGF5IiwicG9zdCIsInRpdGxlIiwiYXV0aG9yX25hbWUiLCJhY2NvdW50X2F1dGhvcl9uYW1lIiwicmVzcG9uc2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZW5kZXJSZXN1bHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCQSxPOzs7QUFDbkIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQU8sSUFESTtBQUVYQyxxQkFBYyxJQUZIO0FBR1hDLDRCQUFxQixpQkFIVjtBQUlYQywwQkFBbUIsRUFKUjtBQUtYQyxnQ0FBeUIsRUFMZDtBQU1YQyw4QkFBdUIsRUFOWjtBQU9YQyxnQ0FBMEIsRUFQZjtBQVFYQyx5QkFBa0I7QUFSUCxNQUFiO0FBVUEsV0FBS0MsWUFBTCxHQUFv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QWpGLGdCQVBGO0FBUUE7QUFBQTtBQUFBLG1CQUFLLFdBQVUsMEJBQWY7QUFBMEM7QUFBQTtBQUFBLHFCQUFLLFdBQVUsd0JBQWY7QUFBQTtBQUFBLGtCQUExQztBQUFxRyw2REFBVSxXQUFVLDBCQUFwQjtBQUFyRyxnQkFSQTtBQVNFO0FBQUE7QUFBQSxtQkFBUSxTQUFTLEtBQUtELFVBQXRCO0FBQUE7QUFBQTtBQVRGO0FBUkY7QUFERixVQUZKO0FBd0JFO0FBeEJGLFFBREY7QUE0QkQ7Ozs7R0E3R2tDLGdCQUFNMEIsUzs7bUJBQXRCeEMsTyIsImZpbGUiOiIwLmNkNjMwZTZkNjcwYjQ5NzU5ZTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYWNjb3VudC5jc3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdiBmcm9tICdjb21wb25lbnRzL05hdi9OYXYnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEluZGl2aWR1YWxCb29rIGZyb20gJ2NvbXBvbmVudHMvSW5kaXZpZHVhbEJvb2svSW5kaXZpZHVhbEJvb2snO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHF1ZXJ5OiBudWxsLFxuICAgICAgc2VhcmNoUmVzdWx0OiBudWxsLFxuICAgICAgYWNjb3VudF9hZGRCb29rX2RpdjogJ2FwcF9kaXNwbGF5Tm9uZScsXG4gICAgICBhY2NvdW50X2FkZF90aXRsZTogJycsXG4gICAgICBhY2NvdW50X2FkZF9hdXRob3JfbmFtZTogJycsXG4gICAgICBhY2NvdW50X2FkZF9pbWFnZV91cmw6ICcnLFxuICAgICAgYWNjb3VudF9hZGRfZGVzY3JpcHRpb24gOiAnJyxcbiAgICAgIGFjY291bnRfYWRkX2lzYm46ICcnXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlYXJjaERiID0gdGhpcy5zZWFyY2hEYi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkTmV3Qm9vayA9IHRoaXMuYWRkTmV3Qm9vay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2F2ZURhdGEgPSB0aGlzLnNhdmVEYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVBZGRCb29rID0gdGhpcy50b2dnbGVBZGRCb29rLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtxdWVyeTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIHNlYXJjaERiKCkge1xuICAgIGZldGNoKCAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ib29rc3RvcmVfZGI/cXVlcnk9JyArIHRoaXMuc3RhdGUucXVlcnkgKVxuICAgICAgLnRoZW4oIHJlc3VsdCA9PiByZXN1bHQuanNvbigpIClcbiAgICAgIC50aGVuKCBqc29uID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFJlc3VsdDoganNvbi5kYXRhIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICBzYXZlRGF0YShlKXtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHN0YXRlW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICB0b2dnbGVBZGRCb29rKCl7XG4gICAgbGV0IGRpc3BsYXk7XG4gICAgdGhpcy5zdGF0ZS5hY2NvdW50X2FkZEJvb2tfZGl2ID09PSAnYXBwX2Rpc3BsYXlOb25lJyA/ICggZGlzcGxheSA9ICdhcHBfZGlzcGxheUJsb2NrJyApIDogKCBkaXNwbGF5ID0gJ2FwcF9kaXNwbGF5Tm9uZScgKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWNjb3VudF9hZGRCb29rX2RpdjogZGlzcGxheVxuICAgIH0pXG4gIH1cblxuICBhZGROZXdCb29rKCl7XG5cbiAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2Jvb2tzdG9yZV9kYicsIHtcbiAgICAgIHRpdGxlIDogdGhpcy5zdGF0ZS5hY2NvdW50X2FkZF90aXRsZSxcbiAgICAgIGF1dGhvcl9uYW1lIDogdGhpcy5zdGF0ZS5hY2NvdW50X2F1dGhvcl9uYW1lXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY2NvdW50X2FkZF90aXRsZTogJycsXG4gICAgICAgIGFjY291bnRfYWRkX2F1dGhvcl9uYW1lOiAnJyxcbiAgICAgICAgYWNjb3VudF9hZGRfaW1hZ2VfdXJsOiAnJyxcbiAgICAgICAgYWNjb3VudF9hZGRfZGVzY3JpcHRpb24gOiAnJyxcbiAgICAgICAgYWNjb3VudF9hZGRfaXNibjogJydcbiAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG5cbiAgICB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyUmVzdWx0KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHQpIHsgcmV0dXJuOyB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0Lm1hcCggKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgPEluZGl2aWR1YWxCb29rIGtleT17YGJvb2stJHtpbmRleH1gfVxuICAgICAgICB7Li4uaXRlbX0gLz5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2NvbXBfY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF90aXRsZVwiPkFjY291bnQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImFjY291bnRfc2VhcmNoX2lucHV0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZGF0YWJhc2VcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaERifT5zZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFkZEJvb2t9PmFkZCBuZXcgYm9vazwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZEJvb2tfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUmVzdWx0KCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hY2NvdW50X2FkZEJvb2tfZGl2fSBpZD1cImFjY291bnRfYWRkQm9va19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+Qm9vayB0aXRsZTogPC9kaXY+PGlucHV0IG5hbWU9XCJhY2NvdW50X2FkZF90aXRsZVwiIG9uQ2hhbmdlPXt0aGlzLnNhdmVEYXRhfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5JbWFnZSBVcmw6IDwvZGl2PjxpbnB1dCBuYW1lPVwiYWNjb3VudF9pbWFnZV91cmxcIi8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPkF1dGhvciBuYW1lOiA8L2Rpdj48aW5wdXQgbmFtZT1cImFjY291bnRfYXV0aG9yX25hbWVcIiBvbkNoYW5nZT17dGhpcy5zYXZlRGF0YX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5QcmljZTogPC9kaXY+PGlucHV0IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPkdlbnJlOiA8L2Rpdj48aW5wdXQgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+UHVibGlzaGVyOiA8L2Rpdj48aW5wdXQgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+SXNibjogPC9kaXY+PGlucHV0IC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX3RleHRhcmVhXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X3RleHRhcmVhX2xhYmVsXCI+RGVzY3JpcHRpb246IDwvZGl2Pjx0ZXh0YXJlYSBjbGFzc05hbWU9XCJhY2NvdW50X2FkZEJvb2tfdGV4dGFyZWFcIi8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZE5ld0Jvb2t9PkFkZCBCb29rPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnQuanMiXSwic291cmNlUm9vdCI6IiJ9