// Contact.js
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation example
    if (!formData.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
      return;
    }
    if (!formData.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
      return;
    }
    if (!formData.message) {
      setErrors((prevErrors) => ({ ...prevErrors, message: 'Message is required' }));
      return;
    }
    // Process form submission
    console.log('Form submitted:', formData);
    // Reset form data after submission
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <Container sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h2" sx={{ mt: 4 }}>Contact Me</Typography>
      <form onSubmit={handleSubmit} sx={{ width: '100%', mt: 2 }}>
        <TextField
          label="Name"
          fullWidth
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          fullWidth
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
