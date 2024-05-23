import {AgGridReact} from 'ag-grid-react';
import { Box, Button, Stack, ButtonGroup } from "@mui/material";
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import ImportExportRoundedIcon from "@mui/icons-material/ImportExportRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import useAxiosPrivate from '../../utils/useAxiosPrivate';
import  {routeadminForm}  from './Validationform';
import Popup from "./Popup";
import RouteAdminForm from './RouteAdminForm';
import { useFormik } from "formik";
import { useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RouteAdminList = () => {

  const [id,setId] = useState();
  const [showupdate,setShowupdate] = useState(false);

  const initialValues = {
    routeAdmin: "",
    remarks: "",
  };

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: routeadminForm,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },

    // onSubmit: async (values, {resetForm}) => {
    //   try {
    //        await axiosClientPrivate.post('/users', values);
    //       toast.success("Saved Successfully!",{
    //         position:"top-center"
    //      });
    //       setRowData(prevRowData => [...prevRowData, values]);
    //       resetForm();
    //     } catch (error) {
    //       console.log(values);
    //       console.error('Error:', error);
    //     }
    //   },

  });

  const axiosClientPrivate = useAxiosPrivate();

  const [rowData, setRowData] = useState([]);

  const [colDefs, setColDefs] = useState([]);

  const [openPopup, setOpenPopup] = useState(false);

  // to delete a row
const handleDeleteRow = async (id) => {
  alert(id)
 if(window.confirm('Are you sure you want to delete this data?')){
 try {
     await axiosClientPrivate.delete(`/users/${id}`);
     setRowData(prevData => prevData.filter(row => row.id !== id));
 } catch (error) {
     console.error('Error deleting row:', error);
 }
}
};


  
  const CustomActionComponent = (props) => {
    return <> <Button  onClick={() =>  handleEdit(props.id) }> <EditNoteRoundedIcon /></Button>
    <Button color="error" onClick={() => handleDeleteRow(props.id)}><DeleteSweepRoundedIcon /></Button> </>
};

const pagination = true;
const paginationPageSize = 50;
const paginationPageSizeSelector = [50, 100, 200, 500];

useEffect(() => {
    const controller = new AbortController();

    const getAllOhc = async () => {
        try {
            const response = await axiosClientPrivate.get('users', { signal: controller.signal });
            const items = response.data;
              console.log(items);
            if (items.length > 0) {
                const columns = Object.keys(items[0]).map(key => ({
                    field: key,
                    headerName: key.charAt(0).toUpperCase() + key.slice(1),
                    filter: true,
                    floatingFilter: true,
                    sortable: true
                }));

                columns.unshift({
                  // field: "Actions", cellRenderer: CustomActionComponent
                  field: "Actions", cellRenderer:  (params) =>{
                      const id = params.data.id;
                      return <CustomActionComponent id={id} />
                  }
              });

                setColDefs(columns);
            }

            setRowData(items);

        } catch (err) {
            console.error("Failed to fetch data: ", err);
            setRowData([]);
        }
    };

    getAllOhc();

    return () => {
        controller.abort();
    };

}, []);


const handleEdit = async (id) => {
  try {
    const response = await axiosClientPrivate.get(`/ohcs/${id}`);
      console.log(response.data);
      setFieldValue("id",response.data.id);
      setFieldValue("ohcName",response.data.ohcName);
      setFieldValue("ohcCode",response.data.ohcCode);
      setFieldValue("ohcDescription",response.data.ohcDescription);
      setFieldValue("address", response.data.address);
      setFieldValue( "state", response.data.state);
      setFieldValue("fax", response.data.fax);
      setFieldValue("primaryPhone", response.data.primaryPhone);
      setFieldValue("primaryEmail", response.data.primaryEmail);
    setId(id);
    setShowupdate(true);
    setOpenPopup(true);
  } catch (error) {
    console.error('Error fetching item for edit:', error);
  }
};

const handleUpdate = async (id)=> {
  alert(id);
  const update = values;
  try{
       console.log(values);
       await axiosClientPrivate.put(`/ohcs/${id}`,update);
       toast.success("Updated Successfully!",{
          position:"top-center",
          autoClose: 3000,
       });
       resetForm();
  }
  catch(err){
      console.log(values);
      console.log(err);
  }
}






  return (
    <>
      <Box
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // adjust width as necessary
      >
        <Stack
          sx={{ display: "flex", flexDirection: "row" }}
          marginY={1}
          paddingX={1}
        >
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button
              variant="contained"
              endIcon={<AddCircleOutlineRoundedIcon />}
              onClick={() => {
                setOpenPopup(true);
              }}
            >
              Add New
            </Button>
            <Button
              variant="contained"
              color="success"
              endIcon={<ImportExportRoundedIcon />}
            >
              Export Data
            </Button>
          </ButtonGroup>
        </Stack>
        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            animateRows={true} // Optional: adds animation to row changes
            pagination={pagination}
            paginationPageSize={paginationPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
       />
      </Box>

      <Popup
        handleUpdate = {handleUpdate}
        id= {id}
        setShowupdate={setShowupdate}
        showupdate={showupdate}
        resetForm={resetForm}
        handleSubmit={handleSubmit}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Route Admin Form"
      >
        <RouteAdminForm
          values={values}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          handleSubmit={handleSubmit}
        />
      </Popup>
    </>
  );
};

export default RouteAdminList;
