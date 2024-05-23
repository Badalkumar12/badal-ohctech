import * as Yup from 'yup';

  // validation for ohcform
export const ValidationForm = Yup.object({
  ohcName: Yup.string().min(2).max(25).required("Please enter Ohccc Name"),
  ohcDescription: Yup.string().min(2).max(25).required("Please enter Description"),
  ohcCode: Yup.string().min(2).max(25).required("Please enter OHC Code"),
  state: Yup.string().min(2).max(25).required("Please enter State Code"),
  pinCode: Yup.number().min(6).required("Please enter Pin Code"),
    primaryPhone: Yup.number().required("Please enter Pin Code"),
    primaryEmail: Yup.string().email().required("Please enter your email"),
    iconText: Yup.string().required("Please enter your icon text"),
    iconColor: Yup.string().required("Please enter your icon text"),
    // homeohc: Yup.string().required("Please enter home ohc"),
    ohcType: Yup.string().required("Please enter ohc type"),
    address: Yup.string().required("Please enter address"),
    ohcCategory: Yup.string().required("Please enter ohc category"),
    fax: Yup.string().required("Please enter fax"),
});

// validation for userform

export const userValidationForm = Yup.object({
  employee: Yup.string().min(2).max(25).required("Please enter Employee Name"),
  username: Yup.string().min(2).max(25).required("Please enter User Name"),
  password : Yup.string().min(4).required("Please enter password"),
  confirmpass : Yup.string().min(4).required("Please enter password"),
  vendor: Yup.string().required("Please enter Vendor"),
  status: Yup.string().required("Please enter status"),
});


export const menuValidationForm = Yup.object({
  menuid: Yup.number().required("Please enter Menu Id"),
  menuname: Yup.string().min(2).max(25).required("Please enter Menu Name"),
  menudescription : Yup.string().max(50).required("Please enter Menu Description"),
  menuurl : Yup.string().required("Please enter Menu Url"),
  parentmanu: Yup.string().required("Please enter Parent Menu"),
  displaysequence: Yup.string().required("Please enter Display Sequence"),
});


export const roleValidationForm = Yup.object({
  rolename: Yup.string().required("Please enter Role Name"),
  roledes: Yup.string().required("Please enter Role Description"),
  homepage : Yup.string().required("Please enter Role Home Page"),
  rolecode : Yup.number().required("Please enter Role code"),
  iconcolor: Yup.string().required("Please enter Icon Colour"),
  icontext: Yup.string().required("Please enterIcon Text"),
});


export const MedTimeValidationForm = Yup.object({
  medicineTiming: Yup.string().min(2).max(25).required("Please enter medicine timing"),
  timingDescription: Yup.string().min(2).max(25).required("Please enter Description"),
});

export const MedValidationForm = Yup.object({
  MedicineFrequency: Yup.number().min(1).required("Please enter medicine frequency"),
  MedicineDescription: Yup.string().min(2).max(25).required("Please enter medicine Description"),
  calculatedCity: Yup.string().min(2).max(25).required("Please enter calculated city"),
  displayOrder: Yup.number().min(1).max(25).required("Please enter display order"),
  statusType: Yup.string().required("Please select Status Type"),
  isDefault: Yup.string().required("Please select Default"),
});


export const AilValidationForm = Yup.object({
  ailmentSysName: Yup.string().min(2).max(25).required("Please enter ailment Name"),
  ailmentSysDesc: Yup.string().min(2).max(25).required("Please enter Description"),
  ailmentSysCode: Yup.string().min(2).max(25).required("Please enter ailment code"),
});

export const AddDocValidationForm = Yup.object({
  DoctorName: Yup.string().min(2).max(25).required("Please enter Doctor Name"),
  statusType: Yup.string().min(2).max(25).required("Please enter Doctor Emp Code"),
  DoctorDetails: Yup.string().min(2).max(25).required("Please enter Doctor Details"),
});

export const AilmentValidationForm = Yup.object({
  ailmentName: Yup.string().min(2).max(25).required("Please enter ailment Name"),
  ailmentDesc: Yup.string().min(2).max(25).required("Please enter Description"),
  ailmentCode: Yup.string().min(2).max(25).required("Please enter ailment code"),
  isActive: Yup.string().min(2).max(25).required("Please enter ailment Action"),
});

