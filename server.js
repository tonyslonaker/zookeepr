const { animals } = require('./zookeepr/data/animals');
const express = require('express');
const app = express();

app.get('/zookeepr/api/animals', (req, res) => {
    let results = animals;
    console.log(req.query)
    res.json('results');
});
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});