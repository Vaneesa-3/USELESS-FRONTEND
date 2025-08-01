import React, { useState,useEffect } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Create } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const CreateTest2 = () => {
  const [testName, setTestName] = useState('');
  const [questions, setQuestions] = useState(
    Array(10).fill().map(() => ({
      questionText: '',
      options: ['', '', ''],
      correctOption: 0, // index of correct option (0, 1, 2)
    }))
  );

  const navigate = useNavigate();
  const location = useLocation();
  const testData = location.state?.test;

  useEffect(() => {
  if (testData) {
    setTestName(testData.testName);
    setQuestions(testData.questions);
  }
}, [testData]);

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].questionText = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[optIndex] = value;
    setQuestions(newQuestions);
  };

  const handleCorrectChange = (qIndex, optIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctOption = optIndex;
    setQuestions(newQuestions);
  };

  const handleSubmit = async () => {
    try {
    const payload = { testName, questions };
    if (testData) {
      // update
      await axios.put(`${import.meta.env.VITE_API_URL}/update-test/${testData._id}`, payload);
      alert("Test updated successfully!");
    } else {
      // create
      await axios.post(`${import.meta.env.VITE_API_URL}/create-test`, payload);
      alert("Test created successfully!");
    }
    navigate('/createtest1');
  } catch (err) {
    console.error(err);
    alert("Error saving test");
  }
};

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginY: 4,
          fontWeight: 'bold',
          fontFamily: 'Segoe UI, Roboto, sans-serif',
          color: '#1a237e',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        Create Test
      </Typography>

      <Box textAlign="center" marginBottom={4}>
        <TextField
          label="Enter Test Name"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          variant="outlined"
          sx={{ width: '60%' }}
        />
      </Box>

      <Paper sx={{ maxHeight: '60vh', overflowY: 'auto', padding: 2 }}>
        {questions.map((q, qIndex) => (
          <Box key={qIndex} mb={4} p={2} borderBottom="1px solid #ccc">
            <Typography variant="h6" gutterBottom>
              Question {qIndex + 1}
            </Typography>

            <TextField
              label="Question"
              variant="outlined"
              fullWidth
              value={q.questionText}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              sx={{ marginBottom: 2 }}
            />

            {q.options.map((opt, optIndex) => (
              <Box key={optIndex} display="flex" alignItems="center" mb={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={q.correctOption === optIndex}
                      onChange={() => handleCorrectChange(qIndex, optIndex)}
                    />
                  }
                  label=""
                />
                <TextField
                  label={`Option ${optIndex + 1}`}
                  value={opt}
                  onChange={(e) =>
                    handleOptionChange(qIndex, optIndex, e.target.value)
                  }
                  variant="outlined"
                  sx={{ flexGrow: 1 }}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Paper>

      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Test
        </Button>
      </Box>
    </Container>
  );
};

export default CreateTest2;