export const RefferalValidationForm = Yup.object({
  referralPointName: Yup.string(2).min(1).required("Please enter refferal point name"),
  city: Yup.string().min(2).max(25).required("Please enter specialist name"),
  hospitalName: Yup.string().min(2).max(25).required("Please enter hospital name"),
  address: Yup.string().min(2).max(25).required("Please enter address"),
  contactDetail: Yup.string().required("Please enter contact detail"),
});

export const EmployeeCadreValidationForm = Yup.object({
  empCadre: Yup.string().required("Please enter Employee Cadre Name"),
  remarks: Yup.string().required("Please enter Remarks"),
  medicalClaimLimit : Yup.number().required("Please enter Claim Limit"),
});
export const empcontValidationForm = Yup.object({
  employerContractorName: Yup.string().required("Please enter Employee Name"),
  employerContractorCode: Yup.string().required("Please enter Code"),
  employerContractorAddress : Yup.string().required("Please enter Address"),
  employerContractorContact : Yup.number().required("Please enter Contact Details"),
  employerContractorEmail: Yup.string().required("Please enter Emails"),
  employerContractorDesc: Yup.string().required("Please enter Remarks of Employee"),
});
export const InjuryValidationForm = Yup.object({
  Injury_Name: Yup.string().required("Please enter Injury part Name"),
  Injury_Description: Yup.string().required("Please Injury part  Description"),
  Injury_Code: Yup.string().required("Please enter Injury part code"),
  
});
export const InjuryClassValidationForm = Yup.object({
  Injury_Name: Yup.string().required("Please enter Injury  Name"),
  Injury_Description: Yup.string().required("Please Injury   Description"),
  Injury_Code: Yup.string().required("Please enter Injury  code"),
  
});

export const designationForm = Yup.object({
  designationName: Yup.string().min(2).max(25).required("Please enter Designation Name"),
  designationDesc: Yup.string().min(2).max(25).required("Please enter Designation Description"),
  designationCode: Yup.string().min(2).max(25).required("Please enter DesignationCode"),
  designationCollar: Yup.string().required("Please enter Designation Collar"),
    
});


export const bussinessForm = Yup.object({
  buName: Yup.string().min(2).max(25).required("Please enter Bussiness Unit Name"),
  buHeadName: Yup.string().min(2).max(25).required("Please enter Bussiness Unit Head Name"),
  buEmail:Yup.string().email().required("Please enter Bussiness Unit Head Email"),
     
});

export const departmentForm = Yup.object({
  buId: Yup.string().min(2).max(25).required("Please enter Bussiness Unit "),
  departmentName: Yup.string().min(2).max(25).required("Please enter Department Name"),
  departmentHeadName: Yup.string().min(2).max(25).required("Please enter Department Head Email"),
  departmentEmail: Yup.string().email().required("Please enter Department Head Email"),
     
});

export const injuryForm = Yup.object({
  InjuryName: Yup.string().min(2).max(25).required("Please enter Injury Name"),
  injurydiscri: Yup.string().min(2).max(25).required("Please enter Injury Discription"),
  injurycode: Yup.string().min(2).max(25).required("Please enter Bussiness Injury Code"),
     
});

export const sectionForm = Yup.object({
  buId: Yup.string().min(2).max(25).required("Please enter Bussiness Unit"),
  deptId: Yup.string().min(2).max(25).required("Please enter Department Name"),
  sectionName: Yup.string().min(2).max(25).required("Please enter Section Name"),
  sectionHeadName: Yup.string().min(2).max(25).required("Please enter Section Head"),
  sectionHeadEmail: Yup.string().email().required("Please enter Section Email"),
     
});

export const complaintForm = Yup.object({
  complaint: Yup.string().min(2).max(25).required("Please enter Complaint"),
  complaintDesc: Yup.string().min(2).max(25).required("Please enter Complaint Details"),
  isActive: Yup.string().required("Please Select deafult"),
  
     
});
export const opdmaster = Yup.object({
  DiagnosisName: Yup.string().required("Please enter Diagnosis Name"),
  ChronicIllness: Yup.string().required("Please enter Chronic Illness"),
});

export const bodysystemForm = Yup.object({
  DiagnosisName: Yup.string().required("Please enter Diagnosis Name"),
   BodySystem: Yup.string().required("Please enter Body System"),
});

// RefferalBy form
export const RefferedByValidationForm = Yup.object({
  referredBy: Yup.string().required("Please enter Reffered By"),
  description: Yup.string().required("Please Enter Description"),
  remarks: Yup.string().required("Please Enter Remarks"),
});