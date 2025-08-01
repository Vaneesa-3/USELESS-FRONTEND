import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TestResult2 = () => {
  const { testId } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/get-test-results/${testId}`)
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error("Error fetching test results:", error);
      });
  }, [testId]);
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
  TEST RESULTS
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
                Name
             </TableCell>
             <TableCell
               sx={{
                 color: '#fff',
                 fontWeight: 'bold',
                 border: '1px solid #ffffff80'
               }}
             >
               Marks
             </TableCell>
            
           </TableRow>
         </TableHead>
 
                <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.marks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
            </Table>
        </TableContainer>



    </div>
  )
}

export default TestResult2