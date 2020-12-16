import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme: any) => ({
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
        color: '#428BCA',
      },
      '&.Mui-focused': {
        color: '#428BCA',
      },
    },
    '& .react-tel-input .selected-flag': {
      left: '20px',
      height: '20px',
      bottom: '-25px',
    },
    '& .react-tel-input .selected-flag .flag': {
      backgroundColor: '#E4E4E4',
      borderRadius: '3px',
      marginTop: '-8px',
      [theme.breakpoints.down('xs')]: {
        marginTop: '-5px',
      },
    },
    '& input': {
      '&:focus': {
        background: '#D4EBFF',
      },
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
        top: '4px',
      },
    },
    '& .country-list': {
      textAlign: 'left',
      width: '200px',
      maxHeight: '250px',
      fontFamily: 'Museo Sans',
      borderRadius: '0px 0px 6px 6px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      '& .country:hover': {
        backgroundColor: '#EDF6FF',
      },
      '& .country.highlight': {
        backgroundColor: '#EDF6FF',
      },
      '&::-webkit-scrollbar': {
        width: '14px',
      },
      '&::-webkit-scrollbar-track': {
        border: '6px solid  rgba(0, 0, 0, 0)',
        backgroundClip: 'padding-box',
        backgroundColor: 'rgba(183, 183, 183, 0.5)',
      },
      '&::-webkit-scrollbar-thumb': {
        border: '5px solid  rgba(0, 0, 0, 0)',
        backgroundClip: 'padding-box',
        borderRadius: '10px',
        backgroundColor: '#4E90CF',
      },
    },
  },
  phoneWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneIcon: {
    position: 'relative',
    top: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  container: {
    height: '48px',
    display: 'flex',
    alignItems: 'flex-end',
    borderBottom: '1px solid #B9BBBD',
    '& .selected-flag:hover, .selected-flag:focus, .flag-dropdown, .open, .selected-flag': {
      backgroundColor: 'unset !important',
    },
    '& .form-control': {
      width: '100%',
      border: 'none',
      borderRadius: '0',
      padding: '0 20px 0 71px',
      fontSize: '22px !important',
      lineHeight: '32px !important',
      height: '28px !important',
      [theme.breakpoints.down('md')]: {
        fontSize: '20px !important',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px !important',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px !important',
        lineHeight: '19px !important',
        height: '19px !important',
      },
    },
  },
  underline: {
    transform: 'scaleX(0)',
    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    borderBottom: '1px solid #1061D8',
    marginTop: '-1px',
    marginBottom: '-1px',
    marginLeft: '0', // margin for icon
    zIndex: 1,
  },
  underline_focused: {
    transform: 'scaleX(1)',
    transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
  },
}));
