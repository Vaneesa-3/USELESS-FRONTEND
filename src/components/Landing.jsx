import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import watermelonBg from '../assets/WATERMELON.jpg';
import '@fontsource/press-start-2p';
import { jsPDF } from "jspdf";


const Landing = () => {
  const navigate = useNavigate();

  const generateCertificate = () => {
  const name = prompt("Enter your name for the certificate:");
  if (!name) return;

  const patience = Math.floor(Math.random() * 21) + 80;
  const doc = new jsPDF();

  // Set background color
  doc.setFillColor(255, 248, 220); // light peach
  doc.rect(0, 0, 210, 297, 'F'); // full page background

  // Title
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 99, 132);
  doc.setFontSize(24);
  doc.text(" Patience Certificate ", 105, 40, null, null, "center");

  // Subtitle
  doc.setFontSize(14);
  doc.setTextColor(80, 80, 80);
  doc.text("Awarded by the Watermelon Gods ", 105, 50, null, null, "center");

  // Recipient Name
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 128);
  doc.setFont("courier", "bold");
  doc.text(name, 105, 70, null, null, "center");

  // Certificate Body
  doc.setFont("times", "normal");
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);

  const lines = [
    "",
    "has bravely survived the sacred rituals of",
    "Huntrix's password madness, including:",
    "• Endless password rejections ",
    "• A mild identity crisis ",
    "• And moments of 'why is this happening?!' ",
    "",
    ` Patience Level Unlocked: ${patience}% `,
    "",
    "We salute your perseverance, your sanity,",
    "and your refusal to give up.",
    "",
    "Signed with chaos, humor, and a  slice of respect.",
    "",
    "The Watermelon Gods"
  ];

  let y = 90;
  lines.forEach(line => {
    doc.text(line, 105, y, null, null, "center");
    y += 10;
  });

  // Footer line
  doc.setDrawColor(0);
  doc.line(60, y + 10, 150, y + 10); // signature line
  doc.setFontSize(10);
  doc.text("Signature of the Melon High Council", 105, y + 17, null, null, "center");

  // Save PDF
  doc.save(`${name}_Huntrix_Patience_Certificate.pdf`);
};



  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ 
        backgroundImage: "radial-gradient(circle at center, #99d7aaff, #5DB192, #55d093ff)" 
      }}
    >
      <Paper
        elevation={13}
        sx={{
          padding: 5,
          width: 600,
          backgroundImage: `url(${watermelonBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          textAlign: 'center',
          color: '#013220'
        }}
      >
        <Typography 
          variant="h3" 
          gutterBottom
          sx={{
            fontFamily: '"Press Start 2P", monospace',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #ff9a9e, #fad0c4)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center'
          }}
        >
          Welcome to Huntrix
        </Typography>

        <Typography 
          variant="h6" 
          sx={{ 
            mb: 3, 
            backgroundColor: "rgba(255, 255, 255, 0.85)", 
            padding: 2.5, 
            borderRadius: 2, 
            fontFamily: 'Comic Sans MS, cursive'
          }}
        >
          <strong>🎉 You did it, brave soul! Welcome to Huntrix. 🥳</strong><br />
          <strong style={{ color: '#d32f2f' }}>🎉 MAY THE WATERMELON GODS BLESS YOU!!!!!! 🥳</strong>
          <br /><br />
          Most websites let you log in with "123456" and a smile. <br />
          We, on the other hand, demanded the name of your childhood pet, your grandma’s Wi-Fi password, and maybe even your blood type. Why? Because <strong>easy is boring</strong> — and hackers love boring.
          <br /><br />
          By making it through our <em>absurd password gauntlet</em>, you’ve proven two things:
          <ul style={{ textAlign: "left", paddingLeft: "20%" }}>
            <li>✅ You’re patient.</li>
            <li>✅ You really wanted to log in.</li>
          </ul>
          And honestly, that's kind of beautiful.
          <br /><br />
          So take a bow. Stretch your fingers. Hydrate. You’ve earned your spot in Huntrix — where every keystroke counts, and security comes with a side of chaos.
          <br /><br />
          <em>Welcome to the weirdest lesson in password hygiene you never asked for. 🧼🔐</em>
        </Typography>

        <Button 
          variant="contained"
          onClick={generateCertificate}
          sx={{ mt: 2, backgroundColor: '#ffa09dff', color: '#fff', '&:hover': { backgroundColor: '#f87c79' } }}
        >
          🎓 Download Your Patience Certificate
        </Button>

      </Paper>
    </Box>
  );
};

export default Landing;
