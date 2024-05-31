import React from "react";
import Layout from "../Layout";
import { Box} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import Paper from '@mui/material/Paper';

function Contact() {
  return (
    <Layout sx={{height: "100vh"}}>
      <Box sx={{
        my: 9,
        p: 3,
        textAlign: "center",
        "& div": {
          fontWeight: "bold",
          fontSize: "2rem",
          my: 5,
        },
        "& p" :{
          textAlign:"justify"
        },
        "@media (max-width:600px)" :{
          my: 0,
          
        }
      }}>
        <div>Contact my Restaurant</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </Box>
      <Box sx={{m:3,width:"600px",
      "@media (max-width:600px)" :{
        
        width:"90%"
      }
    }}>
        <TableContainer component={Paper} >
          <Table >
            <TableHead sx={{bgcolor:"black"}}>
              <TableCell  sx={{color:"white",textAlign:"center"}}>
                Contact Details
              </TableCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:"red"}}/> 1800 2345 2361
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{color:"blue"}}/> shindechetan3408@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{color:"green"}}/> 9049621981
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;
