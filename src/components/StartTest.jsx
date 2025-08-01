import React, { useState , useEffect} from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";




const StartTest = () => {
  const location = useLocation();
  const test = location.state?.test;
  const navigate = useNavigate();

  const testName = test?.testName || 'Test';
  const questions = test?.questions || [];

  const [answers, setAnswers] = useState([]);

  // initialize answers state when questions are loaded
  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(Array(questions.length).fill(null));
    }
  }, [questions]);

  const handleOptionSelect = (qIndex, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = parseInt(selectedOption);
    setAnswers(newAnswers);
  };



const handleSubmit = async () => {
  // Get studentId from token
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const studentId = decoded.id;

  const payload = {
    testName,
    answers,
    studentId,
     testId: test._id, // pass test ID too
    token
  };

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/submit-test`, payload);
    alert(`Submitted! Your score: ${res.data.score}/${res.data.maxScore}`);
    // Optionally redirect to TestAttempted
    navigate("/testatt");
  } catch (err) {
    console.error(err);
    alert("Error submitting test");
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
        {testName}
      </Typography>

      <Paper sx={{ maxHeight: '60vh', overflowY: 'auto', padding: 2 }}>
        {questions.map((q, qIndex) => (
          <Box key={qIndex} mb={4} p={2} borderBottom="1px solid #ccc">
            <Typography variant="h6" gutterBottom>
              Question {qIndex + 1}: {q.questionText}
            </Typography>

            <FormControl component="fieldset">
              <RadioGroup
                value={answers[qIndex] !== null && answers[qIndex] !== undefined ? answers[qIndex].toString() : ''
}
                onChange={(e) => handleOptionSelect(qIndex, e.target.value)}
              >
                {q.options.map((opt, optIndex) => (
                  <FormControlLabel
                    key={optIndex}
                    value={optIndex.toString()}
                    control={<Radio />}
                    label={opt}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        ))}
      </Paper>

      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit}
          disabled={answers.includes(null)} // disables until all questions answered
        >
          Submit Test
        </Button>
      </Box>
    </Container>
  );
};

export default StartTest;
