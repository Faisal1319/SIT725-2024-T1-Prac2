const express = require('express');
const app = express();

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }
    
    const result = num1 + num2;
    res.json({ result });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
