const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

// Initialize Express application
const app = express();

// Middleware for JSON request body parsing
app.use(express.json());

// Connect to MongoDB database
mongoose.connect(config.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));


// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Route for serving index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for serving login.html
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Route for serving register.html
app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});


// Route for serving the dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard', 'dashboard.html'));
});

// Start the server
const PORT = config.server.port;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
