import { MenuItem, Select } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { useField } from "formik";

import React from "react";
// const useStyles = makeStyles({
//   select: {
//     height: "40px",
//     "--color-primary": "#1a202c",
//     "--color-secondary": "#e2e8f0",
//     "& .MuiSelect-select": {
//       height: "40px",
//       borderRadius: "1px",
//       borderColor: "red",
//       borderWidth: "3px",
//       backgroundColor: "var(--color-secondary)",
//       "&:focus": {
//         // borderColor: "var(--color-primary)",
//         // boxShadow: "0 0 0 3px var(--color-primary)",
//         // outline: "none",
//         border: "none !important",
//         outline: "none !important",
//       },
//     },
//     // "& .MuiSelect-icon": {
//     //   color: "var(--color-primary)",
//     // },
//     // "& .MuiSelect-selectMenu": {
//     //   padding: "0.5rem",
//     //   fontSize: "0.875rem",
//     //   lineHeight: "1.5",
//     //   zIndex: "60",
//     //   backgroundColor: "var(--color-primary)",
//     //   color: "white",
//     //   "&:focus": {
//     //     outline: "none",
//     //   },
//     // },
//   },
// });
// <Select
//   disableUnderline
//   variant="outlined"
//   sx={{
//     borderRadius: "6px",
//     height: "40px",
//     "& .MuiInputBase-root":{
//         border:"1px solid red"
//     },
//     "&:focus-within": {
//       outlineColor: "none",
//     },
//     "& .MuiSvgIcon-root": {
//       color: "#1976d2",
//     },
//     "& .MuiOutlinedInput-notchedOutline":{
//         borderColor:"#bfd1e3 !important",
//         borderWidth:"1px !important"
//     }
//   }}
//   onChange={handleChange}
//   value={selectedValue}
//   displayEmpty
//   name={name}
// >
//   <MenuItem value="" disabled>
//     {placeholder}
//   </MenuItem>
//   {list.map((item) => {
//     return <MenuItem value={item.id}>{item.name}</MenuItem>;
//   })}
// </Select>
//   list,
//   placeholder,
//   selectedValue,
//   name,
//   handleChange,
//   const classes = useStyles();

export const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
