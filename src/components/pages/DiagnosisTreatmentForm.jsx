import { FormControl, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect"
//import MultipleSelect from "./MultipleSelect";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import MultiCheckbox from "./MultiCheckbox";
//import Select from "@mui/material";

const DiagnosisForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  setFieldValue,
  handleSubmit,
}) => {
  DiagnosisForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  //const ohcselect = ["Student", "Employee"];
  const Chronic = ["heart disease", "stroke", "lung cancer", "colorectal cancer", "depression", "type 2 diabetes"];
  const advice = [{ value: "work on your health", label: "work on your health" },
  { value: "Do not get thirsty", label: "Do not get thirsty" }, { value: "Eat lots of fruit and veg", label: "Eat lots of fruit and veg" }];
  const diagnosis = ["Provisional", "Histopathological", "Final"];
  const medicines = ["Liquid", "Tablet", "Capsules", "Topical medicines"]
  const freq = [1, 2, 3, 4, 5];
  const adroute = ["ICU", "Personal Clinic", "Government Hospital"];
  const time = ["Morning", "Afternoon", "Evening"];

  const [selected, setSelected] = useState([]);
  const handlechange = (event, newValue) => {
    setSelected(newValue);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">

          <Grid item xs={12} sm={8} justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={Chronic}
                    label="Chronic Illness"
                    name="chillness"
                    value={values.chillness}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "chillness",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.chillness && touched.chillness ? (
                        <span style={{ color: "red" }}>{errors.chillness}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={diagnosis}
                    label="diagnosis"
                    name="diagnosis"
                    value={values.diagnosis}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "diagnosis",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.diagnosis && touched.diagnosis ? (
                        <span style={{ color: "red" }}>{errors.diagnosis}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={medicines}
                    label="Medicine"
                    name="medicin"
                    value={values.medicin}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "medicin",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.medicin && touched.medicin ? (
                        <span style={{ color: "red" }}>{errors.medicin}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={freq}
                    label="Freque"
                    name="frequency"
                    value={values.frequency}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "frequency",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="number"
                    helperText={
                      errors.frequency && touched.frequency ? (
                        <span style={{ color: "red" }}>{errors.frequency}</span>
                      ) : null
                    }
                  />

                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={time}
                    label="Timing"
                    name="timing"
                    value={values.timing}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "timing",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.timing && touched.timing ? (
                        <span style={{ color: "red" }}>{errors.timing}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <SingleSelect
                    arr={adroute}
                    label="Admin Route"
                    name="adroute"
                    value={values.adroute}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "adroute",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.adroute && touched.adroute ? (
                        <span style={{ color: "red" }}>{errors.adroute}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Duration"
                    name="duration"
                    type="number"
                    size="large"
                    value={values.duration}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.duration && touched.duration ? (
                        <span style={{ color: "red" }}>{errors.duration}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Dose Quantity"
                    name="doseqty"
                    type="number"
                    size="large"
                    value={values.doseqty}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.doseqty && touched.doseqty ? (
                        <span style={{ color: "red" }}>{errors.doseqty}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <Input
                    label="Health Advice"
                    name="healthadvice"
                    type="text"
                    size="large"
                    value={values.healthadvice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.healthadvice && touched.healthadvice ? (
                        <span style={{ color: "red" }}>{errors.healthadvice}</span>
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

export default DiagnosisForm;
