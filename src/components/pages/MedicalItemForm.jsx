import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";

const MedicalItemForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    MedicalItemForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

 const categoryselect=["Capital/non consumeble instruments","other"]
 const statusSelect=["Active","Not Active"]
 const prescriptionSelect=["Yes","No"]
 const Aligunmentselect=["Central Neourvous System","Dieatry Advice"]
 const usagesCatagorySelect=["Antacids"]
 const measurnmentselect=["Bottles"]
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center"  >
        
          <Grid itemxs={12} sm={8}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" marginTop={1} alignItems="center">
                  <Input
                    label="Item Name"
                    name="itemName"
                    type="text"
                    size="large"
                    value={values.itemName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.itemName && touched.itemName ? (
                        <span style={{ color: "red" }}>{errors.itemName}</span>
                      ) : null
                    }
                  />
                  
                </Grid>
                <Grid item  xs={12} sm={6} container spacing={1} justifyContent="center" marginTop={1}  alignItems="center">
                <Input
                    label="Item Code"
                    name="itemCode"
                    type="text"
                    size="large"
                    value={values.itemCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.itemCode && touched.itemCode ? (
                        <span style={{ color: "red" }}>
                          {errors.itemCode}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
              
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={categoryselect}
                    label="Select Category"
                    name="category"
                    value={values.category}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "category",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.category && touched.category ? (
                        <span style={{ color: "red" }}>{errors.category}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={categoryselect}
                    label="Select Item Form"
                    name="itemform"
                    value={values.itemform}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "itemform",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.itemform && touched.itemform ? (
                        <span style={{ color: "red" }}>{errors.itemform}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={Aligunmentselect}
                    label="Select Related Alignment System"
                    name="relatedAilmentSystem"
                    value={values.relatedAilmentSystem}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "relatedAilmentSystem",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.relatedAilmentSystem && touched.relatedAilmentSystem ? (
                        <span style={{ color: "red" }}>{errors.relatedAilmentSystem}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={usagesCatagorySelect}
                    label="Select Usage Category"
                    name="usageCategory"
                    value={values.usageCategory}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "usageCategory",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.usageCategory && touched.usageCategory ? (
                        <span style={{ color: "red" }}>{errors.usageCategory}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Sub Classification"
                    name="subClassification"
                    type="text"
                    size="large"
                    value={values.subClassification}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.subClassification && touched.subClassification ? (
                        <span style={{ color: "red" }}>
                          {errors.subClassification}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Salt"
                    name="salt"
                    type="text"
                    size="large"
                    value={values.salt}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.salt && touched.salt ? (
                        <span style={{ color: "red" }}>
                          {errors.salt}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Indication"
                    name="indication"
                    type="text"
                    size="large"
                    value={values.indication}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.indication && touched.indication ? (
                        <span style={{ color: "red" }}>
                          {errors.indication}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Contra Indication"
                    name="contraindication"
                    type="text"
                    size="large"
                    value={values.contraindication}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.contraindication && touched.contraindication ? (
                        <span style={{ color: "red" }}>
                          {errors.contraindication}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Side Effect"
                    name="sideEffect"
                    type="text"
                    size="large"
                    value={values.sideEffect}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.sideEffect && touched.sideEffect ? (
                        <span style={{ color: "red" }}>
                          {errors.sideEffect}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Interaction"
                    name="interaction"
                    type="text"
                    size="large"
                    value={values.interaction}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.interaction && touched.interaction ? (
                        <span style={{ color: "red" }}>
                          {errors.interaction}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Medicine Precaution"
                    name="medicineprecaution"
                    type="text"
                    size="large"
                    value={values.medicineprecaution}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.medicineprecaution && touched.medicineprecaution ? (
                        <span style={{ color: "red" }}>
                          {errors.medicineprecaution}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Reorder Store Level"
                    name="reorderstorelevel"
                    type="text"
                    size="large"
                    value={values.reorderstorelevel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.reorderstorelevel && touched.reorderstorelevel ? (
                        <span style={{ color: "red" }}>
                          {errors.reorderstorelevel}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Minimum Store Level "
                    name="ministorelevel"
                    type="text"
                    size="large"
                    value={values.ministorelevel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.ministorelevel && touched.ministorelevel ? (
                        <span style={{ color: "red" }}>
                          {errors.ministorelevel}
                        </span>
                      ) : null
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Minimum Ident Level "
                    name="minindentlevel"
                    type="text"
                    size="large"
                    value={values.minindentlevel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.minindentlevel && touched.minindentlevel ? (
                        <span style={{ color: "red" }}>
                          {errors.minindentlevel}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Maximum Ident Level "
                    name="maxiindentlevel"
                    type="text"
                    size="large"
                    value={values.maxiindentlevel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.maxiindentlevel && touched.maxiindentlevel ? (
                        <span style={{ color: "red" }}>
                          {errors.maxiindentlevel}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Reorder Percentage Level "
                    name="reorderpercentagelevel"
                    type="text"
                    size="large"
                    value={values.reorderpercentagelevel}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.reorderpercentagelevel && touched.reorderpercentagelevel ? (
                        <span style={{ color: "red" }}>
                          {errors.reorderpercentagelevel}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={prescriptionSelect}
                    label="Is Prescription"
                    name="isprescription"
                    value={values.isprescription}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "isprescription",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.isprescription && touched.isprescription ? (
                        <span style={{ color: "red" }}>{errors.isprescription}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={statusSelect}
                    label="Status"
                    name="stauts"
                    value={values.stauts}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "stauts",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.stauts && touched.stauts ? (
                        <span style={{ color: "red" }}>{errors.stauts}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={measurnmentselect}
                    label="Select Unit Of Mesurement"
                    name="unitofmesurement"
                    value={values.unitofmesurement}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "unitofmesurement",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.unitofmesurement && touched.unitofmesurement ? (
                        <span style={{ color: "red" }}>{errors.unitofmesurement}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Remark "
                    name="remark"
                    type="text"
                    size="large"
                    value={values.remark}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.remark && touched.remark ? (
                        <span style={{ color: "red" }}>
                          {errors.remark}
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
  );
};

export default MedicalItemForm;

  