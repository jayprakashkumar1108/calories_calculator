import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Paper, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Custom styles with color scheme
const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff5722', // Orange color
  color: '#fff',
  '&:hover': {
    backgroundColor: '#e64a19', // Darker orange for hover
  },
}));

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    exerciseDuration: '',
    heartRate: '',
    bodyTemp: '',
  });
  const [result, setResult] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/calculate') {
      setShowForm(true);
    } else {
      setShowForm(false);
      setResult(null);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting data:', formData);  // Add this line to log the data
  
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST', // Ensure POST is used
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      setResult(`Calories burnt: ${result.calories} kcal`);
    } catch (error) {
      console.error('Error:', error);
      setResult('Error calculating calories.');
    }
  };
  

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Grid container direction="column" spacing={3} sx={{ flexGrow: 1 }}>
        <Grid item xs={12} md={6}>
          <CustomPaper sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" gutterBottom color="#6a1b9a"> {/* Purple color */}
              We are here for you to check your calories burnt
            </Typography>

            {!showForm && (
              <StyledButton variant="contained" onClick={() => setShowForm(true)} fullWidth>
                Calculate
              </StyledButton>
            )}
            {showForm && (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Age"
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Height (cm)"
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Weight (kg)"
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Exercise Duration (min)"
                      type="number"
                      name="exerciseDuration"
                      value={formData.exerciseDuration}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Heart Rate"
                      type="number"
                      name="heartRate"
                      value={formData.heartRate}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Body Temperature (°C)"
                      type="number"
                      name="bodyTemp"
                      value={formData.bodyTemp}
                      onChange={handleChange}
                      fullWidth
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledButton type="submit" variant="contained" fullWidth>
                      Get Result
                    </StyledButton>
                  </Grid>
                </Grid>
              </form>
            )}
            {result && (
              <CustomPaper sx={{ marginTop: 2 }}>
                <Typography variant="h6" color="#6a1b9a"> {/* Purple color */}
                  Result
                </Typography>
                <Typography>{result}</Typography>
              </CustomPaper>
            )}
          </CustomPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomPaper sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" gutterBottom color="#6a1b9a"> {/* Purple color */}
              About Us
            </Typography>
            <Typography paragraph>
              Our Calorie Calculator application helps you estimate the number of calories burned during physical activities. By inputting your personal data and exercise details, you can get a quick estimate to help manage your fitness goals and track your progress.
            </Typography>
          </CustomPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
