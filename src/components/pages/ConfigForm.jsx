import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";
//import Select from "@mui/material";
const ConfigForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    ConfigForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  //const ohcselect = ["Student", "Employee"];
 // const adroute=["ICU","Personal Clinic","Government Hospital"];
  //const dename=["AED","Blood Pressure Monitors","Nebulizers","Oxygen canisters"];
 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:300}}>

          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter key  Name"
                    name="keyname"
                    type="text"
                    size="large"
                    value={values.keyname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.keyname && touched.keyname? (
                        <span style={{ color: "red" }}>{errors.keyname}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter value"
                    name="valued"
                    type="text"
                    size="large"
                    value={values.valued}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.valued && touched.valued? (
                        <span style={{ color: "red" }}>{errors.valued}</span>
                      ) : null
                    }
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ConfigForm;