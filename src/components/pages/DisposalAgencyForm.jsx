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
const DisposalAgencyForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    DisposalAgencyForm.propTypes = {
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
                    label="Enter Agency  Name"
                    name="agencyname"
                    type="text"
                    size="large"
                    value={values.agencyname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.agencyname && touched.agencyname? (
                        <span style={{ color: "red" }}>{errors.agencyname}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter Agency Address"
                    name="agencyaddress"
                    type="text"
                    size="large"
                    value={values.agencyaddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.agencyaddress && touched.agencyaddress? (
                        <span style={{ color: "red" }}>{errors.agencyaddress}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter Registration No."
                    name="registrationno"
                    type="text"
                    size="large"
                    value={values.registrationno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.registrationno && touched.registrationno? (
                        <span style={{ color: "red" }}>{errors.registrationno}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter Allocated Reg No to OHC"
                    name="allocation"
                    type="text"
                    size="large"
                    value={values.allocation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.allocation && touched.allocation? (
                        <span style={{ color: "red" }}>{errors.allocation}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter HOD  Name"
                    name="hodname"
                    type="text"
                    size="large"
                    value={values.hodname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.hodname && touched.hodname? (
                        <span style={{ color: "red" }}>{errors.hodname}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Enter HOD Email"
                    name="hodemail"
                    type="text"
                    size="large"
                    value={values.hodemail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.hodemail && touched.hodemail? (
                        <span style={{ color: "red" }}>{errors.hodemail}</span>
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

export default DisposalAgencyForm;