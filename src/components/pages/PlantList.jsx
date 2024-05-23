import { Box, Button, ButtonGroup, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import useAxiosPrivate from '../../utils/useAxiosPrivate';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Popup from './Popup';
import PlantForm from './PlantForm.jsx';
import { PlantValidationForm } from './Validationform';
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import ExcelJS from 'exceljs';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PlantList = () => {


    const [rowData, setRowData] = useState([]);

    const [colDefs, setColDefs] = useState([]);

    const [openPopup, setOpenPopup] = useState(false);

    const axiosClientPrivate = useAxiosPrivate();

    const [id,setId] = useState(1);

    const [showupdate,setShowupdate] = useState(false);

    const initialValues = {
       

        PlantName:""
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
        validationSchema: PlantValidationForm,
        // onSubmit: (values, action) => {
        //     console.log(values);
        //     action.resetForm();
        //   },
        onSubmit: async (values, {resetForm}) => {
        try {
            const response = await axiosClientPrivate.post('/business-units', values);
            toast.success("Saved Successfully!",{
                position:"top-center"
             }); 
                   // getting id(key,value) of last index
                const id = rowData[rowData.length-1].buId;
                const obj = {
                    buId : id+1,
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



      const handleEdit = async (id) => {
        alert(id);
        try {
          const response = await axiosClientPrivate.get(`/business-units/${id}`);
            console.log(response.data);
            setFieldValue("buEmail",response.data.buEmail);
            setFieldValue("buHeadName",response.data.buHeadName);
            setFieldValue("buId",response.data.buId);
            setFieldValue("buName",response.data.buName);
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
        const update = values;
        try{
             console.log(values);
             await axiosClientPrivate.put(`/business-units/${id}`,update);
             toast.success("Updated Successfully!",{
                position:"top-center",
                autoClose: 3000,
             });
             resetForm();
             //setRowData(rowData => [...rowData,values]);
        }
        catch(err){
            console.log(values);
            console.log(err);
        }
      }


     // to delete a row
     const handleDeleteRow = async (id) => {
        alert(id)
       if(window.confirm('Are you sure you want to delete this data?')){
       try {
           await axiosClientPrivate.delete(`/business-units/${id}`);
           setRowData(prevData => prevData.filter(row => row.buId !== id));
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
                const response = await axiosClientPrivate.get('business-units', { signal: controller.signal });
                const items = response.data;
                    // console.log(items);
                setRowData(items);
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
                            const id = params.data.buId;
                            return <CustomActionComponent id={id} />
                        }
                    });

                    setColDefs(columns);
                }

                

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


     

    const exportpdf = async () => {
        // const headers = createHeaders([
        //     "id",
        //     "ohcName",
        //     // "ohcCode",
        //     // "OhcDescription",
        //     // "Address",
        //     // "State",
        //     // "Fax",
        //     // "PrimaryPhone",
        //     // "PrimaryEmail",
        //     // "PinCode",
        //     // "OhcType",
        //     // "IconColor",
        //     // "IconText",
        //     // "OhcCategory",
        // ]);
        // const doc = new jsPDF({orientation: "landscape"});
        // console.log(rowData[0].id);
        // const tableData = rowData.map((row)=>(
        //     console.log(row.id),
        //   {
             
          // console.log(row.id),
            // ...row,
            // id: row.id,
            // ohcName: row.ohcName,
            // ohcCode: row.ohcCode.toString(),
            // ohcDescription: row.ohcDescription.toString(),
            // address: row.address.toString(),
            // state: row.state.toString(),
            // fax: row.fax.toString(),
            // primaryPhone: row.primaryPhone.toString(),
            // primaryEmail: row.primaryEmail.toString(),
            // pinCode: row.pinCode.toString(),
            // ohcType: row.ohcType.toString(),
            // iconColor: row.iconColor.toString(),
            // iconText: row.iconText.toString(),
            // OhcCategory: row.ohcCategory.toString(),
        // }))
        // const tableData = {
        //     id : rowData[0].id,
        //     ohcName : rowData[0].ohcName,
        // }
        // doc.table(1,1,tableData,headers, {autoSize:true});
        const doc = new jsPDF();
        const header = [['Id', 'buName',"buHeadName","buEmail"]];
        const tableData = rowData.map(item => [
          item.buId,
          item.buName,
          item.buHeadName,
          item.buEmail,
          
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
        doc.save("BussinessList.pdf");
    };


    const exportExcelfile = async () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('My Sheet');
        // sheet.columns = [
        //     {
        //         header: "Id",
        //         key: 'id',
        //     },
        //     {
        //         header: "OhcName",
        //         key: 'ohcName',
        //     },
        //     {
        //         header: "OhcCode",
        //         key: 'ohcCode',
        //     },
        //     {
        //         header: "OhcDescription",
        //         key: 'ohcDescription',
        //     },
        //     {
        //       header : "Address",
        //       key : "address",
        //     },
        //     {
        //         header: "State",
        //         key: 'state',
        //     },
        //     {
        //         header: "Fax",
        //         key: 'fax',
        //     },
        //     {
        //       header: "PrimaryPhone",
        //       key: 'primaryPhone',
        //   },
        //   {
        //       header: "PrimaryEmail",
        //       key: 'primaryEmail',
        //   },
        //   {
        //       header : "PinCode",
        //       key : "pinCode",
        //   },
        //   {
        //       header: "OhcType",
        //       key: 'ohcType',
        //   },
        //   {
        //       header: "IconColor",
        //       key: 'iconColor',
        //   },
        //   {
        //     header: "IconText",
        //     key: 'iconText',
        // },
        // {
        //     header: "OhcCategory",
        //     key: 'OhcCategory',
        // }
        // ];
  
        const headerStyle = {
          // font: { bold: true, size: 12 },
          alignment: { horizontal: 'center' }
          
      };
  
      sheet.getRow(1).font = { bold: true };
        
        const columnWidths = {
            Id: 10,
            buName: 20,
            buHeadName: 15,
            buEmail: 25,
      };
  
        sheet.columns = [
          { header: "Id", key: 'buId', width: columnWidths.buId, style: headerStyle },
          { header: "buName", key: 'buName', width: columnWidths.buName, style: headerStyle },
          { header: "buHeadName", key: 'buHeadName', width: columnWidths.buHeadName, style: headerStyle },
          { header: "buEmail", key: 'buEmail', width: columnWidths.buEmail, style: headerStyle },
          
      ];
  
        rowData.map(product =>{
            sheet.addRow({
                buId: product.buId,
                buName: product.buName,
                buHeadName: product.buHeadName,
                buEmail: product.buEmail,
            })
        });
  
        workbook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'download.xlsx';
            anchor.click();
            // anchor.URL.revokeObjectURL(url);
        })
    }
   

    return (
        <>
        <ToastContainer />
            <Box
                className="ag-theme-quartz" 
                style={{ height: 500 }}
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
                    animateRows={true} 
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                />
            </Box>

            <Popup showupdate={showupdate} id= {id} handleUpdate={handleUpdate} setShowupdate={setShowupdate} resetForm={resetForm} handleSubmit={handleSubmit}  openPopup={openPopup} setOpenPopup={setOpenPopup} title="Plant Form">

                <PlantForm values={values} touched={touched} errors={errors} handleBlur={handleBlur} handleChange={handleChange} setFieldValue={setFieldValue} handleSubmit={handleSubmit} />
                
            </Popup>
        </>
    );
};

export default PlantList;
