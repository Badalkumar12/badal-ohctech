import { createBrowserRouter } from "react-router-dom";
import Root from "./components/pages/Root";
import ErrorPage from "./components/pages/ErrorPage";
import Ohcs from "./components/pages/Ohcs";
import Roles from "./components/pages/Roles";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./components/pages/Login";
import PersistLogin from "./utils/PersistLogin";
import OhcList from "./components/pages/OhcList";
import AdminHome from "./components/pages/AdminHome";
import UserList from "./components/pages/UserList";
// import UserForm from "./components/pages/UserForm";
// import OhcForm from "./components/pages/OhcForm";
// import MenuForm from "./components/pages/MenuForm";
import MenuList from "./components/pages/MenuList";
import RoleList from "./components/pages/RoleList";
import BussinessList from "./components/pages/BussinessList";
import DepartmentList from "./components/pages/DepartmentList";
import DesignationList from "./components/pages/DesignationList";
import SectionList from "./components/pages/SectionList";
import EmployeeCadreList from './components/pages/EmployeeCadreList'
import EmployeeContractorList from "./components/pages/EmployeeContractorList";
import MedTimingList from "./components/pages/MedTimingList";
import ComplaintList from "./components/pages/ComplaintList";
import RefferalPointList from "./components/pages/RefferalPointList";
import AilmentSystemList from "./components/pages/AilmentSystemList";
import DiagnosisList from "./components/pages/DiagnosisList";
import RefferedByList from "./components/pages/RefferedByList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    index: true,
  },
  {
    path: "/",
    element: <PersistLogin />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/ohcSelection",
            element: <Ohcs />,
          },
          {
            path: "/roleSelection",
            element: <Roles />,
          }
        ],
      },
    ],
  },

  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PersistLogin />,
        children: [
          {
            element: <ProtectedRoute />,
            children: [
              {
                path:'/adminHome',
                element:<AdminHome />
              },
              {
                path:'/ohcList',
                element:<OhcList />
              },
              {
                path:'/userList',
                element: <UserList />
              },
              {
                path:'/roleList',
                element:<RoleList />
              },
              {
                path:'/menuList',
                element:<MenuList />
              },
              {
                path :'/BussinessList',
                element: <BussinessList />
              },
              {
                path : '/departmentList',
                element : <DepartmentList />
              },
              {
                path : '/DesignationList',
                element : <DesignationList />
              },
              {
                  path : '/SectionList',
                  element : <SectionList/ >
              },
              {
                path : '/EmployeeCadreList',
                element : <EmployeeCadreList />
              },
              {
                path : "/EmployeeContractorList",
                element : <EmployeeContractorList />
              },
              {
                path : "/MedTimingList",
                element : <MedTimingList />
              },
              {
                path : "/ComplaintList",
                element : <ComplaintList />
              },
              {
                path : "/RefferalPointList",
                element : <RefferalPointList />
              },
              {
                path : "/AilmentSystemList",
                element : <AilmentSystemList />
              },
              {
                path : "/DiagnosisList",
                element : <DiagnosisList />
              },
              {
                path : "/RefferedByList",
                element : <RefferedByList />
              }
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
