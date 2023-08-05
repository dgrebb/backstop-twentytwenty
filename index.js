"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DEGREES_IN_RADIAN = 180 / Math.PI;
var TwentyTwenty = /*#__PURE__*/function (_Component) {
  _inherits(TwentyTwenty, _Component);
  var _super = _createSuper(TwentyTwenty);
  function TwentyTwenty(props) {
    var _this;
    _classCallCheck(this, TwentyTwenty);
    _this = _super.call(this, props);
    _this.state = {
      startX: NaN,
      startY: NaN,
      isDragging: false,
      position: props.initialPosition
    };
    _this.beginDrag = _this.beginDrag.bind(_assertThisInitialized(_this));
    _this.endDrag = _this.endDrag.bind(_assertThisInitialized(_this));
    _this.onDragMove = _this.onDragMove.bind(_assertThisInitialized(_this));
    _this.twentyTwentyComponent = (0, _react.useRef)();
    return _this;
  }
  _createClass(TwentyTwenty, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var newPosition = _ref.newPosition;
      this.setState({
        position: newPosition
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.endDrag();
    }
  }, {
    key: "onDragMove",
    value: function onDragMove(e) {
      // eslint-disable-next-line react/destructuring-assignment
      if (!this.props.isDraggingEnabled) return;
      var isDragging = this.state.isDragging;
      var isTouch = ('touches' in e);
      var _ref2 = isTouch ? e.touches[0] : e,
        pageX = _ref2.pageX,
        pageY = _ref2.pageY;
      if (!isDragging && isTouch) {
        var _this$props = this.props,
          maxAngleToBeginInteraction = _this$props.maxAngleToBeginInteraction,
          minDistanceToBeginInteraction = _this$props.minDistanceToBeginInteraction;
        var _this$state = this.state,
          startX = _this$state.startX,
          startY = _this$state.startY;
        var dx = startX - pageX;
        var dy = startY - pageY;
        var angle = Math.atan(dy / dx) * DEGREES_IN_RADIAN;
        var distance = Math.sqrt(dx * dx + dy * dy);
        isDragging = distance >= minDistanceToBeginInteraction;
        if (isDragging && Math.abs(angle) > maxAngleToBeginInteraction) {
          // They're trying to scroll vertically
          this.endDrag();
          return;
        } else if (!isDragging) {
          return;
        }
      }
      var _this$twentyTwentyCom = this.twentyTwentyComponent.getBoundingClientRect(),
        left = _this$twentyTwentyCom.left,
        width = _this$twentyTwentyCom.width;
      var position = 100 * (pageX - left) / width;
      position = Math.max(Math.min(position, 100), 0);
      this.setState({
        position: position,
        isDragging: isDragging
      });
    }
  }, {
    key: "beginDrag",
    value: function beginDrag(e) {
      if (e) e.preventDefault();
      if (!this.props.isDraggingEnabled) return;
      var _ref3 = 'touches' in e ? e.touches[0] : e,
        pageX = _ref3.pageX,
        pageY = _ref3.pageY;
      this.setState({
        startX: pageX,
        startY: pageY
      });
      document.addEventListener('mousemove', this.onDragMove);
      document.addEventListener('mouseup', this.endDrag);
      document.addEventListener('touchmove', this.onDragMove);
      document.addEventListener('touchend', this.endDrag);
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      document.removeEventListener('mousemove', this.onDragMove);
      document.removeEventListener('mouseup', this.endDrag);
      document.removeEventListener('touchmove', this.onDragMove);
      document.removeEventListener('touchend', this.endDrag);
      this.setState({
        isDragging: false,
        startY: NaN,
        endY: NaN
      });
    }
  }, {
    key: "render",
    value: function render() {
      var position = this.state.position;
      var _this$props2 = this.props,
        children = _this$props2.children,
        verticalAlign = _this$props2.verticalAlign,
        leftHorizontalAlign = _this$props2.leftHorizontalAlign,
        rightHorizontalAlign = _this$props2.rightHorizontalAlign;
      if (children.length !== 2 && children.length !== 3) {
        console.warn('Expected exactly two or three children'); // eslint-disable-line
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.twentyTwentyComponent,
        style: {
          position: 'relative',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        },
        onMouseDown: this.beginDrag,
        onTouchStart: this.beginDrag
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'absolute',
          left: "".concat(position, "%"),
          height: '100%',
          width: 0,
          zIndex: 1
        }
      }, children[2]), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'inline-block',
          width: '100%',
          position: 'relative',
          verticalAlign: verticalAlign,
          left: "".concat(position - 100, "%"),
          overflow: 'hidden'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative',
          right: "".concat(position - 100, "%"),
          textAlign: leftHorizontalAlign
        }
      }, children[0])), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'inline-block',
          width: '100%',
          position: 'relative',
          verticalAlign: verticalAlign,
          left: "".concat(position - 100, "%"),
          overflow: 'hidden'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative',
          right: "".concat(position, "%"),
          textAlign: rightHorizontalAlign
        }
      }, children[1])));
    }
  }]);
  return TwentyTwenty;
}(_react.Component);
exports["default"] = TwentyTwenty;
TwentyTwenty.defaultProps = {
  verticalAlign: 'middle',
  leftHorizontalAlign: 'center',
  rightHorizontalAlign: 'center',
  minDistanceToBeginInteraction: 15,
  maxAngleToBeginInteraction: 30,
  initialPosition: 50,
  isDraggingEnabled: true
};
