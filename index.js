const express = require('express');
const cors = require('cors')
const app = express();

const corsOptions = {
    origin: 'https://yourdomain.com'
}

app.use(express.json())
app.use(express.urlencoded())

app.get('/without-cors', cors(corsOptions), (req,res, next) => {
    res.json({msg: 'No CORS'})
});

app.post('/form', (req,res) => {
    const name = req.body.name
})

app.listen(3000, () => console.log("Server ready", app.listen().address().port))