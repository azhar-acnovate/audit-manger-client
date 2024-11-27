/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Argon Dashboard 2 MUI Base Styles
import colors from "../../base/colors";
import borders from "../../base/borders";

// Soft UI Dashboard PRO helper functions
import pxToRem from "../../functions/pxToRem";

const { inputColors } = colors;
const { borderWidth, borderRadius } = borders;

const input = {
  styleOverrides: {
    root: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: inputColors.borderColor.main,
        borderWidth: `${borderWidth[1]} !important`,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: inputColors.borderColor.main,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: inputColors.borderColor.focus,
      },
      border: 'none', // Ensure no additional border is set here
      display: "flex !important",
      padding: `${pxToRem(8)} ${pxToRem(12)}`,
   //   border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      borderRadius: `${borderRadius.md} !important`,
    },

    input: {
      height: pxToRem(22),
      width: "max-content !important",
    },

    inputSizeSmall: {
      height: pxToRem(14),
    },
  },
};

export default input;
