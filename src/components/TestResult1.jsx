import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const TestResult1 = () => {
   const [tests, setTests] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/get-tests`)
      .then(response => {
        setTests(response.data);
      })
      .catch(error => {
        console.error("Error fetching tests:", error);
      });
  }, []);
  return (
    <div><h1
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
  TEST RESULT
</h1>
<TableContainer>
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
              Max mark
            </TableCell>
            <TableCell
              sx={{
                color: '#fff',
                border: '1px solid #ffffff80'
              }}
            ></TableCell>
          </TableRow>
        </TableHead>

    <TableBody>
            {tests.map((test, index) => (
              <TableRow key={test._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{test.testName}</TableCell>
                <TableCell>{test.questions.length}</TableCell>
                <TableCell>
                  <Link to={`/testresult2/${test._id}`}>
                    <Button variant='contained'>View</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
  </Table>
</TableContainer></div>
  )
}

export default TestResult1