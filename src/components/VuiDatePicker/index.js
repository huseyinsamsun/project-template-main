
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-flatpickr components
import Flatpickr from "react-flatpickr";

// react-flatpickr styles
import "flatpickr/dist/flatpickr.css";

// Vision UI Dashboard PRO React components
import VuiInput from "components/VuiInput";

function VuiDatePicker({ input, ...rest }) {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }, ref) => (
        <VuiInput {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
}

// Setting default values for the props of VuiDatePicker
VuiDatePicker.defaultProps = {
  input: {},
};

// Typechecking props for the VuiDatePicker
VuiDatePicker.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
};

export default VuiDatePicker;
