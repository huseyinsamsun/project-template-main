/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";


import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import image from "assets/images/drone-1.jpeg";
import DataTable from "react-data-table-component";




const columns = [

  {
    name: 'Id',
    selector:row=>row.id,
    sortable: true,
},
  {
      name: 'Drone Name',
      selector:row=>row.droneName,
      sortable: true,
  },
  {
      name: 'Timestamp',
      selector: row=>row.timestamp,
      sortable: true,
  },

  {
    name: 'Image',
    grow: 0,
    cell: row => <img height="84px" width="56px" alt={row.droneName} src={row.imageUrl} />,
},
];


const data = [
  {
      id: 1,
      droneName: "Drone 1",
      timestamp: "2024-01-30 10:15:00",
 
      imageUrl: image
  },
  {
      id: 2,
      droneName: "Drone 2",
      timestamp: "2024-01-30 10:20:00",
 
      imageUrl: image
  },
  {
      id: 3,
      droneName: "Drone 3",
      timestamp: "2024-01-30 10:25:00",

      imageUrl: image
  },
  {
      id: 4,
      droneName: "Drone 4",
      timestamp: "2024-01-30 10:30:00",

      imageUrl:image
  },
  {
      id: 5,
      droneName: "Drone 5",
      timestamp: "2024-01-30 10:35:00",
   
      imageUrl:image
  },
  {
      id: 6,
      droneName: "Drone 6",
      timestamp: "2024-01-30 10:40:00",

      imageUrl: image
  },
  {
      id: 7,
      droneName: "Drone 7",
      timestamp: "2024-01-30 10:45:00",
  
      imageUrl: image
  },
  {
      id: 8,
      droneName: "Drone 8",
      timestamp: "2024-01-30 10:50:00",

      imageUrl: image
  },
  {
      id: 9,
      droneName: "Drone 9",
      timestamp: "2024-01-30 10:55:00",

      imageUrl: image
  },
  {
      id: 10,
      droneName: "Drone 10",
      timestamp: "2024-01-30 10:55:00",
      imageUrl: image
  }
];






function DataTables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox pt={6} pb={3}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox p={3} pl={0} lineHeight={1}>
              <VuiTypography variant="h5" fontWeight="medium" color="white">
             Anlık Bilgiler
              </VuiTypography>
              <VuiTypography variant="button" fontWeight="regular" color="text">

              </VuiTypography>
            </VuiBox>
            <DataTable columns={columns} data={data}  pagination />
          </Card>
        </VuiBox>
        <Card>
          <VuiBox p={3} pl={0} lineHeight={1}>
            <VuiTypography variant="h5" fontWeight="medium" color="white">
        
            </VuiTypography>
            <VuiTypography variant="button" fontWeight="regular" color="text">

            </VuiTypography>
          </VuiBox>

        </Card>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;
