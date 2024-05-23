// import { CheckBox } from "@mui/icons-material";
import { Box, Stack,Grid,FormControl } from "@mui/material"
import { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; 
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography'
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
import MultipleSelect from "../common/MultipleSelect";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import MultiCheckbox from "./MultiCheckbox";

const RouteAdminForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
})=> {

    RouteAdminForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfPassword = () => setShowConPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
   
    
    
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
      <Grid  container spacing={2} justifyContent="center" alignItems="center" sx={{width:"300px"}}>
          <Grid item   justifyContent="center" alignItems="center">
             <FormControl fullWidth>
              <Grid  container spacing={2} justifyContent="center" alignItems="center">
                <Grid item    container spacing={1} justifyContent="center" alignItems="center">
                <Input
                  // sx={{ width: "150px" }}
                  label="Enter Route Of Administration"
                  name="routeAdmin"
                  type="text"
                  size="large"
                  id="outlined-basic"
                  variant="outlined"
                  value={values.routeAdmin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                      errors.routeAdmin && touched.routeAdmin ? (
                        <span style={{ color: "red" }}>
                          {errors.routeAdmin}
                        </span>
                      ) : null
                    }
                />
                </Grid>
                <Grid item   container spacing={1} justifyContent="center" alignItems="center">
                <Input
                  // sx={{ width: "150px" }}
                  label="Enter the Remarks"
                  name="remarks"
                  type="text"
                  size="large"
                  id="outlined-basic"
                  variant="outlined"
                  value={values.remarks}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.remarks && touched.remarks ? (
                      <span style={{ color: "red" }}>
                        {errors.remarks}
                      </span>
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
  )
}

export default RouteAdminForm;