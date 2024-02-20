const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/fact', async (req, res) => {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const fact = data.fact;
        res.render('fact/cats', { fact });
    } catch (error) {
        console.error('Error fetching cat fact:', error.message);
        res.status(500).send('Failed to fetch cat fact');
    }
});

module.exports = router;




