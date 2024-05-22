const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Task_toFindaWayToConnectAnotherWay')
.then(() => {
    console.log('Database connected');
}
).catch((err) => {
    console.log('Error in connecting to database');
});
