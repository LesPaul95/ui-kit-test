import React, { useState, useCallback, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

var useStyles = /*#__PURE__*/makeStyles(function (theme) {
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
var TextInput = /*#__PURE__*/React.memo(function (_ref) {
  var styles = _ref.styles,
      value = _ref.value,
      rest = _objectWithoutPropertiesLoose(_ref, ["styles", "value"]);

  var classes = useStyles(styles);

  var _useState = useState(value != null ? value : ''),
      inputValue = _useState[0],
      setValue = _useState[1];

  var handleChange = useCallback(function (e) {
    setValue(e.target.value);
  }, []);
  useEffect(function () {
    setValue(value != null ? value : '');
  }, [value]);
  return React.createElement(TextField, Object.assign({
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

export { TextInput };
//# sourceMappingURL=ui_kit_test.esm.js.map
