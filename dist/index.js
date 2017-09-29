'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mailcheck = require('mailcheck');

var _mailcheck2 = _interopRequireDefault(_mailcheck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _propTypes2.default.string,
    number = _propTypes2.default.number,
    array = _propTypes2.default.array,
    func = _propTypes2.default.func;

var MailCheck = function (_React$Component) {
  _inherits(MailCheck, _React$Component);

  function MailCheck() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MailCheck);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MailCheck.__proto__ || Object.getPrototypeOf(MailCheck)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      suggestion: null
    }, _this.checkEmail = function (email) {
      var _this$props = _this.props,
          domainThreshold = _this$props.domainThreshold,
          secondLevelThreshold = _this$props.secondLevelThreshold,
          topLevelThreshold = _this$props.topLevelThreshold,
          domains = _this$props.domains,
          topLevelDomains = _this$props.topLevelDomains,
          secondLevelDomains = _this$props.secondLevelDomains,
          distanceFunction = _this$props.distanceFunction;


      _mailcheck2.default.domainThreshold = domainThreshold || _mailcheck2.default.domainThreshold;
      _mailcheck2.default.secondLevelThreshold = secondLevelThreshold || _mailcheck2.default.secondLevelThreshold;
      _mailcheck2.default.topLevelThreshold = topLevelThreshold || _mailcheck2.default.topLevelThreshold;

      _mailcheck2.default.run({
        email: email,
        domains: domains,
        topLevelDomains: topLevelDomains,
        secondLevelDomains: secondLevelDomains,
        distanceFunction: distanceFunction,
        suggested: function suggested(suggestion) {
          _this.setState({
            suggestion: suggestion
          });
        },
        empty: function empty() {
          if (_this.state.suggestion) {
            _this.setState({ suggestion: null });
          }
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MailCheck, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.checkEmail(this.props.email);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.checkEmail(nextProps.email);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.state.suggestion);
    }
  }]);

  return MailCheck;
}(_react2.default.Component);

MailCheck.propTypes = {
  email: string.isRequired,
  children: func.isRequired,
  domainThreshold: number,
  secondLevelThreshold: number,
  topLevelThreshold: number,
  domains: array,
  topLevelDomains: array,
  secondLevelDomains: array,
  distanceFunction: func
};
exports.default = MailCheck;
