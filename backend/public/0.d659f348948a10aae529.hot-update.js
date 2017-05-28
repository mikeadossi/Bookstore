webpackHotUpdate(0,{

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(177); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	__webpack_require__(331);
	
	var _react = __webpack_require__(177);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(279);
	
	var _axios = __webpack_require__(333);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IndividualBook = function (_React$Component) {
	  _inherits(IndividualBook, _React$Component);
	
	  function IndividualBook(props) {
	    _classCallCheck(this, IndividualBook);
	
	    var _this = _possibleConstructorReturn(this, (IndividualBook.__proto__ || Object.getPrototypeOf(IndividualBook)).call(this, props));
	
	    _this.state = {
	      title: props.title,
	      author_name: props.author_name,
	      list_price: props.list_price,
	      publisher: props.publisher,
	      id: props.id,
	      genre: props.genre,
	      image_url: props.image_url,
	      description: props.description,
	      isbn: props.isbn
	    };
	    _this.saveData = _this.saveData.bind(_this);
	    _this.updateBook = _this.updateBook.bind(_this);
	    _this.deleteBook = _this.deleteBook.bind(_this);
	    return _this;
	  }
	
	  _createClass(IndividualBook, [{
	    key: 'saveData',
	    value: function saveData(e) {
	      var state = this.state;
	      state[e.target.name] = e.target.value;
	      this.setState(state);
	    }
	  }, {
	    key: 'updateBook',
	    value: function updateBook() {
	      var updatedBook = this.state;
	      var id = this.state.id;
	
	      delete updatedBook.id;
	
	      _axios2.default.put('http://localhost:8080/api/bookstore_db/' + id + '/update', updatedBook).then(function (response) {
	        console.log(response);
	      }).catch(function (error) {
	        console.log(error);
	      });
	    }
	  }, {
	    key: 'deleteBook',
	    value: function deleteBook() {
	      var id = this.state.id;
	
	
	      _axios2.default.delete('http://localhost:8080/api/bookstore_db/' + id).then(function (response) {
	        console.log('deleted ', response);
	      }).then(location.reload()).catch(function (error) {
	        console.log(error);
	      });
	    }
	  }, {
	    key: 'renderBookSection',
	    value: function renderBookSection() {
	      var _this2 = this;
	
	      var _state = this.state,
	          list_price = _state.list_price,
	          publisher = _state.publisher,
	          id = _state.id,
	          genre = _state.genre,
	          title = _state.title,
	          image_url = _state.image_url,
	          description = _state.description,
	          isbn = _state.isbn,
	          author_name = _state.author_name;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'individualBook_container' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('input', { className: 'individualBook_title individualBook_input', value: title, name: 'title', onChange: this.saveData })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('input', { className: 'individualBook_image individualBook_input', value: image_url, name: 'image_url', onChange: this.saveData })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('input', { className: 'individualBook_name individualBook_input', value: author_name, name: 'author_name', onChange: this.saveData })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('input', { className: 'individualBook_price individualBook_input', value: list_price, name: 'list_price', onChange: this.saveData })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('input', { className: 'individualBook_genre individualBook_input', value: genre, name: 'genre', onChange: this.saveData })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('input', { className: 'individualBook_publisher individualBook_input', value: publisher, name: 'publisher', onChange: this.saveData })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('input', { className: 'individualBook_isbn individualBook_input', value: isbn, name: 'isbn', onChange: this.saveData })
	          ),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement('textarea', { className: 'individualBook_description', value: description, name: 'description', onChange: this.saveData })
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'button',
	              { className: 'individualBook_edit individualBook_btns' },
	              'Edit'
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: 'individualBook_save_changes individualBook_btns', onClick: this.updateBook },
	              'Save Changes'
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: 'individualBook_delete individualBook_btns', onClick: function onClick() {
	                  if (confirm('Delete the item?')) {
	                    _this2.deleteBook();
	                  };
	                } },
	              'Delete'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'individualBook_renderBook' },
	        this.renderBookSection()
	      );
	    }
	  }]);
	
	  return IndividualBook;
	}(_react2.default.Component);
	
	// title={title} image_url={image_url} description={description} isbn={isbn} author_name={author_name}
	
	
	exports.default = IndividualBook;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(319); if (makeExportsHot(module, __webpack_require__(177))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "IndividualBook.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbmRpdmlkdWFsQm9vay9JbmRpdmlkdWFsQm9vay5qcz8yMzBmIl0sIm5hbWVzIjpbIkluZGl2aWR1YWxCb29rIiwicHJvcHMiLCJzdGF0ZSIsInRpdGxlIiwiYXV0aG9yX25hbWUiLCJsaXN0X3ByaWNlIiwicHVibGlzaGVyIiwiaWQiLCJnZW5yZSIsImltYWdlX3VybCIsImRlc2NyaXB0aW9uIiwiaXNibiIsInNhdmVEYXRhIiwiYmluZCIsInVwZGF0ZUJvb2siLCJkZWxldGVCb29rIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwidXBkYXRlZEJvb2siLCJwdXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImRlbGV0ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uZmlybSIsInJlbmRlckJvb2tTZWN0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7S0FFcUJBLGM7OztBQUNuQiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlJQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBT0YsTUFBTUUsS0FERjtBQUVYQyxvQkFBYUgsTUFBTUcsV0FGUjtBQUdYQyxtQkFBWUosTUFBTUksVUFIUDtBQUlYQyxrQkFBV0wsTUFBTUssU0FKTjtBQUtYQyxXQUFJTixNQUFNTSxFQUxDO0FBTVhDLGNBQU9QLE1BQU1PLEtBTkY7QUFPWEMsa0JBQVdSLE1BQU1RLFNBUE47QUFRWEMsb0JBQWFULE1BQU1TLFdBUlI7QUFTWEMsYUFBTVYsTUFBTVU7QUFURCxNQUFiO0FBV0EsV0FBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFDQSxXQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FB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RjtBQU9BO0FBQUE7QUFBQTtBQUFLLHNEQUFPLFdBQVUsMENBQWpCLEVBQTRELE9BQU9ELElBQW5FLEVBQXlFLE1BQUssTUFBOUUsRUFBcUYsVUFBVSxLQUFLQyxRQUFwRztBQUFMLFlBUEE7QUFRRSxvREFSRjtBQVNBO0FBQUE7QUFBQTtBQUFLLHlEQUFVLFdBQVUsNEJBQXBCLEVBQWlELE9BQU9GLFdBQXhELEVBQXFFLE1BQUssYUFBMUUsRUFBd0YsVUFBVSxLQUFLRSxRQUF2RztBQUFMLFlBVEE7QUFVQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsaUJBQVEsV0FBVSx5Q0FBbEI7QUFBQTtBQUFBLGNBREY7QUFFQTtBQUFBO0FBQUEsaUJBQVEsV0FBVSxpREFBbEIsRUFBb0UsU0FBUyxLQUFLRSxVQUFsRjtBQUFBO0FBQUEsY0FGQTtBQUdGO0FBQUE7QUFBQSxpQkFBUSxXQUFVLDJDQUFsQixFQUE4RCxTQUFTLG1CQUFNO0FBQUMsdUJBQUdrQixRQUFRLGtCQUFSLENBQUgsRUFBZ0M7QUFBQyw0QkFBS2pCLFVBQUw7QUFBa0I7QUFBRSxrQkFBbkk7QUFBQTtBQUFBO0FBSEU7QUFWQTtBQURNLFFBQVI7QUFrQkQ7Ozs4QkFHTztBQUNOLGNBQVE7QUFBQTtBQUFBLFdBQUssV0FBVSwyQkFBZjtBQUE0QyxjQUFLa0IsaUJBQUw7QUFBNUMsUUFBUjtBQUNEOzs7O0dBakZ5QyxnQkFBTUMsUzs7QUFzRmxEOzs7bUJBdEZxQmxDLGMiLCJmaWxlIjoiMC5kNjU5ZjM0ODk0OGExMGFhZTUyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2luZGl2aWR1YWxCb29rLmNzcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSAgZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpdmlkdWFsQm9vayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgICAgYXV0aG9yX25hbWU6IHByb3BzLmF1dGhvcl9uYW1lLFxuICAgICAgbGlzdF9wcmljZTogcHJvcHMubGlzdF9wcmljZSxcbiAgICAgIHB1Ymxpc2hlcjogcHJvcHMucHVibGlzaGVyLFxuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgZ2VucmU6IHByb3BzLmdlbnJlLFxuICAgICAgaW1hZ2VfdXJsOiBwcm9wcy5pbWFnZV91cmwsXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICBpc2JuOiBwcm9wcy5pc2JuXG4gICAgfTtcbiAgICB0aGlzLnNhdmVEYXRhID0gdGhpcy5zYXZlRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlQm9vayA9IHRoaXMudXBkYXRlQm9vay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVsZXRlQm9vayA9IHRoaXMuZGVsZXRlQm9vay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2F2ZURhdGEoZSl7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBzdGF0ZVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgdXBkYXRlQm9vaygpe1xuICAgIGNvbnN0IHVwZGF0ZWRCb29rID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7aWR9ID0gdGhpcy5zdGF0ZTtcbiAgICBkZWxldGUgdXBkYXRlZEJvb2suaWRcblxuICAgIGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9ib29rc3RvcmVfZGIvJHtpZH0vdXBkYXRlYCxcbiAgICAgIHVwZGF0ZWRCb29rXG4gICAgKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlQm9vaygpe1xuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2Jvb2tzdG9yZV9kYi8ke2lkfWApXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGVsZXRlZCAnLHJlc3BvbnNlKTtcbiAgICB9KVxuICAgIC50aGVuKCBsb2NhdGlvbi5yZWxvYWQoKSApXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cblxuXG4gIHJlbmRlckJvb2tTZWN0aW9uKCkge1xuICAgIGNvbnN0IHsgbGlzdF9wcmljZSwgcHVibGlzaGVyLCBpZCwgZ2VucmUsIHRpdGxlLCBpbWFnZV91cmwsIGRlc2NyaXB0aW9uLCBpc2JuLCBhdXRob3JfbmFtZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiggPGRpdiBjbGFzc05hbWU9XCJpbmRpdmlkdWFsQm9va19jb250YWluZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+PGlucHV0IGNsYXNzTmFtZT1cImluZGl2aWR1YWxCb29rX3RpdGxlIGluZGl2aWR1YWxCb29rX2lucHV0XCIgdmFsdWU9e3RpdGxlfSBuYW1lPVwidGl0bGVcIiBvbkNoYW5nZT17dGhpcy5zYXZlRGF0YX0vPjwvZGl2PlxuICAgICAgICA8ZGl2PjxpbnB1dCBjbGFzc05hbWU9XCJpbmRpdmlkdWFsQm9va19pbWFnZSBpbmRpdmlkdWFsQm9va19pbnB1dFwiIHZhbHVlPXtpbWFnZV91cmx9IG5hbWU9XCJpbWFnZV91cmxcIiBvbkNoYW5nZT17dGhpcy5zYXZlRGF0YX0gLz48L2Rpdj5cbiAgICAgICAgPGRpdj48aW5wdXQgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbEJvb2tfbmFtZSBpbmRpdmlkdWFsQm9va19pbnB1dFwiIHZhbHVlPXthdXRob3JfbmFtZX0gbmFtZT1cImF1dGhvcl9uYW1lXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZURhdGF9IC8+PC9kaXY+XG4gICAgICAgIDxkaXY+PGlucHV0IGNsYXNzTmFtZT1cImluZGl2aWR1YWxCb29rX3ByaWNlIGluZGl2aWR1YWxCb29rX2lucHV0XCIgdmFsdWU9e2xpc3RfcHJpY2V9IG5hbWU9XCJsaXN0X3ByaWNlXCIgb25DaGFuZ2U9e3RoaXMuc2F2ZURhdGF9IC8+PC9kaXY+XG4gICAgICAgIDxkaXY+PGlucHV0IGNsYXNzTmFtZT1cImluZGl2aWR1YWxCb29rX2dlbnJlIGluZGl2aWR1YWxCb29rX2lucHV0XCIgdmFsdWU9e2dlbnJlfSBuYW1lPVwiZ2VucmVcIiBvbkNoYW5nZT17dGhpcy5zYXZlRGF0YX0gLz48L2Rpdj5cbiAgICAgICAgPGRpdj48aW5wdXQgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbEJvb2tfcHVibGlzaGVyIGluZGl2aWR1YWxCb29rX2lucHV0XCIgdmFsdWU9e3B1Ymxpc2hlcn0gbmFtZT1cInB1Ymxpc2hlclwiIG9uQ2hhbmdlPXt0aGlzLnNhdmVEYXRhfSAvPjwvZGl2PlxuICAgICAgPGRpdj48aW5wdXQgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbEJvb2tfaXNibiBpbmRpdmlkdWFsQm9va19pbnB1dFwiIHZhbHVlPXtpc2JufSBuYW1lPVwiaXNiblwiIG9uQ2hhbmdlPXt0aGlzLnNhdmVEYXRhfSAvPjwvZGl2PlxuICAgICAgICA8YnIvPlxuICAgICAgPGRpdj48dGV4dGFyZWEgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbEJvb2tfZGVzY3JpcHRpb25cIiB2YWx1ZT17ZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIG9uQ2hhbmdlPXt0aGlzLnNhdmVEYXRhfS8+PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImluZGl2aWR1YWxCb29rX2VkaXQgaW5kaXZpZHVhbEJvb2tfYnRuc1wiPkVkaXQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5kaXZpZHVhbEJvb2tfc2F2ZV9jaGFuZ2VzIGluZGl2aWR1YWxCb29rX2J0bnNcIiBvbkNsaWNrPXt0aGlzLnVwZGF0ZUJvb2t9PlNhdmUgQ2hhbmdlczwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5kaXZpZHVhbEJvb2tfZGVsZXRlIGluZGl2aWR1YWxCb29rX2J0bnNcIiBvbkNsaWNrPXsoKSA9PiB7aWYoY29uZmlybSgnRGVsZXRlIHRoZSBpdGVtPycpKSB7dGhpcy5kZWxldGVCb29rKCl9O319PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gKVxuICB9XG5cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oIDxkaXYgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbEJvb2tfcmVuZGVyQm9va1wiPnt0aGlzLnJlbmRlckJvb2tTZWN0aW9uKCl9PC9kaXY+IClcbiAgfVxuXG5cbn1cblxuLy8gdGl0bGU9e3RpdGxlfSBpbWFnZV91cmw9e2ltYWdlX3VybH0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBpc2JuPXtpc2JufSBhdXRob3JfbmFtZT17YXV0aG9yX25hbWV9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9JbmRpdmlkdWFsQm9vay9JbmRpdmlkdWFsQm9vay5qcyJdLCJzb3VyY2VSb290IjoiIn0=