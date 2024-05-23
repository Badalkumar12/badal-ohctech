import Ohclogo from "./Ohclogo";
import { FormControl, Grid} from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import { InputLabel, MenuItem, Select } from "@mui/material";



const VaccineForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
    VaccineForm.propTypes = {
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
                    label="Vaccine Name"
                    name="VaccineName"
                    type="text"
                    size="large"
                    value={values.VaccineName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.VaccineName && touched.VaccineName? (
                        <span style={{ color: "red" }}>{errors.VaccineName}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Company Name"
                    name="CompanyName"
                    type="text"
                    size="large"
                    value={values.CompanyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.CompanyName && touched.CompanyName? (
                        <span style={{ color: "red" }}>{errors.CompanyName}</span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12}  container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Vaccine Description"
                    name="VaccineDesc"
                    type="text"
                    size="large"
                    value={values.VaccineDesc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.VaccineDesc && touched.VaccineDesc? (
                        <span style={{ color: "red" }}>{errors.VaccineDesc}</span>
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


export default VaccineForm;
