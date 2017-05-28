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
	              'Accounts!!!!'
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
	            this.renderResult(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnQuanM/NDg5YyJdLCJuYW1lcyI6WyJBY2NvdW50IiwicHJvcHMiLCJzdGF0ZSIsInF1ZXJ5Iiwic2VhcmNoUmVzdWx0IiwiYWNjb3VudF9hZGRCb29rX2RpdiIsImFjY291bnRfYWRkX3RpdGxlIiwiYWNjb3VudF9hZGRfYXV0aG9yX25hbWUiLCJhY2NvdW50X2FkZF9pbWFnZV91cmwiLCJhY2NvdW50X2FkZF9kZXNjcmlwdGlvbiIsImFjY291bnRfYWRkX2lzYm4iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwic2VhcmNoRGIiLCJhZGROZXdCb29rIiwic2F2ZURhdGEiLCJ0b2dnbGVBZGRCb29rIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZmV0Y2giLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiZSIsIm5hbWUiLCJkaXNwbGF5IiwicG9zdCIsInRpdGxlIiwiYXV0aG9yX25hbWUiLCJhY2NvdW50X2F1dGhvcl9uYW1lIiwicmVzcG9uc2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZW5kZXJSZXN1bHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCQSxPOzs7QUFDbkIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQU8sSUFESTtBQUVYQyxxQkFBYyxJQUZIO0FBR1hDLDRCQUFxQixpQkFIVjtBQUlYQywwQkFBbUIsRUFKUjtBQUtYQyxnQ0FBeUIsRUFMZDtBQU1YQyw4QkFBdUIsRUFOWjtBQU9YQyxnQ0FBMEIsRUFQZjtBQVFYQyx5QkFBa0I7QUFSUCxNQUFiO0FBVUEsV0FBS0MsWUFBTCxHQUFv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QkFBZjtBQUEwQztBQUFBO0FBQUEscUJBQUssV0FBVSx3QkFBZjtBQUFBO0FBQUEsa0JBQTFDO0FBQXFHLDZEQUFVLFdBQVUsMEJBQXBCO0FBQXJHLGdCQVJBO0FBU0U7QUFBQTtBQUFBLG1CQUFRLFNBQVMsS0FBS0QsVUFBdEI7QUFBQTtBQUFBO0FBVEY7QUFOQTtBQURGLFVBRko7QUFzQkU7QUF0QkYsUUFERjtBQTBCRDs7OztHQTNHa0MsZ0JBQU0wQixTOzttQkFBdEJ4QyxPIiwiZmlsZSI6IjAuYWJlMWFmYzFlZDg5MDcwYzY1MDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9hY2NvdW50LmNzcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gJ2NvbXBvbmVudHMvTmF2L05hdic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgSW5kaXZpZHVhbEJvb2sgZnJvbSAnY29tcG9uZW50cy9JbmRpdmlkdWFsQm9vay9JbmRpdmlkdWFsQm9vayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVlcnk6IG51bGwsXG4gICAgICBzZWFyY2hSZXN1bHQ6IG51bGwsXG4gICAgICBhY2NvdW50X2FkZEJvb2tfZGl2OiAnYXBwX2Rpc3BsYXlOb25lJyxcbiAgICAgIGFjY291bnRfYWRkX3RpdGxlOiAnJyxcbiAgICAgIGFjY291bnRfYWRkX2F1dGhvcl9uYW1lOiAnJyxcbiAgICAgIGFjY291bnRfYWRkX2ltYWdlX3VybDogJycsXG4gICAgICBhY2NvdW50X2FkZF9kZXNjcmlwdGlvbiA6ICcnLFxuICAgICAgYWNjb3VudF9hZGRfaXNibjogJydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VhcmNoRGIgPSB0aGlzLnNlYXJjaERiLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGROZXdCb29rID0gdGhpcy5hZGROZXdCb29rLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zYXZlRGF0YSA9IHRoaXMuc2F2ZURhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFkZEJvb2sgPSB0aGlzLnRvZ2dsZUFkZEJvb2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3F1ZXJ5OiBldmVudC50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgc2VhcmNoRGIoKSB7XG4gICAgZmV0Y2goICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2Jvb2tzdG9yZV9kYj9xdWVyeT0nICsgdGhpcy5zdGF0ZS5xdWVyeSApXG4gICAgICAudGhlbiggcmVzdWx0ID0+IHJlc3VsdC5qc29uKCkgKVxuICAgICAgLnRoZW4oIGpzb24gPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUmVzdWx0OiBqc29uLmRhdGEgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfVxuXG4gIHNhdmVEYXRhKGUpe1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgc3RhdGVbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIHRvZ2dsZUFkZEJvb2soKXtcbiAgICBsZXQgZGlzcGxheTtcbiAgICB0aGlzLnN0YXRlLmFjY291bnRfYWRkQm9va19kaXYgPT09ICdhcHBfZGlzcGxheU5vbmUnID8gKCBkaXNwbGF5ID0gJ2FwcF9kaXNwbGF5QmxvY2snICkgOiAoIGRpc3BsYXkgPSAnYXBwX2Rpc3BsYXlOb25lJyApXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY2NvdW50X2FkZEJvb2tfZGl2OiBkaXNwbGF5XG4gICAgfSlcbiAgfVxuXG4gIGFkZE5ld0Jvb2soKXtcblxuICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYm9va3N0b3JlX2RiJywge1xuICAgICAgdGl0bGUgOiB0aGlzLnN0YXRlLmFjY291bnRfYWRkX3RpdGxlLFxuICAgICAgYXV0aG9yX25hbWUgOiB0aGlzLnN0YXRlLmFjY291bnRfYXV0aG9yX25hbWVcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjY291bnRfYWRkX3RpdGxlOiAnJyxcbiAgICAgICAgYWNjb3VudF9hZGRfYXV0aG9yX25hbWU6ICcnLFxuICAgICAgICBhY2NvdW50X2FkZF9pbWFnZV91cmw6ICcnLFxuICAgICAgICBhY2NvdW50X2FkZF9kZXNjcmlwdGlvbiA6ICcnLFxuICAgICAgICBhY2NvdW50X2FkZF9pc2JuOiAnJ1xuICAgICAgfSlcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblxuICAgIH0pO1xuICB9XG5cblxuICByZW5kZXJSZXN1bHQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdCkgeyByZXR1cm47IH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHQubWFwKCAoaXRlbSwgaW5kZXgpID0+XG4gICAgICA8SW5kaXZpZHVhbEJvb2sga2V5PXtgYm9vay0ke2luZGV4fWB9XG4gICAgICAgIHsuLi5pdGVtfSAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfY29tcF9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X3RpdGxlXCI+QWNjb3VudHMhISEhPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYWNjb3VudF9zZWFyY2hfaW5wdXRcIiBwbGFjZWhvbGRlcj1cInNlYXJjaCBkYXRhYmFzZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNlYXJjaERifT5zZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVBZGRCb29rfT5hZGQgbmV3IGJvb2s8L2J1dHRvbj5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclJlc3VsdCgpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWNjb3VudF9hZGRCb29rX2Rpdn0gaWQ9XCJhY2NvdW50X2FkZEJvb2tfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5Cb29rIHRpdGxlOiA8L2Rpdj48aW5wdXQgbmFtZT1cImFjY291bnRfYWRkX3RpdGxlXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZURhdGF9IC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5JbWFnZSBVcmw6IDwvZGl2PjxpbnB1dCBuYW1lPVwiYWNjb3VudF9pbWFnZV91cmxcIi8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5BdXRob3IgbmFtZTogPC9kaXY+PGlucHV0IG5hbWU9XCJhY2NvdW50X2F1dGhvcl9uYW1lXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZURhdGF9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPlByaWNlOiA8L2Rpdj48aW5wdXQgLz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPkdlbnJlOiA8L2Rpdj48aW5wdXQgLz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPlB1Ymxpc2hlcjogPC9kaXY+PGlucHV0IC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5Jc2JuOiA8L2Rpdj48aW5wdXQgLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX3RleHRhcmVhXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X3RleHRhcmVhX2xhYmVsXCI+RGVzY3JpcHRpb246IDwvZGl2Pjx0ZXh0YXJlYSBjbGFzc05hbWU9XCJhY2NvdW50X2FkZEJvb2tfdGV4dGFyZWFcIi8+PC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5hZGROZXdCb29rfT5BZGQgQm9vazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FjY291bnQvQWNjb3VudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=