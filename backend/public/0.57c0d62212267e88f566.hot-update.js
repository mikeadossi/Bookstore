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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BY2NvdW50L0FjY291bnQuanM/NDg5YyJdLCJuYW1lcyI6WyJBY2NvdW50IiwicHJvcHMiLCJzdGF0ZSIsInF1ZXJ5Iiwic2VhcmNoUmVzdWx0IiwiYWNjb3VudF9hZGRfdGl0bGUiLCJhY2NvdW50X2FkZF9hdXRob3JfbmFtZSIsImFjY291bnRfYWRkX2ltYWdlX3VybCIsImFjY291bnRfYWRkX2Rlc2NyaXB0aW9uIiwiYWNjb3VudF9hZGRfaXNibiIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJzZWFyY2hEYiIsImFkZE5ld0Jvb2siLCJzYXZlRGF0YSIsInRvZ2dsZUFkZEJvb2siLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJlIiwibmFtZSIsInBvc3QiLCJ0aXRsZSIsImF1dGhvcl9uYW1lIiwiYWNjb3VudF9hdXRob3JfbmFtZSIsInJlc3BvbnNlIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVuZGVyUmVzdWx0IiwiYWNjb3VudF9hZGRCb29rX2RpdiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFcUJBLE87OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBTyxJQURJO0FBRVhDLHFCQUFjLElBRkg7QUFHWDtBQUNBQywwQkFBbUIsRUFKUjtBQUtYQyxnQ0FBeUIsRUFMZDtBQU1YQyw4QkFBdUIsRUFOWjtBQU9YQyxnQ0FBMEIsRUFQZjtBQVFYQyx5QkFBa0I7QUFSUCxNQUFiO0FBVUEsV0FBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFs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VUFBdEI7QUFBQTtBQUFBO0FBVkY7QUFQRjtBQURGLFVBRko7QUF3QkU7QUF4QkYsUUFERjtBQTRCRDs7OztHQTlHa0MsZ0JBQU0wQixTOzttQkFBdEJ2QyxPIiwiZmlsZSI6IjAuNTdjMGQ2MjIxMjI2N2U4OGY1NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9hY2NvdW50LmNzcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2IGZyb20gJ2NvbXBvbmVudHMvTmF2L05hdic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgSW5kaXZpZHVhbEJvb2sgZnJvbSAnY29tcG9uZW50cy9JbmRpdmlkdWFsQm9vay9JbmRpdmlkdWFsQm9vayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVlcnk6IG51bGwsXG4gICAgICBzZWFyY2hSZXN1bHQ6IG51bGwsXG4gICAgICAvLyBhY2NvdW50X2FkZEJvb2tfZGl2OiAnYXBwX2Rpc3BsYXlOb25lJyxcbiAgICAgIGFjY291bnRfYWRkX3RpdGxlOiAnJyxcbiAgICAgIGFjY291bnRfYWRkX2F1dGhvcl9uYW1lOiAnJyxcbiAgICAgIGFjY291bnRfYWRkX2ltYWdlX3VybDogJycsXG4gICAgICBhY2NvdW50X2FkZF9kZXNjcmlwdGlvbiA6ICcnLFxuICAgICAgYWNjb3VudF9hZGRfaXNibjogJydcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VhcmNoRGIgPSB0aGlzLnNlYXJjaERiLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGROZXdCb29rID0gdGhpcy5hZGROZXdCb29rLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zYXZlRGF0YSA9IHRoaXMuc2F2ZURhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZUFkZEJvb2sgPSB0aGlzLnRvZ2dsZUFkZEJvb2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3F1ZXJ5OiBldmVudC50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgc2VhcmNoRGIoKSB7XG4gICAgZmV0Y2goICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2Jvb2tzdG9yZV9kYj9xdWVyeT0nICsgdGhpcy5zdGF0ZS5xdWVyeSApXG4gICAgICAudGhlbiggcmVzdWx0ID0+IHJlc3VsdC5qc29uKCkgKVxuICAgICAgLnRoZW4oIGpzb24gPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoUmVzdWx0OiBqc29uLmRhdGEgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfVxuXG4gIHNhdmVEYXRhKGUpe1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgc3RhdGVbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG4gIC8vIHRvZ2dsZUFkZEJvb2soKXtcbiAgLy8gICBsZXQgZGlzcGxheTtcbiAgLy8gICB0aGlzLnN0YXRlLmFjY291bnRfYWRkQm9va19kaXYgPT09ICdhcHBfZGlzcGxheU5vbmUnID8gKCBkaXNwbGF5ID0gJ2FwcF9kaXNwbGF5QmxvY2snICkgOiAoIGRpc3BsYXkgPSAnYXBwX2Rpc3BsYXlOb25lJyApXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBhY2NvdW50X2FkZEJvb2tfZGl2OiBkaXNwbGF5XG4gIC8vICAgfSlcbiAgLy8gICBjb25zb2xlLmxvZygndG9nZ2xlZCEnKVxuICAvLyB9XG5cbiAgYWRkTmV3Qm9vaygpe1xuXG4gICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ib29rc3RvcmVfZGInLCB7XG4gICAgICB0aXRsZSA6IHRoaXMuc3RhdGUuYWNjb3VudF9hZGRfdGl0bGUsXG4gICAgICBhdXRob3JfbmFtZSA6IHRoaXMuc3RhdGUuYWNjb3VudF9hdXRob3JfbmFtZVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudF9hZGRfdGl0bGU6ICcnLFxuICAgICAgICBhY2NvdW50X2FkZF9hdXRob3JfbmFtZTogJycsXG4gICAgICAgIGFjY291bnRfYWRkX2ltYWdlX3VybDogJycsXG4gICAgICAgIGFjY291bnRfYWRkX2Rlc2NyaXB0aW9uIDogJycsXG4gICAgICAgIGFjY291bnRfYWRkX2lzYm46ICcnXG4gICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXG4gICAgfSk7XG4gIH1cblxuXG4gIHJlbmRlclJlc3VsdCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0KSB7IHJldHVybjsgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdC5tYXAoIChpdGVtLCBpbmRleCkgPT5cbiAgICAgIDxJbmRpdmlkdWFsQm9vayBrZXk9e2Bib29rLSR7aW5kZXh9YH1cbiAgICAgICAgey4uLml0ZW19IC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9jb21wX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfdGl0bGVcIj5BY2NvdW50PC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJhY2NvdW50X3NlYXJjaF9pbnB1dFwiIHBsYWNlaG9sZGVyPVwic2VhcmNoIGRhdGFiYXNlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2hEYn0+c2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRCb29rX3JlbmRlclwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJlc3VsdCgpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWNjb3VudF9hZGRCb29rX2Rpdn0gaWQ9XCJhY2NvdW50X2FkZEJvb2tfY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgzPkFkZCBCb29rPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+Qm9vayB0aXRsZTogPC9kaXY+PGlucHV0IG5hbWU9XCJhY2NvdW50X2FkZF90aXRsZVwiIG9uQ2hhbmdlPXt0aGlzLnNhdmVEYXRhfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5JbWFnZSBVcmw6IDwvZGl2PjxpbnB1dCBuYW1lPVwiYWNjb3VudF9pbWFnZV91cmxcIi8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPkF1dGhvciBuYW1lOiA8L2Rpdj48aW5wdXQgbmFtZT1cImFjY291bnRfYXV0aG9yX25hbWVcIiBvbkNoYW5nZT17dGhpcy5zYXZlRGF0YX0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9hZGRib29rX2RpdnNcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfbGFiZWxcIj5QcmljZTogPC9kaXY+PGlucHV0IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfZGl2c1wiPjxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudF9sYWJlbFwiPkdlbnJlOiA8L2Rpdj48aW5wdXQgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+UHVibGlzaGVyOiA8L2Rpdj48aW5wdXQgLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfYWRkYm9va19kaXZzXCI+PGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2xhYmVsXCI+SXNibjogPC9kaXY+PGlucHV0IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X2FkZGJvb2tfdGV4dGFyZWFcIj48ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfdGV4dGFyZWFfbGFiZWxcIj5EZXNjcmlwdGlvbjogPC9kaXY+PHRleHRhcmVhIGNsYXNzTmFtZT1cImFjY291bnRfYWRkQm9va190ZXh0YXJlYVwiLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkTmV3Qm9va30+QWRkIEJvb2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FjY291bnQvQWNjb3VudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=