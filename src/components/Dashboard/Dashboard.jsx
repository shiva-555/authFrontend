import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import '../Dashboard/Dashboard.css'
const Dashboard = () => {
  return (
    <div>
     <TableContainer  sx={{ overflow: 'auto', marginTop: 4, maxHeight: 600, background: 'white',width:"1500px",marginLeft:"150px" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead style={{ backgroundColor: "#243c80", background: "white" }}>

              <TableRow
                sx={{
                  "& th": {
                    borderBottom: "2px solid black",
                    fontSize: "0.9rem",
                    color: "white",
                    backgroundColor: "#243c80",
                    borderLeft: "1px solid #3b4864",
                    height: '1px'
                  }
                }}
              >
                <TableCell style={{ fontWeight: 500, fontSize: "15px", color: "white" }}>First Name</TableCell>
                <TableCell style={{ fontWeight: 500, fontSize: "15px", color: "white" }}>Last Name</TableCell>
                <TableCell style={{ fontWeight: 500, fontSize: "15px", color: "white" }}>Age</TableCell>
                <TableCell style={{ fontWeight: 500, fontSize: "15px", color: "white" }}>Email</TableCell>
              </TableRow>
            </TableHead>

            {/* <TableBody>
                ({
                    return <TableRow>
                        <TableCell>
                        
                        </TableCell>

                        <TableCell>
                         
                        </TableCell>

                        <TableCell>
                        
                        </TableCell>

                        <TableCell>
                           
                        </TableCell>
                    </TableRow>
                })
            </TableBody> */}
          </Table>
        </TableContainer>
    </div>
  )
}

export default Dashboard
