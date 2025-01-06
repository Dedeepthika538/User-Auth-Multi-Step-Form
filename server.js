// server.js (Node.js backend to handle authentication and data storage)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;
const USERS_FILE = 'users.json';

app.use(cors());
app.use(bodyParser.json());

// Ensure users.json exists
if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
}

// Signup endpoint
app.post('/signup', (req, res) => {
    const { firstname, lastname, email, password, dob, gender, profession, education } = req.body;

    // Ensure required fields are present
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Ensure the file exists
        if (!fs.existsSync(USERS_FILE)) {
            fs.writeFileSync(USERS_FILE, JSON.stringify([])); // Initialize empty JSON array
        }

        // Read existing users
        const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));

        // Check if the user already exists
        if (users.find(user => user.email === email)) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Add the new user
        const newUser = { firstname, lastname, email, password, dob, gender, profession, education };
        users.push(newUser);

        // Write updated users back to the file
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

        // Respond with success
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error('Error handling signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// app.post('/signup', (req, res) => {
//     const { firstname, lastname, email, password, dob, gender, profession, education } = req.body;
//     const users = JSON.parse(fs.readFileSync(USERS_FILE));

//     if (users.find(user => user.email === email)) {
//         return res.status(400).json({ message: 'User already exists' });
//     }

//     users.push({ firstname, lastname, email, password, dob, gender, profession, education });
//     fs.writeFileSync(USERS_FILE, JSON.stringify(users));
//     res.status(201).json({ message: 'User registered successfully' });
// });

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const users = JSON.parse(fs.readFileSync(USERS_FILE));

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user,success: 'Success' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));