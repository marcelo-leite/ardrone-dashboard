"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n     .level-shape{\n        position: relative;\n        background-color: #1a114f;\n        \n        height: 16px;\n        width: 100%; \n        \n        margin: 10px 0px;\n        margin-right: 15px;\n        border-radius: 25px;\n        z-index: 1;\n        .level-fill{\n            position: relative;\n            border-radius: 25px;\n            background: linear-gradient(90deg, #5d79ef 0%, #74fbfa 100%); \n            height: 100%;\n            flex-grow: 1;\n            z-index: 2;\n        \n        }\n        \n    } \n    .label-percent{\n        font-size: 16px;\n        width: 40px;\n        \n        max-width: 40px;\n        font-weight: 500;\n\n    }  \n    \n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaterryMeterStyle = _styledComponents["default"].div(_templateObject());

var _default = BaterryMeterStyle;
exports["default"] = _default;