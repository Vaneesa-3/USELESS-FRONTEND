import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const CreateTest1 = () => {
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

  const handleDelete = (id) => {
    axios.delete(`${import.meta.env.VITE_API_URL}/delete-test/${id}`)
      .then(() => {
        alert("Deleted successfully!");
        setTests(tests.filter(test => test._id !== id));
      })
      .catch(err => {
        console.error("Error deleting test:", err);
      });
  };

  const navigate = useNavigate();

  const handleUpdate = (test) => {
  navigate('/createtest2', { state: { test } });
};


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
        CREATE TEST
      </h1>

      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: '#1565c0' }}>
            <TableRow>
              <TableCell
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  border: '1px solid #ffffff80',
                }}
              >
                Sl.no
              </TableCell>
              <TableCell
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  border: '1px solid #ffffff80',
                }}
              >
                Test Name
              </TableCell>
              <TableCell
                sx={{
                  color: '#fff',
                  border: '1px solid #ffffff80',
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tests.map((test, index) => (
              <TableRow key={test._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{test.testName}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mr: 1 }}
                    onClick={() => handleUpdate(test)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(test._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box textAlign="center" mt={4}>
        <Link to='/createtest2'>
          <Button variant="contained" color="success">
            New Test
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default CreateTest1;
