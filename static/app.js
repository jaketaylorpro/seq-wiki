/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _sequenceDiagram = __webpack_require__(2);

	var _sequenceDiagram2 = _interopRequireDefault(_sequenceDiagram);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var blockDataShape = _react2.default.PropTypes.shape({
	    id: _react2.default.PropTypes.string,
	    name: _react2.default.PropTypes.string,
	    instructions: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
	        code: _react2.default.PropTypes.string
	    }))
	});

	var SeqBlockEditPanel = function (_React$Component) {
	    _inherits(SeqBlockEditPanel, _React$Component);

	    function SeqBlockEditPanel(props) {
	        _classCallCheck(this, SeqBlockEditPanel);

	        var _this = _possibleConstructorReturn(this, (SeqBlockEditPanel.__proto__ || Object.getPrototypeOf(SeqBlockEditPanel)).call(this, props));

	        _this.state = {
	            nameText: props.blockData && props.blockData.name ? props.blockData.name : '',
	            instructionsText: props.blockData && props.blockData.instructions ? props.blockData.instructions.join('\n') : ''
	        };
	        _this.handleCodeChange = _this.handleCodeChange.bind(_this);
	        return _this;
	    }

	    _createClass(SeqBlockEditPanel, [{
	        key: 'handleCodeChange',
	        value: function handleCodeChange(e) {
	            this.setState({ instructionsText: e.target.value });
	            var svg = _sequenceDiagram2.default.parse(this.state.instructionsText);
	            document.getElementById('preview-pane').innerHTML = '';
	            svg.drawSVG(document.getElementById('preview-pane'));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'seq-block-edit-panel' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'code col-lg-6' },
	                    _react2.default.createElement('textarea', { value: this.state.instructionsText, onChange: this.handleCodeChange })
	                ),
	                _react2.default.createElement('div', { id: 'preview-pane', className: 'preview col-lg-6' })
	            );
	        }
	    }]);

	    return SeqBlockEditPanel;
	}(_react2.default.Component);

	SeqBlockEditPanel.propTypes = {
	    blockData: blockDataShape
	};
	exports.default = SeqBlockEditPanel;

	window.SeqBlockEditPanel = SeqBlockEditPanel;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = Diagram;

/***/ }
/******/ ]);