let express = require('express');

let app = express();

app.use(express.json());
let mongoose = require('mongoose');

const Users = require('./db/user');

mongoose.connect('mongodb://localhost:27017/newDb', (err, connection) => {
    console.log(err || connection);
})


app.post('/auth/userData', async (req, res) => {
    try {
        let newUser = new Users(req.body)
        await newUser.save();
    } catch (e) {
        res.json({
            success: true,
        });
    }
});



app.delete('/auth/deleteUser', async (req, res) => {
    try {

        await Users.findByIdAndDelete(req.query.id);

        res.json({
            success: true,
        })

    } catch (e) {

        res.json({
            success: false,
        })

    }
});


app.get('/auth/getUserData', async (req, res) => {
    try {

        let users = await Users.find({});
        res.json(users)
    } catch (e) {
        res.json({
            success: true,
        })
    }
})

app.listen(1111, () => {
    console.log('server is running on port 1111');
})
