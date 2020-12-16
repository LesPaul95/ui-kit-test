'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@material-ui/core');
var styles = require('@material-ui/core/styles');
var clsx = _interopDefault(require('clsx'));
var PhoneInput = _interopDefault(require('react-phone-input-2'));
var ru = _interopDefault(require('react-phone-input-2/lang/ru.json'));
require('react-phone-input-2/lib/style.css');
var styled = _interopDefault(require('styled-components'));
var CloseIcon = _interopDefault(require('@material-ui/icons/Close'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var useStyles = /*#__PURE__*/styles.makeStyles(function (theme) {
  var _MuiInputBaseInpu, _MuiInputAdornment;

  return {
    root: {
      width: '100%',
      '& .MuiInputBase-input': (_MuiInputBaseInpu = {
        height: 28,
        padding: 0,
        fontSize: 22,
        fontWeight: 300
      }, _MuiInputBaseInpu[theme.breakpoints.down('md')] = {
        fontSize: 20
      }, _MuiInputBaseInpu[theme.breakpoints.down('sm')] = {
        fontSize: 18
      }, _MuiInputBaseInpu[theme.breakpoints.down('xs')] = {
        height: 19,
        fontSize: 14
      }, _MuiInputBaseInpu),
      '& .MuiInput-input': {
        marginLeft: theme.spacing(1)
      },
      '& .MuiInputAdornment-root > svg': (_MuiInputAdornment = {}, _MuiInputAdornment[theme.breakpoints.down('xs')] = {
        width: 14
      }, _MuiInputAdornment),
      '& .Mui-focused': {
        '& svg': {
          display: 'none'
        }
      }
    },
    filledUnderline: {
      '&:before': {
        borderBottom: '1px solid #B9BBBD',
        transition: 'none'
      }
    },
    pencil: {
      marginBottom: '5px'
    },
    disabled: {
      '&.MuiInput-underline:before': {
        borderBottomStyle: 'solid'
      }
    }
  };
});
var TextInput = /*#__PURE__*/React__default.memo(function (_ref) {
  var styles = _ref.styles,
      value = _ref.value,
      rest = _objectWithoutPropertiesLoose(_ref, ["styles", "value"]);

  var classes = useStyles(styles);

  var _useState = React.useState(value != null ? value : ''),
      inputValue = _useState[0],
      setValue = _useState[1];

  var handleChange = React.useCallback(function (e) {
    setValue(e.target.value);
  }, []);
  React.useEffect(function () {
    setValue(value != null ? value : '');
  }, [value]);
  return React__default.createElement(core.TextField, Object.assign({
    InputLabelProps: {
      shrink: true
    },
    classes: {
      root: classes.root
    },
    InputProps: {
      classes: {
        underline: inputValue.toString().length > 0 ? classes.filledUnderline : undefined,
        disabled: classes.disabled
      }
    },
    value: inputValue,
    onChange: handleChange,
    autoComplete: "off"
  }, rest));
});

var useStyles$1 = /*#__PURE__*/styles.makeStyles(function (theme) {
  var _reactTelInput, _formControl;

  return {
    root: {
      '& label': {
        color: '#428BCA',
        fontFamily: 'Museo Sans',
        fontWeight: '400',
        fontSize: '14px',
        letterSpacing: '0.2em',
        lineHeight: '17px',
        top: '-6px',
        '&.Mui-disabled': {
          color: '#428BCA'
        },
        '&.Mui-focused': {
          color: '#428BCA'
        }
      },
      '& .react-tel-input .selected-flag': {
        left: '20px',
        height: '20px',
        bottom: '-25px'
      },
      '& .react-tel-input .selected-flag .flag': (_reactTelInput = {
        backgroundColor: '#E4E4E4',
        borderRadius: '3px',
        marginTop: '-8px'
      }, _reactTelInput[theme.breakpoints.down('xs')] = {
        marginTop: '-5px'
      }, _reactTelInput),
      '& input': {
        '&:focus': {
          background: '#D4EBFF'
        }
      },
      '& .react-tel-input .selected-flag .arrow': {
        border: 'solid #1061d8',
        borderWidth: '0 2px 2px 0',
        display: 'inline-block',
        padding: '3px 2px 2px 3px',
        transform: 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)',
        position: 'absolute',
        top: '2px',
        marginLeft: '4px',
        '&.up': {
          transform: 'rotate(-135deg)',
          '-webkit-transform': 'rotate(-135deg)',
          top: '4px'
        }
      },
      '& .country-list': {
        textAlign: 'left',
        width: '200px',
        maxHeight: '250px',
        fontFamily: 'Museo Sans',
        borderRadius: '0px 0px 6px 6px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        '& .country:hover': {
          backgroundColor: '#EDF6FF'
        },
        '& .country.highlight': {
          backgroundColor: '#EDF6FF'
        },
        '&::-webkit-scrollbar': {
          width: '14px'
        },
        '&::-webkit-scrollbar-track': {
          border: '6px solid  rgba(0, 0, 0, 0)',
          backgroundClip: 'padding-box',
          backgroundColor: 'rgba(183, 183, 183, 0.5)'
        },
        '&::-webkit-scrollbar-thumb': {
          border: '5px solid  rgba(0, 0, 0, 0)',
          backgroundClip: 'padding-box',
          borderRadius: '10px',
          backgroundColor: '#4E90CF'
        }
      }
    },
    phoneWithIcon: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    phoneIcon: {
      position: 'relative',
      top: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    container: {
      height: '48px',
      display: 'flex',
      alignItems: 'flex-end',
      borderBottom: '1px solid #B9BBBD',
      '& .selected-flag:hover, .selected-flag:focus, .flag-dropdown, .open, .selected-flag': {
        backgroundColor: 'unset !important'
      },
      '& .form-control': (_formControl = {
        width: '100%',
        border: 'none',
        borderRadius: '0',
        padding: '0 20px 0 71px',
        fontSize: '22px !important',
        lineHeight: '32px !important',
        height: '28px !important'
      }, _formControl[theme.breakpoints.down('md')] = {
        fontSize: '20px !important'
      }, _formControl[theme.breakpoints.down('sm')] = {
        fontSize: '18px !important'
      }, _formControl[theme.breakpoints.down('xs')] = {
        fontSize: '14px !important',
        lineHeight: '19px !important',
        height: '19px !important'
      }, _formControl)
    },
    underline: {
      transform: 'scaleX(0)',
      transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      borderBottom: '1px solid #1061D8',
      marginTop: '-1px',
      marginBottom: '-1px',
      marginLeft: '0',
      zIndex: 1
    },
    underline_focused: {
      transform: 'scaleX(1)',
      transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
    }
  };
});

var preferredCountries = ['ru', 'ua', 'kz', 'by'];
var buttonStyle = {
  backgroundColor: 'unset',
  border: 0,
  borderRadius: 0
};
var inputStyle = {
  color: '#44464B',
  fontFamily: 'Museo Sans',
  fontSize: '16px',
  height: '32px',
  fontWeight: 300
};
function StyledPhoneInput(_ref) {
  var id = _ref.id,
      value = _ref.value,
      label = _ref.label,
      onBlur = _ref.onBlur,
      disabled = _ref.disabled;
  var classes = useStyles$1();

  var _useState = React.useState(false),
      focus = _useState[0],
      setFocus = _useState[1];

  var onFocus = function onFocus() {
    setFocus(true);
  };

  var handleBlur = function handleBlur(event) {
    setFocus(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  return React__default.createElement(core.FormControl, {
    fullWidth: true,
    className: classes.root
  }, React__default.createElement(core.InputLabel, {
    shrink: true,
    id: id
  }, label), React__default.createElement("div", {
    id: id,
    className: classes.phoneWithIcon
  }, React__default.createElement(PhoneInput, {
    inputProps: {
      id: id + "__input"
    },
    localization: ru,
    value: value,
    preferredCountries: preferredCountries,
    containerClass: classes.container,
    buttonStyle: buttonStyle,
    inputStyle: inputStyle,
    placeholder: "",
    onFocus: onFocus,
    onBlur: handleBlur,
    disabled: disabled
  })), React__default.createElement("span", {
    className: clsx(classes.underline, focus ? classes.underline_focused : '')
  }));
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  font-family: Museo Sans Cyrl, sans-serif;\n  text-align: center;\n  color: #1062d8;\n  font-weight: 600;\n  font-size: 38px;\n  line-height: 140%;\n  letter-spacing: 0.04em;\n  margin-top: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  color: #1062d8;\n  width: 54px;\n  height: 54px;\n  cursor: pointer;\n  right: -73px;\n  top: 22px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  width: min-content;\n  height: auto;\n  padding: 27px;\n  border-radius: 23px;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledModal = /*#__PURE__*/styled(core.Modal)( /*#__PURE__*/_templateObject());
var Wrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject2(), function (props) {
  return props.backgroundColor || '#FFFFFF';
});
var StyledCloseIcon = /*#__PURE__*/styled(CloseIcon)( /*#__PURE__*/_templateObject3());
var Title = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject4());

var Modal = function Modal(_ref) {
  var opened = _ref.opened,
      handleClose = _ref.handleClose,
      children = _ref.children,
      _ref$closeButton = _ref.closeButton,
      closeButton = _ref$closeButton === void 0 ? false : _ref$closeButton,
      _ref$disableBackdropC = _ref.disableBackdropClick,
      disableBackdropClick = _ref$disableBackdropC === void 0 ? false : _ref$disableBackdropC,
      backgroundColor = _ref.backgroundColor,
      title = _ref.title;
  return React__default.createElement(StyledModal, {
    open: opened,
    onClose: handleClose,
    disableBackdropClick: disableBackdropClick
  }, React__default.createElement(Wrapper, {
    backgroundColor: backgroundColor
  }, closeButton && React__default.createElement(StyledCloseIcon, {
    onClick: handleClose
  }), title && React__default.createElement(Title, null, title), children));
};

var theme = /*#__PURE__*/core.createMuiTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 1200,
      lg: 1920,
      xl: 2400
    }
  },
  overrides: {
    MuiTypography: {
      h5: {
        fontWeight: 600
      }
    },
    MuiInputBase: {
      input: {
        fontWeight: 300,
        letterSpacing: '0.04em',
        color: '#44464B'
      }
    },
    MuiLink: {
      root: {
        color: '#4E90CF'
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #B9BBBD'
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid #92A7B6'
        },
        '&:after': {
          borderBottom: '1px solid #1061D8'
        }
      }
    }
  }
});

exports.Modal = Modal;
exports.PhoneInput = StyledPhoneInput;
exports.TextInput = TextInput;
exports.theme = theme;
//# sourceMappingURL=ui_kit_test.cjs.development.js.map
