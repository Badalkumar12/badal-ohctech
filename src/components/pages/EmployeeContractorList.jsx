import { Box, Button, ButtonGroup, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import useAxiosPrivate from '../../utils/useAxiosPrivate';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
// import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Popup from './Popup';
import EmployeeContractorForm from './EmployeeContractorForm';
// import { empcontValidationForm } from './Validationform';
import { useFormik } from "formik";
// import axios from 'axios';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import ExcelJS from 'exceljs';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types";


const EmployeeContractorList = () => {

    const [rowData, setRowData] = useState([]);

    const [colDefs, setColDefs] = useState([]);

    const [openPopup, setOpenPopup] = useState(false);

    const axiosClientPrivate = useAxiosPrivate();

    const [id,setId] = useState(1);

    const [showupdate,setShowupdate] = useState(false);

    const initialValues = {
      
  
        employerContractorName: "",
        employerContractorCode: "",
        employerContractorAddress : "",
        employerContractorContact :"",
        employerContractorEmail: "",
        employerContractorDesc:""

      };

     
    
      const {
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        setFieldValue,
        handleSubmit,
        resetForm
      } = useFormik({
        initialValues: initialValues,
        // validationSchema: empcontValidationForm,
        // onSubmit: (values, action) => {
        //     console.log(values);
        //   action.resetForm();
        //  },
        onSubmit: async (values, {resetForm}) => {
        try {
            const response = await axiosClientPrivate.post('/employer-contractors', values);
            toast.success("Saved Successfully!",{
                position:"top-center"
             }); 
                   // getting id(key,value) of last index
                const id = rowData[rowData.length-1].id;
                const obj = {
                    id : id+1,
                    ...values
                }
             console.log(obj);
             setRowData(rowData => [...rowData, obj]);
            console.log('Response:', response.data);
            resetForm();
          } catch (error) {
            console.log(values);
            console.error('Error:', error);
          }
        },
      });
      

    const handleDeleteRow = async (id) => {
        alert(id)
       if(window.confirm('Are you sure you want to delete this data?')){
       try {
           await axiosClientPrivate.delete(`/employer-contractors/${id}`);
           setRowData(prevData => prevData.filter(row => row.id !== id));
       } catch (error) {
           console.error('Error deleting row:', error);
       }
    }
    };
    

    const CustomActionComponent = ({id}) => {
        CustomActionComponent.propTypes = {
            id: PropTypes.number.isRequired,
          };
        return <div> <Button onClick={() =>  handleEdit(id)} > <EditNoteRoundedIcon /></Button>
           <Button color="error" onClick={() => handleDeleteRow(id)}> <DeleteSweepRoundedIcon /> </Button> </div>

    };

    const pagination = true;
    const paginationPageSize = 50;
    const paginationPageSizeSelector = [50, 100, 200, 500];

    useEffect(() => {
        const controller = new AbortController();

        const getAllOhc = async () => {
            try {
                const response = await axiosClientPrivate.get('http://localhost:8080/employer-contractors?page=0&size=3', { signal: controller.signal });
                const items = response.data.content;
                    // console.log(items);
                
                if (items.length > 0) {
                   const  columns = Object.keys(items[0]).map(key => ({
                        field: key,
                        headerName: key.charAt(0).toUpperCase() + key.slice(1),
                        filter: true,
                        floatingFilter: true,
                        sortable: true
                    }));

                    columns.unshift({
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
        alert(id);
        try {
          const response = await axiosClientPrivate.get(`/employer-contractors/${id}`);
            console.log(response.data);
            setFieldValue("id",response.data.id);
            setFieldValue("employerContractorName",response.data.employerContractorName);
            setFieldValue("employerContractorCode",response.data.employerContractorCode);
            setFieldValue("employerContractorAddress",response.data.employerContractorAddress);
            setFieldValue("employerContractorContact",response.data.employerContractorContact);
            setFieldValue("employerContractorEmail",response.data.employerContractorEmail);
            setFieldValue("employerContractorDesc",response.data.employerContractorDesc);
            setFieldValue("lastModified", response.data.lastModified);
            setFieldValue("modifiedBy", response.data.modifiedBy);
            setId(id);
            setShowupdate(true);
            setOpenPopup(true);
        } catch (error) {
          console.error('Error fetching item for edit:', error);
        }
      };

      const handleUpdate = async (id)=> {
        alert(id);
        console.log(values);
        const update = values;
        try{
            //  console.log(values);
             await axiosClientPrivate.put(`/employer-contractors/${id}`,update);
             toast.success("Updated Successfully!",{
                position:"top-center",
                autoClose: 3000,
             });
             resetForm();
            //  setRowData(rowData => [...rowData,values]);
        }
        catch(err){
            console.log("after:- ",values);
            console.log(err);
        }
      }

    const exportpdf = async () => {
        
        const doc = new jsPDF();
        const header = [["Employer/Contractor","Code",'Address',"Contact","Email","Remarks"]];
        const tableData = rowData.map(item => [
          item.employerContractorName,
          item.employerContractorCode,
          item.employerContractorAddress,
          item.employerContractorContact,
          item.employerContractorEmail,
          item.employerContractorDesc,
          
        ]);
        doc.autoTable({
          head: header,
          body: tableData,
          startY: 20, // Start Y position for the table
          theme: 'grid', // Optional theme for the table
          margin: { top: 30 }, // Optional margin from top
          styles: { fontSize: 5 },
          columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'auto' } }
      });
        doc.save("EmployeeContractorList.pdf");
    };

    const exportExcelfile = async () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('My Sheet');
        
  
        const headerStyle = {
          // font: { bold: true, size: 12 },
          alignment: { horizontal: 'center' }
          
      };
  
      sheet.getRow(1).font = { bold: true };
        
        const columnWidths = {
            employerContractorName: 20,
            employerContractorCode: 20,
            employerContractorAddress: 15,
            employerContractorContact: 25,
               employerContractorEmail : 25,
               employerContractorDesc : 25
        };
  
        sheet.columns = [
          { header: "Employer/Contractor", key: 'employerContractorName', width: columnWidths.employerContractorName, style: headerStyle },
          { header: "Code", key: 'employerContractorCode', width: columnWidths.employerContractorCode, style: headerStyle },
          { header: "Address", key: 'employerContractorAddress', width: columnWidths.employerContractorAddress, style: headerStyle },
          { header: "Contact", key: 'employerContractorContact', width: columnWidths.employerContractorContact, style: headerStyle },
          { header: "Email", key: 'employerContractorEmail', width: columnWidths.employerContractorEmail, style: headerStyle },
          { header: "Remarks", key: 'employerContractorDesc', width: columnWidths.employerContractorDesc, style: headerStyle },
          
      ];
  
        rowData.map(product =>{
            sheet.addRow({
                employerContractorName: product.employerContractorName,
                employerContractorCode: product.employerContractorCode,
                employerContractorAddress: product.employerContractorAddress,
                employerContractorContact: product.employerContractorContact,
                employerContractorEmail: product.employerContractorEmail,
                employerContractorDesc: product.employerContractorDesc,
            })
        });
  
        workbook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'EmployeeContractorList.xlsx';
            anchor.click();
            // anchor.URL.revokeObjectURL(url);
        })
    }

    return (
        <>
        <ToastContainer />
            <Box
                className="ag-theme-quartz" // applying the grid theme
                style={{ height: 500 }} // adjust width as necessary
            >

                <Stack sx={{ display: 'flex', flexDirection: 'row' }} marginY={1} paddingX={1}>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button variant="contained" endIcon={<AddCircleOutlineRoundedIcon />} onClick={() => { setOpenPopup(true) }}>Add New</Button>
                        <Button variant="contained" onClick={exportpdf} color="success" endIcon={<PictureAsPdfIcon/>}>PDF</Button>
                        <Button variant="contained" onClick={()=> exportExcelfile()}  color="success" endIcon={<DownloadIcon/>}>Excel</Button>
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

            <Popup showupdate={showupdate} id= {id} handleUpdate={handleUpdate} setShowupdate={setShowupdate} resetForm={resetForm} handleSubmit={handleSubmit}  openPopup={openPopup} setOpenPopup={setOpenPopup} title="Employer/Contractor Name">

                <EmployeeContractorForm values={values} touched={touched} errors={errors} handleBlur={handleBlur} handleChange={handleChange} setFieldValue={setFieldValue} handleSubmit={handleSubmit} />
                
            </Popup>
        </>
    );
};

export default EmployeeContractorList;
