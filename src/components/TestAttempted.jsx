import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

import axios from 'axios';
import { useState, useEffect } from 'react';

const TestAttempted = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const studentId = decoded.id;
    //axios.get(`${process.env.REACT_APP_API_URL}/get-submissions/${userId}`)

    axios.get(`${import.meta.env.VITE_API_URL}/get-submissions/${studentId}`)
      .then(res => {
        setSubmissions(res.data);
      })
      .catch(err => {
        console.error("Error fetching submissions:", err);
      });
  }, []);
  return (
   
    
    <div>
        <h1
  style={{
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Segoe UI, Roboto, sans-serif',
    color: '#1a237e',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  }}
>
  TESTS ATTEMPTED 
</h1>
     <TableContainer   >
            <Table>
  <TableHead sx={{ backgroundColor: '#1565c0' }}>
    <TableRow>
             <TableCell
               sx={{
                 color: '#fff',
                 fontWeight: 'bold',
                 border: '1px solid #ffffff80' // semi-transparent white border
               }}
             >
               Sl.no
             </TableCell>
             <TableCell
               sx={{
                 color: '#fff',
                 fontWeight: 'bold',
                 border: '1px solid #ffffff80'
               }}
             >
               Test Name
             </TableCell>
             <TableCell
               sx={{
                 color: '#fff',
                 fontWeight: 'bold',
                 border: '1px solid #ffffff80'
               }}
             >
               Max marks
             </TableCell>
             <TableCell
               sx={{
                 color: '#fff',fontWeight: 'bold',
                 border: '1px solid #ffffff80'
               }}
             >Secured marks</TableCell>
           </TableRow>
         </TableHead>
 
                <TableBody>
            {submissions.map((sub, index) => (
              <TableRow key={sub._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{sub.testName}</TableCell>
                <TableCell>{sub.maxScore}</TableCell>
                <TableCell>{sub.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
            </Table>
        </TableContainer>


    </div>
    
  )
}

export default TestAttempted