import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TestAvailable = () => {

  const [tests, setTests] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/get-tests`)
      .then(res => {
        setTests(res.data);
      })
      .catch(err => {
        console.error("Error fetching tests:", err);
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
  TEST AVAILABLE
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
                <TableCell>{test.questions.length} mark</TableCell>
                <TableCell>
                  <Link to="/starttest" style={{ textDecoration: 'none' }} state={{ test }}>
                    <Button variant="contained">Start</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
  </Table>
</TableContainer>
</div>
  )
}

export default TestAvailable