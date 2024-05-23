import Ohclogo from "./Ohclogo";
import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import { InputLabel, MenuItem, Select } from "@mui/material";



const UnitForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    UnitForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };


//   const Medselect = ["Active", "Not Active"];
//   const isDefault = ["Yes", "No"];



  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{width:400}} >
          <Grid item xs={12}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Unit ID"
                    name="unitId"
                    type="number"
                    size="large"
                    value={values.unitId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.unitId && touched.unitId? (
                        <span style={{ color: "red" }}>{errors.unitId}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="unit Name"
                    name="UnitName"
                    type="text"
                    size="large"
                    value={values.UnitName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.UnitName && touched.UnitName? (
                        <span style={{ color: "red" }}>{errors.UnitName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Remarks"
                    name="Remarks"
                    type="text"
                    size="large"
                    value={values.Remarks}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.Remarks && touched.Remarks? (
                        <span style={{ color: "red" }}>{errors.Remarks}</span>
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


export default UnitForm;
