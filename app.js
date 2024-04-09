const express = require('express');
const bodyParser = require('body-parser');
const registrationModel = require('./MVC/Model/registrationModel');

const app = express();
const PORT = 3000;

const cors = require('cors');
const corsOptions = {
    origin: '*',
    methods: 'POST, GET, PUT, DELETE',
    allowedHeaders: 'Content-Type'
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post('/registration/register', (req, res) => {
    const { id, fullname, address, status } = req.body;
    const fee = registrationModel.calculateFee(status);

    const registrationData = {
        id,
        fullname,
        address,
        status,
        fee
    };

    res.json(registrationData);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

