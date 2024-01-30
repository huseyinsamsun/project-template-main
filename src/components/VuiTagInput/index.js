

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-tag-input components
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

// Custom styles for VuiTagInput
import VuiTagInputRoot from "components/VuiTagInput/VuiTagInputRoot";

const VuiTagInput = forwardRef(({ size, error, success, ...rest }, ref) => (
  <VuiTagInputRoot ownerState={{ size, error, success }}>
    <ReactTagInput {...rest} ref={ref} />
  </VuiTagInputRoot>
));

// Setting default values for the props of VuiTagInput
VuiTagInput.defaultProps = {
  size: "medium",
  error: false,
  success: false,
};

// Typechecking props for the VuiTagInput
VuiTagInput.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default VuiTagInput;
